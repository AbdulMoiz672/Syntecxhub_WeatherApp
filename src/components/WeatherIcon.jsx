export function WeatherIcon({ name, className = '', isDay = true }) {
  const common = {
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: `weather-icon ${className}`.trim(),
    'aria-hidden': true,
  };

  const cloudStyle = {
    color: '#9aa7b4',
  };

  const sunStyle = {
    color: '#ffdd00',
    filter: 'drop-shadow(0 0 6px rgba(255, 221, 0, 0.75))',
  };

  const moonStyle = {
    filter: 'drop-shadow(0 0 4px rgba(245, 247, 237, 0.45))',
  };

  switch (name) {
    case 'sun':
      if (!isDay) {
        return (
          <svg {...common} style={moonStyle} className={`weather-icon moon-icon`}>
            <path d="M40 34.5A12 12 0 1 1 29.5 18 10 10 0 0 0 40 34.5Z" />
          </svg>
        );
      }
      return (
        <svg {...common} style={sunStyle}>
          <circle cx="32" cy="32" r="10" />
          <path d="M32 8v6M32 50v6M8 32h6M50 32h6M14.5 14.5l4.2 4.2M45.3 45.3l4.2 4.2M14.5 49.5l4.2-4.2M45.3 18.7l4.2-4.2" />
        </svg>
      );
    case 'partly':
      return (
        <svg {...common} style={sunStyle}>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 10v4M10 24h4M15 15l2.5 2.5" />
          <path d="M22 44h22a8 8 0 0 0 1.2-15.9A12 12 0 0 0 23 32.5 8.5 8.5 0 0 0 22 44Z" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 44h26a9 9 0 0 0 1.4-17.9A13.5 13.5 0 0 0 20 30.2 9.5 9.5 0 0 0 18 44Z" />
        </svg>
      );
    case 'fog':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M16 28h32M12 36h40M18 44h28" />
        </svg>
      );
    case 'drizzle':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 32h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 18.5 8.5 8.5 0 0 0 18 32Z" />
          <path d="M24 40v4M32 42v4M40 40v4" />
        </svg>
      );
    case 'rain':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 30h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 16.5 8.5 8.5 0 0 0 18 30Z" />
          <path d="M22 38l-3 8M32 38l-3 8M42 38l-3 8" />
        </svg>
      );
    case 'snow':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 30h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 16.5 8.5 8.5 0 0 0 18 30Z" />
          <path d="M24 38v8M20 42h8M32 38v8M28 42h8M40 38v8M36 42h8" />
        </svg>
      );
    case 'sleet':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 30h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 16.5 8.5 8.5 0 0 0 18 30Z" />
          <path d="M22 38l-2 6M40 38l-2 6M32 40v2M30 44h4" />
        </svg>
      );
    case 'storm':
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 28h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 14.5 8.5 8.5 0 0 0 18 28Z" />
          <path d="M30 30l-8 12h8l-4 12 14-16h-8l6-8Z" />
        </svg>
      );
    default:
      return (
        <svg {...common} style={cloudStyle}>
          <path d="M18 44h26a9 9 0 0 0 1.4-17.9A13.5 13.5 0 0 0 20 30.2 9.5 9.5 0 0 0 18 44Z" />
        </svg>
      );
  }
}
