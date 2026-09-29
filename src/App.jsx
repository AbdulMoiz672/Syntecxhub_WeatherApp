'use client';

import { useEffect, useState } from 'react';
import { CurrentWeather } from './components/CurrentWeather';
import { DailyForecast } from './components/DailyForecast';
import { HourlyForecast } from './components/HourlyForecast';
import { SearchBar } from './components/SearchBar';
import { EmptyState, ErrorBanner, LoadingState } from './components/Status';
import { WeatherDetails } from './components/WeatherDetails';
import { useWeather } from './hooks/useWeather';
import { describeWeather } from './utils/weatherCodes';
import { useTheme } from './hooks/useTheme';

const QUICK_CITIES = ['Lisbon', 'Kyoto', 'Lagos', 'Reykjavík', 'Cape Town'];

function App() {
  const weather = useWeather();
  const { theme, toggle } = useTheme();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const mood = weather.forecast
    ? describeWeather(weather.forecast.current.weather_code).mood
    : 'idle';
  const isDay = weather.forecast?.current?.is_day === 1;
  const busy = weather.status === 'loading';

  return (
    <div className={`app mood-${mood} ${isDay ? 'is-day' : 'is-night'}`}>
      <div className="sky" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="masthead">
        <div className="brand">
          <p className="brand-mark">Meridian</p>
          <p className="brand-sub">Field weather almanac</p>
        </div>
        <div className="masthead-controls">
          <div className="unit-toggle" role="group" aria-label="Temperature unit">
            <button
              type="button"
              className={weather.unit === 'C' ? 'active' : ''}
              onClick={() => weather.setUnit('C')}
            >
              °C
            </button>
            <button
              type="button"
              className={weather.unit === 'F' ? 'active' : ''}
              onClick={() => weather.setUnit('F')}
            >
              °F
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            <span className="theme-toggle-glyph" aria-hidden="true">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </button>
        </div>
      </header>

      <SearchBar
        query={weather.query}
        onQueryChange={weather.setQuery}
        onSearch={weather.search}
        onLocate={weather.useDeviceLocation}
        suggestions={weather.suggestions}
        onSelect={weather.selectPlace}
        onDismissSuggestions={weather.clearSuggestions}
        hasError={weather.status === 'error'}
      />

      <div className="quick-cities" aria-label="Suggested cities">
        {QUICK_CITIES.map((city) => (
          <button
            key={city}
            type="button"
            className="chip"
            onClick={() => weather.search(city)}
            disabled={busy && weather.query === city}
          >
            {city}
          </button>
        ))}
      </div>

      {weather.status === 'error' && weather.error && (
        <ErrorBanner message={weather.error} onRetry={weather.retry} />
      )}

      {!weather.forecast && weather.emptyMessage && <EmptyState message={weather.emptyMessage} />}

      {weather.status === 'loading' && !weather.forecast && <LoadingState />}

      {weather.forecast && weather.place && (
        <main className={`layout ${weather.status === 'loading' ? 'is-refreshing' : ''}`}>
          <CurrentWeather
            place={weather.place}
            forecast={weather.forecast}
            unit={weather.unit}
            now={now}
          />
          <WeatherDetails current={weather.forecast.current} unit={weather.unit} />
          <HourlyForecast
            hourly={weather.forecast.hourly}
            timezone={weather.forecast.timezone}
            unit={weather.unit}
            currentTime={weather.forecast.current.time}
            now={now}
          />
          <DailyForecast
            daily={weather.forecast.daily}
            unit={weather.unit}
          />
        </main>
      )}

      <footer className="colophon">
        Observations via Open-Meteo · No API key required
      </footer>
    </div>
  );
}

export default App;
