import {
  formatVisibility,
  formatWind,
  windDirection,
} from '../utils/formatters';

export function WeatherDetails({ current, unit }) {
  const tiles = [
    { label: 'Humidity', value: `${current.relative_humidity_2m}%` },
    { label: 'Wind', value: `${formatWind(current.wind_speed_10m, unit)} ${windDirection(current.wind_direction_10m)}` },
    { label: 'Pressure', value: `${Math.round(current.pressure_msl)} hPa` },
    { label: 'Cloud cover', value: `${current.cloud_cover}%` },
    { label: 'Precipitation', value: `${current.precipitation} mm` },
    { label: 'Visibility', value: formatVisibility(current.visibility, unit) },
  ];

  return (
    <section className="details-grid" aria-label="Current conditions">
      {tiles.map((tile) => (
        <article key={tile.label} className="detail-tile">
          <p>{tile.label}</p>
          <strong>{tile.value}</strong>
        </article>
      ))}
    </section>
  );
}
