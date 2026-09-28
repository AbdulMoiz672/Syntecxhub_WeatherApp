import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchForecast, reverseGeocode, searchLocations } from '../api/weatherApi';

const DEFAULT_CITY = 'London';
const PLACE_KEY = 'meridian.place';
const UNIT_KEY = 'meridian.unit';

function readStoredPlace() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PLACE_KEY) || 'null');
    if (typeof parsed?.latitude !== 'number' || typeof parsed?.longitude !== 'number') {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function readStoredUnit() {
  try {
    return localStorage.getItem(UNIT_KEY) === 'F' ? 'F' : 'C';
  } catch {
    return 'C';
  }
}

function persistPlace(nextPlace) {
  try {
    localStorage.setItem(PLACE_KEY, JSON.stringify(nextPlace));
  } catch {
    /* ignore quota / private mode */
  }
}

export function useWeather() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [place, setPlace] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [emptyMessage, setEmptyMessage] = useState(null);
  const [unit, setUnitState] = useState(readStoredUnit);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);

  const requestId = useRef(0);
  const abortRef = useRef(null);
  const lastLoadedName = useRef('');

  const beginRequest = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    requestId.current += 1;
    return { id: requestId.current, signal: abortRef.current.signal };
  }, []);

  const setUnit = useCallback((next) => {
    setUnitState(next);
    try {
      localStorage.setItem(UNIT_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const loadPlace = useCallback(async (nextPlace, request) => {
    const { id, signal } = request ?? beginRequest();
    setStatus('loading');
    setError(null);
      setEmptyMessage(null);

    try {
      const data = await fetchForecast(nextPlace, { signal });
      if (id !== requestId.current) return;
      setPlace(nextPlace);
      setForecast(data);
      persistPlace(nextPlace);
      setStatus('success');
    } catch (err) {
      if (err.name === 'AbortError' || id !== requestId.current) return;
      setStatus('error');
      setError(err.message || 'Something went wrong while loading the forecast.');
    }
  }, [beginRequest]);

  const search = useCallback(
    async (rawQuery) => {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setStatus('error');
        setError('You’re offline. Check your connection and try again.');
        return;
      }

      const { id, signal } = beginRequest();
      setStatus('loading');
      setError(null);
      setEmptyMessage(null);
      setSuggestions([]);
      setQuery(rawQuery);

      try {
        const results = await searchLocations(rawQuery, { signal });
        if (id !== requestId.current) return;
        await loadPlace(results[0], { id, signal });
      } catch (err) {
        if (err.name === 'AbortError' || id !== requestId.current) return;
        setSuggestions([]);
        setStatus('error');
        setError(err.message || 'Search failed. Please try again.');
        setEmptyMessage(err.message || 'Search failed. Please try again.');
      }
    },
    [beginRequest, loadPlace],
  );

  const selectPlace = useCallback(
    async (nextPlace) => {
      setSuggestions([]);
      await loadPlace(nextPlace);
    },
    [loadPlace],
  );

  const useDeviceLocation = useCallback(() => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setStatus('error');
      setError('You’re offline. Check your connection and try again.');
      return;
    }

    if (!navigator.geolocation) {
      setStatus('error');
      setError('Geolocation is not supported in this browser.');
      return;
    }

    const { id, signal } = beginRequest();
    setStatus('loading');
    setError(null);
    setEmptyMessage(null);
    setSuggestions([]);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        if (id !== requestId.current) return;
        try {
          const resolved = await reverseGeocode(coords.latitude, coords.longitude, { signal });
          if (id !== requestId.current) return;
          const nextPlace = resolved ?? {
            id: 'device',
            name: 'Your location',
            country: '',
            admin: '',
            latitude: coords.latitude,
            longitude: coords.longitude,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          };
          await loadPlace(nextPlace, { id, signal });
        } catch (err) {
          if (err.name === 'AbortError' || id !== requestId.current) return;
          setStatus('error');
          setError(err.message || 'Could not load weather for your location.');
        }
      },
      (geoError) => {
        if (id !== requestId.current) return;
        const messages = {
          1: 'Location permission was denied. Search for a city instead.',
          2: 'Your location could not be determined. Search for a city instead.',
          3: 'Location request timed out. Try again or search for a city.',
        };
        setStatus('error');
        setError(messages[geoError.code] || 'Could not access your location.');
      },
      { timeout: 10000, maximumAge: 300000 },
    );
  }, [beginRequest, loadPlace]);

  useEffect(() => {
    const updateOnlineState = () => {
      setIsOffline(typeof navigator !== 'undefined' ? !navigator.onLine : false);
    };

    updateOnlineState();
    window.addEventListener('online', updateOnlineState);
    window.addEventListener('offline', updateOnlineState);

    return () => {
      window.removeEventListener('online', updateOnlineState);
      window.removeEventListener('offline', updateOnlineState);
    };
  }, []);

  useEffect(() => {
    if (isOffline) {
      setStatus('error');
      setError('You’re offline. Check your connection and try again.');
      return;
    }

    const stored = readStoredPlace();

    async function bootstrap() {
      if (stored) {
        await loadPlace(stored);
        return;
      }

      const { id, signal } = beginRequest();
      setStatus('loading');
      setError(null);
      setEmptyMessage(null);
      try {
        const results = await searchLocations(DEFAULT_CITY, { signal });
        if (id !== requestId.current) return;
        await loadPlace(results[0], { id, signal });
      } catch (err) {
        if (err.name === 'AbortError' || id !== requestId.current) return;
        setStatus('error');
        setError(err.message || 'Could not load the initial forecast.');
      }
    }

    bootstrap();

    return () => {
      abortRef.current?.abort();
    };
  }, [beginRequest, loadPlace]);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2 || trimmed === lastLoadedName.current) {
      setSuggestions([]);
      return undefined;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await searchLocations(trimmed, { allowEmpty: true });
        setSuggestions(results);
        setEmptyMessage(results.length === 0 ? `No cities match “${trimmed}”. Try another name.` : null);
      } catch {
        setSuggestions([]);
        setEmptyMessage(`No cities match “${trimmed}”. Try another name.`);
      }
    }, 320);

    return () => clearTimeout(timer);
  }, [query]);

  const retry = useCallback(() => {
    if (place) {
      loadPlace(place);
    } else if (query.trim()) {
      search(query);
    } else {
      const stored = readStoredPlace();
      if (stored) {
        loadPlace(stored);
      } else {
        search(DEFAULT_CITY);
      }
    }
  }, [place, query, loadPlace, search]);

  return {
    query,
    setQuery,
    suggestions,
    place,
    forecast,
    status,
    error,
    emptyMessage,
    unit,
    setUnit,
    search,
    selectPlace,
    useDeviceLocation,
    retry,
    clearSuggestions: () => setSuggestions([]),
  };
}
