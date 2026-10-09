"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { featuredProjects, type FeaturedProject } from "@/data/featured-projects";
import { cn } from "@/lib/utils";

function ProjectVisual({ project }: { project: FeaturedProject }) {
  const isMobile = project.imageFormat === "mobile";

  return (
    <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-lg bg-secondary p-5 sm:h-[28rem] sm:p-8" aria-label={`${project.title} product screens`}>
      <div className={cn("flex h-full w-full items-center justify-center gap-2 sm:gap-4", isMobile ? "max-w-lg" : "max-w-2xl")}>
        {project.images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "relative overflow-hidden rounded-md bg-card",
              isMobile
                ? "h-[82%] min-w-0 flex-1 first:h-[72%] last:h-[72%]"
                : "h-[65%] min-w-0 flex-1 first:h-[55%] last:h-[55%]",
              index === 1 && "z-10",
            )}
          >
            <Image
              src={image}
              alt={`${project.title} product screen ${index + 1}`}
              fill
              sizes={isMobile ? "(min-width: 640px) 180px, 30vw" : "(min-width: 640px) 240px, 30vw"}
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SelectedWork() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-heading" className="w-full scroll-mt-12 py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-link">Selected work</p>
        <h2 id="work-heading" className="mt-3 text-heading">Products built around real needs.</h2>
        <p className="mt-5 text-body-lg text-secondary-foreground">
          A selection of products I helped take from problem to working experience.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:mt-12">
        {featuredProjects.map((project) => (
          <motion.article
            key={project.slug}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid overflow-hidden rounded-xl bg-card lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
          >
            <div className="flex flex-col p-6 sm:p-10 lg:p-12">
              <p className="text-sm text-secondary-foreground">{project.meta}</p>
              <h3 className="mt-4 text-heading-md">{project.title}</h3>
              <p className="mt-4 text-body-lg text-foreground">{project.statement}</p>
              <p className="mt-5 text-secondary-foreground">{project.contribution}</p>
              <div className="mt-6 rounded-md bg-secondary p-4">
                <p className="text-sm font-medium text-foreground">Outcome</p>
                <p className="mt-2 text-sm leading-6 text-secondary-foreground">{project.outcome}</p>
              </div>
              <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li key={technology} className="rounded-sm bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
                    {technology}
                  </li>
                ))}
              </ul>
              <Link
                href={`/projects/${project.slug}`}
                className="group mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-md font-medium text-link underline-offset-4 transition-colors duration-fast hover:text-primary-active hover:underline focus-visible:outline focus-visible:outline-2"
              >
                Explore project <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-fast group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
            <div className="p-4 pt-0 sm:p-6 sm:pt-0 lg:p-6 lg:pl-0">
              <ProjectVisual project={project} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
