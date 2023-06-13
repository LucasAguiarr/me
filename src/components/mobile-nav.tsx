'use client';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { MainNave } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icons.menu className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent size="lg" position="left">
        <ScrollArea className="h-full pt-10 ">
          <div className="h-full">
            <MainNave cb={() => setOpen(false)} />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
