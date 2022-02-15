import React from "react";
import SVG from "@/components/SVG";
import { PROJECTS } from "data";
import type { NextPage } from "next";
import Head from "next/head";
import SocialShareButtons from "@/components/SocialShareButtons/index";
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
        <title>Brisa Díaz | {project.title}</title>
      </Head>

      <main className={`main ${styles.main}`}>
        <SocialShareButtons />
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
            <span>{project.title}</span>
          </nav>

          {project?.subtitle && <h1 className="title2">{project?.subtitle}</h1>}
          <div className={styles.carouselWrapper}>
            <Carousel
              captions={project?.captions?.slice(1) || []}
              width={1200}
              height={500}
            />
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
