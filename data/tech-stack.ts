export interface TechStackGroup {
  title: string;
  description: string;
  technologies: string[];
}

export const techStack: TechStackGroup[] = [
  {
    title: "Web experiences",
    description: "Responsive, maintainable interfaces for modern web products.",
    technologies: ["React", "Next.js", "Vue", "Nuxt"],
  },
  {
    title: "Cross-platform and native apps",
    description: "Reliable applications built around real user workflows.",
    technologies: ["Flutter", "Kotlin", "Swift"],
  },
  {
    title: "Services and data",
    description: "Typed backend services backed by structured relational data.",
    technologies: ["NestJS", "PostgreSQL"],
  },
  {
    title: "Delivery and collaboration",
    description: "Repeatable environments and clear source-control workflows.",
    technologies: ["Docker", "Git", "GitHub"],
  },
];
