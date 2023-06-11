import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileCard() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar>
        <AvatarImage src="/images/profile.png" alt="@lucasaguiarr" />
        <AvatarFallback>LU</AvatarFallback>
      </Avatar>

      <div>
        <h1 className="font-bold">Lucas Aguiar</h1>
        <p className="text-center text-xs leading-loose text-muted-foreground">
          Fullstack Developer
        </p>
      </div>
    </div>
  );
}
