"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";

const cvUrl =
  "https://docs.google.com/document/d/1Ft2fg1_lMUqF9WITtQ9AK5HUFbL3ZzJd/edit?usp=drive_link&ouid=113577497045470240069&rtpof=true&sd=true";

const profileLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry",
  },
  { label: "GitHub", href: "https://github.com/Zer0-01" },
  { label: "View CV", href: cvUrl },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[80svh] w-full items-center py-16 md:py-24"
    >
      <div className="flex max-w-4xl flex-col items-start">
        <div className="flex items-center gap-4">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-card md:size-20"
          >
            <Image
              src="/profile-picture.jpeg"
              alt="Portrait of Anas Zulkifli"
              fill
              sizes="(min-width: 768px) 80px, 64px"
              className="object-cover"
              priority
            />
          </motion.div>

          <div>
            <p className="font-semibold text-foreground">Anas Zulkifli</p>
            <p className="mt-1 font-mono text-label text-secondary-foreground">
              Product-focused developer
            </p>
          </div>
        </div>

        <h1
          id="hero-heading"
          className="mt-8 max-w-4xl text-display text-foreground"
        >
          I build digital products from idea to launch.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I turn real problems into clear, reliable digital experiences—taking
          ownership from early thinking through development and release.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild className="h-12 px-6 text-base font-semibold">
            <a
              href="https://wa.me/601154066082"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s work together
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 border-border bg-transparent px-6 text-base font-semibold"
          >
            <a href="#work">
              View my work
              <ArrowDown aria-hidden="true" />
            </a>
          </Button>
        </div>

        <nav
          aria-label="Professional profiles"
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          {profileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm font-mono text-label text-secondary-foreground underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
