export interface Project {
  id: number;
  name: string;
  captions: string[];
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
