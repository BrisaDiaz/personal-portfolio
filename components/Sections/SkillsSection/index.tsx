import Illustration from "@/components/Sections/Illustration";
import listStyles from "./List.module.css";

export default function AccomplishmentsSection({
  skills,
  styles,
}: {
  skills: string[];
  styles: any;
}) {
  return (
    <section
      className={`container ${styles["skills-section"]}`}
      id="accomplishments"
    >
      <>
        <div className={styles["skills-section__split-container"]}>
          <div className={styles["skills-section__skills-container"]}>
            <h2>🧱 Strengths</h2>
            <ul className={listStyles.list}>
              {skills.map((skill, index) => (
                <li key={index} className={listStyles["list__list-item"]}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["skills-section__illustration-container"]}>
            <Illustration name="programing" />
          </div>
        </div>
      </>
    </section>
  );
}
