'use client';
import Link from 'next/link';

import { MainNave } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ProfileCard } from '@/components/profile-card';

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 h-16 w-full border-b bg-background/95 backdrop-blur lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex h-full items-center justify-between px-4 lg:flex-col lg:justify-start lg:py-10">
        <Link href="/">
          <ProfileCard />
        </Link>

        <div className="flex gap-2 lg:hidden">
          <MobileNav />
        </div>

        <div className="mt-6 hidden lg:flex lg:h-full">
          <MainNave />
        </div>
      </div>
    </header>
  );
}
