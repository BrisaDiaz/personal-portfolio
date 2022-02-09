import styles from "./index.module.css";
import Link from "next/link";
import Button from "@/components/Button/index";
import { Project } from "interfaces";
import ImagePlaceholder from "@/components/ImagePlaceholder/index";
export default function ProjectCard({ project }: { project: Project }) {
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
            <Link href={`/project/${project.id}`} passHref>
              <a href="">
                <Button text="Read More" tabIndex={-1} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
