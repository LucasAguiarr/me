import CopyButton from '@/components/copy-button';
import PageHeader from '@/components/page-header';
import { ProjectCard } from '@/components/project-card';
import { StackCard } from '@/components/stack-card';
import { Button } from '@/components/ui/button';
import { home } from '@/config/home';
import { projects } from '@/config/projects';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Page() {
  const { title, description } = home;
  const { projects: allProjects } = projects;
  return (
    <div>
      <PageHeader title={title} description={description}>
        <div className="mt-8 flex items-center gap-2">
          <Button>
            <Link href="/contact">Contato</Link>
          </Button>
          <CopyButton copy={siteConfig.author.email}>E-mail</CopyButton>
        </div>
      </PageHeader>

      <div className="mb-10 mt-16 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Últimos projetos</p>
          <Button variant="link">
            <Link href="/projects">Ver todos</Link>
          </Button>
        </div>

        {allProjects.slice(0, 2).map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}

        <StackCard className="mt-10" />
      </div>
    </div>
  );
}
