import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScreenGallery } from "@/components/custom/ScreenGallery";
import { TechTagList } from "@/components/custom/TechTagList";
import { featuredSlugs, formatCredit, formatProjectType, getProject, projects, type Project } from "@/data/projects";

const featuredProjects = featuredSlugs
  .map((slug) => getProject(slug))
  .filter((project): project is Project => project !== undefined);
const moreProjects = projects.filter(({ slug }) => !(featuredSlugs as readonly string[]).includes(slug));

const linkClass =
  "inline-flex min-h-11 items-center rounded-sm text-label-lg font-semibold text-primary-text underline-offset-4 hover:underline";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="w-full scroll-mt-24 py-16 md:py-24">
      <h2 id="work-heading" className="text-headline-lg">Selected work</h2>

      <ul className="mt-12 border-t border-border">
        {featuredProjects.map((project) => (
          <li key={project.slug} className="border-b border-border py-12">
            <article aria-labelledby={`${project.slug}-title`}>
              <ScreenGallery title={project.title} format={project.format} screens={project.screens} />

              <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                <h3 id={`${project.slug}-title`} className="text-headline-md">{project.title}</h3>
                <p className="text-label-md text-muted-foreground">{formatCredit(project)}</p>
              </div>
              <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground">{project.summary}</p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <TechTagList technologies={project.technologies} label={`${project.title} technologies`} />
                <Link href={`/projects/${project.slug}`} className={linkClass}>
                  View project
                  <span className="sr-only">: {project.title}</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {moreProjects.length > 0 && (
        <div className="mt-16">
          <h3 className="text-headline-sm">More projects</h3>
          <ul className="mt-6 border-t border-border">
            {moreProjects.map((project) => (
              <li key={project.slug} className="border-b border-border">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex min-h-16 items-center justify-between gap-4 rounded-sm py-4"
                >
                  <span className="text-label-lg font-semibold text-foreground transition-colors duration-200 ease-standard group-hover:text-primary-text">
                    {project.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-4 text-label-md text-muted-foreground">
                    {formatProjectType(project)}
                    <ArrowRight aria-hidden="true" className="size-4 transition-colors duration-200 ease-standard group-hover:text-primary-text" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
