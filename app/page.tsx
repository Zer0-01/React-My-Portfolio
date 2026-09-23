import { Experience } from "@/components/custom/Experience";
import { Hero } from "@/components/custom/Hero";
import { ProjectTabs } from "@/components/custom/ProjectTabs";
import { TechStack } from "@/components/custom/TechStack";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-5 pb-10 md:px-8">
      <Hero />
      <Experience />
      <TechStack />
      <ProjectTabs />
    </main>
  );
}
