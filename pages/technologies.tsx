import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { TECHS } from "data";


import SocialShareButtons from "@/components/SocialShareButtons/index";
import TechnologiesSection from "@/components/Home/TechnologiesSection";

const Technologies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Frontend Development Specialist 👩‍💻</title>
      </Head>
      <WithNavbar>
        <main className="main">
          <SocialShareButtons />

          <TechnologiesSection technologies={TECHS} />
        </main>
      </WithNavbar>
    </div>
  );
};

export default Technologies;
