import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";

import Banner from "@/components/Sections/Banner";
const Technologies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Contact 👩‍💻</title>
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
