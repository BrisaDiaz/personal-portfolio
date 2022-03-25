import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import { TECHS } from "data";

import TechnologiesSection from "@/components/Sections/TechnologiesSection";
import { generateTechnologiesSchema } from "schemaData";
const Technologies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Technologies </title>
        <meta name="description" content="technologies i have worked with" />
        <meta
          name="keywords"
          content={TECHS.map((tech) => tech.name)
            .toString()
            .concat("frontend,backed,testing")}
          key="titleKeywords"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateTechnologiesSchema(TECHS)),
          }}
        />
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
