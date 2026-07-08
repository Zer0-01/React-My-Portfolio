export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Mobile Developer",
    company: "Aonic",
    period: "2025",
    summary:
      "Built production mobile features for an agriculture platform focused on commerce, field tools, and branch discovery.",
    highlights: [
      "Delivered e-commerce, credit, and offline utility flows in one mobile experience.",
      "Balanced user-facing polish with practical tools for remote operational contexts.",
      "Worked across release tooling, Firebase services, and platform integrations.",
    ],
    technologies: ["Flutter", "Bloc", "Dio", "Firebase", "Google Maps API"],
  },
  {
    role: "Mobile Developer",
    company: "LakarSoft",
    period: "2025",
    summary:
      "Developed utility-focused mobile products with attention to clean architecture, usability, and localization readiness.",
    highlights: [
      "Shipped a calculator product with bill splitting and roadmap-ready financial tools.",
      "Structured the app for theme support and multi-language expansion.",
      "Kept implementation maintainable through clearer state and architecture choices.",
    ],
    technologies: ["Flutter", "Bloc", "Clean Architecture"],
  },
  {
    role: "Web Developer",
    company: "Client and Internal Projects",
    period: "2025",
    summary:
      "Designed and shipped responsive web experiences across portfolio, event, and education-style products.",
    highlights: [
      "Built responsive web interfaces with clear information hierarchy and fast scanning.",
      "Worked with Next.js and React to deliver practical, content-driven frontend products.",
      "Adapted product storytelling to different audiences including business, event, and learning use cases.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
  },
];
