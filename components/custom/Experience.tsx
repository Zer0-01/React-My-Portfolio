"use client";

import { motion, useReducedMotion } from "framer-motion";

import { experience } from "@/data/experience";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full scroll-mt-12 py-10 md:py-16"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-link">Experience</p>
        <h2 id="experience-heading" className="mt-3 text-heading text-foreground">
          Building and improving products that people rely on.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:mt-12">
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-8 rounded-lg bg-card p-6 sm:p-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)] md:gap-12"
          >
            <div>
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="text-sm font-medium text-link"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-heading-md text-foreground">
                  {entry.company}
                </h3>
              </div>
              <p className="mt-2 pl-8 text-sm text-secondary-foreground">
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
                        <span className="absolute -bottom-9 left-1/2 top-3 w-px -translate-x-1/2 bg-secondary" />
                      )}
                      <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center justify-center">
                        <span className="size-3 rounded-full bg-primary" />
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold leading-6 text-foreground">
                        {role.title}
                      </p>
                      <p className="mt-1 text-sm text-secondary-foreground">
                        {role.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <ul className="mt-8 space-y-4 text-secondary-foreground">
                {entry.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="grid grid-cols-[auto_1fr] gap-3 leading-7"
                  >
                    <span aria-hidden="true" className="mt-3 size-1 rounded-full bg-primary" />
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
