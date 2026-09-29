'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { useThemeContext } from '../components/ThemeContext';

const THEME_KEY = 'meridian-theme';
const listeners = new Set();

/**
 * The single source of truth is the `data-theme` attribute on <html>,
 * which the server sets from the cookie. Reading it keeps the server and
 * client in agreement during hydration.
 */
function readTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

/** Notifies useSyncExternalStore that the <html> attribute changed. */
function subscribe(onStoreChange) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function setCookie(value) {
  document.cookie = `${THEME_KEY}=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

export function setTheme(next) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', next);
  try {
    window.localStorage.setItem(THEME_KEY, next);
  } catch {
    /* ignore quota / private mode */
  }
  setCookie(next);
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  // The server snapshot is the theme the layout resolved from the cookie,
  // so the first client render produces exactly the server's markup.
  const serverTheme = useThemeContext();
  const theme = useSyncExternalStore(subscribe, readTheme, () => serverTheme);

  const toggle = useCallback(() => {
    setTheme(readTheme() === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, setTheme, toggle };
}
