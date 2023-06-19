import PageHeader from '@/components/page-header';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/config/projects';

export default function ProjectsPage() {
  const { title, description, projects: allProjects } = projects;
  return (
    <div>
      <PageHeader title={[title]} description={description} />

      <div className="mb-10 mt-16 flex flex-col gap-4">
        {allProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
