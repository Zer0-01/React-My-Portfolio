import Image from "next/image";
import { ArrowRight, FileText, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const resumeHref =
  "https://docs.google.com/document/d/1Ft2fg1_lMUqF9WITtQ9AK5HUFbL3ZzJd/edit?usp=drive_link&ouid=113577497045470240069&rtpof=true&sd=true";

const socialLinks = [
  {
    href: "https://github.com/Zer0-01",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://wa.me/601154066082",
    label: "WhatsApp",
    icon: MessageCircle,
  },
];

const highlights = [
  "Mobile and web product development",
  "Clean UI with practical engineering tradeoffs",
  "Portfolio and client work across real use cases",
];

export function HeroSection() {
  return (
    <section className="section-spacing">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="section-label">/ SOFTWARE ENGINEER</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Building practical digital products with clean interfaces and
              scalable structure.
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
              I design and build mobile and web experiences that are easy to
              use, technically sound, and ready for real users. My work focuses
              on product clarity, responsive UI, and maintainable implementation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl px-6">
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                <FileText />
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-6">
              <a href="#projects">
                Selected Projects
                <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  className="rounded-xl px-4"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="surface-panel p-4">
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card relative overflow-hidden p-6 sm:p-8">
          <div className="bg-primary/8 absolute inset-x-6 top-6 h-px" />
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Current Focus</p>
                <p className="text-muted-foreground text-sm">
                  Mobile and frontend product engineering
                </p>
              </div>
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                Open to roles
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border">
              <Image
                src="/profile-picture.jpeg"
                alt="Portrait of Anas Zulkifli"
                width={800}
                height={960}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                  Location
                </dt>
                <dd className="mt-2 text-sm">Malaysia</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                  Primary Stack
                </dt>
                <dd className="mt-2 text-sm">Flutter, Next.js, TypeScript</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                  Product Style
                </dt>
                <dd className="mt-2 text-sm">Clean, responsive, user-focused</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                  Work Mode
                </dt>
                <dd className="mt-2 text-sm">Client and product delivery</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
