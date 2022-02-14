import styles from "./index.module.css";

import Illustration from "@/components/Home/Illustration";

import SVG from "@/components/SVG";
export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <article className={styles.callToActionBanner}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3>You think we can be a good match?</h3>

            <p className={styles.text}>
              My ideal job is one that allows me to be in a position of
              responsibility, that utilize and makes the most of my skills and
              experience, in which I can join and work in an environment of
              growth and excellence.
            </p>
            <div>
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
              <div className={styles.bannerIllustration}>
                <Illustration name="agreement" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
