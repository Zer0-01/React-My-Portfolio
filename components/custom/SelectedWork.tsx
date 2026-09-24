"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  featuredProjects,
  type FeaturedProject,
} from "@/data/featured-projects";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  project: FeaturedProject;
}

interface DesktopFrameProps {
  image: string;
  projectTitle: string;
  imageIndex: number;
}

function DesktopFrame({
  image,
  projectTitle,
  imageIndex,
}: DesktopFrameProps) {
  return (
    <figure
      aria-label={`${projectTitle} desktop screen ${imageIndex + 1}`}
      className={cn(
        "absolute w-[88%] overflow-hidden rounded-md border border-border bg-background shadow-sm sm:w-[82%]",
        imageIndex === 0 && "left-0 top-3 z-10 -rotate-1",
        imageIndex === 1 &&
          "left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2",
        imageIndex === 2 && "bottom-3 right-0 z-20 rotate-1",
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-6 items-center gap-1.5 border-b border-border bg-card px-3"
      >
        <span className="size-1.5 rounded-full bg-primary/70" />
        <span className="size-1.5 rounded-full bg-secondary-foreground/50" />
        <span className="size-1.5 rounded-full bg-border" />
      </div>
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={`${projectTitle} ${
            imageIndex === 0 && projectTitle === "LQ Studio"
              ? "booking screen"
              : imageIndex === 0
                ? "screen 1"
                : `supporting screen ${imageIndex + 1}`
          }`}
          fill
          sizes="(min-width: 1024px) 480px, 82vw"
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}

function ProjectVisual({ project }: ProjectVisualProps) {
  const isMobile = project.imageFormat === "mobile";

  return (
    <div
      className={cn(
        "relative h-[24rem] overflow-hidden rounded-lg border border-border bg-card sm:h-[30rem] lg:h-[32rem]",
        isMobile ? "px-3 pt-8 sm:px-8" : "p-3 sm:p-5",
      )}
      aria-label={`${project.title} product screens`}
    >
      {isMobile ? (
        <div className="relative mx-auto h-full max-w-xl">
          {project.images.map((image, imageIndex) => (
            <div
              key={image}
              className={cn(
                "absolute bottom-0 overflow-hidden rounded-md border border-border bg-background shadow-sm",
                imageIndex === 0 &&
                  "left-0 z-10 h-[82%] w-[38%] -rotate-2 sm:left-[3%]",
                imageIndex === 1 &&
                  "left-1/2 z-20 h-[94%] w-[42%] -translate-x-1/2",
                imageIndex === 2 &&
                  "right-0 z-10 h-[82%] w-[38%] rotate-2 sm:right-[3%]",
              )}
            >
              <Image
                src={image}
                alt={`${project.title} ${imageIndex === 0 ? "product screen" : `supporting screen ${imageIndex + 1}`}`}
                fill
                sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 38vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative h-full">
          {project.images.map((image, imageIndex) => (
            <DesktopFrame
              key={image}
              image={image}
              projectTitle={project.title}
              imageIndex={imageIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SelectedWork() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full max-w-5xl scroll-mt-8 py-8 md:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-label text-primary">Selected work</p>
        <h2 id="work-heading" className="mt-3 text-heading text-foreground">
          Products built around real needs.
        </h2>
        <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
          A selection of products I helped take from problem to working
          experience.
        </p>
      </div>

      <div className="mt-10 border-b border-border md:mt-14">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-10 border-t border-border py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-14 lg:py-20"
          >
            <div className={cn(index % 2 === 1 && "lg:order-2")}>
              <p className="font-mono text-label text-secondary-foreground">
                {project.meta}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-xl font-medium leading-8 text-foreground">
                {project.statement}
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                {project.contribution}
              </p>

              <div className="mt-7 border-l-2 border-primary pl-4">
                <p className="font-mono text-label text-primary">Outcome</p>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {project.outcome}
                </p>
              </div>

              <ul
                aria-label={`${project.title} technologies`}
                className="mt-7 flex flex-wrap gap-2"
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-label text-secondary-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(index % 2 === 1 && "lg:order-1")}>
              <ProjectVisual project={project} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
