"use client";

import { motion, useReducedMotion } from "framer-motion";

import { experience } from "@/data/experience";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full max-w-5xl scroll-mt-8 py-8 md:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-label text-primary">Experience</p>
        <h2 id="experience-heading" className="mt-3 text-heading text-foreground">
          Building and improving products that people rely on.
        </h2>
      </div>

      <div className="mt-10 border-b border-border md:mt-14">
        {experience.map((entry, index) => (
          <motion.article
            key={entry.company}
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-8 border-t border-border py-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)] md:gap-12 md:py-12"
          >
            <div>
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {entry.company}
                </h3>
              </div>
              <p className="mt-2 pl-8 font-mono text-label text-secondary-foreground">
                {entry.period}
              </p>
            </div>

            <div>
              <ol>
                {entry.roles.map((role, roleIndex) => (
                  <li
                    key={`${role.title}-${role.period}`}
                    className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-4 pb-6 last:pb-0"
                  >
                    <div aria-hidden="true" className="relative">
                      {roleIndex < entry.roles.length - 1 && (
                        <span className="absolute -bottom-9 left-1/2 top-3 w-px -translate-x-1/2 bg-border" />
                      )}
                      <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center justify-center">
                        <span className="size-3 rounded-full border-2 border-background bg-primary" />
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold leading-6 text-foreground">
                        {role.title}
                      </p>
                      <p className="mt-1 font-mono text-label text-secondary-foreground">
                        {role.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <ul className="mt-8 space-y-4 text-muted-foreground">
                {entry.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="grid grid-cols-[auto_1fr] gap-3 leading-7"
                  >
                    <span aria-hidden="true" className="mt-3 size-1 bg-primary" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
