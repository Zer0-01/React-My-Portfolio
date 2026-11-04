import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactHref } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  className?: string;
}

/** Secondary (outlined burgundy) call to action used in the site navigation. */
export function ContactButton({ className }: ContactButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "h-10 rounded-sm border-primary-outline bg-transparent px-4 text-label-lg font-semibold text-primary-text shadow-none transition-colors duration-200 ease-standard hover:bg-tag hover:text-primary-text dark:border-primary-outline dark:bg-transparent dark:hover:bg-tag",
        className,
      )}
    >
      <a href={contactHref} target="_blank" rel="noopener noreferrer">
        Let&apos;s talk
        <ArrowUpRight aria-hidden="true" />
        <span className="sr-only">(opens WhatsApp in a new tab)</span>
      </a>
    </Button>
  );
}
