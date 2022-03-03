import ParticlesBackground from "@/components/ParticlesBackground";
import Avatar from "@/components/Avatar";
export default function AboutMeSection({ styles }: { styles: any }) {
  return (
    <section className={`container ${styles["section"]}`} id="/">
      <ParticlesBackground />
      <div className={styles["section__content"]}>
        <div>
          <h1 className={styles["section__title"]}>
            <span> {"Hi!, I'm brisa díaz\n"}</span>
            <br />
            {"I'm a Web Developer"}
            <br />& Frontend Specialist
          </h1>

          <p className={styles["section__text"]}>
            I have two years of experience working on different kinds of
            projects like websites and web applications, using technologies at
            the forefront in terms of improving the user experience, development
            process and scalability of digital products.
          </p>
          <p className={styles["section__text"]}>
            I describe myself as a curious and determined person, passionate
            about providing solutions in a creative and ingenious way, seeing
            each new challenge as an opportunity to improve and bring value.
          </p>
        </div>
      </div>
      <div className={styles["section__illustration-container"]}>
        {" "}
        <Avatar />
      </div>
    </section>
  );
}
