import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects, type FeaturedProject } from "@/data/featured-projects";
import { cn } from "@/lib/utils";

function ProjectVisual({ project }: { project: FeaturedProject }) {
  const imageDescription = project.slug === "lq-studio"
    ? "LQ Studio booking screen"
    : project.slug === "e-wedding"
      ? "Wedding RSVP screen"
      : `${project.title} product screen`;

  return (
    <div className={cn("grid h-full min-h-72 items-center gap-2 overflow-hidden rounded-lg bg-secondary p-4 sm:min-h-96 sm:gap-4 sm:p-8", project.imageFormat === "desktop" ? "grid-cols-2" : "grid-cols-3")} aria-label={`${project.title} product screens`}>
      {project.images.map((image, index) => (
        <div key={image} aria-label={project.imageFormat === "desktop" ? `${project.title} desktop screen ${index + 1}` : undefined} className={cn("relative min-w-0 overflow-hidden rounded-md bg-card", project.imageFormat === "desktop" ? "aspect-video first:col-span-2" : "aspect-[3/4] even:translate-y-5")}>
          <Image src={image} alt={`${imageDescription} ${index + 1}`} fill sizes={project.imageFormat === "desktop" ? "(min-width: 1024px) 480px, 80vw" : "(min-width: 1024px) 170px, 30vw"} className={project.imageFormat === "desktop" ? "object-contain" : "object-cover object-top"} />
        </div>
      ))}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="w-full scroll-mt-24 py-16 md:py-24">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 id="work-heading" className="max-w-xl text-heading">Selected work</h2>
        <p className="max-w-md text-secondary-foreground">Products shaped around real work, from field tools to booking and personal projects.</p>
      </div>
      <div className="mt-10 grid gap-6 md:mt-12">
        {featuredProjects.map((project, index) => (
          <article key={project.slug} className="grid min-w-0 overflow-hidden rounded-xl bg-card lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="flex min-w-0 flex-col p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span aria-hidden="true" className="font-mono text-2xl font-semibold text-brand-secondary">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm text-secondary-foreground">{project.meta}</p>
              </div>
              <h3 className="mt-7 text-heading-md md:text-heading">{project.title}</h3>
              <p className="mt-4 max-w-lg text-body-lg text-foreground">{project.statement}</p>
              <p className="mt-5 max-w-lg text-secondary-foreground">{project.contribution}</p>
              <p className="mt-5 max-w-lg text-sm leading-6 text-secondary-foreground"><span className="font-medium text-foreground">Outcome: </span>{project.outcome}</p>
              <ul aria-label={`${project.title} technologies`} className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => <li key={technology} className="rounded-sm bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">{technology}</li>)}
              </ul>
              <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 font-medium text-link underline-offset-4 transition-colors duration-fast hover:underline">
                Explore project <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="min-w-0 p-4 pt-0 sm:p-6 sm:pt-0 lg:p-6 lg:pl-0"><ProjectVisual project={project} /></div>
          </article>
        ))}
      </div>
    </section>
  );
}
