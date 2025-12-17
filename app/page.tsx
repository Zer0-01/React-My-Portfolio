import { CTAButtons } from "@/components/custom/CTAButton";
import { Hero } from "@/components/custom/Hero";
import { ProjectTabs } from "@/components/custom/ProjectTabs";
import { Stats } from "@/components/custom/Stats";


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10 flex flex-col items-center gap-10">
      <Hero />
      <Stats />
      <CTAButtons />
      <ProjectTabs />
    </main>
  );
}
