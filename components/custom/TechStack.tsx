"use client";

import { motion, useReducedMotion } from "framer-motion";

import { techStack } from "@/data/tech-stack";

export function TechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="w-full max-w-5xl scroll-mt-8 py-8 md:py-16"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-label text-primary">Tech stack</p>
        <h2 id="tech-stack-heading" className="mt-3 text-heading text-foreground">
          A practical stack for building and shipping complete products.
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          I work across interfaces, applications, services, and delivery—choosing
          tools around the product rather than the platform.
        </p>
      </div>

      <div className="mt-10 grid border-b border-border md:mt-14 md:grid-cols-2">
        {techStack.map((group, index) => (
          <motion.article
            key={group.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="border-t border-border py-8 md:px-8 md:py-10 md:odd:pl-0 md:even:border-l md:even:pr-0"
          >
            <div className="flex items-baseline gap-3">
              <span aria-hidden="true" className="font-mono text-label text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
            </div>

            <p className="mt-3 max-w-md pl-8 leading-7 text-muted-foreground">
              {group.description}
            </p>

            <ul aria-label={`${group.title} technologies`} className="mt-6 flex flex-wrap gap-2 pl-8">
              {group.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-label text-secondary-foreground"
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
