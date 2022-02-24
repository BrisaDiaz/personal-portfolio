import Illustration from "@/components/Sections/Illustration";
import Button from "@/components/Button";
import Link from "next/link";
export default function AboutMeSection({ styles }: { styles: any }) {
  return (
    <section className={`container ${styles["about-section"]}`} id="/">
      <div className={styles["about-section__content"]}>
        <div>
          <h1 className={styles["about-section__title"]}>
            <span> {"Hi!, I'm brisa díaz\n"}</span>
            <br />
            {"I'm a Frontend Developer"} 👩‍💻
          </h1>

          <p className={styles["about-section__text"]}>
            I have almost two years of experience working on different kinds of
            projects like websites and web applications, working with the most
            cutting-edge web development technologies specialized in improving
            the user experience, development and scalability of digital
            products.
          </p>
          <p className={styles["about-section__text"]}>
            I describe myself as a proactive, curious and determined person,
            passionate about providing solutions in a creative and ingenious way
            who {"don't "}hesitate to leave the comfort zone to face new
            challenges, seeing each of them as an opportunity to improve and
            bring value.
          </p>
          <br />
          <Link href="/contact" passHref>
            <a href="" tabIndex={-1}>
              <Button
                text="Contact me"
                className={styles["about-section__button"]}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["about--section__illustration-container"]}>
        {" "}
        <Illustration name="welcome" />
      </div>
    </section>
  );
}
