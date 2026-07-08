import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom/theme-toggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const resumeHref =
  "https://docs.google.com/document/d/1Ft2fg1_lMUqF9WITtQ9AK5HUFbL3ZzJd/edit?usp=drive_link&ouid=113577497045470240069&rtpof=true&sd=true";

export function SiteHeader() {
  return (
    <header className="bg-background/85 sticky top-0 z-50 border-b backdrop-blur">
      <div className="page-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-xl border border-primary/20 text-sm font-semibold">
              AZ
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight">Anas Zulkifli</p>
              <p className="text-muted-foreground text-xs">Software Engineer</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="rounded-xl px-4">
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                <FileText />
                Resume
              </a>
            </Button>
          </div>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bg-background text-muted-foreground hover:text-foreground rounded-full border px-3 py-1.5 text-xs whitespace-nowrap transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
