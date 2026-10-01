const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';
const CURRENT_FIELDS = [
  'temperature_2m', 'relative_humidity_2m', 'apparent_temperature', 'is_day',
  'precipitation', 'weather_code', 'cloud_cover', 'pressure_msl',
  'wind_speed_10m', 'wind_direction_10m', 'visibility',
].join(',');
const HOURLY_FIELDS = ['temperature_2m', 'weather_code', 'precipitation_probability', 'is_day'].join(',');
const DAILY_FIELDS = [
  'weather_code', 'temperature_2m_max', 'temperature_2m_min',
  'precipitation_probability_max', 'sunrise', 'sunset', 'uv_index_max',
].join(',');

function getOfflineMessage() {
  return 'You’re offline. Check your connection and try again.';
}

function mapPlace(place) {
  return {
    id: place.id,
    name: place.name,
    country: place.country ?? '',
    admin: place.admin1 ?? '',
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: place.timezone ?? 'auto',
  };
}

async function requestJson(url, signal, retries = 2) {
  let attempt = 0;

  while (attempt <= retries) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const onAbort = () => controller.abort();
    if (signal) {
      if (signal.aborted) {
        clearTimeout(timeoutId);
        throw new DOMException('Aborted', 'AbortError');
      }
      signal.addEventListener('abort', onAbort, { once: true });
    }

    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error(getOfflineMessage());
      }

      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();

      if (!response.ok) {
        const message = data.error || data.reason;
        if ((response.status === 429 || response.status >= 500) && attempt < retries) {
          attempt += 1;
          continue;
        }

        if (response.status === 429) {
          throw new Error(message || 'Too many requests. Please wait a moment and try again.');
        }

        if (response.status >= 500) {
          throw new Error(message || 'The weather service is temporarily unavailable. Please try again in a moment.');
        }

        throw new Error(message || `Weather service returned ${response.status}. Please try again in a moment.`);
      }

      return data;
    } catch (error) {
      if (error.name === 'AbortError') {
        if (signal?.aborted) throw error;
        throw new Error('The weather service took too long to respond. Please try again.');
      }

      if (error instanceof TypeError) {
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
          throw new Error(getOfflineMessage());
        }
        if (attempt < retries) {
          attempt += 1;
          continue;
        }
        throw new Error('Unable to reach the weather service. Check your internet connection.');
      }

      if (error instanceof Error && error.message === getOfflineMessage()) throw error;
      throw error;
    } finally {
      clearTimeout(timeoutId);
      signal?.removeEventListener('abort', onAbort);
    }
  }

  throw new Error('Unable to reach the weather service. Check your internet connection.');
}

export async function searchLocations(query, { signal, allowEmpty = false } = {}) {
  const trimmed = query.trim();
  if (!trimmed) throw new Error('Enter a city name to search.');

  const params = new URLSearchParams({ name: trimmed, count: '6', language: 'en', format: 'json' });
  const data = await requestJson(`${GEOCODING_URL}/search?${params}`, signal);
  const results = (data.results ?? []).map(mapPlace);

  if (results.length === 0 && !allowEmpty) {
    throw new Error(`No matching places found for “${trimmed}”. Try another city.`);
  }

  return results;
}

export async function reverseGeocode(latitude, longitude, { signal } = {}) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    language: 'en',
    format: 'json',
  });

  try {
    const data = await requestJson(`${GEOCODING_URL}/reverse?${params}`, signal);
    return data.results?.[0] ? mapPlace(data.results[0]) : null;
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    return null;
  }
}

export async function fetchForecast({ latitude, longitude, timezone }, { signal } = {}) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: CURRENT_FIELDS,
    hourly: HOURLY_FIELDS,
    daily: DAILY_FIELDS,
    timezone: timezone || 'auto',
    forecast_days: '7',
  });

  const data = await requestJson(`${FORECAST_URL}?${params}`, signal);

  if (!data.current || !data.daily || !data.hourly) {
    throw new Error('Weather data arrived incomplete. Please try another location.');
  }

  return data;
}
