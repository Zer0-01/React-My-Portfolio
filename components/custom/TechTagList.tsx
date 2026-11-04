import { cn } from "@/lib/utils";

interface TechTagListProps {
  technologies: string[];
  /** Accessible name for the list, e.g. "LQ Studio technologies". */
  label: string;
  className?: string;
}

/** DESIGN.md technology tags: compact neutral chips with secondary text, 4px corners. */
export function TechTagList({ technologies, label, className }: TechTagListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {technologies.map((technology) => (
        <li key={technology} className="rounded-sm bg-tag p-2 text-label-sm text-tag-foreground">
          {technology}
        </li>
      ))}
    </ul>
  );
}
