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

The browser calls same-origin `/api` endpoints. The Node server validates requests, fetches Open-Meteo data, and briefly caches successful responses in memory to reduce duplicate upstream calls. In development, it serves Vite with hot reload; in production, it serves the built app and API from one process.

## Production

```bash
npm run build
npm start
```
The server listens on port `3000` by default. Set `PORT` and `HOST` to change the bind address.
