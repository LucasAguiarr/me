'use client';

import React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

type Props = {
  children?: React.ReactNode;
  copy: string;
};

export default function CopyButton({ children, copy }: Props) {
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    setCopied(true);
    navigator.clipboard.writeText(copy);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Button variant="outline" onClick={handleCopy}>
      <Icons.copy className="mr-2 h-4 w-4" />
      {copied ? 'Copied!' : children}
    </Button>
  );
}
