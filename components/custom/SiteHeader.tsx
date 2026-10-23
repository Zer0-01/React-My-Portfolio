import Link from "next/link";

import { ThemeToggle } from "@/components/custom/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
      <Link href="/" className="min-h-11 content-center font-mono text-base font-semibold text-foreground hover:text-link">Anas Zulkifli</Link>
      <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-6">
        <Link href="/#work" className="min-h-11 content-center text-sm text-secondary-foreground hover:text-link">Work</Link>
        <Link href="/#experience" className="hidden min-h-11 content-center text-sm text-secondary-foreground hover:text-link sm:block">Experience</Link>
        <a href="https://wa.me/601154066082" target="_blank" rel="noopener noreferrer" className="hidden min-h-11 content-center text-sm text-secondary-foreground hover:text-link sm:block">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
