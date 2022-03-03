import React, { useState } from "react";
import dynamic from "next/dynamic";
import SVG from "@/components/SVG";
import { PROJECTS } from "data";
import type { NextPage } from "next";
import Head from "next/head";
import useModalFocus from "@/hooks/useModalFocus";
import { Project } from "interfaces";
import Carousel from "@/components/Carousel/index";

import styles from "@/styles/Project.module.css";
import ImagePlaceholder from "@/components/ImagePlaceholder/index";
import WithNavbar from "@/components/Layouts/WithNavbar";
import ParticlesBackground from "@/components/ParticlesBackground";
const SocialShareButtons = dynamic(
  () => import("@/components/SocialShareButtons/index")
);
const ProjectPage: NextPage<{ project: Project; notFound?: boolean }> = ({
  project,
}) => {
  const [backdropState, setBackdropState] = useState({
    isOpen: false,
    image: { src: "", alt: "" },
  });

  const openImageBackdrop = (image: { src: string; alt: string }) => {
    setBackdropState({
      isOpen: true,
      image,
    });
  };
  const closeBackdrop = () => {
    setBackdropState({
      isOpen: false,
      image: { src: "", alt: "" },
    });
  };
  return (
    <div>
      <Head>
        <title>Brisa Díaz | {project.title}</title>
      </Head>
      <WithNavbar>
        <main className={`main ${styles["page"]}`}>
          <SocialShareButtons />

          <section className={`container ${styles.container}`}>
            <ParticlesBackground />
            {project?.subtitle && (
              <h1 className={`title2 ${styles["page__title"]}`}>
                {project?.subtitle}
              </h1>
            )}
            <div className={styles["page__content-container"]}>
              <section className={styles["carousel-container"]}>
                <Carousel
                  onZoom={openImageBackdrop}
                  captions={project?.captions?.slice(1) || []}
                  objectFit="cover"
                  width={1200}
                  height={500}
                  thumbnail={project?.captions[0]?.src || ""}
                />
              </section>
              <section>
                {project?.testingUser ? (
                  <>
                    <h2 className={`title3 ${styles["page__subtitle"]}`}>
                      Credentials
                    </h2>
                    <div className={styles.credentials}>
                      <p className={styles["credentials__item"]}>
                        <b className={`${styles.label}`}>Email:</b>
                        {project?.testingUser?.email}
                      </p>
                      <p className={styles["credentials__item"]}>
                        <b className={`${styles.label}`}>Password:</b>
                        {project?.testingUser?.password}
                      </p>
                    </div>
                  </>
                ) : null}
                <h2 className={`title3 ${styles["page__subtitle"]}`}>Links</h2>
                <div className={styles["project-links"]}>
                  <a
                    href={project?.demo}
                    target="_blank"
                    rel="noreferrer"
                    title="Link to live demo"
                    className={styles["project-links__link"]}
                  >
                    <SVG name="website-fill" width={20} height={20} />
                    Live Demo
                  </a>

                  <a
                    href={project?.source_code}
                    target="_blank"
                    rel="noreferrer"
                    title="Link to source code"
                    className={styles["project-links__link"]}
                  >
                    <SVG name="code-fill" width={20} height={20} />
                    Source Code
                  </a>
                </div>

                <h2 className={`title3 ${styles["page__subtitle"]}`}>
                  Technologies
                </h2>
                <p className={styles["tech-list"]}>
                  <b
                    className={`${styles.label} ${styles["tech-list__legend"]}`}
                  >
                    Language:
                  </b>
                  <span className={styles["tech-list__chip"]}>
                    {project?.language}
                  </span>
                </p>
                <p className={styles["tech-list"]}>
                  <b
                    className={`${styles.label} ${styles["tech-list__legend"]}`}
                  >
                    Hosting:
                  </b>
                  <span className={styles["tech-list__chip"]}>
                    {project?.technologies?.hosting}
                  </span>
                </p>

                <p className={styles["tech-list"]}>
                  <b
                    className={`${styles.label} ${styles["tech-list__legend"]}`}
                  >
                    Frontend:
                  </b>
                  {project?.technologies?.frontend.map((tech: string) => (
                    <span key={tech} className={styles["tech-list__chip"]}>
                      {tech}
                    </span>
                  ))}
                </p>
                {project?.technologies?.backend ? (
                  <p className={styles["tech-list"]}>
                    <b
                      className={`${styles.label} ${styles["tech-list__legend"]}`}
                    >
                      Backend:
                    </b>
                    {project?.technologies?.backend?.map((tech: string) => (
                      <span className={styles["tech-list__chip"]} key={tech}>
                        {tech}
                      </span>
                    ))}
                  </p>
                ) : null}
                {project?.technologies?.testing ? (
                  <p className={styles["tech-list"]}>
                    <b className={`${styles.label}`}>Testing:</b>
                    {project?.technologies?.testing?.map((tech: string) => (
                      <span className={styles["tech-list__chip"]} key={tech}>
                        {tech}
                      </span>
                    ))}
                  </p>
                ) : null}
              </section>
            </div>
          </section>

          <ImageBackdrop {...backdropState} onClose={closeBackdrop} />
        </main>
      </WithNavbar>
    </div>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((project) => project.slug === params.slug);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
  };
}
function ImageBackdrop({
  isOpen,
  image,
  onClose,
}: {
  isOpen: boolean;
  image: { src: string; alt: string };
  onClose: () => void;
}) {
  const modalRef = React.useRef(null);
  const { tabIndex } = useModalFocus({
    isOpen,
    onEscape: onClose,
    ref: modalRef,
  });

  return (
    <aside
      ref={modalRef}
      className={`${styles["image-backdrop"]} ${
        isOpen ? styles["image-backdrop--open"] : ""
      }`}
    >
      <CloseBtn onClick={onClose} tabIndex={tabIndex} />

      {isOpen ? (
        <ImagePlaceholder
          src={image.src}
          quality={100}
          alt={image.alt}
          loading="lazy"
          objectFit="contain"
        />
      ) : null}
    </aside>
  );
}
function CloseBtn({
  onClick,
  tabIndex,
}: {
  onClick: () => void;
  tabIndex: number;
}) {
  return (
    <button
      onClick={onClick}
      className={styles["image-backdrop__btn"]}
      aria-label="close image backdrop"
      tabIndex={tabIndex}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 0 24 24"
        width="30px"
        fill="#fff"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  );
}
