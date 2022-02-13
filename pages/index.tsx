import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { TECHS, PROJECTS, SKILLS } from "data";
import styles from "@/styles/Home.module.css";
import ProjectCard from "@/components/ProjectCard";
import MenuNav from "@/components/MenuNav/index";

import SVG from "@/components/SVG";
import TechnologiesPanel from "@/components/TechnologiesPanel";
import Button from "@/components/Button/index";
import SocialShareButtons from "@/components/SocialShareButtons/index";
import Illustration from "@/components/Illustration";
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
        <MainSection />
        <TechStackSection />

        <ProjectsSection />

        <SkillsSection />
        <article className={styles.callToActionBanner}>
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
        </article>
        <EducationSection />
      </main>
    </div>
  );
};

function ProjectsSection() {
  return (
    <div className="relative">
      <section className={styles.container} id="projects">
        <h2>Projects</h2>

        <div className={styles.projectsContainer}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          <div />
        </div>
      </section>
    </div>
  );
}
function EducationSection() {
  return (
    <section id="motivation" className={styles.container}>
      <div className={styles.strengthsSectionWrapper}>
        <div className={styles.educationSectionContent}>
          <h2>Motivation</h2>
          <p>
            I have technical background, I studied for 7 years and was able to
            obtained the title of mechanical technician in a public high school,
            witch played a very important role in the manner I work, both
            individually and within a team, by been flexible,looking for a way
            to combine and take advantage of the knowledge and skills within the
            team, amd by making use of ingenuity and creativity to create things
            and solve problems with limited resources.
          </p>
          <p>
            Later on, during the beginning of the pandemic , i studied
            engineering for 3 months where I was introduced to programming and
            learned a lot about what it takes to carry out a project, but also
            how to know how to search and filter sources of knowledge by myself
            and how to form a team and build relationships with people I did not
            know.
          </p>
          <p>
            I can say that my educational training helped me discover that with
            programming I can work alongside experts who love what they do and
            who have the same desire to satisfy their creative needs, to be in a
            constant process of learning and progress, in where I can be part of
            something great that is capable of reaching and helping many people
            in their day to day.
          </p>
        </div>
        <div className={styles.educationIllustration}>
          <Illustration name="planning" />
        </div>
      </div>
    </section>
  );
}
function SkillsSection() {
  const skillsFirstHalf = SKILLS.slice(0, SKILLS.length / 2);
  const skillsSecondHalf = SKILLS.slice(skillsFirstHalf.length, -1);
  return (
    <section id="accomplishments" className={styles.container}>
      <div className={styles.strengthsSectionWrapper}>
        <div className={styles.skillsSection}>
          <h2>Accomplishments</h2>
          <ul>
            {skillsFirstHalf.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.techSkillsIllustrationSection}>
          <div className={styles.programingIllustration}>
            <Illustration name="programing" />
          </div>
        </div>
      </div>
      <div className={`${styles.skillsSection} ${styles.fluid}`}>
        {" "}
        <ul>
          {skillsSecondHalf.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
function TechStackSection() {
  return (
    <section className={styles.container} id="techStack">
      <h2>Tech Stack</h2>
      <TechnologiesPanel technologies={TECHS} />
    </section>
  );
}
function MainSection() {
  return (
    <section
      className={`${styles.container} ${styles.aboutMeSection}`}
      id="aboutMe"
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            <span> {"Hi!, I'm brisa díaz\n"}</span>
            <br />
            {"I'm a Frontend Developer"}
          </h1>
          <p>
            {" "}
            I describe myself as a proactive, curious and determined person,
            passionate of providing solutions to problems in a creative and
            ingenious way and who does not hesitate to leave the comfort zone to
            and sees them as an opportunity to improve.
          </p>
          <p>
            I have almost two years of experience working on personal projects
            like websites and web applications of different kinds of topics in
            which I trained my ability to understand requirements, design the
            business logic and translate them into actual working applications.
          </p>
        </div>
        <address className={styles.contact}>
          <ul>
            <li>
              <a
                href="tel:+54 351 3850064"
                target="_blank"
                rel="noreferrer"
                title="Telephone number"
              >
                <SVG name="telephone-fill" />

                <p>+54 351 3850064</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:brisaabigaildiaz2000@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
              >
                <SVG name="email-fill" />
                <p>brisaabigaildiaz2000@gmail.com</p>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/brisa-d%C3%ADaz/"
                target="_blank"
                rel="noreferrer"
                title="Linkedin profile"
              >
                <SVG name="linkedin-fill" />

                <p>/brisa-díaz</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BrisaDiaz"
                target="_blank"
                rel="noreferrer"
                title="Github repository"
              >
                <SVG name="github-fill" />
                <p>/BrisaDiaz</p>
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className={styles.aboutMeIllustration}>
        {" "}
        <Illustration name="welcome" />
      </div>
    </section>
  );
}
export default Home;
