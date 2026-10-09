"use client";

import { motion, useReducedMotion } from "framer-motion";

import { techStack } from "@/data/tech-stack";

export function TechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="w-full scroll-mt-12 py-10 md:py-16"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-link">Tech stack</p>
        <h2 id="tech-stack-heading" className="mt-3 text-heading text-foreground">
          A practical stack for building and shipping complete products.
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-secondary-foreground">
          I work across interfaces, applications, services, and delivery—choosing
          tools around the product rather than the platform.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
        {techStack.map((group, index) => (
          <motion.article
            key={group.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-lg bg-card p-6 sm:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span aria-hidden="true" className="text-sm font-medium text-link">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium text-foreground">
                {group.title}
              </h3>
            </div>

            <p className="mt-3 max-w-md pl-8 leading-7 text-secondary-foreground">
              {group.description}
            </p>

            <ul aria-label={`${group.title} technologies`} className="mt-6 flex flex-wrap gap-2 pl-8">
              {group.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-sm bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
