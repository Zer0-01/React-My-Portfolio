"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CursorMark } from "@/components/custom/CursorMark";
import { cn } from "@/lib/utils";

function getProjectSlug(pathname: string): string | null {
  const [, section, slug] = pathname.split("/");
  return section === "projects" && slug ? slug : null;
}

export function BrandMark() {
  const projectSlug = getProjectSlug(usePathname());

  return (
    <div className="flex min-w-0 items-center gap-2 font-mono text-label-md">
      <Link
        href="/"
        className="group flex min-h-11 shrink-0 items-center gap-2 rounded-sm font-semibold text-foreground transition-colors duration-200 ease-standard hover:text-primary-text"
      >
        <CursorMark />
        <span className={cn(projectSlug && "sr-only sm:not-sr-only")}>Anas Zulkifli</span>
      </Link>

      {projectSlug && (
        <nav aria-label="Breadcrumb" className="min-w-0">
          <ol className="flex min-w-0 items-center gap-2 text-muted-foreground">
            <li className="flex shrink-0 items-center gap-2">
              <span aria-hidden="true">/</span>
              <Link
                href="/#work"
                className="flex min-h-11 items-center rounded-sm transition-colors duration-200 ease-standard hover:text-primary-text"
              >
                work
              </Link>
            </li>
            <li className="flex min-w-0 items-center gap-2">
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="truncate text-foreground">
                {projectSlug}
              </span>
            </li>
          </ol>
        </nav>
      )}
    </div>
  );
}
