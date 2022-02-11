import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Button from "@/components/Button/index";
import Link from "next/link";
import Illustration from "@/components/Illustration";
import styles from "@/styles/NotFound.module.css";
const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | 404</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.illustration}>
          <Illustration name="404" />
        </div>
        <div className={styles.content}>
          <h1>
            OOPS,
            <br />
            <strong>nothing </strong>here...
          </h1>
          <p>It seems like the content your looking for dose not exist .</p>
          <p>
            {
              " But don't worry!, you can start over  by searching from the home page."
            }
          </p>
          <Link href="/" passHref>
            <a href="">
              <Button text="Go Home" tabIndex={-1} />
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};
export default NotFoundPage;
