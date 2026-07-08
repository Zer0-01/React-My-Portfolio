import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-spacing">
      <div className="page-shell space-y-10">
        <Button asChild variant="ghost" className="-ml-3 rounded-xl">
          <Link href="/">
            <ChevronLeft />
            Back to Home
          </Link>
        </Button>

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="section-label">
              / {project.projectType} / {project.period ?? project.year}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground max-w-3xl text-base leading-7 sm:text-lg">
              {project.pitch}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-muted text-muted-foreground rounded-md border px-3 py-1 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <aside className="surface-card p-6">
            <dl className="grid gap-5 text-sm">
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                  Role
                </dt>
                <dd className="mt-2">{project.role ?? "Contributor"}</dd>
              </div>
              {project.company ? (
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                    Company
                  </dt>
                  <dd className="mt-2">{project.company}</dd>
                </div>
              ) : null}
              {project.organization ? (
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                    Organization
                  </dt>
                  <dd className="mt-2">{project.organization}</dd>
                </div>
              ) : null}
              {project.client ? (
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                    Client
                  </dt>
                  <dd className="mt-2">{project.client}</dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="surface-card p-6">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
              Problem
            </p>
            <p className="mt-3 text-sm leading-7">{project.problem}</p>
          </article>
          <article className="surface-card p-6">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
              Solution
            </p>
            <p className="mt-3 text-sm leading-7">{project.solution}</p>
          </article>
          <article className="surface-card p-6">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
              Result
            </p>
            <p className="mt-3 text-sm leading-7">{project.result}</p>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <article className="surface-card p-6 sm:p-8">
              <p className="section-label">/ OVERVIEW</p>
              <p className="mt-4 text-muted-foreground text-sm leading-7 sm:text-base">
                {project.description}
              </p>
            </article>

            {project.images?.length ? (
              <section className="space-y-4">
                <p className="section-label">/ GALLERY</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div
                      key={image}
                      className="surface-card overflow-hidden p-3"
                    >
                      <div className="bg-muted relative aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={image}
                          alt={`${project.title} preview ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {project.video ? (
              <section className="space-y-4">
                <p className="section-label">/ DEMO</p>
                <div className="surface-card overflow-hidden p-3">
                  <div className="bg-muted aspect-video overflow-hidden rounded-xl">
                    <video
                      src={project.video}
                      controls
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </section>
            ) : null}

            <div className="grid gap-6 md:grid-cols-2">
              {project.features?.length ? (
                <article className="surface-card p-6">
                  <p className="section-label">/ FEATURES</p>
                  <ul className="mt-4 grid gap-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-muted-foreground flex gap-3 text-sm leading-6"
                      >
                        <span className="bg-primary mt-2 size-1.5 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}

              {project.outcomes?.length ? (
                <article className="surface-card p-6">
                  <p className="section-label">/ OUTCOMES</p>
                  <ul className="mt-4 grid gap-3">
                    {project.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="text-muted-foreground flex gap-3 text-sm leading-6"
                      >
                        <span className="bg-primary mt-2 size-1.5 rounded-full" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>
          </div>

          <aside className="space-y-4">
            {project.link ? (
              <Button asChild className="h-12 w-full rounded-xl">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Preview
                  <ExternalLink />
                </a>
              </Button>
            ) : null}

            {project.github ? (
              <Button asChild variant="outline" className="h-12 w-full rounded-xl">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                  <Github />
                </a>
              </Button>
            ) : null}

            {project.storeUrl?.ios ? (
              <a
                href={project.storeUrl.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card block p-4 text-sm transition-colors hover:border-primary/40"
              >
                App Store
              </a>
            ) : null}

            {project.storeUrl?.android ? (
              <a
                href={project.storeUrl.android}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card block p-4 text-sm transition-colors hover:border-primary/40"
              >
                Google Play
              </a>
            ) : null}
          </aside>
        </section>
      </div>
    </main>
  );
}
