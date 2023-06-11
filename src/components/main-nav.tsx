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
          'flex w-full items-center gap-2 justify-start transition-colors hover:text-foreground/80'
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
    <div className="flex flex-col justify-between h-full">
      <nav>
        <div className="flex flex-col gap-2 mt-4">
          <p className="uppercase text-xs font-light leading-loose">Menu</p>
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
          <p className="uppercase text-xs font-light leading-loose">Fallow</p>

          <div className="flex flex-col gap-2 mt-2">
            <MenuButton path={siteConfig.links.linkedin} isExternal>
              <Icons.linkedin className="w-4 h-4" />
              Linkedin
            </MenuButton>

            <MenuButton path={siteConfig.links.github} isExternal>
              <Icons.github className="w-4 h-4" />
              Github
            </MenuButton>

            <MenuButton path={siteConfig.links.twitter} isExternal>
              <Icons.twitter className="w-4 h-4" />
              Twitter
            </MenuButton>
          </div>
        </div>
      </nav>

      <ModeToggle />
    </div>
  );
}
