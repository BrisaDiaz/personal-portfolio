import React from "react";
import TechLogo from "@/components/Sections/TechnologiesSection/TechLogo";
import { Technology } from "interfaces";
function TechnologyFigure({
  className,
  technology,
}: {
  className: string;
  technology: Technology;
}) {
  console.log(`rerendering ${technology.name}`);
  return (
    <a
      href={technology.resource_url}
      target="_blank"
      rel="noreferrer"
      title={technology.name}
    >
      <figure role="figure" className={className}>
        <TechLogo name={technology.logoName} />

        <figcaption>{technology.name}</figcaption>
      </figure>
    </a>
  );
}

export default TechnologyFigure;
