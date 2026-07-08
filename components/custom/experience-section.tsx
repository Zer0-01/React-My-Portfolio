import { SectionHeading } from "@/components/custom/section-heading";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing border-t">
      <div className="page-shell space-y-10">
        <SectionHeading
          label="/ EXPERIENCE"
          title="Work shaped around product delivery and implementation quality."
          description="This portfolio currently derives experience from shipped work and project records in the repository. The focus here is on the type of problems solved, the product context, and the technologies used."
        />

        <div className="grid gap-6">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="surface-card grid gap-6 p-6 lg:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-primary text-sm font-medium">{item.period}</p>
                <p className="text-muted-foreground mt-2 text-sm">{item.company}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-7">
                    {item.summary}
                  </p>
                </div>

                <ul className="grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-muted-foreground flex gap-3 text-sm leading-6"
                    >
                      <span className="bg-primary mt-2 size-1.5 rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="bg-muted text-muted-foreground rounded-md border px-2.5 py-1 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
