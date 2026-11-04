"use client";

import { useState, type FocusEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { BrandMark } from "@/components/custom/BrandMark";
import { ContactButton } from "@/components/custom/ContactButton";
import { MobileMenu } from "@/components/custom/MobileMenu";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { navSectionIds, navSections } from "@/data/navigation";
import { useActiveSection } from "@/lib/useActiveSection";
import { useHeaderScroll } from "@/lib/useHeaderScroll";
import { cn } from "@/lib/utils";

const easeStandard = [0.4, 0, 0.2, 1] as const;

function NavLinks({ activeId }: { activeId: string | null }) {
  return (
    <ul className="flex items-center gap-2">
      {navSections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <li key={section.id}>
            <Link
              href={`/#${section.id}`}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative flex min-h-11 items-center rounded-sm px-2 text-label-md text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground",
                isActive && "text-foreground",
              )}
            >
              {section.label}
              {isActive && (
                <motion.span
                  layoutId="nav-active-indicator"
                  aria-hidden="true"
                  className="absolute inset-x-2 bottom-1 h-0.5 bg-primary-text"
                  transition={{ duration: 0.25, ease: easeStandard }}
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const isHome = usePathname() === "/";
  const activeId = useActiveSection(navSectionIds, isHome);
  const { floating, hidden } = useHeaderScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);

  // Never slide away from a keyboard user who is tabbing through the bar.
  const handleFocus = (event: FocusEvent<HTMLElement>) => {
    setHasKeyboardFocus(event.target.matches(":focus-visible"));
  };
  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setHasKeyboardFocus(false);
  };

  const isHidden = hidden && !hasKeyboardFocus && !menuOpen;

  return (
    <motion.header
      className="sticky top-0 z-40 h-20 px-5 md:px-8"
      initial={false}
      animate={{ y: isHidden ? "-100%" : 0 }}
      transition={{ duration: 0.2, ease: easeStandard }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center">
        {/* Negative margins let the floating surface extend past the content edge without shifting content. */}
        <div
          className={cn(
            "-mx-3 flex h-14 flex-1 items-center justify-between gap-4 rounded-sm border border-transparent px-3 transition-colors duration-200 ease-standard md:-mx-4 md:px-4",
            floating && "border-border bg-surface",
          )}
        >
          <BrandMark />

          <nav aria-label="Main navigation" className="hidden items-center gap-4 md:flex">
            <NavLinks activeId={activeId} />
            <ContactButton />
            <ThemeToggle />
          </nav>

          <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} activeId={activeId} />
        </div>
      </div>
    </motion.header>
  );
}
