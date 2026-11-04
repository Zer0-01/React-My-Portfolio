import type { Metadata } from "next";

import type { Project } from "@/data/projects";
import { absoluteUrl, personId, siteLocale, siteName, siteUrl, websiteId } from "@/lib/seo";

function projectPath(project: Project): string {
  return `/projects/${project.slug}`;
}

/** e.g. "Flutter mobile app": the main technology, so the page ranks for it. */
export function projectKind(project: Project): string {
  return `${project.technologies[0]} ${project.projectType} app`;
}

/** e.g. "Aonic Agriculture: Flutter mobile app". */
function projectTitle(project: Project): string {
  return `${project.title}: ${projectKind(project)}`;
}

function projectDescription(project: Project): string {
  return `${project.summary} Built by ${siteName} with ${project.technologies.slice(0, 3).join(", ")}.`;
}

/** The link-preview image comes from app/projects/[slug]/opengraph-image.tsx. */
export function getProjectMetadata(project: Project): Metadata {
  const title = projectTitle(project);
  const description = projectDescription(project);

  return {
    title,
    description,
    alternates: { canonical: projectPath(project) },
    openGraph: {
      type: "article",
      locale: siteLocale,
      url: projectPath(project),
      siteName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getProjectStructuredData(project: Project): object {
  const url = absoluteUrl(projectPath(project));
  const externalLinks = [project.links.live, project.links.appStore, project.links.googlePlay].filter(
    (link): link is string => Boolean(link),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.title,
        headline: projectTitle(project),
        description: project.summary,
        abstract: project.overview,
        url,
        dateCreated: String(project.year),
        creator: { "@id": personId },
        isPartOf: { "@id": websiteId },
        keywords: project.technologies.join(", "),
        ...(project.screens[0] && { image: absoluteUrl(project.screens[0]) }),
        ...(externalLinks.length > 0 && { sameAs: externalLinks }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ],
  };
}
