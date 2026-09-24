import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { siteLocale, siteName } from "@/lib/seo";

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Pick<ProjectLayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const pathname = `/projects/${project.slug}`;
  const image = project.heroImage ?? project.images?.[0] ?? "/profile-picture.jpeg";
  const description = project.summary.split("\n")[0].trim();

  return {
    title: project.title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "article",
      locale: siteLocale,
      siteName,
      url: pathname,
      title: project.title,
      description,
      images: [
        {
          url: image,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [image],
    },
  };
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return children;
}
