/** A month as "YYYY-MM"; `end: null` means the role is ongoing. */
export interface Period {
  start: string;
  end: string | null;
}

export interface ExperienceRole {
  title: string;
  period: Period;
}

export interface ExperienceEntry {
  company: string;
  period: Period;
  /** Most recent role first. */
  roles: ExperienceRole[];
  contributions: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Aonic",
    period: { start: "2024-09", end: null },
    roles: [
      { title: "Mobile Developer", period: { start: "2026-01", end: null } },
      { title: "Junior Mobile Developer", period: { start: "2024-09", end: "2025-12" } },
    ],
    contributions: [
      "Owned planning, build, release and improvement of a commerce and field app for farmers.",
      "Built a field app for preparing and running automated drone missions.",
    ],
  },
  {
    company: "Silentmode",
    period: { start: "2024-03", end: "2024-08" },
    roles: [
      { title: "Software Engineer Intern", period: { start: "2024-03", end: "2024-08" } },
    ],
    contributions: [
      "Fixed defects in a fuel-retail point-of-sale app.",
      "Migrated a legacy native stock-management app to Flutter.",
    ],
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMonth(value: string) {
  const [year, month] = value.split("-");
  return { year, month: months[Number(month) - 1] };
}

/** "Sep 2024 – Now", "Sep 2024 – Dec 2025", or "Mar – Aug 2024" within one year. */
export function formatPeriod({ start, end }: Period): string {
  const from = parseMonth(start);
  if (end === null) return `${from.month} ${from.year} – Now`;

  const to = parseMonth(end);
  return from.year === to.year
    ? `${from.month} – ${to.month} ${to.year}`
    : `${from.month} ${from.year} – ${to.month} ${to.year}`;
}
