import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { PROJECTS } from "data";

import ProjectsSection from "@/components/Sections/ProjectsSection";
import { generateProjectListSchema } from "schemaData";
const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Projects</title>
        <meta name="description" content="technologies i have worked with" />
        <meta
          name="keywords"
          content={PROJECTS.map(
            (project) =>
              `${project.title},${project.language},${project.summary
                .split(" ")
                .join(",")}`,
          )
            .toString()
            .concat("frontend,backed,testing")}
          key="titleKeywords"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProjectListSchema(PROJECTS)),
          }}
        />
      </Head>
      <WithNavbar>
        <main className="main">
          <ProjectsSection projects={PROJECTS} />
        </main>
      </WithNavbar>
    </div>
  );
};

export default Projects;
