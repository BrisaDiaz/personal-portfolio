export interface Project {
  id: number;
  slug: string;
  title: string;
  color: string;
  subtitle: string;
  captions: { src: string; alt: string; original?: string }[];
  summary: string;
  language: string;
  features: string[];
  technologies: {
    frontend: string[];
    backend?: string[];
    testing?: string[];
    hosting: string;
  };
  testingUser?: {
    email: string;
    password: string;
  };

  source_code: string;
  demo: string;
}

export interface Technology {
  name: string;
  logoName: string;
  category: string;
  image: string;
  resource_url: string;
}
