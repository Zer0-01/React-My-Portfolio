import { SectionHeading } from "@/components/custom/section-heading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing border-t">
      <div className="page-shell space-y-10">
        <SectionHeading
          label="/ TECH STACK"
          title="Capabilities grouped for faster scanning."
          description="Rather than a flat keyword wall, the stack is organized by the areas I use most often in product work."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-muted text-muted-foreground rounded-md border px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
