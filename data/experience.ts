export interface ExperienceRole {
  title: string;
  period: string;
}

export interface ExperienceEntry {
  company: string;
  period: string;
  roles: ExperienceRole[];
  contributions: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Aonic",
    period: "September 2024–Present",
    roles: [
      {
        title: "Mobile Developer",
        period: "January 2026–Present",
      },
      {
        title: "Junior Mobile Developer",
        period: "September 2024–December 2025",
      },
    ],
    contributions: [
      "Owned the planning, development, release, and continuous improvement of a mobile commerce and field-utility app for farmers and plantation operators.",
      "Developed and improved a field operations app for preparing mission files and executing automated drone missions.",
    ],
  },
  {
    company: "Silentmode",
    period: "March 2024–August 2024",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "March 2024–August 2024",
      },
    ],
    contributions: [
      "Diagnosed and resolved defects in a fuel-retail point-of-sale application.",
      "Migrated a legacy native stock-management application to Flutter, creating a more maintainable cross-platform foundation.",
    ],
  },
];
