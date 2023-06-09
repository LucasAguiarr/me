'use client';
import Link from 'next/link';

import { MainNave } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ProfileCard } from '@/components/profile-card';

export function SiteHeader() {
  return (
    <header className="fixed w-full h-16 top-0 z-40 border-b bg-background/95 backdrop-blur lg:border-r lg:border-b-0 lg:w-64 lg:min-h-screen">
      <div className="flex h-full items-center justify-between px-4 lg:justify-start lg:flex-col lg:py-10">
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
