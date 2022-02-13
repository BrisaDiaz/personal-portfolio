import React from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import Head from "next/head";
import { TECHS, PROJECTS, SKILLS } from "data";
import styles from "@/styles/Home.module.css";

import MenuNav from "@/components/MenuNav/index";

import SVG from "@/components/SVG";

import SocialShareButtons from "@/components/SocialShareButtons/index";
import AboutMeSection from "@/components/Home/AboutMeSection";

const TechnologiesSection = dynamic(
  () => import("@/components/Home/TechnologiesSection")
);
const AccomplishmentsSection = dynamic(
  () => import("@/components/Home/AccomplishmentsSection")
);
const MotivationSection = dynamic(
  () => import("@/components/Home/MotivationSection")
);
const ProjectsSection = dynamic(
  () => import("@/components/Home/ProjectsSection")
);
const Banner = dynamic(() => import("@/components/Home/Banner"));
const MENU_LINKS = [
  { title: "About Me", href: "#aboutMe" },
  { title: "Tech Stack", href: "#techStack" },
  { title: "Projects", href: "#projects" },
  { title: "Accomplishments", href: "#accomplishments" },
  { title: "Motivation", href: "#motivation" },
];
const Home: NextPage = () => {
  const [menuState, setMenuState] = React.useState<{
    isOpen: boolean;
    activeLink: string;
  }>({
    isOpen: false,
    activeLink: "aboutMe",
  });

  const handleNavigation = (href: string) => {
    setMenuState({
      isOpen: false,
      activeLink: href,
    });
  };
  const handleOpenMenu = () => {
    setMenuState({
      ...menuState,
      isOpen: true,
    });
  };
  const handleCloseMenu = () => {
    setMenuState({
      ...menuState,
      isOpen: false,
    });
  };

  return (
    <div>
      <Head>
        <title>Brisa Díaz | Frontend Development Specialist 👩‍💻</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.menuBtn}>
          <button onClick={handleOpenMenu} aria-label="menu" />
          <SVG name="menu" />
        </div>
        <MenuNav
          isOpen={menuState.isOpen}
          links={MENU_LINKS}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          activeLink={menuState.activeLink}
          onNavigate={handleNavigation}
        />
        <SocialShareButtons />
        <AboutMeSection styles={styles} />
        <TechnologiesSection technologies={TECHS} styles={styles} />

        <ProjectsSection projects={PROJECTS} styles={styles} />

        <AccomplishmentsSection skills={SKILLS} styles={styles} />
        {/* <article className={styles.callToActionBanner}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h3>Are we compatible?</h3>

              <p>
                My ideal job is one that allows me to be in a position of
                responsibility that utilize and makes the most of my skills and
                experience, in which I can join and work in an environment of
                growth and excellence and that provides me with job satisfaction
                and personal development as well as help me achieve personal and
                organizational goals.
              </p>
              <Link href="#aboutMe" passHref>
                <a href="" title="about me section">
                  <Button text="Lest get in touch!" tabIndex={-1} />
                </a>
              </Link>
            </div>

            <div className={styles.bannerIllustration}>
              <Illustration name="agreement" />
            </div>
          </div>
        </article> */}
        <Banner url="#aboutMe" />
        <MotivationSection styles={styles} />
      </main>
    </div>
  );
};

export default Home;
