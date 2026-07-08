import { SectionHeading } from "@/components/custom/section-heading";

const facts = [
  { label: "Role", value: "Software Engineer" },
  { label: "Focus", value: "Web and mobile product development" },
  { label: "Strength", value: "Clean UI, scalable structure, product thinking" },
  { label: "Location", value: "Malaysia" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-spacing border-t">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          label="/ ABOUT"
          title="A technical builder with a product-minded approach."
          description="I focus on practical software that is easy to understand, dependable to use, and structured cleanly enough to scale. My work sits between engineering execution and interface quality, with attention to both the system and the person using it."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="surface-card p-6">
              <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                {fact.label}
              </p>
              <p className="mt-3 text-sm leading-6 sm:text-base">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
