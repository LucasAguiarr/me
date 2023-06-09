import CopyButton from '@/components/copy-button';
import PageHeader from '@/components/page-header';
import { ProjectCard } from '@/components/project-card';
import { StackCard } from '@/components/stack-card';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const projects = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    image: 'https://picsum.photos/200',
    slug: 'project-1',
  },
  {
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    image: 'https://picsum.photos/200',
    slug: 'project-2',
  },
];
export default function Page() {
  return (
    <div>
      <PageHeader
        title={["Hey, I'm Lucas.", "I'm a developer from Brazil."]}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          exercitationem blanditiis laborum ratione iste. Minima numquam ducimus
          vero excepturi dicta?"
      >
        <div className="flex items-center gap-2 mt-8">
          <Button>Contact</Button>
          <CopyButton copy={siteConfig.author.email}>E-mail</CopyButton>
        </div>
      </PageHeader>

      <div className="mt-16 mb-10 flex flex-col gap-4">
        <p>Whats`s news</p>

        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}

        <StackCard className="mt-10" />
      </div>
    </div>
  );
}
