import { AnchorHTMLAttributes } from 'react';

import { siteConfig } from '@/config/site';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;
function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium underline underline-offset-4"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t py-6 lg:py-0 w-full">
      <div className="container flex flex-col items-center justify-between gap-4 lg:h-24 lg:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 lg:flex-row lg:gap-2 lg:px-0">
          {/* <Icons.Logo className="hidden h-6 w-6 lg:inline-block" /> */}
          <p className="text-center text-lg leading-loose text-muted-foreground lg:text-left">
            Built by <Link href={siteConfig.links.linkedin}>Lucas Aguiar</Link>.
            The source code is available on{' '}
            <Link href={siteConfig.links.github}>GitHub</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
