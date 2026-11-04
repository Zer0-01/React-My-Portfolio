export interface NavSection {
  id: string;
  label: string;
}

/** Home page sections, in the order they appear on the page. */
export const navSections = [
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Stack" },
  { id: "work", label: "Work" },
] as const satisfies readonly NavSection[];

export const navSectionIds = navSections.map(({ id }) => id);

export const contactHref = "https://wa.me/601154066082";

export function formatNavIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}
