import React from "react";
import styles from "./index.module.css";

import { Project } from "interfaces";
import Carousel from "@/components/Carousel/index";
import useModalFocus from "@/hooks/useModalFocus";
import Image from "next/image";
export default function ProyectModal({
  onClose,
  isOpen,
  project,
}: {
  onClose: () => void;
  isOpen: boolean;
  project: Project | null;
}) {
  const [isInteracting, setisInteracting] = React.useState<boolean>(false);

  const handleModalInteraction = () => {
    if (isInteracting) return;
    onClose();
  };
  const { tabIndex } = useModalFocus({
    isOpen,
    onEscape: onClose,
    moldalSelector: '[aria-label="proyect modal"]',
  });
  return (
    <aside
      tabIndex={tabIndex}
      aria-label="proyect modal"
      className={`${styles.modal} ${isOpen ? styles.openModal : ""}`}
      onClick={() => handleModalInteraction()}
    >
      <article
        className={styles.contentWrapper}
        onMouseEnter={() => setisInteracting(true)}
        onTouchStart={() => setisInteracting(true)}
        onMouseLeave={() => setisInteracting(false)}
      >
        <div className={styles.modalBoobleTop}>
          <Image layout="fill" src="/svg/booble.svg" alt="booble" />
        </div>
        <div className={styles.modalBoobleBottom}>
          <Image layout="fill" src="/svg/booble.svg" alt="booble" />
        </div>
        <div className={styles.closeBtn}>
          <button onClick={onClose} aria-label="close" />
          <Image
            layout="fill"
            src="/icons/close.svg"
            alt="clouse button"
            objectFit="contain"
          />
        </div>
        <h3>{project?.name}</h3>
        <div className={styles.carouselWrapper}>
          <Carousel
            captions={project?.captions?.slice(1) || []}
            width={800}
            height={500}
            tabIndex={tabIndex}
          />
          <div className={styles.backdrop}>
            <Image src="/icons/screen_rotation.svg" layout="fill" />
          </div>
        </div>

        <section>
          <h4>Summary</h4>
          <p>{project?.summary}</p>
          <h4>Links</h4>
          <div className={styles.linksBlock}>
            <p>
              <a
                href={project?.demo}
                target="_blank"
                rel="noreferrer"
                tabIndex={tabIndex}
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/website.svg"
                  alt="demo"
                />
                Live Demo
              </a>
            </p>
            <p>
              <a
                href={project?.source_code}
                target="_blank"
                rel="noreferrer"
                tabIndex={tabIndex}
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/code.svg"
                  alt="source code"
                />
                Source Code
              </a>
            </p>
          </div>
          {project?.testingUser ? (
            <>
              <h4>Testing User</h4>
              <div className={styles.dataBlock}>
                <p>
                  <b>Email:</b>
                  {project?.testingUser?.email}
                </p>
                <p>
                  <b>Password:</b>
                  {project?.testingUser?.password}
                </p>
              </div>
            </>
          ) : null}
          <h4>Features</h4>
          <ul className={styles.featuresList}>
            {project?.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h4>Technologies</h4>
          <p className={styles.techList}>
            <b>Language:</b>
            <span>{project?.language}</span>
          </p>
          <p className={styles.techList}>
            <b>Hosting:</b>
            <span>{project?.technologies?.hosting}</span>
          </p>

          <p className={styles.techList}>
            <b>Frontend:</b>
            {project?.technologies?.frontend.map((tech: string) => (
              <span key={tech}>{tech}</span>
            ))}
          </p>
          {project?.technologies?.backend ? (
            <p className={styles.techList}>
              <b>Backend:</b>
              {project?.technologies?.backend?.map((tech: string) => (
                <span key={tech}>{tech}</span>
              ))}
            </p>
          ) : null}
          {project?.technologies?.testing ? (
            <p className={styles.techList}>
              <b>Tests:</b>
              {project?.technologies?.testing?.map((tech: string) => (
                <span key={tech}>{tech}</span>
              ))}
            </p>
          ) : null}
        </section>
      </article>
    </aside>
  );
}
