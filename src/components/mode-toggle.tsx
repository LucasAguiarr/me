'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button onClick={handleThemeChange} className="w-6">
      {theme === 'dark' ? <Icons.moon /> : <Icons.sun />}
    </button>
  );
}
