import { AboutSection } from "@/components/custom/about-section";
import { ContactSection } from "@/components/custom/contact-section";
import { ExperienceSection } from "@/components/custom/experience-section";
import { HeroSection } from "@/components/custom/hero-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { SiteFooter } from "@/components/custom/site-footer";
import { SiteHeader } from "@/components/custom/site-header";
import { SkillsSection } from "@/components/custom/skills-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
