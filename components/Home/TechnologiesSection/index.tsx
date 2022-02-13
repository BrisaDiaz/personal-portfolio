import { Technology } from "interfaces";
import TechnologiesPanel from "@/components/TechnologiesPanel";
import useInView from "react-cool-inview";
export default function TechnologiesSection({
  styles,
  technologies,
}: {
  styles: any;
  technologies: Technology[];
}) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <section className={styles.container} id="techStack" ref={observe}>
      {inView ? (
        <>
          <h2>Tech Stack</h2>
          <TechnologiesPanel technologies={technologies} />
        </>
      ) : (
        <div className={styles.fullHeight} />
      )}
    </section>
  );
}
