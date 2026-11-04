export interface TechStackGroup {
  title: string;
  technologies: string[];
}

export const techStack: TechStackGroup[] = [
  { title: "Mobile", technologies: ["Flutter", "Bloc", "Swift", "Kotlin"] },
  { title: "Web", technologies: ["Next.js", "React", "Nuxt", "Vue", "Tailwind CSS"] },
  { title: "Backend & data", technologies: ["NestJS", "Go", "PostgreSQL", "Firebase"] },
  { title: "AI tools", technologies: ["Claude", "Codex"] },
  { title: "Tooling", technologies: ["Git", "GitHub", "Fastlane", "Netlify"] },
];
