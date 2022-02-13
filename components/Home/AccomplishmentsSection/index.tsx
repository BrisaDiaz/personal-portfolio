import Illustration from "@/components/Illustration";
export default function AccomplishmentsSection({
  skills,
  styles,
}: {
  skills: string[];
  styles: any;
}) {
  const skillsFirstHalf = skills.slice(0, skills.length / 2);
  const skillsSecondHalf = skills.slice(skillsFirstHalf.length, -1);
  return (
    <section id="accomplishments" className={styles.container}>
      <div className={styles.strengthsSectionWrapper}>
        <div className={styles.skillsSection}>
          <h2>Accomplishments</h2>
          <ul>
            {skillsFirstHalf.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.techSkillsIllustrationSection}>
          <div className={styles.programingIllustration}>
            <Illustration name="programing" />
          </div>
        </div>
      </div>
      <div className={`${styles.skillsSection} ${styles.fluid}`}>
        {" "}
        <ul>
          {skillsSecondHalf.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
