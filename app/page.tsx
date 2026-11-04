import type { Metadata } from "next";

import { Experience } from "@/components/custom/Experience";
import { Hero } from "@/components/custom/Hero";
import { SelectedWork } from "@/components/custom/SelectedWork";
import { TechStack } from "@/components/custom/TechStack";

/** Set here, not in the layout, so other routes do not inherit the home canonical. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-12 md:px-8">
      <Hero />
      <SelectedWork />
      <Experience />
      <TechStack />
    </main>
  );
}
