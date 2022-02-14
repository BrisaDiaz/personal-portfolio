import React from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { SKILLS } from "data";
import styles from "@/styles/Home.module.css";

import AboutMeSection from "@/components/Sections/AboutMeSection";
import SkillsSection from "@/components/Sections/SkillsSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Frontend Development Specialist 👩‍💻</title>
      </Head>
      <WithNavbar>
        <main className="main">
          <AboutMeSection styles={styles} />

          <SkillsSection skills={SKILLS} styles={styles} />
        </main>
      </WithNavbar>
    </div>
  );
};

export default Home;
