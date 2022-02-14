import { Technology } from "interfaces";
import TechnologiesPanel from "@/components/Home/TechnologiesSection/TechnologiesPanel";

export default function TechnologiesSection({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <section className="container" id="technologies">
      <h2>Tech Stack</h2>
      <TechnologiesPanel technologies={technologies} />
    </section>
  );
}
