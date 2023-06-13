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
    <div className="flex items-center justify-between space-x-4 rounded-md border p-4">
      {theme === 'light' ? <Icons.sun /> : <Icons.moon />}
      <div className="hidden flex-1 md:flex">
        <p className="text-sm font-medium leading-none">
          Tema {theme === 'light' ? 'Claro' : 'Escuro'}
        </p>
      </div>
      <Switch onCheckedChange={handleThemeChange} />
    </div>
  );
}
