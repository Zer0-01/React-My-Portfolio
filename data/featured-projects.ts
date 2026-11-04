import type { Project } from "@/data/projects";

export interface FeaturedProject {
  slug: string;
  title: string;
  /** One line: what it is and why it matters. Details live on the project page. */
  summary: string;
  /** Your role on the project: what the screenshot and summary do not say. */
  role: string;
  technologies: string[];
  /** Mobile screens are shown side by side at their real portrait ratio; web screens one at a time. */
  format: "mobile" | "desktop";
  screens: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "aonic-agriculture",
    title: "Aonic Agriculture",
    summary: "Shopping, credit and offline field tools for farmers, in one app.",
    role: "Mobile Developer · Aonic",
    technologies: ["Flutter", "Bloc", "Firebase"],
    format: "mobile",
    screens: [1, 2, 3, 4, 5].map((n) => `/projects/aonic-agriculture/photo_${n}.jpg`),
  },
  {
    slug: "lq-studio",
    title: "LQ Studio",
    summary: "Replaced WhatsApp back-and-forth with online session booking.",
    role: "Co-founder & Developer · LakarSoft",
    technologies: ["Next.js", "Go", "PostgreSQL"],
    format: "desktop",
    screens: [1, 2, 3, 4, 5, 6].map((n) => `/projects/lqstudio/lqstudio_${n}.png`),
  },
  {
    slug: "e-wedding",
    title: "Wedding RSVP",
    summary: "My own wedding invitation: details, RSVPs and messages in one link.",
    role: "Personal project",
    technologies: ["React", "Firebase", "Vite"],
    format: "desktop",
    // Only the 16:9 captures, so every frame keeps the same ratio.
    screens: [1, 2, 3, 6, 7].map((n) => `/projects/e-wedding/photo_${n}.png`),
  },
];

const projectTypeLabels: Record<NonNullable<Project["projectType"]>, string> = {
  mobile: "Mobile",
  web: "Web",
  iot: "IoT",
  backend: "Backend",
  fullstack: "Full stack",
};

interface ProjectMetaOptions {
  /** Leave the year out while every project shares the same one. */
  includeYear?: boolean;
}

export function formatProjectMeta(
  project: Pick<Project, "projectType" | "year">,
  { includeYear = true }: ProjectMetaOptions = {},
): string {
  return [project.projectType && projectTypeLabels[project.projectType], includeYear && project.year]
    .filter(Boolean)
    .join(" · ");
}
