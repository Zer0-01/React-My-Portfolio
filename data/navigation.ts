export interface NavSection {
  id: string;
  label: string;
}

/** Home page sections, in the order they appear on the page. */
export const navSections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Stack" },
] as const satisfies readonly NavSection[];

export const navSectionIds = navSections.map(({ id }) => id);
