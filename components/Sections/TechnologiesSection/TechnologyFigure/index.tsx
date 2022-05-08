import React from "react";
import styles from "./index.module.css";
import TechLogo from "@/components/Sections/TechnologiesSection/TechLogo";
import { Technology } from "interfaces";
function TechnologyFigure({ technology }: { technology: Technology }) {
  return (
    <a
      href={technology.resource_url}
      target="_blank"
      rel="noreferrer"
      title={"documentation"}
      className={`${styles["tech-link"]} `}
    >
      <div className={styles["tech-link__figure"]}>
        <TechLogo name={technology.logoName} />

        <p className={styles["tech-link__figcaption"]}>{technology.name}</p>
      </div>
    </a>
  );
}

export default React.memo(TechnologyFigure);
