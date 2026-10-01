module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/[...path]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';
const CURRENT_FIELDS = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'is_day',
    'precipitation',
    'weather_code',
    'cloud_cover',
    'pressure_msl',
    'wind_speed_10m',
    'wind_direction_10m',
    'visibility'
].join(',');
const HOURLY_FIELDS = [
    'temperature_2m',
    'weather_code',
    'precipitation_probability',
    'is_day'
].join(',');
const DAILY_FIELDS = [
    'weather_code',
    'temperature_2m_max',
    'temperature_2m_min',
    'precipitation_probability_max',
    'sunrise',
    'sunset',
    'uv_index_max'
].join(',');
const CACHE_TTL = {
    forecast: 3 * 60_000,
    locations: 60 * 60_000
};
const CACHE_LIMIT = 300;
const cache = globalThis.__meridianWeatherCache ??= new Map();
const pending = globalThis.__meridianWeatherPending ??= new Map();
class HttpError extends Error {
    constructor(status, message){
        super(message);
        this.status = status;
    }
}
function json(body, status = 200) {
    return Response.json(body, {
        status,
        headers: {
            'Cache-Control': 'no-store',
            'X-Content-Type-Options': 'nosniff'
        }
    });
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
        timezone: place.timezone ?? 'auto'
    };
}
async function cached(key, ttl, load) {
    const hit = cache.get(key);
    if (hit && hit.expiresAt > Date.now()) return hit.value;
    if (pending.has(key)) return pending.get(key);
    const request = load().then((value)=>{
        cache.set(key, {
            value,
            expiresAt: Date.now() + ttl
        });
        if (cache.size > CACHE_LIMIT) cache.delete(cache.keys().next().value);
        return value;
    }).finally(()=>pending.delete(key));
    pending.set(key, request);
    return request;
}
async function upstreamJson(url) {
    let response;
    try {
        response = await fetch(url, {
            signal: AbortSignal.timeout(10_000)
        });
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
    } catch  {
        throw new HttpError(502, 'The weather service returned an invalid response.');
    }
}
function upstreamUrl(base, params) {
    return `${base}?${params}`;
}
async function handleGet(request) {
    const url = new URL(request.url);
    if (url.pathname === '/api/health') {
        return json({
            status: 'ok'
        });
    }
    if (url.pathname === '/api/locations') {
        const query = url.searchParams.get('q')?.trim();
        if (!query) throw new HttpError(400, 'Enter a city name to search.');
        if (query.length > 100) throw new HttpError(400, 'City searches must be 100 characters or fewer.');
        const key = `locations:${query.toLowerCase()}`;
        const results = await cached(key, CACHE_TTL.locations, async ()=>{
            const params = new URLSearchParams({
                name: query,
                count: '6',
                language: 'en',
                format: 'json'
            });
            const data = await upstreamJson(upstreamUrl(`${GEOCODING_URL}/search`, params));
            return (data.results ?? []).map(mapPlace);
        });
        return json({
            results
        });
    }
    if (url.pathname === '/api/locations/reverse') {
        const latitude = requiredCoordinate(url.searchParams.get('latitude'), 'latitude', -90, 90);
        const longitude = requiredCoordinate(url.searchParams.get('longitude'), 'longitude', -180, 180);
        const key = `reverse:${latitude.toFixed(3)}:${longitude.toFixed(3)}`;
        const place = await cached(key, CACHE_TTL.locations, async ()=>{
            const params = new URLSearchParams({
                latitude: String(latitude),
                longitude: String(longitude),
                language: 'en',
                format: 'json'
            });
            const data = await upstreamJson(upstreamUrl(`${GEOCODING_URL}/reverse`, params));
            return data.results?.[0] ? mapPlace(data.results[0]) : null;
        });
        return json(place);
    }
    if (url.pathname === '/api/forecast') {
        const latitude = requiredCoordinate(url.searchParams.get('latitude'), 'latitude', -90, 90);
        const longitude = requiredCoordinate(url.searchParams.get('longitude'), 'longitude', -180, 180);
        const timezone = url.searchParams.get('timezone') || 'auto';
        if (timezone.length > 64) throw new HttpError(400, 'The timezone value is invalid.');
        const key = `forecast:${latitude.toFixed(3)}:${longitude.toFixed(3)}:${timezone}`;
        const forecast = await cached(key, CACHE_TTL.forecast, async ()=>{
            const params = new URLSearchParams({
                latitude: String(latitude),
                longitude: String(longitude),
                current: CURRENT_FIELDS,
                hourly: HOURLY_FIELDS,
                daily: DAILY_FIELDS,
                timezone,
                forecast_days: '7'
            });
            const data = await upstreamJson(upstreamUrl(FORECAST_URL, params));
            if (!data.current || !data.hourly || !data.daily) {
                throw new HttpError(502, 'Weather data arrived incomplete. Please try again.');
            }
            return data;
        });
        return json(forecast);
    }
    throw new HttpError(404, 'API endpoint not found.');
}
async function GET(request) {
    try {
        return await handleGet(request);
    } catch (error) {
        const status = error instanceof HttpError ? error.status : 500;
        const message = error instanceof HttpError ? error.message : 'An unexpected server error occurred.';
        if (!(error instanceof HttpError)) console.error(error);
        return json({
            error: message
        }, status);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dhyena._.js.map