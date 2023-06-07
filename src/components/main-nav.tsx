import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { Button, ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

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
        variant="ghost"
        size="sm"
        className={cn(
          'flex w-full items-center gap-2 justify-start transition-colors hover:text-foreground/80',
          isSelect ? 'text-foreground bg-accent' : 'text-foreground/60'
        )}
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
    <nav>
      <Input type="search" placeholder="Search..." className="h-9" />

      <div className="flex flex-col gap-2 mt-10">
        <p className="uppercase text-xs font-light leading-loose">Menu</p>
        <MenuButton path="" isSelect={verifyPath('/')} onClick={cb}>
          <Icons.compass className="w-4 h-4" />
          Home
        </MenuButton>

        <MenuButton
          path="projects"
          isSelect={verifyPath('/projects')}
          onClick={cb}
        >
          <Icons.paper className="w-4 h-4" />
          Projects
        </MenuButton>

        <MenuButton path="about" isSelect={verifyPath('/about')} onClick={cb}>
          <Icons.person className="w-4 h-4" />
          About
        </MenuButton>
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

        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}
