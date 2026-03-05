'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) {
    return <div className="glass-button h-9 w-20 rounded-full" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-button relative inline-flex h-9 w-20 items-center rounded-full px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      aria-label="Toggle light and dark mode"
      aria-pressed={isDark}
    >
      <span
        className={`absolute h-7 w-7 rounded-full bg-white/75 shadow transition-transform duration-300 dark:bg-slate-100/80 ${
          isDark ? 'translate-x-10' : 'translate-x-0'
        }`}
        aria-hidden="true"
      />
      <span className="relative z-10 w-1/2 text-center text-xs font-semibold">☀️</span>
      <span className="relative z-10 w-1/2 text-center text-xs font-semibold">🌙</span>
    </button>
  );
}
