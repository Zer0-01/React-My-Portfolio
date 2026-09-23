"use client";

import { motion, useReducedMotion } from "framer-motion";

import { AppProjectCard } from "@/components/AppProjectCard";
import { projects } from "@/data/projects";

export function ProjectTabs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative z-10 mb-20 mt-12 w-full max-w-5xl scroll-mt-8"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-label text-primary">Selected work</p>
        <h2 id="work-heading" className="mt-3 text-heading text-foreground">
          Products built around real needs.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AppProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
