'use client';

import { useEffect, useMemo, useState } from 'react';

const THEME_KEY = 'meridian-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const htmlTheme = document.documentElement.getAttribute('data-theme');
  if (htmlTheme === 'dark' || htmlTheme === 'light') return htmlTheme;

  const cookieMatch = document.cookie.match(new RegExp('(?:^|; )' + THEME_KEY + '=(dark|light)'));
  const cookieTheme = cookieMatch ? cookieMatch[1] : null;
  if (cookieTheme) return cookieTheme;

  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setCookie(value) {
  document.cookie = `${THEME_KEY}=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_KEY, theme);
    setCookie(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggle: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return value;
}
