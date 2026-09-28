import { WeatherIcon } from './WeatherIcon';
import { describeWeather } from '../utils/weatherCodes';
import { formatHour, formatTemp } from '../utils/formatters';

export function HourlyForecast({ hourly, timezone, unit, currentTime, now }) {
  const liveNow = now instanceof Date ? now : new Date();

  function toZoneDateTimeString(dateValue) {
    const formatter = new Intl.DateTimeFormat('sv-SE', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const parts = formatter.formatToParts(dateValue);
    const map = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));

    return `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}:${map.second}`;
  }

  const currentZoneTime = toZoneDateTimeString(liveNow);
  const itemList = hourly.time
    .map((time, index) => ({
      time,
      temp: hourly.temperature_2m[index],
      code: hourly.weather_code[index],
      rain: hourly.precipitation_probability[index],
      isDay: hourly.is_day?.[index] === 1,
    }));

  const startIndex = itemList.findIndex((item) => item.time >= currentZoneTime);
  const items = itemList
    .slice(startIndex >= 0 ? startIndex : 0, (startIndex >= 0 ? startIndex : 0) + 12)
    .slice(0, 12);

  return (
    <section className="panel">
      <header className="panel-head">
        <h2>Next twelve hours</h2>
        <p>Local time · {timezone.replace(/_/g, ' ')}</p>
      </header>
      <div className="hourly-strip">
        {items.map((item) => {
          const meta = describeWeather(item.code);
          return (
            <article key={item.time} className="hour-card">
              <p>{formatHour(item.time)}</p>
              <WeatherIcon name={meta.icon} isDay={item.isDay} />
              <strong>{formatTemp(item.temp, unit)}</strong>
              <span>{item.rain ?? 0}%</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
