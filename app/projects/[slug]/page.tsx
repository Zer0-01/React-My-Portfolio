import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/custom/JsonLd";
import { OutlineLinkButton } from "@/components/custom/OutlineLinkButton";
import { ScreenGallery } from "@/components/custom/ScreenGallery";
import { TechTagList } from "@/components/custom/TechTagList";
import { getNextProject, getProject, projects, type ProjectLinks } from "@/data/projects";
import { getProjectMetadata, getProjectStructuredData } from "@/lib/projectSeo";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Every project page is built ahead of time; unknown slugs 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? getProjectMetadata(project) : {};
}

const linkLabels: Record<keyof ProjectLinks, string> = {
  appStore: "App Store",
  googlePlay: "Google Play",
  live: "Live site",
  github: "GitHub",
};

/** Left label column + content, the same rhythm as Experience and Tech stack. */
const rowClass = "grid gap-2 border-b border-border md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8";

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={cn(rowClass, "py-4 md:items-center")}>
      <dt className="text-label-md text-muted-foreground">{label}</dt>
      <dd className="text-body-md text-foreground">{children}</dd>
    </div>
  );
}

function ContentSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className={cn(rowClass, "gap-4 py-12")}>
      <h2 id={id} className="text-headline-sm">{title}</h2>
      <div className="max-w-2xl text-body-md text-muted-foreground">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(project.slug);
  const links = (Object.keys(linkLabels) as (keyof ProjectLinks)[])
    .filter((key) => project.links[key])
    .map((key) => ({ label: linkLabels[key], href: project.links[key] as string }));

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-16">
      <JsonLd data={getProjectStructuredData(project)} />
      <header>
        <h1 className="text-headline-display">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{project.summary}</p>
      </header>

      <dl className="mt-12 border-t border-border">
        <Fact label="Role">{project.role}</Fact>
        <Fact label="For">{project.context}</Fact>
        <Fact label="Year">{project.year}</Fact>
        <Fact label="Platform">{project.platform}</Fact>
        <Fact label="Stack">
          <TechTagList technologies={project.technologies} label={`${project.title} technologies`} />
        </Fact>
        {links.length > 0 && (
          <Fact label="Links">
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <OutlineLinkButton key={link.label} href={link.href} newTabHint="opens in a new tab">
                  {link.label}
                </OutlineLinkButton>
              ))}
            </div>
          </Fact>
        )}
      </dl>

      {(project.screens.length > 0 || project.video) && (
        <div className="border-b border-border py-12">
          <ScreenGallery title={project.title} format={project.format} screens={project.screens} />
          {project.video && (
            <video
              src={project.video}
              controls
              preload="metadata"
              aria-label={`${project.title} demo video`}
              className="aspect-video w-full rounded-sm bg-tag"
            />
          )}
        </div>
      )}

      <ContentSection id="overview-heading" title="Overview">
        <p>{project.overview}</p>
      </ContentSection>

      <ContentSection id="built-heading" title="What I built">
        <ul className="list-disc space-y-2 pl-6 marker:text-muted-foreground">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      {project.outcome && (
        <ContentSection id="outcome-heading" title="Outcome">
          <p>{project.outcome}</p>
        </ContentSection>
      )}

      <nav aria-label="Next project" className="border-b border-border">
        <Link href={`/projects/${nextProject.slug}`} className="group flex min-h-16 items-center justify-between gap-4 rounded-sm py-8">
          <span className="text-label-md text-muted-foreground">Next project</span>
          <span className="flex items-center gap-4 text-headline-sm text-foreground transition-colors duration-200 ease-standard group-hover:text-primary-text">
            {nextProject.title}
            <ArrowRight aria-hidden="true" className="size-5" />
          </span>
        </Link>
      </nav>
    </main>
  );
}
