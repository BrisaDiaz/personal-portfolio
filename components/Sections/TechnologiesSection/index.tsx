import { Technology } from "interfaces";
import TechnologiesPanel from "@/components/Sections/TechnologiesSection/TechnologiesPanel";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function TechnologiesSection({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <section className="container" id="technologies">
      <ParticlesBackground />
      <h1 className="title2">Tech Stack</h1>
      <TechnologiesPanel technologies={technologies} />
    </section>
  );
}
