import ProjectCard from "@/components/Sections/ProjectsSection/ProjectCard";
import { Project } from "interfaces";
import PanelStyles from "./ProjectsPanel.module.css";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="container" id="projects">
      <h2>Projects</h2>

      <div className={PanelStyles.panel}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
