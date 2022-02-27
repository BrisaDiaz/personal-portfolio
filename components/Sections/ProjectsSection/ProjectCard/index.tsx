import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { Project } from "interfaces";
import useOnScreen from "@/hooks/useOnScreen";
export default function ProjectCard({ project }: { project: Project }) {
  const ref = React.useRef(null);
  const isVisible = useOnScreen(ref, "0px", true);
  return (
    <article className={styles["project-card"]} role="article" ref={ref}>
      {isVisible && (
        <Link href={`/project/${project.slug}`} passHref>
          <a href="" className={styles["project-card__link"]}>
            <div className={styles["project-card__image-container"]}>
              <Image
                src={project.captions[0].src}
                alt={project.captions[0].alt}
                objectFit="cover"
                layout="fill"
                loading="eager"
              />

              <div className={styles["project-card__content"]}>
                <h2 className={`title3 ${styles["project-card__title"]} `}>
                  {project.title}
                </h2>
                <p className={styles["project-card__summary"]}>
                  {project.summary}
                </p>
              </div>
            </div>
          </a>
        </Link>
      )}
    </article>
  );
}
