import React, { useState } from "react";
import dynamic from "next/dynamic";

import type { NextPage } from "next";

import Head from "next/head";

import styles from "@/styles/Home.module.css";
import SocialShareButtons from "@/components/SocialShareButtons/index";
import AboutMeSection from "@/components/Sections/AboutMeSection";
const TechnologiesSection = dynamic(
  () => import("../components/Sections/TechnologiesSection"),
);

const Contact = dynamic(() => import("../components/Sections/Contact"));
const ProjectsSection = dynamic(
  () => import("../components/Sections/ProjectsSection"),
);

import { TECHS } from "data";
import { PROJECTS } from "data";

import { generateProjectListSchema } from "schemaData";
import { generateTechnologiesSchema } from "schemaData";
const Home: NextPage = () => {
  const [isMount, setIsMount] = useState(() => true);
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
        {isMount && (
          <>
            <TechnologiesSection technologies={TECHS} />
            <ProjectsSection projects={PROJECTS} />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
