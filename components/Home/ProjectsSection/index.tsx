import ProjectCard from "@/components/ProjectCard";
import { Project } from "interfaces";
export default function ProjectsSection({
  projects,
  styles,
}: {
  projects: Project[];
  styles: any;
}) {
  return (
    <div className="relative">
      <section className={styles.container} id="projects">
        <h2>Projects</h2>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          <div />
        </div>
      </section>
    </div>
  );
}
