export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Swift"],
  },
  {
    title: "Backend",
    items: ["REST API", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Fastlane"],
  },
  {
    title: "UI / Design",
    items: ["shadcn/ui", "Responsive Design", "Product UI", "Design Systems"],
  },
];
