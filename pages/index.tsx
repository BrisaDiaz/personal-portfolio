import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import useOnScreen from "../hooks/useOnScreen";
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

import { TECHS, PROJECTS } from "data";

import { useProjectListSchema, useTechnologiesSchema } from "schemaData";

const Home: NextPage = () => {
  const [isMount, setIsMount] = useState(() => true);
  const lazyRef = useRef(null);
  const isIntersecting = useOnScreen(lazyRef, "300px", true);

  return (
    <div>
      <Head>
        <title>
          Brisa Díaz | Full Stack Developer & Frontend Development Specialist 👩‍💻
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: useProjectListSchema(PROJECTS),
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(useTechnologiesSchema(TECHS)),
          }}
        />
      </Head>

      <main className={`main full-height `}>
        <SocialShareButtons />
        <AboutMeSection styles={styles} />
        {isMount && (
          <>
            <TechnologiesSection technologies={TECHS} />

            <div ref={lazyRef}>
              {isIntersecting ? (
                <>
                  <ProjectsSection projects={PROJECTS} />
                  <Contact />
                </>
              ) : (
                <>
                  <div id="projects" />
                  <div id="contact" />
                </>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
