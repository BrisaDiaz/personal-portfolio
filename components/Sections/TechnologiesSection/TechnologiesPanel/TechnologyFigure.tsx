import React from "react";
import dynamic from "next/dynamic";

const TechLogo = dynamic(
  () => import("@/components/Sections/TechnologiesSection/TechLogo")
);

import { Technology } from "interfaces";
function TechnologyFigure({
  className,
  technology,
}: {
  className: string;
  technology: Technology;
}) {
  return (
    <a
      href={technology.resource_url}
      target="_blank"
      rel="noreferrer"
      title="documentation"
      className={className}
    >
      <figure role="figure">
        <TechLogo name={technology.logoName} />

        <figcaption>{technology.name}</figcaption>
      </figure>
    </a>
  );
}

export default React.memo(TechnologyFigure);
