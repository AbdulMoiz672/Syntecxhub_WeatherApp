const WMO = {
  0: { label: 'Clear sky', icon: 'sun', mood: 'clear' },
  1: { label: 'Mostly clear', icon: 'sun', mood: 'clear' },
  2: { label: 'Partly cloudy', icon: 'partly', mood: 'partly' },
  3: { label: 'Overcast', icon: 'cloud', mood: 'overcast' },
  45: { label: 'Fog', icon: 'fog', mood: 'fog' },
  48: { label: 'Rime fog', icon: 'fog', mood: 'fog' },
  51: { label: 'Light drizzle', icon: 'drizzle', mood: 'rain' },
  53: { label: 'Drizzle', icon: 'drizzle', mood: 'rain' },
  55: { label: 'Heavy drizzle', icon: 'drizzle', mood: 'rain' },
  56: { label: 'Freezing drizzle', icon: 'sleet', mood: 'snow' },
  57: { label: 'Heavy freezing drizzle', icon: 'sleet', mood: 'snow' },
  61: { label: 'Light rain', icon: 'rain', mood: 'rain' },
  63: { label: 'Rain', icon: 'rain', mood: 'rain' },
  65: { label: 'Heavy rain', icon: 'rain', mood: 'rain' },
  66: { label: 'Freezing rain', icon: 'sleet', mood: 'snow' },
  67: { label: 'Heavy freezing rain', icon: 'sleet', mood: 'snow' },
  71: { label: 'Light snow', icon: 'snow', mood: 'snow' },
  73: { label: 'Snow', icon: 'snow', mood: 'snow' },
  75: { label: 'Heavy snow', icon: 'snow', mood: 'snow' },
  77: { label: 'Snow grains', icon: 'snow', mood: 'snow' },
  80: { label: 'Rain showers', icon: 'rain', mood: 'rain' },
  81: { label: 'Heavy showers', icon: 'rain', mood: 'rain' },
  82: { label: 'Violent showers', icon: 'rain', mood: 'storm' },
  85: { label: 'Snow showers', icon: 'snow', mood: 'snow' },
  86: { label: 'Heavy snow showers', icon: 'snow', mood: 'snow' },
  95: { label: 'Thunderstorm', icon: 'storm', mood: 'storm' },
  96: { label: 'Thunderstorm with hail', icon: 'storm', mood: 'storm' },
  99: { label: 'Severe thunderstorm', icon: 'storm', mood: 'storm' },
};

export function describeWeather(code) {
  return WMO[code] ?? { label: 'Unknown conditions', icon: 'cloud', mood: 'overcast' };
}
