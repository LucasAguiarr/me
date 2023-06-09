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
      <Card
        className={cn('flex flex-row cursor-pointer', className)}
        {...props}
      >
        <CardHeader className="flex flex-row gap-4">
          <Image
            alt={title}
            src={image}
            width={200}
            height={300}
            className="rounded-md"
          />
          <div className="flex flex-col justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>

            <div className="flex gap-2 mt-4">
              {tags?.map(tag => (
                <p
                  key={tag}
                  className="flex items-center rounded-md border p-2"
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
