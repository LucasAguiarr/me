'use client';

import { notFound, usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import PageHeader from '@/components/page-header';
import { projects } from '@/config/projects';
import Link from 'next/link';

type Props = {};

export default function ProjectPage({}: Props) {
  const pathname = usePathname();

  const project = projects.find(project => pathname.includes(project.slug));

  if (!project) return notFound();

  return (
    <div>
      <PageHeader title={[project?.title]} description={project?.description} />

      <div className="flex items-center gap-2 mt-10">
        <Icons.github className="w-4 h-4" />
        <Link href={project.repository}>{project.repository}</Link>
      </div>
    </div>
  );
}
