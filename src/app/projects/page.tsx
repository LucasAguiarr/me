import PageHeader from '@/components/page-header';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/config/projects';

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title={['Projects']}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit"
      />

      <div className="mt-16 mb-10 flex flex-col gap-4">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
