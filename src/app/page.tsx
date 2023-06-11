import CopyButton from '@/components/copy-button';
import PageHeader from '@/components/page-header';
import { ProjectCard } from '@/components/project-card';
import { StackCard } from '@/components/stack-card';
import { Button } from '@/components/ui/button';
import { projects } from '@/config/projects';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <PageHeader
        title={["Hey, I'm Lucas.", "I'm a developer from Brazil."]}
        description="Full stack developer based in Florianópolis, Brazil, passionate about programming and innovation."
      >
        <div className="flex items-center gap-2 mt-8">
          <Button>
            <Link href="/contact">Contact</Link>
          </Button>
          <CopyButton copy={siteConfig.author.email}>E-mail</CopyButton>
        </div>
      </PageHeader>

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <p>Whats`s news</p>

        {projects.slice(0, 2).map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}

        <StackCard className="mt-10" />
      </div>
    </div>
  );
}
