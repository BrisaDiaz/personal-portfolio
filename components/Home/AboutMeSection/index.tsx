
import Illustration from "@/components/Home/Illustration";

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
      </div>
      <div className={styles.aboutMeIllustration}>
        {" "}
        <Illustration name="welcome" />
      </div>
    </section>
  );
}
