'use client';

import { notFound, usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import PageHeader from '@/components/page-header';
import { projects } from '@/config/projects';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function ProjectPage({}: Props) {
  const pathname = usePathname();

  const project = projects.find(project => pathname.includes(project.slug));

  if (!project) return notFound();

  return (
    <div>
      <PageHeader title={[project?.title]} description={project?.description} />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <Image
          alt={project.title}
          src={project.image}
          width="1000"
          height="1000"
          className="rounded-md aspect-video w-full max-h-96"
        />

        {project.contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <p
              key={tag}
              className="flex items-center rounded-md border p-2 text-xs"
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Icons.github className="w-4 h-4" />
          <Link href={project.repository}>{project.repository}</Link>
        </div>
      </div>
    </div>
  );
}
