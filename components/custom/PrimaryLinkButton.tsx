import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PrimaryLinkButtonProps {
  href: string;
  children: React.ReactNode;
  /** Announced to screen readers after the label, e.g. "opens WhatsApp in a new tab". */
  newTabHint: string;
  className?: string;
}

/** DESIGN.md primary button: solid burgundy, white label, darker burgundy on hover, external link. */
export function PrimaryLinkButton({ href, children, newTabHint, className }: PrimaryLinkButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-12 rounded-sm bg-primary px-6 text-label-lg font-semibold text-primary-foreground shadow-none transition-colors duration-200 ease-standard hover:bg-primary-hover",
        className,
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only">({newTabHint})</span>
      </a>
    </Button>
  );
}
