import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const cvUrl =
  "https://docs.google.com/document/d/1Ft2fg1_lMUqF9WITtQ9AK5HUFbL3ZzJd/edit?usp=drive_link&ouid=113577497045470240069&rtpof=true&sd=true";

const profileLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry" },
  { label: "GitHub", href: "https://github.com/Zer0-01" },
  { label: "View CV", href: cvUrl },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="grid min-h-[calc(100svh-5rem)] w-full items-center gap-10 py-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)] md:gap-16 md:py-16">
      <div className="min-w-0">
        <p className="text-sm font-medium text-link">Anas Zulkifli, Product-focused developer</p>
        <h1 id="hero-heading" className="mt-6 max-w-3xl text-display text-foreground md:text-[clamp(3.5rem,5.2vw,5rem)]">
          I build digital products from idea to launch.
        </h1>
        <p className="mt-7 max-w-xl text-body-lg text-secondary-foreground">
          I turn real problems into clear, reliable digital experiences.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild className="h-12 bg-primary-action px-6 text-base font-medium text-primary-foreground shadow-none hover:bg-primary-active">
            <a href="https://wa.me/601154066082" target="_blank" rel="noopener noreferrer"><ArrowUpRight aria-hidden="true" />Let&apos;s work together</a>
          </Button>
          <Button asChild variant="secondary" className="h-12 bg-card px-6 text-base font-medium text-foreground shadow-none hover:bg-accent">
            <Link href="#work"><ArrowDown aria-hidden="true" />View my work</Link>
          </Button>
        </div>
        <nav aria-label="Professional profiles" className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
          {profileLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="min-h-11 content-center text-sm text-secondary-foreground underline-offset-4 transition-colors duration-fast hover:text-link hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-card md:max-w-none">
        <Image src="/profile-picture.jpeg" alt="Portrait of Anas Zulkifli" fill priority sizes="(min-width: 768px) 34vw, 80vw" className="object-cover" />
      </div>
    </section>
  );
}
