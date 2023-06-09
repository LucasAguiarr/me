'use client';

import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';
import { Icons } from './icons';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="flex items-center space-x-4 justify-between rounded-md border p-4">
      {theme === 'light' ? <Icons.sun /> : <Icons.moon />}
      <div className="hidden md:flex flex-1">
        <p className="text-sm font-medium leading-none">
          {theme === 'light' ? 'Light' : 'Dark'} Mode
        </p>
      </div>
      <Switch onCheckedChange={handleThemeChange} />
    </div>
  );
}
