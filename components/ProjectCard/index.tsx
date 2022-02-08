import styles from "./index.module.css";

import Button from "@/components/Button/index";

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
    <article className={styles.projectCard} role="article">
      <div className={styles.projectImagesWrapper}>
        <ImagePlaceholder
          src={project.captions[0]}
          alt="project caption"
          objectFit="cover"
        />

        <div className={styles.content}>
          <h3 className="typography-h4">{project.name}</h3>
          <p>{project.summary}</p>
          <div className={styles.projectCardBtn}>
            <Button onClick={onReadMore} text="Read More" />
          </div>
        </div>
      </div>
    </article>
  );
}
