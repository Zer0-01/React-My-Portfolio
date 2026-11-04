import { experience, formatPeriod, type ExperienceRole } from "@/data/experience";
import { cn } from "@/lib/utils";

function PeriodText({ period, className }: { period: ExperienceRole["period"]; className?: string }) {
  return <span className={cn("text-label-md text-muted-foreground", className)}>{formatPeriod(period)}</span>;
}

/** Roles at one company joined by a line; the current role has a filled burgundy marker. */
function RoleProgression({ roles }: { roles: ExperienceRole[] }) {
  return (
    <ol aria-label="Roles, most recent first" className="mt-4">
      {roles.map((role, index) => {
        const isCurrent = index === 0;
        const isLast = index === roles.length - 1;
        return (
          <li key={role.title} className={cn("relative flex gap-4", !isLast && "pb-6")}>
            {!isLast && (
              <span aria-hidden="true" className="absolute bottom-0 left-[5.5px] top-4 w-px bg-muted-foreground/40" />
            )}
            <span
              aria-hidden="true"
              className={cn(
                "relative mt-1 size-3 shrink-0 border-2",
                isCurrent ? "border-primary-text bg-primary-text" : "border-muted-foreground bg-background",
              )}
            />
            <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="text-label-lg font-semibold text-foreground">{role.title}</span>
              <PeriodText period={role.period} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="w-full scroll-mt-24 py-16 md:py-24">
      <h2 id="experience-heading" className="text-headline-lg">Experience</h2>

      <ol className="mt-12 border-t border-border">
        {experience.map((entry) => (
          <li key={entry.company} className="grid gap-2 border-b border-border py-12 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
            <PeriodText period={entry.period} className="md:pt-1" />

            <div className="min-w-0">
              <h3 className="text-headline-sm">{entry.company}</h3>
              {entry.roles.length > 1 ? (
                <RoleProgression roles={entry.roles} />
              ) : (
                <p className="mt-2 text-label-lg font-semibold text-foreground">{entry.roles[0].title}</p>
              )}

              <ul className="mt-6 max-w-2xl space-y-2 text-body-md text-muted-foreground">
                {entry.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
