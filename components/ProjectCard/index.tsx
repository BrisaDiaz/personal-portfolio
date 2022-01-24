import styles from "./index.module.css";

import Button from "@/components/Button/index";
import { generateImageUrl } from "utils";
import ImagePlaceholder from "@/components/ImagePlaceholder/index";
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
      <div className={styles.projectImagesWrapper}>
        <ImagePlaceholder
          src={project.captions[0]}
          alt="project caption"
          objectFit="cover"
        />

        <div className={styles.content}>
          <h4>{project.name}</h4>
          <p>{project.summary}</p>
          <div className={styles.projectCardBtn}>
            <Button onClick={onReadMore} text="Read More" />
          </div>
        </div>
      </div>
    </article>
  );
}
