module.exports = [
"[project]/src/App.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CurrentWeather$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CurrentWeather.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DailyForecast$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DailyForecast.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HourlyForecast$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HourlyForecast.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Status$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Status.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherDetails$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeatherDetails.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWeather$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWeather.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/weatherCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const QUICK_CITIES = [
    'Lisbon',
    'Kyoto',
    'Lagos',
    'Reykjavík',
    'Cape Town'
];
function App() {
    const weather = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWeather$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWeather"])();
    const { theme, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setNow(new Date()), 60000);
        return ()=>clearInterval(timer);
    }, []);
    const mood = weather.forecast ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["describeWeather"])(weather.forecast.current.weather_code).mood : 'idle';
    const isDay = weather.forecast?.current?.is_day === 1;
    const busy = weather.status === 'loading';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `app mood-${mood} ${isDay ? 'is-day' : 'is-night'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sky",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "masthead",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "brand-mark",
                                children: "Vantage"
                            }, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "brand-sub",
                                children: "Field weather almanac"
                            }, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "masthead-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "unit-toggle",
                                role: "group",
                                "aria-label": "Temperature unit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: weather.unit === 'C' ? 'active' : '',
                                        onClick: ()=>weather.setUnit('C'),
                                        children: "°C"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.jsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: weather.unit === 'F' ? 'active' : '',
                                        onClick: ()=>weather.setUnit('F'),
                                        children: "°F"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.jsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "theme-toggle",
                                onClick: toggle,
                                "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
                                title: `${theme === 'dark' ? 'Light' : 'Dark'} mode`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "theme-toggle-glyph",
                                    "aria-hidden": "true",
                                    children: theme === 'dark' ? '☀️' : '🌙'
                                }, void 0, false, {
                                    fileName: "[project]/src/App.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchBar"], {
                query: weather.query,
                onQueryChange: weather.setQuery,
                onSearch: weather.search,
                onLocate: weather.useDeviceLocation,
                suggestions: weather.suggestions,
                onSelect: weather.selectPlace,
                onDismissSuggestions: weather.clearSuggestions,
                hasError: weather.status === 'error'
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "quick-cities",
                "aria-label": "Suggested cities",
                children: QUICK_CITIES.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "chip",
                        onClick: ()=>weather.search(city),
                        disabled: busy && weather.query === city,
                        children: city
                    }, city, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            weather.status === 'error' && weather.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Status$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                message: weather.error,
                onRetry: weather.retry
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            !weather.forecast && weather.emptyMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Status$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                message: weather.emptyMessage
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 102,
                columnNumber: 53
            }, this),
            weather.status === 'loading' && !weather.forecast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Status$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingState"], {}, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 104,
                columnNumber: 61
            }, this),
            weather.forecast && weather.place && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `layout ${weather.status === 'loading' ? 'is-refreshing' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CurrentWeather$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CurrentWeather"], {
                        place: weather.place,
                        forecast: weather.forecast,
                        unit: weather.unit,
                        now: now
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherDetails$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeatherDetails"], {
                        current: weather.forecast.current,
                        unit: weather.unit
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HourlyForecast$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HourlyForecast"], {
                        hourly: weather.forecast.hourly,
                        timezone: weather.forecast.timezone,
                        unit: weather.unit,
                        currentTime: weather.forecast.current.time,
                        now: now
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DailyForecast$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DailyForecast"], {
                        daily: weather.forecast.daily,
                        unit: weather.unit
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "colophon",
                children: "Observations via Open-Meteo · No API key required"
            }, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = App;
}),
"[project]/src/api/weatherApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchForecast",
    ()=>fetchForecast,
    "reverseGeocode",
    ()=>reverseGeocode,
    "searchLocations",
    ()=>searchLocations
]);
function getOfflineMessage() {
    return 'You’re offline. Check your connection and try again.';
}
async function requestJson(url, signal, retries = 2) {
    let attempt = 0;
    while(attempt <= retries){
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), 12000);
        const onAbort = ()=>controller.abort();
        if (signal) {
            if (signal.aborted) {
                clearTimeout(timeoutId);
                throw new DOMException('Aborted', 'AbortError');
            }
            signal.addEventListener('abort', onAbort, {
                once: true
            });
        }
        try {
            if (typeof navigator !== 'undefined' && !navigator.onLine) {
                throw new Error(getOfflineMessage());
            }
            const response = await fetch(url, {
                signal: controller.signal
            });
            const data = await response.json();
            if (!response.ok) {
                const message = data.error;
                if (response.status === 429 && attempt < retries) {
                    attempt += 1;
                    continue;
                }
                if (response.status === 429) {
                    throw new Error(message || 'Too many requests. Please wait a moment and try again.');
                }
                if (response.status >= 500) {
                    if (attempt < retries) {
                        attempt += 1;
                        continue;
                    }
                    throw new Error(message || 'The weather service is temporarily unavailable. Please try again in a moment.');
                }
                throw new Error(message || `Weather service returned ${response.status}. Please try again in a moment.`);
            }
            return data;
        } catch (error) {
            if (error.name === 'AbortError') {
                if (signal?.aborted) {
                    throw error;
                }
                throw new Error('The weather service took too long to respond. Please try again.');
            }
            if (error instanceof TypeError) {
                if (typeof navigator !== 'undefined' && !navigator.onLine) {
                    throw new Error(getOfflineMessage());
                }
                if (attempt < retries) {
                    attempt += 1;
                    continue;
                }
                throw new Error('Unable to reach the weather service. Check your internet connection.');
            }
            if (error instanceof Error && error.message === getOfflineMessage()) {
                throw error;
            }
            throw error;
        } finally{
            clearTimeout(timeoutId);
            signal?.removeEventListener('abort', onAbort);
        }
    }
    throw new Error('Unable to reach the weather service. Check your internet connection.');
}
async function searchLocations(query, { signal, allowEmpty = false } = {}) {
    const trimmed = query.trim();
    if (!trimmed) {
        throw new Error('Enter a city name to search.');
    }
    const params = new URLSearchParams({
        q: trimmed
    });
    const data = await requestJson(`/api/locations?${params}`, signal);
    const results = data.results ?? [];
    if (results.length === 0 && !allowEmpty) {
        throw new Error(`No matching places found for “${trimmed}”. Try another city.`);
    }
    return results;
}
async function reverseGeocode(latitude, longitude, { signal } = {}) {
    const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude)
    });
    try {
        return await requestJson(`/api/locations/reverse?${params}`, signal);
    } catch (error) {
        if (error.name === 'AbortError') throw error;
        return null;
    }
}
async function fetchForecast({ latitude, longitude, timezone }, { signal } = {}) {
    const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        timezone: timezone || 'auto'
    });
    const data = await requestJson(`/api/forecast?${params}`, signal);
    if (!data.current || !data.daily || !data.hourly) {
        throw new Error('Weather data arrived incomplete. Please try another location.');
    }
    return data;
}
}),
"[project]/src/components/CurrentWeather.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrentWeather",
    ()=>CurrentWeather
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeatherIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/weatherCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.js [app-ssr] (ecmascript)");
;
;
;
;
function CurrentWeather({ place, forecast, unit, now }) {
    const { current, daily } = forecast;
    const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["describeWeather"])(current.weather_code);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "kicker",
                        children: "Now observing"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: place.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "place-line",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRegion"])(place) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPlace"])(place)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "clock",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatClock"])(now ?? new Date())
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "condition",
                        children: meta.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CurrentWeather.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-temp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeatherIcon"], {
                        name: meta.icon,
                        className: "hero-icon",
                        isDay: current.is_day === 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "temp-display",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(current.temperature_2m, unit),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: unit
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "feels",
                        children: [
                            "Feels like ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(current.apparent_temperature, unit)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hi-lo",
                        children: [
                            "H ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(daily.temperature_2m_max[0], unit),
                            " · L",
                            ' ',
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(daily.temperature_2m_min[0], unit)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CurrentWeather.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "sun-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: "Sunrise"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSunTime"])(daily.sunrise[0])
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: "Sunset"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSunTime"])(daily.sunset[0])
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: "UV index"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: Math.round(daily.uv_index_max[0])
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrentWeather.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrentWeather.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CurrentWeather.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CurrentWeather.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/DailyForecast.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyForecast",
    ()=>DailyForecast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeatherIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/weatherCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.js [app-ssr] (ecmascript)");
;
;
;
;
function DailyForecast({ daily, unit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "panel-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Seven-day outlook"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DailyForecast.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Highs, lows, and rain chance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DailyForecast.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DailyForecast.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "daily-list",
                children: daily.time.map((day, index)=>{
                    const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["describeWeather"])(daily.weather_code[index]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "day-name",
                                children: index === 0 ? 'Today' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWeekday"])(day)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DailyForecast.jsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "day-cond",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeatherIcon"], {
                                        name: meta.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DailyForecast.jsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this),
                                    meta.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DailyForecast.jsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "day-rain",
                                children: [
                                    daily.precipitation_probability_max[index] ?? 0,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DailyForecast.jsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "day-temps",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(daily.temperature_2m_max[index], unit)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DailyForecast.jsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(daily.temperature_2m_min[index], unit)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DailyForecast.jsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DailyForecast.jsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        ]
                    }, day, true, {
                        fileName: "[project]/src/components/DailyForecast.jsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DailyForecast.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DailyForecast.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/HourlyForecast.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HourlyForecast",
    ()=>HourlyForecast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeatherIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/weatherCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.js [app-ssr] (ecmascript)");
;
;
;
;
function HourlyForecast({ hourly, timezone, unit, currentTime, now }) {
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
            hour12: false
        });
        const parts = formatter.formatToParts(dateValue);
        const map = Object.fromEntries(parts.filter((part)=>part.type !== 'literal').map((part)=>[
                part.type,
                part.value
            ]));
        return `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}:${map.second}`;
    }
    const currentZoneTime = toZoneDateTimeString(liveNow);
    const itemList = hourly.time.map((time, index)=>({
            time,
            temp: hourly.temperature_2m[index],
            code: hourly.weather_code[index],
            rain: hourly.precipitation_probability[index],
            isDay: hourly.is_day?.[index] === 1
        }));
    const startIndex = itemList.findIndex((item)=>item.time >= currentZoneTime);
    const items = itemList.slice(startIndex >= 0 ? startIndex : 0, (startIndex >= 0 ? startIndex : 0) + 12).slice(0, 12);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "panel-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Next twelve hours"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HourlyForecast.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Local time · ",
                            timezone.replace(/_/g, ' ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HourlyForecast.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HourlyForecast.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hourly-strip",
                children: items.map((item)=>{
                    const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$weatherCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["describeWeather"])(item.code);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "hour-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatHour"])(item.time)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HourlyForecast.jsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeatherIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeatherIcon"], {
                                name: meta.icon,
                                isDay: item.isDay
                            }, void 0, false, {
                                fileName: "[project]/src/components/HourlyForecast.jsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTemp"])(item.temp, unit)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HourlyForecast.jsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    item.rain ?? 0,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HourlyForecast.jsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.time, true, {
                        fileName: "[project]/src/components/HourlyForecast.jsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/HourlyForecast.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HourlyForecast.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SearchBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function SearchBar({ query, onQueryChange, onSearch, onLocate, suggestions, onSelect, onDismissSuggestions, disabled, hasError = false }) {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handlePointerDown(event) {
            if (!wrapRef.current?.contains(event.target)) {
                onDismissSuggestions?.();
            }
        }
        document.addEventListener('pointerdown', handlePointerDown);
        return ()=>document.removeEventListener('pointerdown', handlePointerDown);
    }, [
        onDismissSuggestions
    ]);
    function handleSubmit(event) {
        event.preventDefault();
        if (activeIndex >= 0 && suggestions[activeIndex]) {
            onSelect(suggestions[activeIndex]);
            return;
        }
        onSearch(query);
    }
    function handleKeyDown(event) {
        if (!suggestions.length) return;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveIndex((index)=>(index + 1) % suggestions.length);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveIndex((index)=>index <= 0 ? suggestions.length - 1 : index - 1);
        } else if (event.key === 'Escape') {
            onDismissSuggestions?.();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "search-bar",
        onSubmit: handleSubmit,
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "sr-only",
                htmlFor: "city-search",
                children: "Search city"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "search-glyph",
                        "aria-hidden": "true",
                        children: "⌕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "city-search",
                        type: "search",
                        role: "combobox",
                        "aria-autocomplete": "list",
                        "aria-expanded": suggestions.length > 0,
                        "aria-controls": "city-suggestions",
                        "aria-invalid": hasError,
                        value: query,
                        onChange: (event)=>{
                            setActiveIndex(-1);
                            onQueryChange(event.target.value);
                        },
                        onKeyDown: handleKeyDown,
                        placeholder: "Search a city — Lisbon, Kyoto, Lagos...",
                        autoComplete: "off",
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "suggestions",
                        id: "city-suggestions",
                        role: "listbox",
                        children: suggestions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                role: "presentation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "option",
                                    "aria-selected": index === activeIndex,
                                    className: index === activeIndex ? 'active' : '',
                                    onClick: ()=>onSelect(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchBar.jsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                item.admin,
                                                item.country
                                            ].filter(Boolean).join(', ')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchBar.jsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchBar.jsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/components/SearchBar.jsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchBar.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn primary",
                type: "submit",
                disabled: disabled,
                children: "Forecast"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn ghost",
                type: "button",
                onClick: onLocate,
                disabled: disabled,
                children: "Near me"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchBar.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Status.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "ErrorBanner",
    ()=>ErrorBanner,
    "LoadingState",
    ()=>LoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ErrorBanner({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "error-banner",
        role: "alert",
        "aria-live": "assertive",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "error-kicker",
                        children: "Signal lost"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Status.jsx",
                        lineNumber: 5,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/Status.jsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Status.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn primary",
                type: "button",
                onClick: onRetry,
                children: "Try again"
            }, void 0, false, {
                fileName: "[project]/src/components/Status.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Status.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function EmptyState({ message = 'No matching places found.' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty-state",
        role: "status",
        "aria-live": "polite",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/Status.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Status.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function LoadingState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loading-state",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pulse-ring"
            }, void 0, false, {
                fileName: "[project]/src/components/Status.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Reading the sky…"
            }, void 0, false, {
                fileName: "[project]/src/components/Status.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Status.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WeatherDetails.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeatherDetails",
    ()=>WeatherDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.js [app-ssr] (ecmascript)");
;
;
function WeatherDetails({ current, unit }) {
    const tiles = [
        {
            label: 'Humidity',
            value: `${current.relative_humidity_2m}%`
        },
        {
            label: 'Wind',
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWind"])(current.wind_speed_10m, unit)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["windDirection"])(current.wind_direction_10m)}`
        },
        {
            label: 'Pressure',
            value: `${Math.round(current.pressure_msl)} hPa`
        },
        {
            label: 'Cloud cover',
            value: `${current.cloud_cover}%`
        },
        {
            label: 'Precipitation',
            value: `${current.precipitation} mm`
        },
        {
            label: 'Visibility',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatVisibility"])(current.visibility, unit)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "details-grid",
        "aria-label": "Current conditions",
        children: tiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "detail-tile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: tile.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherDetails.jsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: tile.value
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherDetails.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, tile.label, true, {
                fileName: "[project]/src/components/WeatherDetails.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/WeatherDetails.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WeatherIcon.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeatherIcon",
    ()=>WeatherIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WeatherIcon({ name, className = '', isDay = true }) {
    const common = {
        viewBox: '0 0 64 64',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: `weather-icon ${className}`.trim(),
        'aria-hidden': true
    };
    const cloudStyle = {
        color: '#9aa7b4'
    };
    const sunStyle = {
        color: '#ffdd00',
        filter: 'drop-shadow(0 0 6px rgba(255, 221, 0, 0.75))'
    };
    const moonStyle = {
        filter: 'drop-shadow(0 0 4px rgba(245, 247, 237, 0.45))'
    };
    switch(name){
        case 'sun':
            if (!isDay) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ...common,
                    style: moonStyle,
                    className: `weather-icon moon-icon`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M40 34.5A12 12 0 1 1 29.5 18 10 10 0 0 0 40 34.5Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WeatherIcon.jsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: sunStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M32 8v6M32 50v6M8 32h6M50 32h6M14.5 14.5l4.2 4.2M45.3 45.3l4.2 4.2M14.5 49.5l4.2-4.2M45.3 18.7l4.2-4.2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this);
        case 'partly':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: sunStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "24",
                        cy: "24",
                        r: "8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 10v4M10 24h4M15 15l2.5 2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 44h22a8 8 0 0 0 1.2-15.9A12 12 0 0 0 23 32.5 8.5 8.5 0 0 0 22 44Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 43,
                columnNumber: 9
            }, this);
        case 'cloud':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 44h26a9 9 0 0 0 1.4-17.9A13.5 13.5 0 0 0 20 30.2 9.5 9.5 0 0 0 18 44Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeatherIcon.jsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 51,
                columnNumber: 9
            }, this);
        case 'fog':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 28h32M12 36h40M18 44h28"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeatherIcon.jsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, this);
        case 'drizzle':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 32h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 18.5 8.5 8.5 0 0 0 18 32Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 40v4M32 42v4M40 40v4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this);
        case 'rain':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 30h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 16.5 8.5 8.5 0 0 0 18 30Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 38l-3 8M32 38l-3 8M42 38l-3 8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, this);
        case 'snow':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 30h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 16.5 8.5 8.5 0 0 0 18 30Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 38v8M20 42h8M32 38v8M28 42h8M40 38v8M36 42h8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 77,
                columnNumber: 9
            }, this);
        case 'sleet':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 30h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 16.5 8.5 8.5 0 0 0 18 30Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 38l-2 6M40 38l-2 6M32 40v2M30 44h4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 84,
                columnNumber: 9
            }, this);
        case 'storm':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 28h26a8 8 0 0 0 1.2-15.9A12 12 0 0 0 19 14.5 8.5 8.5 0 0 0 18 28Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M30 30l-8 12h8l-4 12 14-16h-8l6-8Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeatherIcon.jsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                style: cloudStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 44h26a9 9 0 0 0 1.4-17.9A13.5 13.5 0 0 0 20 30.2 9.5 9.5 0 0 0 18 44Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeatherIcon.jsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WeatherIcon.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this);
    }
}
}),
"[project]/src/hooks/useTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setTheme",
    ()=>setTheme,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
const THEME_KEY = 'meridian-theme';
const listeners = new Set();
/**
 * The single source of truth is the `data-theme` attribute on <html>,
 * which the server sets from the cookie. Reading it keeps the server and
 * client in agreement during hydration.
 */ function readTheme() {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}
/** Notifies useSyncExternalStore that the <html> attribute changed. */ function subscribe(onStoreChange) {
    listeners.add(onStoreChange);
    return ()=>listeners.delete(onStoreChange);
}
function setCookie(value) {
    document.cookie = `${THEME_KEY}=${value}; path=/; max-age=31536000; SameSite=Lax`;
}
function setTheme(next) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', next);
    try {
        window.localStorage.setItem(THEME_KEY, next);
    } catch  {
    /* ignore quota / private mode */ }
    setCookie(next);
    listeners.forEach((listener)=>listener());
}
function useTheme() {
    // The server snapshot is the theme the layout resolved from the cookie,
    // so the first client render produces exactly the server's markup.
    const serverTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, readTheme, ()=>serverTheme);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTheme(readTheme() === 'dark' ? 'light' : 'dark');
    }, []);
    return {
        theme,
        setTheme,
        toggle
    };
}
}),
"[project]/src/hooks/useWeather.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWeather",
    ()=>useWeather
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$weatherApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/weatherApi.js [app-ssr] (ecmascript)");
;
;
const DEFAULT_CITY = 'London';
const PLACE_KEY = 'meridian.place';
const UNIT_KEY = 'meridian.unit';
function readStoredPlace() {
    try {
        const parsed = JSON.parse(localStorage.getItem(PLACE_KEY) || 'null');
        if (typeof parsed?.latitude !== 'number' || typeof parsed?.longitude !== 'number') {
            return null;
        }
        return parsed;
    } catch  {
        return null;
    }
}
function readStoredUnit() {
    try {
        return localStorage.getItem(UNIT_KEY) === 'F' ? 'F' : 'C';
    } catch  {
        return 'C';
    }
}
function persistPlace(nextPlace) {
    try {
        localStorage.setItem(PLACE_KEY, JSON.stringify(nextPlace));
    } catch  {
    /* ignore quota / private mode */ }
}
function useWeather() {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [place, setPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emptyMessage, setEmptyMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unit, setUnitState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(readStoredUnit);
    const [isOffline, setIsOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(typeof navigator !== 'undefined' ? !navigator.onLine : false);
    const requestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastLoadedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const beginRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        abortRef.current?.abort();
        abortRef.current = new AbortController();
        requestId.current += 1;
        return {
            id: requestId.current,
            signal: abortRef.current.signal
        };
    }, []);
    const setUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        setUnitState(next);
        try {
            localStorage.setItem(UNIT_KEY, next);
        } catch  {
        /* ignore */ }
    }, []);
    const loadPlace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (nextPlace, request)=>{
        const { id, signal } = request ?? beginRequest();
        setStatus('loading');
        setError(null);
        setEmptyMessage(null);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$weatherApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchForecast"])(nextPlace, {
                signal
            });
            if (id !== requestId.current) return;
            setPlace(nextPlace);
            setForecast(data);
            persistPlace(nextPlace);
            setStatus('success');
        } catch (err) {
            if (err.name === 'AbortError' || id !== requestId.current) return;
            setStatus('error');
            setError(err.message || 'Something went wrong while loading the forecast.');
        }
    }, [
        beginRequest
    ]);
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (rawQuery)=>{
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            setStatus('error');
            setError('You’re offline. Check your connection and try again.');
            return;
        }
        const { id, signal } = beginRequest();
        setStatus('loading');
        setError(null);
        setEmptyMessage(null);
        setSuggestions([]);
        setQuery(rawQuery);
        try {
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$weatherApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchLocations"])(rawQuery, {
                signal
            });
            if (id !== requestId.current) return;
            await loadPlace(results[0], {
                id,
                signal
            });
        } catch (err) {
            if (err.name === 'AbortError' || id !== requestId.current) return;
            setSuggestions([]);
            setStatus('error');
            setError(err.message || 'Search failed. Please try again.');
            setEmptyMessage(err.message || 'Search failed. Please try again.');
        }
    }, [
        beginRequest,
        loadPlace
    ]);
    const selectPlace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (nextPlace)=>{
        setSuggestions([]);
        await loadPlace(nextPlace);
    }, [
        loadPlace
    ]);
    const useDeviceLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            setStatus('error');
            setError('You’re offline. Check your connection and try again.');
            return;
        }
        if (!navigator.geolocation) {
            setStatus('error');
            setError('Geolocation is not supported in this browser.');
            return;
        }
        const { id, signal } = beginRequest();
        setStatus('loading');
        setError(null);
        setEmptyMessage(null);
        setSuggestions([]);
        navigator.geolocation.getCurrentPosition(async ({ coords })=>{
            if (id !== requestId.current) return;
            try {
                const resolved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$weatherApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseGeocode"])(coords.latitude, coords.longitude, {
                    signal
                });
                if (id !== requestId.current) return;
                const nextPlace = resolved ?? {
                    id: 'device',
                    name: 'Your location',
                    country: '',
                    admin: '',
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                };
                await loadPlace(nextPlace, {
                    id,
                    signal
                });
            } catch (err) {
                if (err.name === 'AbortError' || id !== requestId.current) return;
                setStatus('error');
                setError(err.message || 'Could not load weather for your location.');
            }
        }, (geoError)=>{
            if (id !== requestId.current) return;
            const messages = {
                1: 'Location permission was denied. Search for a city instead.',
                2: 'Your location could not be determined. Search for a city instead.',
                3: 'Location request timed out. Try again or search for a city.'
            };
            setStatus('error');
            setError(messages[geoError.code] || 'Could not access your location.');
        }, {
            timeout: 10000,
            maximumAge: 300000
        });
    }, [
        beginRequest,
        loadPlace
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateOnlineState = ()=>{
            setIsOffline(typeof navigator !== 'undefined' ? !navigator.onLine : false);
        };
        updateOnlineState();
        window.addEventListener('online', updateOnlineState);
        window.addEventListener('offline', updateOnlineState);
        return ()=>{
            window.removeEventListener('online', updateOnlineState);
            window.removeEventListener('offline', updateOnlineState);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOffline) {
            setStatus('error');
            setError('You’re offline. Check your connection and try again.');
            return;
        }
        const stored = readStoredPlace();
        async function bootstrap() {
            if (stored) {
                await loadPlace(stored);
                return;
            }
            const { id, signal } = beginRequest();
            setStatus('loading');
            setError(null);
            setEmptyMessage(null);
            try {
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$weatherApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchLocations"])(DEFAULT_CITY, {
                    signal
                });
                if (id !== requestId.current) return;
                await loadPlace(results[0], {
                    id,
                    signal
                });
            } catch (err) {
                if (err.name === 'AbortError' || id !== requestId.current) return;
                setStatus('error');
                setError(err.message || 'Could not load the initial forecast.');
            }
        }
        bootstrap();
        return ()=>{
            abortRef.current?.abort();
        };
    }, [
        beginRequest,
        loadPlace
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const trimmed = query.trim();
        if (trimmed.length < 2 || trimmed === lastLoadedName.current) {
            setSuggestions([]);
            return undefined;
        }
        const timer = setTimeout(async ()=>{
            try {
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$weatherApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchLocations"])(trimmed, {
                    allowEmpty: true
                });
                setSuggestions(results);
                setEmptyMessage(results.length === 0 ? `No cities match “${trimmed}”. Try another name.` : null);
            } catch  {
                setSuggestions([]);
                setEmptyMessage(`No cities match “${trimmed}”. Try another name.`);
            }
        }, 320);
        return ()=>clearTimeout(timer);
    }, [
        query
    ]);
    const retry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (place) {
            loadPlace(place);
        } else if (query.trim()) {
            search(query);
        } else {
            const stored = readStoredPlace();
            if (stored) {
                loadPlace(stored);
            } else {
                search(DEFAULT_CITY);
            }
        }
    }, [
        place,
        query,
        loadPlace,
        search
    ]);
    return {
        query,
        setQuery,
        suggestions,
        place,
        forecast,
        status,
        error,
        emptyMessage,
        unit,
        setUnit,
        search,
        selectPlace,
        useDeviceLocation,
        retry,
        clearSuggestions: ()=>setSuggestions([])
    };
}
}),
"[project]/src/utils/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "celsiusToFahrenheit",
    ()=>celsiusToFahrenheit,
    "formatClock",
    ()=>formatClock,
    "formatHour",
    ()=>formatHour,
    "formatPlace",
    ()=>formatPlace,
    "formatRegion",
    ()=>formatRegion,
    "formatSunTime",
    ()=>formatSunTime,
    "formatTemp",
    ()=>formatTemp,
    "formatVisibility",
    ()=>formatVisibility,
    "formatWeekday",
    ()=>formatWeekday,
    "formatWind",
    ()=>formatWind,
    "windDirection",
    ()=>windDirection
]);
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
function formatTemp(celsius, unit) {
    const value = unit === 'F' ? celsiusToFahrenheit(celsius) : celsius;
    return `${Math.round(value)}°`;
}
function formatWind(kmh, unit) {
    if (unit === 'F') {
        return `${Math.round(kmh * 0.621371)} mph`;
    }
    return `${Math.round(kmh)} km/h`;
}
function formatVisibility(meters, unit) {
    if (unit === 'F') {
        return `${(meters / 1609.34).toFixed(1)} mi`;
    }
    return `${(meters / 1000).toFixed(1)} km`;
}
function windDirection(degrees) {
    const dirs = [
        'N',
        'NE',
        'E',
        'SE',
        'S',
        'SW',
        'W',
        'NW'
    ];
    return dirs[Math.round(degrees / 45) % 8];
}
function formatPlace(place) {
    return [
        place.name,
        place.admin,
        place.country
    ].filter(Boolean).join(', ');
}
function formatRegion(place) {
    return [
        place.admin,
        place.country
    ].filter(Boolean).join(', ');
}
function asDate(value) {
    if (value instanceof Date) return value;
    if (typeof value === 'string') return new Date(value);
    return new Date();
}
const localClock = (options)=>new Intl.DateTimeFormat('en-US', options);
function formatHour(iso) {
    return localClock({
        hour: 'numeric',
        hour12: true
    }).format(asDate(iso));
}
function formatWeekday(iso) {
    return localClock({
        weekday: 'short'
    }).format(asDate(`${iso}T12:00`));
}
function formatClock(iso) {
    return localClock({
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    }).format(asDate(iso));
}
function formatSunTime(iso) {
    return localClock({
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).format(asDate(iso));
}
}),
"[project]/src/utils/weatherCodes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeWeather",
    ()=>describeWeather
]);
const WMO = {
    0: {
        label: 'Clear sky',
        icon: 'sun',
        mood: 'clear'
    },
    1: {
        label: 'Mostly clear',
        icon: 'sun',
        mood: 'clear'
    },
    2: {
        label: 'Partly cloudy',
        icon: 'partly',
        mood: 'partly'
    },
    3: {
        label: 'Overcast',
        icon: 'cloud',
        mood: 'overcast'
    },
    45: {
        label: 'Fog',
        icon: 'fog',
        mood: 'fog'
    },
    48: {
        label: 'Rime fog',
        icon: 'fog',
        mood: 'fog'
    },
    51: {
        label: 'Light drizzle',
        icon: 'drizzle',
        mood: 'rain'
    },
    53: {
        label: 'Drizzle',
        icon: 'drizzle',
        mood: 'rain'
    },
    55: {
        label: 'Heavy drizzle',
        icon: 'drizzle',
        mood: 'rain'
    },
    56: {
        label: 'Freezing drizzle',
        icon: 'sleet',
        mood: 'snow'
    },
    57: {
        label: 'Heavy freezing drizzle',
        icon: 'sleet',
        mood: 'snow'
    },
    61: {
        label: 'Light rain',
        icon: 'rain',
        mood: 'rain'
    },
    63: {
        label: 'Rain',
        icon: 'rain',
        mood: 'rain'
    },
    65: {
        label: 'Heavy rain',
        icon: 'rain',
        mood: 'rain'
    },
    66: {
        label: 'Freezing rain',
        icon: 'sleet',
        mood: 'snow'
    },
    67: {
        label: 'Heavy freezing rain',
        icon: 'sleet',
        mood: 'snow'
    },
    71: {
        label: 'Light snow',
        icon: 'snow',
        mood: 'snow'
    },
    73: {
        label: 'Snow',
        icon: 'snow',
        mood: 'snow'
    },
    75: {
        label: 'Heavy snow',
        icon: 'snow',
        mood: 'snow'
    },
    77: {
        label: 'Snow grains',
        icon: 'snow',
        mood: 'snow'
    },
    80: {
        label: 'Rain showers',
        icon: 'rain',
        mood: 'rain'
    },
    81: {
        label: 'Heavy showers',
        icon: 'rain',
        mood: 'rain'
    },
    82: {
        label: 'Violent showers',
        icon: 'rain',
        mood: 'storm'
    },
    85: {
        label: 'Snow showers',
        icon: 'snow',
        mood: 'snow'
    },
    86: {
        label: 'Heavy snow showers',
        icon: 'snow',
        mood: 'snow'
    },
    95: {
        label: 'Thunderstorm',
        icon: 'storm',
        mood: 'storm'
    },
    96: {
        label: 'Thunderstorm with hail',
        icon: 'storm',
        mood: 'storm'
    },
    99: {
        label: 'Severe thunderstorm',
        icon: 'storm',
        mood: 'storm'
    }
};
function describeWeather(code) {
    return WMO[code] ?? {
        label: 'Unknown conditions',
        icon: 'cloud',
        mood: 'overcast'
    };
}
}),
];

//# sourceMappingURL=src_16a5_fn._.js.map