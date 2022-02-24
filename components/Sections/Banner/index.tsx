import styles from "./index.module.css";

import Illustration from "@/components/Sections/Illustration";

import SVG from "@/components/SVG";
export default function Banner() {
  return (
    <section className={styles.container}>
      <article className={styles.banner}>
        <div className={styles["banner__inner"]}>
          <h1 className={styles["banner__title"]}>Get in touch</h1>
          <h2 className={` title3 ${styles["banner__subtitle"]}`}>
            Want to work together or have any questions?
          </h2>

          <div>
            <div className={styles["banner__illustration"]}>
              <Illustration name="agreement" />
            </div>
            <address className={styles["banner__contact"]}>
              <ul className={styles["banner__contact-list"]}>
                <li className={styles["banner__contact-list-item"]}>
                  <a
                    className={styles["banner__contact-link"]}
                    href="tel:+54 351 3850064"
                    target="_blank"
                    rel="noreferrer"
                    title="mobile number"
                  >
                    <SVG name="telephone-fill" />

                    <p>+54 351 3850064</p>
                  </a>
                </li>
                <li className={styles["banner__contact-list-item"]}>
                  <a
                    className={styles["banner__contact-link"]}
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
