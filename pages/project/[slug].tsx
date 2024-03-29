import React, { useState } from "react";

import SVG from "@/components/SVG";
import { PROJECTS } from "data";
import type { NextPage } from "next";
import Head from "next/head";
import useModalFocus from "@/hooks/useModalFocus";
import { Project } from "interfaces";
import Carousel from "@/components/Carousel/index";

import styles from "@/styles/Project.module.css";
import ImagePlaceholder from "@/components/ImagePlaceholder/index";

import { generateProjectSchema } from "schemaData";
import * as ga from "@/libs/googleAnalytics";
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
    ga.event({
      action: "Project Image Zoom",
      params: {
        image_src: image.src,
      },
    });
  };
  const closeBackdrop = () => {
    setBackdropState({
      isOpen: false,
      image: { src: "", alt: "" },
    });
  };
  const technologies = Object.values(project.technologies).flat();
  const handleResourceNavigation = (
    projectName: string,
    resourceType: string,
    resourceUrl: string,
  ) => {
    ga.event({
      action: "Project Resource Navigation",
      params: {
        project_name: projectName,
        resource_type: resourceType,
        resource_url: resourceUrl,
      },
    });
  };
  return (
    <div>
      <Head>
        <title>Brisa Díaz | {project.title}</title>
        <meta
          name="description"
          content={project.summary + " features: " + project.features.join("")}
        />
        <meta
          name="keywords"
          content={[
            project.title,
            project.subtitle,
            ...technologies,
          ].toString()}
          key="titleKeywords"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProjectSchema(project)),
          }}
        />
      </Head>

      <>
        <main className="main">
          <section className={`container ${styles["page"]}`}>
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
                  objectFit={project.id === 7 ? "contain" : "cover"}
                  width={1200}
                  height={500}
                  background={project.color}
                  thumbnail={project?.captions[0]?.src || ""}
                />
              </section>
              <section className={styles["metadata-container"]}>
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
                  {project?.demo && (
                    <a
                      href={project?.demo}
                      target="_blank"
                      rel="noreferrer"
                      title="Link to live demo"
                      className={styles["project-links__link"]}
                      onClick={() =>
                        handleResourceNavigation(
                          project?.title,
                          "demo",
                          project?.demo as string,
                        )
                      }
                    >
                      <SVG name="website-fill" width={20} height={20} />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project?.source_code}
                    target="_blank"
                    rel="noreferrer"
                    title="Link to source code"
                    className={styles["project-links__link"]}
                    onClick={() =>
                      handleResourceNavigation(
                        project?.title,
                        "source code",
                        project?.source_code,
                      )
                    }
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
                {project?.technologies?.hosting && (
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
                )}
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
              <section className={styles["features_container"]}>
                <h2 className={`title3 ${styles["page__subtitle"]}`}>
                  Features
                </h2>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature} className={styles["feature_item"]}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>

          <ImageBackdrop {...backdropState} onClose={closeBackdrop} />
        </main>
      </>
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
        height="25px"
        viewBox="0 0 24 24"
        width="25px"
        fill="#fff"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  );
}
