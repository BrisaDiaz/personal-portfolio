import React from "react";
import SVG from "@/components/SVG";
import { PROJECTS } from "data";
import type { NextPage } from "next";
import Head from "next/head";

import { Project } from "interfaces";
import Carousel from "@/components/Carousel/index";
import Link from "next/link";
import styles from "@/styles/Project.module.css";

const ProjectPage: NextPage<{ project: Project; notFound?: boolean }> = ({
  project,
}) => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | {project.name}</title>
      </Head>

      <main className={`main ${styles.main}`}>
        <section className={`container ${styles.container}`}>
          <nav
            role="navigation"
            aria-label="breadcrumbs"
            className={styles.breadcrumbBar}
          >
            <span>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </span>

            <Link href="/projects" passHref>
              <span>
                <a href="">Projects</a>
              </span>
            </Link>
            <span>{project.name}</span>
          </nav>

          {project?.name && <h1 className="title2">{project?.name}</h1>}
          <div className={styles.carouselWrapper}>
            <Carousel
              captions={project?.captions?.slice(1) || []}
              width={1200}
              height={500}
            />
            <div className={styles.backdrop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="200px"
                fill="#fff"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z" />
              </svg>
            </div>
          </div>
          <section>
            <h2 className="title3">Summary</h2>
            <p>{project?.summary}</p>
            {project?.testingUser ? (
              <>
                <div className={styles.userBlock}>
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
            <div className={styles.linksBlock}>
              <a
                href={project?.demo}
                target="_blank"
                rel="noreferrer"
                title="Link to live demo"
              >
                <SVG name="website-fill" width={20} height={20} />
                Live Demo
              </a>

              <a
                href={project?.source_code}
                target="_blank"
                rel="noreferrer"
                title="Link to source code"
              >
                <SVG name="code-fill" width={20} height={20} />
                Source Code
              </a>
            </div>

            <h2 className="title3">Technologies</h2>
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
                <b>Testing:</b>
                {project?.technologies?.testing?.map((tech: string) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            ) : null}
            <h2 className="title3">Some Features</h2>
            <ul className={styles.featuresList}>
              {project?.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </section>
      </main>
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
