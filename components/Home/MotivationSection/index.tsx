import Illustration from "@/components/Illustration";
export default function MotivationSection({ styles }: { styles: any }) {
  return (
    <section id="motivation" className={styles.container}>
      <div className={styles.strengthsSectionWrapper}>
        <div className={styles.educationSectionContent}>
          <h2>Motivation</h2>
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
        <div className={styles.educationIllustration}>
          <Illustration name="planning" />
        </div>
      </div>
    </section>
  );
}
