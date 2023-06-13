import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';
import { Button, ButtonProps } from '@/components/ui/button';
import { navs } from '@/config/navs';
import { siteConfig } from '@/config/site';

type MenuButtonProps = ButtonProps & {
  path: string;
  isSelect?: boolean;
  isExternal?: boolean;
};
function MenuButton({
  isSelect,
  path,
  isExternal,
  children,

  ...rest
}: MenuButtonProps) {
  return (
    <Link
      href={path}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <Button
        variant={isSelect ? 'outline' : 'ghost'}
        size="sm"
        className={
          'flex w-full items-center justify-start gap-2 transition-colors hover:text-foreground/80'
        }
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
}

type MainNaveProps = {
  cb?: () => void;
};
export function MainNave({ cb }: MainNaveProps) {
  const pathname = usePathname();

  function verifyPath(path: string) {
    if (path === '/') return pathname === path;
    return pathname.includes(path);
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <nav>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-xs font-light uppercase leading-loose">Menu</p>
          {navs.map(nav => (
            <MenuButton
              key={nav.title}
              path={nav.path}
              isSelect={verifyPath(nav.path)}
              onClick={cb}
            >
              {nav.icon}
              {nav.title}
            </MenuButton>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-light uppercase leading-loose">Seguir</p>

          <div className="mt-2 flex flex-col gap-2">
            <MenuButton path={siteConfig.links.linkedin} isExternal>
              <Icons.linkedin className="h-4 w-4" />
              Linkedin
            </MenuButton>

            <MenuButton path={siteConfig.links.github} isExternal>
              <Icons.github className="h-4 w-4" />
              Github
            </MenuButton>

            <MenuButton path={siteConfig.links.twitter} isExternal>
              <Icons.twitter className="h-4 w-4" />
              Twitter
            </MenuButton>
          </div>
        </div>
      </nav>

      <ModeToggle />
    </div>
  );
}
