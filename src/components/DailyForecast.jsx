import { WeatherIcon } from './WeatherIcon';
import { describeWeather } from '../utils/weatherCodes';
import { formatTemp, formatWeekday } from '../utils/formatters';

export function DailyForecast({ daily, unit }) {
  return (
    <section className="panel">
      <header className="panel-head">
        <h2>Seven-day outlook</h2>
        <p>Highs, lows, and rain chance</p>
      </header>
      <ul className="daily-list">
        {daily.time.map((day, index) => {
          const meta = describeWeather(daily.weather_code[index]);
          return (
            <li key={day}>
              <span className="day-name">
                {index === 0 ? 'Today' : formatWeekday(day)}
              </span>
              <span className="day-cond">
                <WeatherIcon name={meta.icon} />
                {meta.label}
              </span>
              <span className="day-rain">{daily.precipitation_probability_max[index] ?? 0}%</span>
              <span className="day-temps">
                <strong>{formatTemp(daily.temperature_2m_max[index], unit)}</strong>
                <em>{formatTemp(daily.temperature_2m_min[index], unit)}</em>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
