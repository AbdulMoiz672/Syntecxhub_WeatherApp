import { WeatherIcon } from './WeatherIcon';
import { describeWeather } from '../utils/weatherCodes';
import {
  formatClock,
  formatPlace,
  formatRegion,
  formatSunTime,
  formatTemp,
} from '../utils/formatters';

export function CurrentWeather({ place, forecast, unit, now }) {
  const { current, daily } = forecast;
  const meta = describeWeather(current.weather_code);

  return (
    <section className="hero-card">
      <div className="hero-copy">
        <p className="kicker">Now observing</p>
        <h1>{place.name}</h1>
        <p className="place-line">{formatRegion(place) || formatPlace(place)}</p>
        <p className="clock">{formatClock(now ?? new Date())}</p>
        <p className="condition">{meta.label}</p>
      </div>

      <div className="hero-temp">
        <WeatherIcon name={meta.icon} className="hero-icon" isDay={current.is_day === 1} />
        <p className="temp-display">
          {formatTemp(current.temperature_2m, unit)}
          <span>{unit}</span>
        </p>
        <p className="feels">
          Feels like {formatTemp(current.apparent_temperature, unit)}
        </p>
        <p className="hi-lo">
          H {formatTemp(daily.temperature_2m_max[0], unit)} · L{' '}
          {formatTemp(daily.temperature_2m_min[0], unit)}
        </p>
      </div>

      <dl className="sun-row">
        <div>
          <dt>Sunrise</dt>
          <dd>{formatSunTime(daily.sunrise[0])}</dd>
        </div>
        <div>
          <dt>Sunset</dt>
          <dd>{formatSunTime(daily.sunset[0])}</dd>
        </div>
        <div>
          <dt>UV index</dt>
          <dd>{Math.round(daily.uv_index_max[0])}</dd>
        </div>
      </dl>
    </section>
  );
}
