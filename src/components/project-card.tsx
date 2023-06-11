import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = React.ComponentProps<typeof Card> & {
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  image,
  slug,
  className,
  ...props
}: CardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className={cn('cursor-pointer', className)} {...props}>
        <CardHeader className="flex flex-col lg:flex-row gap-4">
          <Image
            alt={title}
            src={image}
            width="200"
            height="200"
            className="w-full lg:w-fit aspect-video rounded-md object-contain bg-accent hover:bg-accent-foreground hover:scale-105 transition-all duration-150"
          />
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {tags?.map(tag => (
                <p
                  key={tag}
                  className="flex items-center rounded-md border p-2 text-xs"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
