'use client';
import Link from 'next/link';

import { MainNave } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ProfileCard } from '@/components/profile-card';

export function SiteHeader() {
  return (
    <header className="fixed w-full h-16 top-0 z-40  border-b bg-background/95 backdrop-blur md:border-r md:border-b-0md:w-64 md:h-screen">
      <div className="flex h-full items-center justify-between px-4 md:justify-start md:flex-col md:py-10">
        <Link href="/">
          <ProfileCard />
        </Link>

        <div className="flex gap-2 md:hidden">
          <MobileNav />
        </div>

        <div className="mt-6 hidden md:block">
          <MainNave />
        </div>
      </div>
    </header>
  );
}
