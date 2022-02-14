import React from "react";
import styles from "./index.module.css";
import Checkbox from "@/components/Checkbox";

import { Technology } from "interfaces";
import TechnologyFigure from "./TechnologyFigure";
export default function Panel({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [activeTechCategories, setActiveTechCategories] = React.useState([
    "frontend",
    "backend",
    "testing",
    "other",
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
      <div className={styles.TechsFilterBar}>
        <Checkbox
          name="frontend"
          label="Frontend"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          name="backend"
          label="Backend"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          name="testing"
          label="Testing"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
        <Checkbox
          name="other"
          label="Other"
          defaultChecked={true}
          onChange={handleTechCategories}
        />
      </div>

      <div className={styles.techsContainer}>
        {technologies.map((technology) => (
          <TechnologyFigure
            key={technology.name}
            technology={technology}
            className={`${styles.techFigure} ${
              technology.categories.some((category) =>
                Boolean(activeTechCategories.includes(category))
              )
                ? ""
                : styles.halfVisible
            }`}
          />
        ))}
      </div>
    </>
  );
}
