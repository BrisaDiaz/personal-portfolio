import React from "react";
import styles from "./index.module.css";
import TechLogo from "@/components/Sections/TechnologiesSection/TechLogo";
import { Technology } from "interfaces";
import useOnScreen from "@/hooks/useOnScreen";
import * as ga from "@/libs/googleAnalytics";
function TechnologyFigure({
  technology,
  visible,
}: {
  technology: Technology;
  visible: boolean;
}) {
  const ref = React.useRef(null);
  const isInScrollView = useOnScreen(ref, "0px", true);
  const handleExternalNavigation = () => {
    ga.event({
      action: "Documentation View",
      params: {
        technology: technology.name,
        category: technology.category,
      },
    });
  };
  return (
    <a
      onClick={handleExternalNavigation}
      ref={ref}
      href={technology.resource_url}
      target="_blank"
      rel="noreferrer"
      title={"documentation"}
      className={`${styles["tech-link"]} ${
        visible
          ? "tech-link--visible"
          : !visible || !isInScrollView
          ? styles["tech-link--hidden"]
          : ""
      }`}
    >
      <div className={styles["tech-link__figure"]}>
        <TechLogo name={technology.logoName} />

        <p className={styles["tech-link__figcaption"]}>{technology.name}</p>
      </div>
    </a>
  );
}

export default React.memo(TechnologyFigure);
