import { useEffect, useState } from "react";

/**
 * Tracks which section crosses a thin band near the middle of the viewport.
 * Returns null when disabled (e.g. off the home page) or above the first section.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    const intersecting = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set(entry.target.id, entry.isIntersecting);
        }
        setActiveId(ids.find((id) => intersecting.get(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? activeId : null;
}
