import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { PROJECTS } from "data";

import ProjectsSection from "@/components/Sections/ProjectsSection";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Projects</title>
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
