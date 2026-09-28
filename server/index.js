import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const DIST = resolve(ROOT, 'dist');
const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';
const CURRENT_FIELDS = [
  'temperature_2m', 'relative_humidity_2m', 'apparent_temperature', 'is_day',
  'precipitation', 'weather_code', 'cloud_cover', 'pressure_msl',
  'wind_speed_10m', 'wind_direction_10m', 'visibility',
].join(',');
const HOURLY_FIELDS = ['temperature_2m', 'weather_code', 'precipitation_probability', 'is_day'].join(',');
const DAILY_FIELDS = [
  'weather_code', 'temperature_2m_max', 'temperature_2m_min',
  'precipitation_probability_max', 'sunrise', 'sunset', 'uv_index_max',
].join(',');
const CACHE_TTL = { forecast: 3 * 60_000, locations: 60 * 60_000 };
const CACHE_LIMIT = 300;
const cache = new Map();
const pending = new Map();
const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(body));
}

function requiredCoordinate(value, name, min, max) {
  if (value === null || value.trim() === '') {
    throw new HttpError(400, `A ${name} coordinate is required.`);
  }
  const coordinate = Number(value);
  if (!Number.isFinite(coordinate) || coordinate < min || coordinate > max) {
    throw new HttpError(400, `The ${name} coordinate must be between ${min} and ${max}.`);
  }
  return coordinate;
}

function mapPlace(place) {
  return {
    id: place.id,
    name: place.name,
    country: place.country ?? '',
    admin: place.admin1 ?? '',
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: place.timezone ?? 'auto',
  };
}

async function cached(key, ttl, load) {
  const hit = cache.get(key);
  if (hit && hit.expiresAt > Date.now()) return hit.value;
  if (pending.has(key)) return pending.get(key);

  const request = load()
    .then((value) => {
      cache.set(key, { value, expiresAt: Date.now() + ttl });
      if (cache.size > CACHE_LIMIT) cache.delete(cache.keys().next().value);
      return value;
    })
    .finally(() => pending.delete(key));

  pending.set(key, request);
  return request;
}

async function upstreamJson(url) {
  let response;
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  } catch (error) {
    if (error.name === 'TimeoutError' || error.name === 'AbortError') {
      throw new HttpError(504, 'The weather service took too long to respond. Please try again.');
    }
    throw new HttpError(502, 'Unable to reach the weather service. Please try again.');
  }

  if (response.status === 429) {
    throw new HttpError(503, 'The weather service is busy. Please wait a moment and try again.');
  }
  if (!response.ok) {
    throw new HttpError(502, 'The weather service is temporarily unavailable. Please try again.');
  }

  try {
    return await response.json();
  } catch {
    throw new HttpError(502, 'The weather service returned an invalid response.');
  }
}

function upstreamUrl(base, params) {
  return `${base}?${params}`;
}

async function handleApi(request, response, url) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    throw new HttpError(405, 'This endpoint only supports GET requests.');
  }

  if (url.pathname === '/api/health') {
    sendJson(response, 200, { status: 'ok' });
    return;
  }

  if (url.pathname === '/api/locations') {
    const query = url.searchParams.get('q')?.trim();
    if (!query) throw new HttpError(400, 'Enter a city name to search.');
    if (query.length > 100) throw new HttpError(400, 'City searches must be 100 characters or fewer.');

    const key = `locations:${query.toLocaleLowerCase()}`;
    const results = await cached(key, CACHE_TTL.locations, async () => {
      const params = new URLSearchParams({ name: query, count: '6', language: 'en', format: 'json' });
      const data = await upstreamJson(upstreamUrl(`${GEOCODING_URL}/search`, params));
      return (data.results ?? []).map(mapPlace);
    });
    sendJson(response, 200, { results });
    return;
  }

  if (url.pathname === '/api/locations/reverse') {
    const latitude = requiredCoordinate(url.searchParams.get('latitude'), 'latitude', -90, 90);
    const longitude = requiredCoordinate(url.searchParams.get('longitude'), 'longitude', -180, 180);
    const key = `reverse:${latitude.toFixed(3)}:${longitude.toFixed(3)}`;
    const place = await cached(key, CACHE_TTL.locations, async () => {
      const params = new URLSearchParams({ latitude: String(latitude), longitude: String(longitude), language: 'en', format: 'json' });
      const data = await upstreamJson(upstreamUrl(`${GEOCODING_URL}/reverse`, params));
      return data.results?.[0] ? mapPlace(data.results[0]) : null;
    });
    sendJson(response, 200, place);
    return;
  }

  if (url.pathname === '/api/forecast') {
    const latitude = requiredCoordinate(url.searchParams.get('latitude'), 'latitude', -90, 90);
    const longitude = requiredCoordinate(url.searchParams.get('longitude'), 'longitude', -180, 180);
    const timezone = url.searchParams.get('timezone') || 'auto';
    if (timezone.length > 64) throw new HttpError(400, 'The timezone value is invalid.');

    const key = `forecast:${latitude.toFixed(3)}:${longitude.toFixed(3)}:${timezone}`;
    const forecast = await cached(key, CACHE_TTL.forecast, async () => {
      const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        current: CURRENT_FIELDS,
        hourly: HOURLY_FIELDS,
        daily: DAILY_FIELDS,
        timezone,
        forecast_days: '7',
      });
      const data = await upstreamJson(upstreamUrl(FORECAST_URL, params));
      if (!data.current || !data.hourly || !data.daily) {
        throw new HttpError(502, 'Weather data arrived incomplete. Please try again.');
      }
      return data;
    });
    sendJson(response, 200, forecast);
    return;
  }

  throw new HttpError(404, 'API endpoint not found.');
}

async function serveStatic(request, response, url) {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  const requestedPath = decodeURIComponent(url.pathname);
  let filePath = resolve(DIST, `.${requestedPath}`);
  if (filePath !== DIST && !filePath.startsWith(`${DIST}${sep}`)) {
    response.writeHead(403);
    response.end();
    return;
  }

  try {
    if ((await stat(filePath)).isDirectory()) filePath = resolve(filePath, 'index.html');
  } catch {
    filePath = resolve(DIST, 'index.html');
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(filePath)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Build not found. Run npm run build first.');
  }
}

async function listenOnAvailablePort(server, startPort, host) {
  const ports = startPort === 0 ? [0] : [startPort, 0];

  for (const port of ports) {
    try {
      await new Promise((resolveListen, rejectListen) => {
        const cleanup = () => {
          server.off('error', onError);
          server.off('listening', onListening);
        };
        const onError = (error) => {
          cleanup();
          rejectListen(error);
        };
        const onListening = () => {
          cleanup();
          resolveListen();
        };

        server.once('error', onError);
        server.once('listening', onListening);
        server.listen(port, host);
      });

      return server.address().port;
    } catch (error) {
      if (error.code !== 'EADDRINUSE' || port === 0) throw error;
      console.warn(`Port ${port} is already in use; selecting an available port.`);
    }
  }
}

async function start() {
  const isDev = process.argv.includes('--dev');
  let vite;
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
      if (url.pathname.startsWith('/api/')) {
        await handleApi(request, response, url);
      } else if (isDev) {
        vite.middlewares(request, response, (error) => {
          if (error) {
            response.writeHead(500);
            response.end('Development server error.');
          } else {
            response.writeHead(404);
            response.end('Not found.');
          }
        });
      } else {
        await serveStatic(request, response, url);
      }
    } catch (error) {
      if (response.headersSent) {
        response.destroy();
        return;
      }
      const status = error instanceof HttpError ? error.status : 500;
      const message = error instanceof HttpError ? error.message : 'An unexpected server error occurred.';
      sendJson(response, status, { error: message });
      if (!(error instanceof HttpError)) console.error(error);
    }
  });

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      appType: 'spa',
      server: { middlewareMode: true, hmr: { server } },
    });
  }

  const port = Number(process.env.PORT || 3000);
  const host = process.env.HOST || '0.0.0.0';
  const activePort = await listenOnAvailablePort(server, port, host);
  console.log(`Weather app listening on http://localhost:${activePort}${isDev ? ' (development)' : ''}`);
  server.on('close', () => vite?.close());
  const shutdown = () => server.close();
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
}

start().catch((error) => {
  console.error('Could not start the weather app:', error);
  process.exitCode = 1;
});