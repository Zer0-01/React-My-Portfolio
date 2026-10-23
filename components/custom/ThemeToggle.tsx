"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = mounted
    ? `Switch to ${isDark ? "light" : "dark"} theme`
    : "Toggle color theme";

  return (
    <div>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="size-11 rounded-md bg-secondary text-foreground shadow-none hover:bg-accent hover:text-accent-foreground"
        aria-label={label}
        disabled={!mounted}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {mounted && isDark ? (
          <Sun aria-hidden="true" />
        ) : (
          <Moon aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
