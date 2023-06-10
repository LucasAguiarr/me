'use client';

import * as React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import Image from 'next/image';

const stacks = [
  {
    title: 'Typescript',
    image: '/images/typescript-logo.svg',
  },
  {
    title: 'React',
    image: '/images/react-logo.svg',
  },
  {
    title: 'Node.js',
    image: '/images/node-logo.svg',
  },
  {
    title: 'Next.js',
    image: '/images/next-logo.svg',
  },
  {
    title: 'React native',
    image: '/images/react-logo.svg',
  },
  {
    title: 'TailwindCSS',
    image: '/images/tailwindcss-logo.svg',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function StackCard({ className, ...props }: CardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className={className} {...props}>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CardHeader>
            <CollapsibleTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer">
                <CardTitle>Stacks</CardTitle>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <Icons.chevronsupdown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>
          </CardHeader>

          <div className="space-y-2">
            {stacks.slice(0, 3).map(stack => (
              <Stack key={stack.title} {...stack} />
            ))}
          </div>

          <CollapsibleContent className="space-y-2 mt-2">
            {stacks.slice(3).map(stack => (
              <Stack key={stack.title} {...stack} />
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

interface StackProps {
  title: string;
  image: string;
}
function Stack({ title, image }: StackProps) {
  return (
    <div
      key={title}
      className=" flex items-center space-x-4 rounded-md border p-4"
    >
      <Image
        alt={title}
        src={image}
        width="20"
        height="20"
        className="rounded-md"
      />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
      </div>
    </div>
  );
}
