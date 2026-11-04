"use client";

import { useId, useState } from "react";
import Image from "next/image";

import type { FeaturedProject } from "@/data/featured-projects";
import { cn } from "@/lib/utils";

type ScreenGalleryProps = Pick<FeaturedProject, "title" | "format" | "screens">;

/** Mobile apps: every screen side by side at the real phone ratio (first three on small viewports). */
function MobileScreens({ title, screens }: Omit<ScreenGalleryProps, "format">) {
  return (
    <ul className="grid grid-cols-3 gap-4 rounded-sm bg-tag p-4 sm:p-8 md:grid-cols-5">
      {screens.map((src, index) => (
        <li
          key={src}
          className={cn("relative aspect-[591/1280] overflow-hidden rounded-sm bg-surface", index >= 3 && "hidden md:block")}
        >
          <Image
            src={src}
            alt={`${title} screen ${index + 1} of ${screens.length}`}
            fill
            sizes="(min-width: 768px) 200px, 30vw"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

/** Web apps: one large screen, with real thumbnails the visitor uses to switch screens. */
function DesktopScreens({ title, screens }: Omit<ScreenGalleryProps, "format">) {
  const [selected, setSelected] = useState(0);
  const panelId = useId();

  return (
    <div className="rounded-sm bg-tag p-4 sm:p-8">
      <div id={panelId} className="relative aspect-video overflow-hidden rounded-sm bg-surface">
        {/* Every screen stays mounted so each one is already loaded before it is shown.
            The selected screen fades in on top; the previous one hides only after that fade ends. */}
        {screens.map((src, index) => {
          const isSelected = index === selected;
          return (
            <div
              key={src}
              aria-hidden={!isSelected}
              className={cn(
                "absolute inset-0 transition-opacity duration-150 ease-standard",
                isSelected ? "z-10 opacity-100" : "opacity-0 delay-150",
              )}
            >
              <Image
                src={src}
                alt={isSelected ? `${title} screen ${index + 1} of ${screens.length}` : ""}
                fill
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover object-top"
              />
            </div>
          );
        })}
      </div>

      <ul
        aria-label={`${title} screens`}
        className="mt-4 grid max-w-md gap-2"
        style={{ gridTemplateColumns: `repeat(${screens.length}, minmax(0, 1fr))` }}
      >
        {screens.map((src, index) => {
          const isSelected = index === selected;
          return (
            <li key={src}>
              <button
                type="button"
                aria-label={`Show screen ${index + 1} of ${screens.length}`}
                aria-pressed={isSelected}
                aria-controls={panelId}
                onClick={() => setSelected(index)}
                className={cn(
                  "relative block aspect-video w-full overflow-hidden rounded-sm border-2 bg-surface transition-colors duration-200 ease-standard",
                  isSelected ? "border-primary-outline" : "border-transparent hover:border-muted-foreground",
                )}
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover object-top" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ScreenGallery({ format, ...props }: ScreenGalleryProps) {
  return format === "mobile" ? <MobileScreens {...props} /> : <DesktopScreens {...props} />;
}
