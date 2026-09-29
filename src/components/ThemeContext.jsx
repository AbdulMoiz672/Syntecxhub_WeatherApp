'use client';

import { createContext, useContext } from 'react';

/**
 * Holds the theme the server resolved from the cookie so the first client
 * render matches the server HTML (no hydration mismatch).
 */
const ThemeContext = createContext('light');

export function ThemeProvider({ theme, children }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
