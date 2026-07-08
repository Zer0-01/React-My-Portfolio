import { Send } from "lucide-react";
import { SectionHeading } from "@/components/custom/section-heading";
import { contactLinks } from "@/data/contact";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing border-t">
      <div className="page-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="surface-card p-6 sm:p-8">
          <SectionHeading
            label="/ CONTACT"
            title="Interested in working together or discussing a role?"
            description="This site is frontend-only for now, so the direct links are the active contact paths. The form is included to show the intended contact experience and information hierarchy."
          />

          <div className="mt-8 grid gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-panel flex items-center justify-between gap-4 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{link.label}</p>
                      <p className="text-muted-foreground text-sm">{link.value}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm">Open</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="section-label">/ MESSAGE</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Send a message
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                Form submission is not connected to a backend in this version,
                but the UI reflects the intended contact flow for a future
                integration.
              </p>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-background h-12 rounded-xl border px-4 text-sm"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-background h-12 rounded-xl border px-4 text-sm"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role, product, or collaboration."
                  rows={6}
                  className="bg-background rounded-xl border px-4 py-3 text-sm"
                />
              </div>

              <Button type="button" className="h-12 rounded-xl">
                <Send />
                Frontend-only form
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
