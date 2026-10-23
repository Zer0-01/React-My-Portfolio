import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="w-full scroll-mt-24 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] md:gap-16">
        <div>
          <h2 id="experience-heading" className="text-heading">Experience</h2>
          <p className="mt-5 max-w-sm text-secondary-foreground">Building and improving products that people rely on.</p>
        </div>
        <div className="space-y-4">
          {experience.map((entry) => (
            <article key={entry.company} className="rounded-lg bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-heading-md">{entry.company}</h3>
                <p className="text-sm text-secondary-foreground">{entry.period}</p>
              </div>
              <ol className="mt-6 space-y-3">
                {entry.roles.map((role) => <li key={`${role.title}-${role.period}`} className="flex flex-wrap justify-between gap-x-6 text-sm"><span className="font-medium">{role.title}</span><span className="text-secondary-foreground">{role.period}</span></li>)}
              </ol>
              <ul className="mt-6 space-y-3 text-secondary-foreground">
                {entry.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
