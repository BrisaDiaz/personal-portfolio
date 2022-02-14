import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { PROJECTS } from "data";

import SocialShareButtons from "@/components/SocialShareButtons/index";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import Banner from "@/components/Sections/Banner";
const Technologies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Frontend Development Specialist 👩‍💻</title>
      </Head>
      <WithNavbar>
        <main className="main">
          <Banner />
        </main>
      </WithNavbar>
    </div>
  );
};

export default Technologies;
