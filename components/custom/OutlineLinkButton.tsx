import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OutlineLinkButtonProps {
  href: string;
  children: React.ReactNode;
  /** Announced to screen readers after the label, e.g. "opens WhatsApp in a new tab". */
  newTabHint: string;
  className?: string;
}

/** DESIGN.md secondary button: transparent fill, thin burgundy outline, external link. */
export function OutlineLinkButton({ href, children, newTabHint, className }: OutlineLinkButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "h-10 rounded-sm border-primary-outline bg-transparent px-4 text-label-lg font-semibold text-primary-text shadow-none transition-colors duration-200 ease-standard hover:bg-tag hover:text-primary-text dark:border-primary-outline dark:bg-transparent dark:hover:bg-tag",
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
