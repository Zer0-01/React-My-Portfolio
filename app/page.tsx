import { Experience } from "@/components/custom/Experience";
import { Hero } from "@/components/custom/Hero";
import { SelectedWork } from "@/components/custom/SelectedWork";
import { TechStack } from "@/components/custom/TechStack";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-12 md:px-8">
      <Hero />
      <Experience />
      <TechStack />
      <SelectedWork />
    </main>
  );
}
