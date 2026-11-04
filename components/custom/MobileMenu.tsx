"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { ContactButton } from "@/components/custom/ContactButton";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { Button } from "@/components/ui/button";
import { formatNavIndex, navSections } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeId: string | null;
}

const iconButtonClass =
  "size-11 rounded-sm text-foreground shadow-none hover:bg-tag hover:text-foreground dark:hover:bg-tag";

export function MobileMenu({ open, onOpenChange, activeId }: MobileMenuProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <Button type="button" variant="ghost" size="icon" className={cn(iconButtonClass, "md:hidden")} aria-label="Open menu">
          <Menu aria-hidden="true" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-50 flex flex-col bg-background px-5 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 md:hidden"
        >
          <div className="flex h-20 shrink-0 items-center justify-between">
            <Dialog.Title className="font-mono text-label-md text-muted-foreground">Menu</Dialog.Title>
            <Dialog.Close asChild>
              <Button type="button" variant="ghost" size="icon" className={iconButtonClass} aria-label="Close menu">
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile navigation" className="mt-8">
            <ul className="flex flex-col gap-2">
              {navSections.map((section, index) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <Dialog.Close asChild>
                      <Link
                        href={`/#${section.id}`}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "flex min-h-14 items-baseline gap-4 rounded-sm font-heading text-headline-md text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground",
                          isActive && "text-foreground",
                        )}
                      >
                        <span aria-hidden="true" className="font-mono text-label-md text-muted-foreground dark:text-gold">
                          {formatNavIndex(index)}
                        </span>
                        {section.label}
                      </Link>
                    </Dialog.Close>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-border py-8">
            <ContactButton className="h-11 flex-1" />
            <ThemeToggle />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
