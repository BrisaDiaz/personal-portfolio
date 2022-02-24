import React from "react";
import styles from "./index.module.css";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
const TechLogo = dynamic(
  () => import("@/components/Sections/TechnologiesSection/TechLogo"),
  { loading: () => <Spinner size="small" /> }
);

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
      <figure role="figure" className={styles["tech-link__figure"]}>
        <TechLogo name={technology.logoName} />

        <figcaption className={styles["tech-link__figcaption"]}>
          {technology.name}
        </figcaption>
      </figure>
    </a>
  );
}

export default React.memo(TechnologyFigure);
