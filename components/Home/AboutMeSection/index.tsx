import SVG from "@/components/SVG";
import Illustration from "@/components/Illustration";

export default function AboutMeSection({ styles }: { styles: any }) {
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
