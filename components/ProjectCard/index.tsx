import styles from "./index.module.css";
import Carousel from "@/components/Carousel/index";
import Button from "@/components/Button/index";
export default function ProjectCard({
  project,
  onReadMore,
}: {
  onReadMore: () => void;
  project: {
    name: string;
    summary: string;
    captions: string[];
  };
}) {
  return (
    <article
      className={styles.projectCard}
      aria-label={project.name + " project"}
    >
      <h3>{project.name}</h3>
      <div className={styles.projectImagesWrapper}>
        <Carousel captions={project.captions} width={350} height={250} />
      </div>
      <div>
        <h4>Summary</h4>
        <p>{project.summary}</p>
      </div>
      <div className={styles.projectCardBtn}>
        <Button onClick={onReadMore} text="Read More" />
      </div>
    </article>
  );
}
