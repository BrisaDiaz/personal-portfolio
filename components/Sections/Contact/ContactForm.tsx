import styles from "./index.module.css";
import React from "react";
import ContactForm from "@/components/ContactForm";
import SVG from "@/components/SVG";
import useOnScreen from "@/hooks/useOnScreen";
import * as ga from "@/libs/googleAnalytics";
export default function Contact({
  onSubmit,
}: {
  onSubmit: (
    emailParams: { [key: string]: any },
    e: React.FormEvent<HTMLFormElement>,
  ) => void;
}) {
  const ref = React.useRef(null);
  const isVisible = useOnScreen(ref, "-200px", true);
  const handleSocialsNavigation = (socialMedia: string) => {
    ga.event({
      action: "Profile Visit",
      params: {
        social_media: socialMedia,
      },
    });
  };
  return (
    <section className={styles.container} ref={ref}>
      <article className={styles.banner}>
        <div className={styles["form-section"]}>
          <h1 className={styles["banner__title"]}>Get in touch</h1>

          <ContactForm onSubmit={onSubmit} />
        </div>
        <div
          className={`${styles["socials-section"]} ${
            isVisible ? styles["socials-section--visible"] : ""
          } `}
        >
          <div>
          
            <address className={styles["banner__contact"]}>
              <ul className={styles["banner__contact-list"]}>
                <li className={styles["banner__contact-list-item"]}>
                  <a
                    className={styles["banner__contact-link"]}
                    href="https://www.linkedin.com/in/brisa-d%C3%ADaz/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin profile"
                    onClick={() => handleSocialsNavigation("linkedin")}
                  >
                    <SVG name="linkedin-fill" />

                    <p>/brisa-díaz</p>
                  </a>
                </li>
                <li className={styles["banner__contact-list-item"]}>
                  <a
                    className={styles["banner__contact-link"]}
                    href="https://github.com/BrisaDiaz"
                    target="_blank"
                    rel="noreferrer"
                    title="Github repository"
                    onClick={() => handleSocialsNavigation("github")}
                  >
                    <SVG name="github-fill" />
                    <p>/BrisaDiaz</p>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </article>
    </section>
  );
}
