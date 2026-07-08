import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/data/projects";

type AppProjectCardProps = Pick<
  Project,
  | "slug"
  | "title"
  | "summary"
  | "pitch"
  | "projectType"
  | "role"
  | "year"
  | "technologies"
  | "github"
  | "featured"
>;

export function AppProjectCard({
  slug,
  title,
  summary,
  pitch,
  projectType,
  role,
  year,
  technologies,
  github,
  featured,
}: AppProjectCardProps) {
  return (
    <Card className="surface-card h-full gap-0 overflow-hidden py-0 transition-colors hover:border-primary/40">
      <CardHeader className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          {featured ? (
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em]">
              Featured
            </span>
          ) : null}
          {projectType ? (
            <span className="text-muted-foreground rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
              {projectType}
            </span>
          ) : null}
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
          <CardDescription className="text-sm leading-6">
            {pitch}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 px-6 pb-6">
        <p className="text-muted-foreground text-sm leading-6">{summary}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
              Role
            </p>
            <p className="mt-2">{role ?? "Contributor"}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
              Year
            </p>
            <p className="mt-2">{year ?? "Recent"}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="bg-muted text-muted-foreground rounded-md border px-2.5 py-1 text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between border-t px-6 py-4">
        <Link
          href={`/projects/${slug}`}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          View Case Study
        </Link>
        <div className="flex items-center gap-3">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository for ${title}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
          ) : null}
          <ArrowUpRight className="text-muted-foreground size-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
