import ProjectCard from "@/components/ProjectCard";
import { Project } from "interfaces";
import useInView from "react-cool-inview";
export default function ProjectsSection({
  projects,
  styles,
}: {
  projects: Project[];
  styles: any;
}) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
    <div className="relative" ref={observe}>
      {inView ? (
        <section className={styles.container} id="projects">
          <h2>Projects</h2>

          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      ) : (
        <div className={styles.fullHeight} />
      )}
    </div>
  );
}
