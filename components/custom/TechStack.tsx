import { TechTagList } from "@/components/custom/TechTagList";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading" className="w-full scroll-mt-24 py-16 md:py-24">
      <h2 id="tech-stack-heading" className="text-headline-lg">Tech stack</h2>

      <ul className="mt-12 border-t border-border">
        {techStack.map((group) => (
          <li key={group.title} className="grid gap-4 border-b border-border py-8 md:grid-cols-[12rem_minmax(0,1fr)] md:items-center md:gap-8">
            <h3 className="text-label-lg font-semibold text-foreground">{group.title}</h3>
            <TechTagList technologies={group.technologies} label={`${group.title} technologies`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
