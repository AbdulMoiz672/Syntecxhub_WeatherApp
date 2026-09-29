# Meridian — React Weather App

A React weather almanac that loads current conditions, the next twelve hours, and a seven-day outlook from [Open-Meteo](https://open-meteo.com/). No API key is required.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder structure

```
Weather-App/
├── server/                 Node API and production static server
├── public/                 static assets
├── src/
│   ├── api/                Backend API fetch helpers & error mapping
│   ├── components/         search, current weather, forecasts, status
│   ├── hooks/              useWeather — data loading with useEffect
│   ├── styles/             global CSS
│   ├── utils/              WMO weather codes & formatters
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## What it does

- **Current weather** — temperature, condition, feels-like, high/low, sunrise/sunset, UV
- **Hourly + daily forecasts**
- **Search** by city name, plus extra matches in a dropdown
- **Near me** uses the browser geolocation API
- **Error handling** for empty queries, unknown cities, timeouts, HTTP errors, and network failures
- **°C / °F** toggle
- Sky mood shifts with the weather code (clear, rain, snow, storm, fog)

## Functional requirements

1. **Location search:** Users can search for a city, choose among matching places, and receive a clear no-match message. Submitting a search loads the selected place's forecast.
2. **Remembered preferences:** On first use, load the default city. On later visits, restore the last successfully loaded place and the selected temperature unit.
3. **Current conditions:** Show the selected place and its current temperature, condition, feels-like temperature, daily high and low, sunrise, sunset, and UV index.
4. **Forecasts:** Show the next 12 hours and the next 7 days, using the place's local time and the selected temperature unit. Hourly and daily entries include their available weather condition and precipitation information.
5. **Temperature units:** Users can switch between Celsius and Fahrenheit. All displayed temperatures update consistently, and the choice persists between visits.
6. **Device location:** Users can load weather near their current location. If location is unsupported, denied, unavailable, or times out, explain the issue and leave city search available as an alternative.
7. **Refresh:** Provide an action to reload the forecast for the currently selected place. Keep the existing forecast visible while refreshing, prevent duplicate refresh requests, and show a clear error with a retry action if refresh fails. Forecast responses may be served from the server's three-minute cache.
8. **Loading and connectivity:** Indicate initial loading and refresh activity. Handle offline use, timeouts, unknown places, and weather-service failures with understandable messages and a retry path where applicable.
9. **Accessible interaction:** Search, suggestions, unit controls, location, refresh, and retry must be keyboard operable. Expose suggestion selection and loading, error, and empty-result states to assistive technology.
10. **Automated verification:** Add tests for successful city search and forecast loading, no-match results, unit changes, refresh success and failure, offline/API errors, and location permission outcomes.

The browser calls same-origin `/api` endpoints. The Node server validates requests, fetches Open-Meteo data, and briefly caches successful responses in memory to reduce duplicate upstream calls. In development, it serves Vite with hot reload; in production, it serves the built app and API from one process.

## Production

```bash
npm run build
npm start
```
The server listens on port `3000` by default. Set `PORT` and `HOST` to change the bind address.
