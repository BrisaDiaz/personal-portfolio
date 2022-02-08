import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
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
import SocialShareButtons from "@/components/SocialShareButtons/index";
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
  React.useEffect(() => {
    const body = document.querySelector("main");
    body?.addEventListener("focus", (event) => {
      console.log(event.target);
    });
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
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
  const handleBodyState = () => {
    if (document) {
      const body = window.document.body;
      const html = window.document?.querySelector("html");

      if (!body || !html) return;

      if (modalState.isOpen || menuState.isOpen) {
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
      } else {
        body.style.overflowY = "auto";
        html.style.overflowY = "auto";
      }
    }
  };
  React.useEffect(() => {
    handleBodyState();
  }, [modalState.isOpen, menuState.isOpen]);

  return (
    <div>
      <Head>
        <title>Brisa Díaz | Frontend Developer 👩‍💻</title>
      </Head>

      <main
        className={`${styles.main} ${
          modalState.isOpen || (menuState.isOpen && styles.fixed)
        }`}
      >
        <div className={styles.menuBtn}>
          <button onClick={handleOpenMenu} aria-label="menu" />

          <Image
            width={26}
            height={26}
            aria-hidden="true"
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
          onNavigate={handleNavigation}
        />
        <SocialShareButtons />
        <MainSection />
        <TechStackSection />

        <ProjectsSection onSelectProject={handleOpenModal} />
        <ProjectModal
          onClose={() => handleCloseModal()}
          isOpen={modalState.isOpen}
          project={modalState.selectedProject}
        />
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
              <a href="#aboutMe" tabIndex={-1}>
                <Button text="Lest get in touch!" />
              </a>
            </div>

            <div className={styles.bannerIllustration}>
              <Image
                layout="fill"
                src="/svg/agreement.svg"
                alt="background"
                loading="eager"
                placeholder="blur"
                blurDataURL="/svg/agreement.svg"
                aria-hidden="true"
              />
            </div>
          </div>
        </article>
        <EducationSection />
      </main>
    </div>
  );
};

function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  return (
    <div style={{ position: "relative" }}>
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
      <div className={styles.strengthsSectionWrapper}>
        <div className={styles.educationSectionContent}>
          <h2>Education</h2>
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
        <div className={styles.softSkillsIllustrationSection}>
          <div className={styles.planningllustration}>
            <Image
              layout="fill"
              src="/svg/planning-illustration.svg"
              alt="planning illustration"
              aria-hidden="true"
              placeholder="blur"
              blurDataURL="/svg/planning.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function SkillsSection() {
  const skillsFirtsHalf = SKILLS.slice(0, SKILLS.length / 2);
  const skillsSecondHalf = SKILLS.slice(skillsFirtsHalf.length, -1);
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.strengthsSectionWrapper}>
        <div className={styles.skillsSection}>
          <h2>Skills</h2>
          <ul>
            {skillsFirtsHalf.map((skill, index) => (
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
              placeholder="blur"
              blurDataURL="/svg/programing-illustration.svg"
              aria-hidden="true"
            />
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
      <div className={styles.techsContainer}>
        {TECHS.map((tech) => (
          <a
            href={tech.resource_url}
            target="_blank"
            rel="noreferrer"
            key={tech.name}
            title={tech.name}
          >
            <figure role="figure">
              <div className={styles.techImage}>
                <ImagePlaceholder
                  src={tech.image}
                  alt="placeholder"
                  aria-hidden="true"
                  objectFit="contain"
                />
              </div>

              <figcaption>{tech.name}</figcaption>
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
          aria-hidden="true"
          placeholder="blur"
          blurDataURL="/svg/welcome-illustration-split.svg"
        />
      </div>

      <div className={styles.mainSectionContent}>
        <div className={styles.mainSectionText}>
          <h1>
            <span> {"Hi!, I'm Brisa Díaz"}</span>
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
            It has been almost two years since I discover the potential of
            programing and found my passion in it , until now I have been
            working on personal projects like websites and web applications of
            different kinds of topics in which I trained my ability to
            understand requirements, design the business logic and translate
            them into actual working applications.
          </p>
        </div>
        <div className={styles.personalInfoWrapper}>
          <ul>
            <li title="birthday">
              <Image
                width={25}
                height={25}
                src="/icons/birthday.svg"
                alt="birthday date"
                aria-hidden="true"
                loading="eager"
              />

              <time dateTime="2000-11-18">11/18/2000</time>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/FXX1dQVPgc9De7eRA"
                target="_blank"
                rel="noreferrer"
                title="Place of residence"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/address.svg"
                  alt="home address"
                  aria-hidden="true"
                  loading="eager"
                />
                <p>Córdoba - Argentina</p>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="tel:+54 351 3850064"
                target="_blank"
                rel="noreferrer"
                title="Telephone number"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/telephone.svg"
                  aria-hidden="true"
                  alt="telephone number"
                  loading="eager"
                />
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
                <Image
                  width={25}
                  height={25}
                  src="/icons/email.svg"
                  alt="email"
                  aria-hidden="true"
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
                title="Linkedin profile"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  aria-hidden="true"
                  loading="eager"
                />

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
                <Image
                  width={25}
                  height={25}
                  loading="eager"
                  src="/icons/github.svg"
                  alt="github"
                  aria-hidden="true"
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
