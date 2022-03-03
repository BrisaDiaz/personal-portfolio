import ProjectCard from "@/components/Sections/ProjectsSection/ProjectCard";
import { Project } from "interfaces";
import PanelStyles from "./ProjectsPanel.module.css";
import ParticlesBackground from "@/components/ParticlesBackground";
export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="container" id="projects">
      <ParticlesBackground />
      <h1 className="title2">Projects</h1>

      <div className={PanelStyles.panel}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
