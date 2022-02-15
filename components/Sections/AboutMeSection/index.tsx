import Illustration from "@/components/Sections/Illustration";

export default function AboutMeSection({ styles }: { styles: any }) {
  return (
    <section className={`container ${styles.aboutMeSection}`} id="/">
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            <span> {"Hi!, I'm brisa díaz\n"}</span>
            <br />
            {"I'm a Frontend Developer"}
          </h1>
          <p>
            I describe myself as a proactive, curious and determined person,
            passionate of providing solutions in a creative and ingenious way
            and {"don't "}hesitate to leave the comfort zone to face new
            challenges, seeing each of them as an opportunity to improve and
            bring value.
          </p>
          <p>
            I have almost two years of experience working on different kinds of
            projects like websites and web applications, working with
            development techniques and state-of-the-art technologies specialized
            in improving the user experience and the development and scalability
            of digital products..
          </p>
        </div>
      </div>
      <div className={styles.aboutMeIllustration}>
        {" "}
        <Illustration name="welcome" />
      </div>
    </section>
  );
}
