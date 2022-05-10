import React from "react";
import styles from "./index.module.css";
import Checkbox from "@/components/Checkbox";

import { Technology } from "interfaces";
import TechnologyFigure from "../TechnologyFigure";
export default function Panel({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [activeTechCategories, setActiveTechCategories] = React.useState([
    "language",
    "frontend",
    "backend",
    "testing",
  ]);

  const handleTechCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.name;
    if (activeTechCategories.includes(category)) {
      return setActiveTechCategories(
        activeTechCategories.filter((cat) => cat !== category)
      );
    }
    setActiveTechCategories([...activeTechCategories, category]);
  };

  return (
    <>
      <div className={styles["filter-bar"]}>
        <Checkbox
          className={styles["filter-bar__filter"]}
          name="language"
          label="Language"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          className={styles["filter-bar__filter"]}
          name="frontend"
          label="Frontend"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          className={styles["filter-bar__filter"]}
          name="backend"
          label="Backend"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          className={styles["filter-bar__filter"]}
          name="testing"
          label="Testing"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          className={styles["filter-bar__filter"]}
          name="other"
          label="Other"
          defaultChecked={false}
          onChange={handleTechCategories}
        />
      </div>

      <div className={styles["tech-grid"]}>
        {technologies.map((technology) => (
          <TechnologyFigure
            key={technology.name}
            technology={technology}
            visible={activeTechCategories.includes(technology.category)}
          />
        ))}
      </div>
    </>
  );
}
