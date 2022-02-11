import styles from "./index.module.css";
import Link from "next/link";

import { Project } from "interfaces";
import ImagePlaceholder from "@/components/ImagePlaceholder/index";
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.projectCard} role="article">
      <Link href={`/project/${project.slug}`} passHref>
        <a href="">
          <div className={styles.projectImagesWrapper}>
            <ImagePlaceholder
              src={project.captions[0].src}
              alt={project.captions[0].alt}
              objectFit="cover"
            />

            <div className={styles.content}>
              <h3 className="typography-h4">{project.name}</h3>
              <p>{project.summary}</p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
