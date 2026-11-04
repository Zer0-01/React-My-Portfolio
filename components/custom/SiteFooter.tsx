import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { CursorMark } from "@/components/custom/CursorMark";
import { OutlineLinkButton } from "@/components/custom/OutlineLinkButton";
import { PrimaryLinkButton } from "@/components/custom/PrimaryLinkButton";
import { navSections } from "@/data/navigation";
import { contactHref, cvHref, email, githubHref, linkedinHref } from "@/data/profile";

const profileLinks = [
  { label: "LinkedIn", href: linkedinHref },
  { label: "GitHub", href: githubHref },
];

const footerLinkClass =
  "inline-flex min-h-11 items-center rounded-sm text-label-md text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground";

export function SiteFooter() {
  // Set at build time; refreshed on every deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <section aria-labelledby="footer-cta-heading" className="border-t border-border py-16 md:py-24">
        <h2 id="footer-cta-heading" className="text-headline-md">Have a product in mind?</h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PrimaryLinkButton href={contactHref} newTabHint="opens WhatsApp in a new tab">
            Let&apos;s work together
          </PrimaryLinkButton>
          <OutlineLinkButton href={cvHref} newTabHint="opens in a new tab" className="h-12 px-6">
            View CV
          </OutlineLinkButton>
        </div>
        <p className="mt-6 text-body-md text-muted-foreground">
          Or email{" "}
          <a href={`mailto:${email}`} className="rounded-sm text-primary-text underline-offset-4 hover:underline">
            {email}
          </a>
        </p>
      </section>

      <div className="flex flex-col gap-8 border-t border-border py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4">
          <CursorMark />
          <div className="font-mono text-label-md">
            <p className="font-semibold text-foreground">Anas Zulkifli</p>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex gap-12">
          <ul>
            {navSections.map((section) => (
              <li key={section.id}>
                <Link href={`/#${section.id}`} className={footerLinkClass}>{section.label}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                  {link.label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border py-4 text-label-md text-muted-foreground">
        <p>© {year} Anas Zulkifli</p>
        {/* No element has id="top", so browsers scroll to the very top of the page. */}
        <a href="#top" className={footerLinkClass}>
          <span className="flex items-center gap-2">
            Back to top <ArrowUp aria-hidden="true" className="size-4" />
          </span>
        </a>
      </div>
    </footer>
  );
}
