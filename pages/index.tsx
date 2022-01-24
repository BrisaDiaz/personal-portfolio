import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import MenuNav from "@/components/MenuNav/index";
import { TECHS, PROJECTS, SKILLS } from "data";
import { useState } from "react";
import { Project } from "interfaces";
import ImagePlaceholder from "@/components/ImagePlaceholder/index";
import Button from "@/components/Button/index";
const MENU_LINKS = [
  { title: "About Me", href: "#aboutMe" },
  { title: "Tech Stack", href: "#techStack" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Education", href: "#education" },
];
const Home: NextPage = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    selectedProject: Project | null;
  }>({
    isOpen: false,
    selectedProject: null,
  });
  const [menuState, setMenuState] = useState<{
    isOpen: boolean;
    activeLink: string;
  }>({
    isOpen: false,
    activeLink: "aboutMe",
  });
  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      selectedProject: null,
    });
  };
  const handleOpenModal = (selectedProject: Project) => {
    setModalState({
      isOpen: true,
      selectedProject: selectedProject,
    });
  };
  const handleNavegation = (href: string) => {
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
  React.useEffect(() => {
    const body = document.querySelector("main");
    body?.addEventListener("focus", (event) => {
      console.log(event.target);
    });
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleCloseMenu();
    }

    if (event.key === "m") {
      handleOpenMenu();
    }
  };
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  const menuBottomRef: any = React.useRef(null);
  React.useEffect(() => {
    if (menuBottomRef && menuBottomRef.current) {
      menuBottomRef.current.focus();
    }
  }, []);
  const handleNavegateToContact = () => {
    if (window) {
      window.scrollTo(-50, 0);
    }
  };

  return (
    <div>
      <Head>
        <title>Brisa Díaz | Frontend Developer 👩‍💻</title>
        <meta
          name="description"
          content="I'm a web developer, spetialist in frontend and passionate of creating sofwere soluctions."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.menuBtn}>
          <button
            onClick={handleOpenMenu}
            ref={menuBottomRef}
            aria-label="menu"
          />

          <Image
            width={26}
            height={26}
            src="/icons/menu.svg"
            alt="menu"
            loading="eager"
          />
        </div>
        <MenuNav
          isOpen={menuState.isOpen}
          links={MENU_LINKS}
          onClose={handleCloseMenu}
          activeLink={menuState.activeLink}
          onNavegate={handleNavegation}
        />
        <MainSection />
        <TechStackSection />

        <ProyectsSection onSelectProject={handleOpenModal} />
        <ProjectModal
          onClose={() => handleCloseModal()}
          isOpen={modalState.isOpen}
          project={modalState.selectedProject}
        />
        <SlillsSection />
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
              <Button
                text="Lest get in touch!"
                onClick={() => handleNavegateToContact()}
              />
            </div>

            <div className={styles.bannerIllustration}>
              <Image
                layout="fill"
                src="/svg/agreetment.svg"
                alt="background"
                loading="eager"
              />
            </div>
          </div>
        </article>
        <EducationSection />
      </main>
    </div>
  );
};

function ProyectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.waveBG}>
        <Image
          layout="fill"
          src="/svg/wave-bg.svg"
          alt="background"
          loading="eager"
        />
      </div>
      <section className={styles.container} id="projects">
        <h2>Projects</h2>

        <div className={styles.projectsContainer}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onReadMore={() => onSelectProject(project)}
            />
          ))}
          <div />
        </div>
      </section>
    </div>
  );
}
function EducationSection() {
  return (
    <section id="education" className={styles.container}>
      <div className={styles.strenghtsSectionWrapper}>
        <div className={styles.EducationSection}>
          <h2>Education</h2>
          <p>
            I have technical background, I studied for 7 years and was able to
            obtained the title of mechanical technician in a public high school,
            throught which shaped my ability to work in a team by combining my
            knowledge and skills with those of my colleagues, making use of
            ingenuity and creativity to develop projects and solve problems with
            the limited resources we had.
          </p>
          <p>
            My transition in a technical high school also played a very
            important role the manner and mentality with which I work and to
            beeing able to evaluate and plan projects in advance, by questioning
            aspects of it such as:
          </p>
          <ul>
            <li>
              {" "}
              What do we want to create or what problem we want to solve?{" "}
            </li>
            <li>What tools and knowledge do we need?</li>
            <li>What are the resources we can count on? </li>
            <li>
              Those things that we currently do not have, is there any way in
              which we are able to obtain the same or a substitute that fits the
              needs of the project?{" "}
            </li>
            <li> What are the tasks that must be performed to carry it out?</li>
            <li>
              {" "}
              How are we going to divide the work, who is going to do what?{" "}
            </li>
            <li>
              {" "}
              What tasks should be prioritized and how are we going to
              coordinate to complete them on time and try not to block others?
            </li>
          </ul>
        </div>
        <div className={styles.softSkillsIllustrationSection}>
          <div className={styles.planingllustration}>
            <Image
              layout="fill"
              src="/svg/planing-illustration.svg"
              alt="planing illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function SlillsSection() {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.strenghtsSectionWrapper}>
        <div className={styles.skillsSection}>
          <h2>Skills</h2>
          <ul>
            {SKILLS.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.techSkillsIllustrationSection}>
          <div className={styles.programingIllustration}>
            <Image
              layout="fill"
              src="/svg/programing-illustration.svg"
              alt="programing illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function TechStackSection() {
  return (
    <section className={styles.container} id="techStack">
      <div className={styles.chekedTechIllustration}>
        <Image
          layout="fill"
          src="/svg/check-task-illustration.svg"
          alt="techs learned"
          loading="eager"
        />
      </div>
      <h2>Tech Stack</h2>
      <div className={styles.techsContainer}>
        {TECHS.map((tech) => (
          <a
            href={tech.resource_url}
            target="_blank"
            rel="noreferrer"
            key={tech.name}
          >
            <figure>
              <div className={styles.techImage}>
                <ImagePlaceholder
                  src={tech.image}
                  alt={tech.name}
                  objectFit="contain"
                />
              </div>

              <figcaption>
                <h5>{tech.name}</h5>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
}
function MainSection() {
  return (
    <section className={styles.container} id="aboutMe">
      <div className={styles.welcomeIllustration}>
        <Image
          layout="fill"
          src="/svg/welcome-illustration-split.svg"
          alt="welcome"
          loading="eager"
        />
      </div>

      <div className={styles.mainSectionContent}>
        <div className={styles.mainSectionText}>
          <h2>{"Hi!, I'm Brisa Díaz"}</h2>
          <h1>{"I'm a Frontend Developer"}</h1>
          <p>
            {" "}
            I describe myself as a proactive, curious and determined person,
            passionate of providing solutions to problems in a creative and
            ingenious way and who does not hesitate to accept challenges that
            stimulate my mind.
          </p>
          <p>
            It has been two years since I discover the potental of programing
            and found my passion in it , until now I have been working on
            personal projects like websites and web applications of different
            kinds of topics in which I trained my ability to understand
            requirements, design the business logic and translate them into an
            actual working application in the form of sourcecode.
          </p>
        </div>
        <div className={styles.personalInfoWrapper}>
          <ul>
            <li>
              <Image
                width={25}
                height={25}
                src="/icons/birthday.svg"
                alt="birthday date"
                loading="eager"
              />
              <p>11/18/2000</p>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/FXX1dQVPgc9De7eRA"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/address.svg"
                  alt="home address"
                  loading="eager"
                />
                <p>Córdoba - Argentina</p>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="tel:+54 351 3850064" target="_blank" rel="noreferrer">
                <Image
                  width={25}
                  height={25}
                  src="/icons/telephone.svg"
                  loading="eager"
                  alt="telephone number"
                />
                <p>+54 351 3850064</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:brisaabigaildiaz2000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/email.svg"
                  alt="email"
                  loading="eager"
                />
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
              >
                <Image
                  width={25}
                  loading="eager"
                  height={25}
                  src="/icons/linkedin.svg"
                  alt="linkendin"
                />

                <p>/brisa-díaz</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BrisaDiaz"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/github.svg"
                  alt="github"
                  loading="eager"
                />
                <p>/BrisaDiaz</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Home;
