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
        <div className="flex items-center gap-2 mt-8">
          <Button>
            <Link href="/contact">Contato</Link>
          </Button>
          <CopyButton copy={siteConfig.author.email}>E-mail</CopyButton>
        </div>
      </PageHeader>

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <p>Últimos projetos</p>

        {allProjects.slice(0, 2).map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}

        <StackCard className="mt-10" />
      </div>
    </div>
  );
}
