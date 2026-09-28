export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function formatTemp(celsius, unit) {
  const value = unit === 'F' ? celsiusToFahrenheit(celsius) : celsius;
  return `${Math.round(value)}°`;
}

export function formatWind(kmh, unit) {
  if (unit === 'F') {
    return `${Math.round(kmh * 0.621371)} mph`;
  }
  return `${Math.round(kmh)} km/h`;
}

export function formatVisibility(meters, unit) {
  if (unit === 'F') {
    return `${(meters / 1609.34).toFixed(1)} mi`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
}

export function windDirection(degrees) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(degrees / 45) % 8];
}

export function formatPlace(place) {
  return [place.name, place.admin, place.country].filter(Boolean).join(', ');
}

export function formatRegion(place) {
  return [place.admin, place.country].filter(Boolean).join(', ');
}

function asDate(value) {
  if (value instanceof Date) return value;
  if (typeof value === 'string') return new Date(value);
  return new Date();
}

const localClock = (options) => new Intl.DateTimeFormat('en-US', options);

export function formatHour(iso) {
  return localClock({ hour: 'numeric', hour12: true }).format(asDate(iso));
}

export function formatWeekday(iso) {
  return localClock({ weekday: 'short' }).format(asDate(`${iso}T12:00`));
}

export function formatClock(iso) {
  return localClock({
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(asDate(iso));
}

export function formatSunTime(iso) {
  return localClock({
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(asDate(iso));
}
