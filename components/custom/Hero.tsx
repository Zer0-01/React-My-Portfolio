import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

import { LocalTime } from "@/components/custom/LocalTime";
import { OutlineLinkButton } from "@/components/custom/OutlineLinkButton";
import { Button } from "@/components/ui/button";
import { contactHref, cvHref, githubHref, linkedinHref } from "@/data/profile";

const profileLinks = [
  { label: "LinkedIn", href: linkedinHref, Icon: Linkedin },
  { label: "GitHub", href: githubHref, Icon: Github },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="flex min-h-[calc(100svh-5rem)] w-full flex-col justify-center py-16 md:py-24">
      <div className="flex items-center gap-4">
        <Image
          src="/profile-picture.jpeg"
          alt="Portrait of Anas Zulkifli"
          width={64}
          height={64}
          priority
          className="size-16 shrink-0 rounded-sm object-cover"
        />
        <div className="min-w-0 font-mono text-label-md">
          <p className="font-semibold text-foreground">Anas Zulkifli</p>
          <p className="text-muted-foreground">
            Software Engineer <span aria-hidden="true">·</span> Kuala Lumpur <span aria-hidden="true">·</span> <LocalTime />
          </p>
        </div>
      </div>

      <h1 id="hero-heading" className="mt-12 max-w-4xl text-headline-display text-foreground">
        I build digital products from idea to <span className="text-primary-text">launch</span>
        <span aria-hidden="true" className="ml-[0.06em] inline-block h-[0.09em] w-[0.5em] bg-gold" />
      </h1>

      <p className="mt-6 max-w-xl text-body-lg text-muted-foreground">
        I design, build and ship web and mobile apps.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button
          asChild
          className="h-12 rounded-sm bg-primary px-6 text-label-lg font-semibold text-primary-foreground shadow-none transition-colors duration-200 ease-standard hover:bg-primary-hover"
        >
          <a href={contactHref} target="_blank" rel="noopener noreferrer">
            Let&apos;s work together
            <span className="sr-only">(opens WhatsApp in a new tab)</span>
          </a>
        </Button>
        <OutlineLinkButton href={cvHref} newTabHint="opens in a new tab" className="h-12 px-6">
          View CV
        </OutlineLinkButton>

        <ul className="flex items-center gap-2">
          {profileLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="flex size-11 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-200 ease-standard hover:bg-tag hover:text-foreground"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
