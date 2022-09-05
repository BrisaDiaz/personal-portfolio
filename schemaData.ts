import { Project, Technology } from "interfaces";
import { env } from "env";
import { useMemo } from "react";
export const schemaData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "brisa diaz",
  givenName: "brisa",
  additionalName: "abigail",
  telephone: "+64 (351) 385-0064",
  birthDate: "200-11-18",
  gender: "female",
  nationality: "Argentine",
  knowsAbout: "web development",
  email: "brisaabigaildiaz2000@gmail.com",
  url: env.SITE_URL,
  image:
    "https://avatars.githubusercontent.com/u/80206872?s=400&u=be6bbe546e131904a49630c7e1eded15dbff4d45&v=4",
  sameAs: [
    "https://linkedin.com/in/brisa-díaz",
    env.SITE_URL,
    "https://github.com/BrisaDiaz",
    "https://mobile.twitter.com/Brisa_A_Diaz",
  ],
  jobTitle: "frontend developer",
  worksFor: {
    "@type": "Organization",
    name: "independent",
  },
};

export function useProjectListSchema(projects: Project[]) {

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "projects",
      description:
        "software development projects i have worked in, from stand alone websites, single page applications, progressive web apps to  websites implementing multiples content management systems",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          name: project.title,
          image: project.captions[0].src,
          mainEntityOfPage: `${env.SITE_URL}/project/${project.slug}`,
          url: `${env.SITE_URL}/project/${project.slug}`,
          sameAs: [project.demo, project.source_code],
          description: project.summary,
        },
      })),
    };
    return JSON.stringify(schema);

}
export function useTechnologiesSchema(technologies: Technology[]) {


    return useMemo(() => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "technologies",
        description:
          "technologies and tools used during the software development process.",
        numberOfItems: technologies.length,
        itemListElement: technologies.map((tech, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            name: tech.name,
            description:
              tech.category === "language"
                ? "programing language"
                : `${
                    tech.category === "other"
                      ? "service/development"
                      : tech.category
                  } tool`,
            sameAs: [tech.resource_url],
          },
        })),
      };
      return JSON.stringify(schema);
    }, [technologies]);
}

export function generateProjectSchema(project: Project) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    author: "Brisa Diaz",
    image: project.captions[0].src,
    alternateName: project.subtitle,
    sameAs: [project.demo, project.source_code],
    keywords: Object.values(project.technologies).flat(),
    description: project.summary + ".features: " + project.features.join(""),
  };
  return schema;
}
