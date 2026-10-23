import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const introduction = project.summary.split("\n")[0].trim();
  const heroImage = project.heroImage ?? project.images?.[0];
  const gallery = project.images?.filter((image) => image !== heroImage) ?? [];
  const attribution = project.company ?? project.organization ?? project.client;

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-8 md:pt-12">
      <Link href="/#work" className="group inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-link underline-offset-4 transition-colors duration-fast hover:underline">
        <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-fast group-hover:-translate-x-1" />
        Back to work
      </Link>

      <header className="mt-10 max-w-4xl md:mt-14">
        <p className="text-sm font-medium text-link">{[project.projectType, project.year].filter(Boolean).join(" / ")}</p>
        <h1 className="mt-4 text-display">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-body-lg text-secondary-foreground">{introduction}</p>
        {(project.role || attribution) && (
          <p className="mt-6 text-sm text-muted-foreground">
            {[project.role, attribution].filter(Boolean).join(" / ")}
          </p>
        )}
      </header>

      {heroImage && (
        <div className={cn("relative mt-10 w-full overflow-hidden rounded-xl bg-secondary md:mt-14", project.projectType === "mobile" ? "aspect-[4/5] sm:aspect-video" : "aspect-video")}>
          <Image src={heroImage} alt={`${project.title} product screen`} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-contain p-4 sm:p-8" />
        </div>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 md:mt-16">
        <div className="space-y-12 md:space-y-16">
          {project.description && (
            <section aria-labelledby="overview-heading" className="max-w-3xl">
              <h2 id="overview-heading" className="text-heading-md">Overview</h2>
              <p className="mt-5 leading-7 text-secondary-foreground">{project.description}</p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-heading-md">What it does</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="rounded-md bg-secondary p-5 text-secondary-foreground">{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <section aria-labelledby="outcomes-heading">
              <h2 id="outcomes-heading" className="text-heading-md">Outcomes</h2>
              <ul className="mt-6 space-y-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 rounded-md bg-card p-5 text-secondary-foreground">
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {gallery.length > 0 && (
            <section aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="text-heading-md">Gallery</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {gallery.map((image, index) => (
                  <div key={image} className={cn("relative overflow-hidden rounded-lg bg-secondary", project.projectType === "mobile" ? "aspect-[4/5]" : "aspect-video")}>
                    <Image src={image} alt={`${project.title} screen ${index + 2}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain p-3 sm:p-5" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.video && (
            <section aria-labelledby="video-heading">
              <h2 id="video-heading" className="text-heading-md">Demo video</h2>
              <video src={project.video} poster={heroImage} controls preload="metadata" aria-label={`${project.title} demo video`} className="mt-6 aspect-video w-full rounded-lg bg-card" />
            </section>
          )}
        </div>

        <aside aria-label="Project details" className="self-start rounded-lg bg-card p-6 sm:p-8">
          <h2 className="text-xl">Technologies</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-sm bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">{technology}</li>
            ))}
          </ul>

          {(project.link || project.github || project.storeUrl?.ios || project.storeUrl?.android) && (
            <div className="mt-8 flex flex-col gap-3">
              {project.link && (
                <Button asChild className="h-11 bg-primary-action text-primary-foreground shadow-none hover:bg-primary-active">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              )}
              {project.github && (
                <Button asChild variant="secondary" className="h-11 shadow-none hover:bg-accent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">View repository <Github aria-hidden="true" /></a>
                </Button>
              )}
              {project.storeUrl?.ios && <a href={project.storeUrl.ios} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center rounded-md text-sm font-medium text-link underline-offset-4 hover:underline">View on the App Store <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></a>}
              {project.storeUrl?.android && <a href={project.storeUrl.android} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center rounded-md text-sm font-medium text-link underline-offset-4 hover:underline">View on Google Play <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></a>}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
