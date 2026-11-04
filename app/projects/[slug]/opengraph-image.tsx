import { notFound } from "next/navigation";

import { getProject, projects } from "@/data/projects";
import { ogImageContentType, ogImageSize, renderOgCard } from "@/lib/ogImage";
import { projectKind } from "@/lib/projectSeo";

export const alt = "Project by Anas Zulkifli";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return renderOgCard({
    eyebrow: `${projectKind(project)} · ${project.year}`,
    title: project.title,
    description: project.summary,
    footer: "Anas Zulkifli · Software Engineer",
  });
}
