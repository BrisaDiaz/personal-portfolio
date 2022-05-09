import React from "react";

import type { NextPage } from "next";

import Head from "next/head";

import styles from "@/styles/Home.module.css";
import SocialShareButtons from "@/components/SocialShareButtons/index";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import TechnologiesSection from "@/components/Sections/TechnologiesSection";
import Contact from "@/components/Sections/Contact";
import { TECHS } from "data";
import { PROJECTS } from "data";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import { generateProjectListSchema } from "schemaData";import { generateTechnologiesSchema } from "schemaData";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Brisa Díaz | Full Stack Developer & Frontend Development Specialist 👩‍💻
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProjectListSchema(PROJECTS)),
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateTechnologiesSchema(TECHS)),
          }}
        />
      </Head>

      <main className={`main full-height `}>
        <SocialShareButtons />
        <AboutMeSection styles={styles} />
        <TechnologiesSection technologies={TECHS} />
        <ProjectsSection projects={PROJECTS} />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
