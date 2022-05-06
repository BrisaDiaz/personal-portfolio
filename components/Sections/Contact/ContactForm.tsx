import styles from "./index.module.css";

import Illustration from "@/components/Sections/Contact/Illustration";
import ContactForm from "@/components/ContactForm";
import SVG from "@/components/SVG";
export default function Contact({
  onSubmit,
}: {
  onSubmit: (
    emailParams: { [key: string]: any },
    e: React.FormEvent<HTMLFormElement>
  ) => void;
}) {
  return (
    <section className={styles.container}>
      <article className={styles.banner}>
        <div className={styles["form-section"]}>
          <h1 className={styles["banner__title"]}>Get in touch</h1>

          <ContactForm onSubmit={onSubmit} />
        </div>
        <div className={styles["socials-section"]}>
          <div>
            <div className={styles["banner__illustration"]}>
              <Illustration />
            </div>
            <address className={styles["banner__contact"]}>
        
              <ul className={styles["banner__contact-list"]}>
                <li className={styles["banner__contact-list-item"]}>
                  <a
                    className={styles["banner__contact-link"]}
                    href="https://www.linkedin.com/in/brisa-d%C3%ADaz/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin profile"
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
