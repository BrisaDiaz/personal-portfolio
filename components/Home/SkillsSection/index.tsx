import Illustration from "@/components/Home/Illustration";
import listStyles from "./List.module.css";

export default function AccomplishmentsSection({
  skills,
  styles,
}: {
  skills: string[];
  styles: any;
}) {
  return (
    <section className="container" id="accomplishments">
      <>
        <div className={styles.splitWrapper}>
          <div className={styles.skillsWrapper}>
            <h2>Skills</h2>
            <ul className={listStyles.list}>
              {skills.map((skill, index) => (
                <li key={index} className={listStyles.listItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.techSkillsIllustrationSection}>
            <Illustration name="programing" />
          </div>
        </div>
      </>
    </section>
  );
}
