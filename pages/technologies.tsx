import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { TECHS } from "data";

import TechnologiesSection from "@/components/Sections/TechnologiesSection";

const Technologies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Technologies </title>
      </Head>
      <WithNavbar>
        <main className="main">
          <TechnologiesSection technologies={TECHS} />
        </main>
      </WithNavbar>
    </div>
  );
};

export default Technologies;
