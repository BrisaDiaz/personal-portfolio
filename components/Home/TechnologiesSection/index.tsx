import { Technology } from "interfaces";
import TechnologiesPanel from "@/components/TechnologiesPanel";
export default function TechnologiesSection({
  styles,
  technologies,
}: {
  styles: any;
  technologies: Technology[];
}) {
  return (
    <section className={styles.container} id="techStack">
      <h2>Tech Stack</h2>
      <TechnologiesPanel technologies={technologies} />
    </section>
  );
}
