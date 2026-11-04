"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

/** The A_ cursor mark from the favicon; the gold cursor blinks while the logo is hovered or focused. */
function CursorMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-7 shrink-0">
      <rect width="32" height="32" rx="4" className="fill-primary" />
      <path
        className="fill-primary-foreground"
        fillRule="evenodd"
        d="M4 25L10 7H14L20 25H16.6L15.27 21H8.73L7.4 25ZM9.73 18H14.27L12 11.2Z"
      />
      <rect
        x="22"
        y="22"
        width="6"
        height="3"
        className="fill-gold group-hover:animate-cursor-blink group-focus-visible:animate-cursor-blink"
      />
    </svg>
  );
}

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
