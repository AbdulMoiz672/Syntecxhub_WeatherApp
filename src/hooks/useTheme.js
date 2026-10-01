'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { useThemeContext } from '../components/ThemeContext';

const THEME_KEY = 'meridian-theme';
const listeners = new Set();

function readTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

/** Notifies useSyncExternalStore that the <html> attribute changed. */
function subscribe(onStoreChange) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

export function setTheme(next) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', next);
  try {
    window.localStorage.setItem(THEME_KEY, next);
  } catch {
    /* ignore quota / private mode */
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const serverTheme = useThemeContext();
  const theme = useSyncExternalStore(subscribe, readTheme, () => serverTheme);

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(THEME_KEY);
      if (storedTheme === 'dark' || storedTheme === 'light') setTheme(storedTheme);
    } catch {
      /* ignore unavailable storage */
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme(readTheme() === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, setTheme, toggle };
}
