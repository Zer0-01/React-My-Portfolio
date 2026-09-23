# Global Design Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Maroon Proof global design tokens, typography, reduced-motion behavior, and an accessible persistent dark/light theme switcher without redesigning the portfolio.

**Architecture:** Keep `app/layout.tsx` server-rendered and place browser-only theme and motion behavior in a narrow `app/providers.tsx` client boundary. `next-themes` owns the root theme class and persistence, `app/globals.css` owns all semantic presentation values, and a focused `ThemeToggle` is the only new UI control.

**Tech Stack:** Next.js 15 App Router, React 19, strict TypeScript, Tailwind CSS 4, shadcn/ui, next-themes 0.4.6, Framer Motion, Lucide React

**Spec:** `docs/superpowers/specs/2026-09-23-global-design-foundation-design.md`

## Global Constraints

- `DESIGN.md` is authoritative for colors, fonts, radii, motion, accessibility, and dark-first theme behavior.
- New visitors start in dark mode; only an explicit light or dark selection is persisted. Do not add a system-theme option.
- Light/dark colors must use the exact approved hex values; do not add an unrelated palette.
- Use Inter for sans text and JetBrains Mono for labels/metadata, with system fallbacks.
- Use shadcn/ui and Tailwind CSS; do not modify any file under `components/ui/`.
- Preserve current page structure, content, and component layout.
- Restrict component edits to theme-sensitive hard-coded colors, typography alignment, focus/accessibility, and restrained removal of legacy glow/gradient decoration.
- Use Framer Motion for React motion and honor `prefers-reduced-motion` globally.
- Do not claim lint or unit-test coverage; the repository has no lint or test script.

## Review Focus

- First visit with no `localStorage.theme`: render dark before hydration without a light flash; verify in Task 5.
- Saved `light` and `dark` values across reloads and tabs: preserve the last explicit choice; verify in Task 5.
- Storage unavailable or blocked: retain a usable dark default and a non-crashing page; verify in Task 5.
- Hydration boundary: no React hydration warning and no misleading enabled toggle before mounting; verify in Tasks 1, 3, and 5.
- Reduced-motion preference: remove nonessential movement without hiding or reordering content; verify in Tasks 1, 2, and 5.

---

### Task 1: Theme and Motion Provider Foundation

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `app/providers.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `ThemeProvider` from `next-themes`; `MotionConfig` from `framer-motion`; `React.ReactNode`.
- Produces: `Providers({ children }: { children: React.ReactNode }): JSX.Element`; root `class` theme contract consumed by `app/globals.css`; font variables `--font-inter` and `--font-jetbrains-mono`.

- [ ] **Step 1: Install the pinned theme dependency**

Run:

```bash
npm install next-themes@0.4.6
```

Expected: `package.json` and `package-lock.json` add `next-themes` with no unrelated dependency changes.

- [ ] **Step 2: Add the narrow client provider**

Create `app/providers.tsx`:

```tsx
"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
```

- [ ] **Step 3: Update the server layout and fonts**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Providers } from "@/app/providers";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Zulkifli",
  description: "Anas Zulkifli's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Run the type/build gate**

Run:

```bash
npx tsc --noEmit
npm run build
```

Expected: both exit 0. The build must not report a server/client boundary or font configuration error.

- [ ] **Step 5: Commit the provider foundation**

```bash
git add package.json package-lock.json app/providers.tsx app/layout.tsx
git commit -m "feat: add persistent theme foundation"
```

### Task 2: Maroon Proof Global Tokens

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: root `.dark` class from Task 1 and font variables `--font-inter`, `--font-jetbrains-mono`.
- Produces: Tailwind color roles, radius roles, typography roles (`text-display`, `text-heading`, `text-body-md`, `text-label`), active browser `color-scheme`, and global reduced-motion behavior.

- [ ] **Step 1: Run a token assertion that demonstrates the old palette fails**

Run:

```bash
node -e 'const c=require("fs").readFileSync("app/globals.css","utf8"); for (const v of ["#7B2540","#D48BA0","#FFFCFA","#160F14","--font-inter"]) if (!c.includes(v)) throw new Error(`missing ${v}`)'
```

Expected: non-zero exit beginning with `Error: missing #7B2540`.

- [ ] **Step 2: Replace the global stylesheet with the semantic foundation**

Keep the two imports and dark custom variant, then define:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
  --text-display: clamp(2.75rem, 7vw, 5.25rem);
  --text-display--line-height: 1.05;
  --text-display--font-weight: 650;
  --text-display--letter-spacing: -0.025em;
  --text-heading: clamp(1.875rem, 4vw, 3.25rem);
  --text-heading--line-height: 1.05;
  --text-heading--font-weight: 650;
  --text-heading--letter-spacing: -0.02em;
  --text-body-md: 1rem;
  --text-body-md--line-height: 1.625;
  --text-body-md--font-weight: 400;
  --text-label: 0.75rem;
  --text-label--line-height: 1.5;
  --text-label--font-weight: 500;
  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 1rem;
  --radius-xl: 1rem;
  --radius-2xl: 1rem;
}

:root {
  color-scheme: light;
  --background: #fffcfa;
  --foreground: #261c22;
  --card: #f6f0f1;
  --card-foreground: #261c22;
  --popover: #ffffff;
  --popover-foreground: #261c22;
  --primary: #7b2540;
  --primary-foreground: #ffffff;
  --secondary: #f6f0f1;
  --secondary-foreground: #675b61;
  --muted: #f6f0f1;
  --muted-foreground: #675b61;
  --accent: #ffffff;
  --accent-foreground: #261c22;
  --destructive: #a32633;
  --destructive-foreground: #ffffff;
  --border: #d8c9d0;
  --input: #d8c9d0;
  --ring: #7b2540;
  --chart-1: #7b2540;
  --chart-2: #675b61;
  --chart-3: #a32633;
  --chart-4: #261c22;
  --chart-5: #d8c9d0;
  --sidebar: #f6f0f1;
  --sidebar-foreground: #261c22;
  --sidebar-primary: #7b2540;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #ffffff;
  --sidebar-accent-foreground: #261c22;
  --sidebar-border: #d8c9d0;
  --sidebar-ring: #7b2540;
}

.dark {
  color-scheme: dark;
  --background: #160f14;
  --foreground: #f7f1f4;
  --card: #21191f;
  --card-foreground: #f7f1f4;
  --popover: #2b2028;
  --popover-foreground: #f7f1f4;
  --primary: #d48ba0;
  --primary-foreground: #25191e;
  --secondary: #21191f;
  --secondary-foreground: #afa1a9;
  --muted: #21191f;
  --muted-foreground: #afa1a9;
  --accent: #2b2028;
  --accent-foreground: #f7f1f4;
  --destructive: #ffb4b4;
  --destructive-foreground: #25191e;
  --border: #483942;
  --input: #483942;
  --ring: #d48ba0;
  --chart-1: #d48ba0;
  --chart-2: #afa1a9;
  --chart-3: #ffb4b4;
  --chart-4: #f7f1f4;
  --chart-5: #483942;
  --sidebar: #21191f;
  --sidebar-foreground: #f7f1f4;
  --sidebar-primary: #d48ba0;
  --sidebar-primary-foreground: #25191e;
  --sidebar-accent: #2b2028;
  --sidebar-accent-foreground: #f7f1f4;
  --sidebar-border: #483942;
  --sidebar-ring: #d48ba0;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-background font-sans text-body-md text-foreground;
  }

  ::selection {
    @apply bg-primary text-primary-foreground;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Use lowercase hex consistently; the values are byte-for-byte equivalent to `DESIGN.md`.

- [ ] **Step 3: Re-run the token assertion with case-insensitive values**

Run:

```bash
node -e 'const c=require("fs").readFileSync("app/globals.css","utf8").toLowerCase(); for (const v of ["#7b2540","#d48ba0","#fffcfa","#160f14","--font-inter","--text-display","--radius-sm: 0.375rem","--radius-md: 0.625rem","--radius-lg: 1rem"]) if (!c.includes(v)) throw new Error(`missing ${v}`)'
```

Expected: exit 0.

- [ ] **Step 4: Verify Tailwind compilation**

Run:

```bash
npx tsc --noEmit
npm run build
```

Expected: both exit 0; Tailwind accepts the compound typography and radius theme variables.

- [ ] **Step 5: Commit global tokens**

```bash
git add app/globals.css
git commit -m "style: align global tokens with design system"
```

### Task 3: Accessible Fixed Theme Switcher

**Files:**
- Create: `components/custom/ThemeToggle.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `useTheme(): { resolvedTheme?: string; setTheme(theme: string): void }` from `next-themes`; shadcn `Button`; semantic classes from Task 2.
- Produces: `ThemeToggle(): JSX.Element`; an action label and tooltip that switch between “Switch to light theme” and “Switch to dark theme.”

- [ ] **Step 1: Add a failing structural assertion**

Run:

```bash
node -e 'const fs=require("fs"); if (!fs.existsSync("components/custom/ThemeToggle.tsx")) throw new Error("ThemeToggle is missing")'
```

Expected: non-zero exit with `ThemeToggle is missing`.

- [ ] **Step 2: Implement the mounted, accessible control**

Create `components/custom/ThemeToggle.tsx`:

```tsx
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
    <div className="group fixed right-6 top-6 z-50 md:right-8 md:top-8">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="size-11 rounded-md border-border bg-card text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
        aria-label={label}
        aria-describedby="theme-toggle-tooltip"
        disabled={!mounted}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {mounted && isDark ? (
          <Sun aria-hidden="true" />
        ) : (
          <Moon aria-hidden="true" />
        )}
      </Button>
      <span
        id="theme-toggle-tooltip"
        role="tooltip"
        className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-sm border border-border bg-popover px-2 py-1 font-mono text-label text-popover-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
      </span>
    </div>
  );
}
```

- [ ] **Step 3: Mount the switcher inside the provider**

In `app/layout.tsx`, import:

```tsx
import { ThemeToggle } from "@/components/custom/ThemeToggle";
```

Then change the provider content to:

```tsx
<Providers>
  <ThemeToggle />
  {children}
</Providers>
```

- [ ] **Step 4: Run structural, type, and build checks**

Run:

```bash
node -e 'const c=require("fs").readFileSync("components/custom/ThemeToggle.tsx","utf8"); for (const v of ["size-11","aria-label={label}","role=\"tooltip\"","disabled={!mounted}"]) if (!c.includes(v)) throw new Error(`missing ${v}`)'
npx tsc --noEmit
npm run build
```

Expected: all commands exit 0, with no hydration-related build warning.

- [ ] **Step 5: Commit the switcher**

```bash
git add components/custom/ThemeToggle.tsx app/layout.tsx
git commit -m "feat: add accessible theme switcher"
```

### Task 4: Replace Dark-Only Component Styling

**Files:**
- Modify: `components/custom/CTAButton.tsx`
- Modify: `components/custom/Hero.tsx`
- Modify: `components/custom/ProjectTabs.tsx`
- Modify: `components/custom/SkillsGrid.tsx`
- Modify: `components/custom/Stats.tsx`
- Modify: `components/AppProjectCard.tsx`
- Modify: `app/projects/[slug]/page.tsx`

**Interfaces:**
- Consumes: semantic Tailwind color, font, radius, and duration tokens from Task 2.
- Produces: unchanged component APIs and layouts that render coherently in both themes.

- [ ] **Step 1: Capture the failing hard-coded-color scan**

Run:

```bash
rg -n 'bg-(black|white)|border-white|ring-white|via-white|rgba\(139,0,0|shadow-\[0_0' components/custom components/AppProjectCard.tsx 'app/projects/[slug]/page.tsx'
```

Expected: matches in all or most listed files, proving the light-theme cleanup remains incomplete.

- [ ] **Step 2: Normalize CTA and hero colors**

Apply these exact class replacements in `components/custom/CTAButton.tsx`:

```text
w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-sm py-6 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(139,0,0,0.6)] hover:shadow-[0_0_30px_-5px_rgba(139,0,0,0.8)] border border-primary/50 relative overflow-hidden group uppercase tracking-wider
→ w-full border border-primary/50 bg-primary py-6 font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary/90

w-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground font-semibold rounded-sm py-6 transition-all duration-300 uppercase tracking-wider bg-black/40 backdrop-blur-md
→ w-full border-border bg-card py-6 font-semibold text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground
```

Delete the decorative `<span>` inside the primary link whose class begins `absolute inset-0 bg-gradient-to-r`. Keep both links, labels, and motion wrappers unchanged.

Apply these exact changes in `components/custom/Hero.tsx`:

```text
Delete: <div className="absolute ... bg-primary/20 ... blur-[100px] ..." />
shadow-[0_0_40px_-10px_rgba(139,0,0,0.6)] → shadow-sm
ring-white/10 → ring-border
text-4xl md:text-6xl font-black text-foreground tracking-tighter drop-shadow-md → text-display font-semibold text-foreground
text-lg md:text-2xl text-secondary-foreground font-semibold tracking-[0.2em] uppercase → font-mono text-label text-secondary-foreground
transition-all duration-300 → transition-colors duration-200
```

Keep existing content, image behavior, social links, motion declarations, and responsive layout.

- [ ] **Step 3: Normalize tabs, skills, stats, and project cards**

Apply these exact replacements:

```text
# components/custom/ProjectTabs.tsx
bg-black/40 backdrop-blur-xl border border-white/5 rounded-full p-1 shadow-2xl
→ bg-card border border-border rounded-lg p-1 shadow-sm
rounded-full data-[state=active] → rounded-md data-[state=active]
transition-all duration-300 → transition-colors duration-200

# components/custom/SkillsGrid.tsx
hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300
→ hover:bg-accent border border-transparent hover:border-border transition-colors duration-200
filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] → (remove)
transition-transform duration-300 → transition-transform duration-200

# components/custom/Stats.tsx
bg-black/60 backdrop-blur-md border border-white/5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] transition-all duration-300
→ bg-card border border-border shadow-sm transition-colors duration-200
bg-gradient-to-r from-transparent via-primary/50 to-transparent → bg-primary
font-black text-foreground drop-shadow-md → font-semibold text-foreground

# components/AppProjectCard.tsx
hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-xl border border-white/5 hover:border-primary/50 bg-card/50 backdrop-blur-sm
→ cursor-pointer rounded-lg border border-border bg-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md
```

Keep data, content, navigation, image dimensions, and grid/card footprints unchanged.

- [ ] **Step 4: Normalize project-page colors**

Apply these exact changes in `app/projects/[slug]/page.tsx`:

```text
Delete lines 24–26: the “Background Glow” comment and both blurred glow divs.

rounded-2xl ... border border-primary/20 shadow-[0_0_50px_-12px_rgba(139,0,0,0.15)] bg-card
→ rounded-lg ... border border-border bg-card shadow-md

rounded-xl overflow-hidden border border-white/10 bg-card shadow-sm
→ rounded-lg overflow-hidden border border-border bg-card shadow-sm

rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-black aspect-video
→ rounded-lg overflow-hidden border border-border bg-background shadow-md aspect-video

space-y-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm
→ space-y-6 rounded-lg border border-border bg-card p-6

w-full h-12 text-base font-bold shadow-[0_0_20px_-5px_rgba(139,0,0,0.4)]
→ w-full h-12 text-base font-bold shadow-sm

w-full h-12 text-base font-bold border-white/10 hover:bg-white/5
→ w-full h-12 border-border text-base font-bold hover:bg-accent

border-t border-white/5 → border-t border-border
```

Use the gallery replacement for both mobile and desktop gallery frames. Preserve screenshot/media aspect ratios, all content, links, responsive grids, and primary state markers.

- [ ] **Step 5: Verify the hard-coded dark palette is gone**

Run:

```bash
if rg -n 'bg-(black|white)|border-white|ring-white|via-white|rgba\(139,0,0|shadow-\[0_0' components/custom components/AppProjectCard.tsx 'app/projects/[slug]/page.tsx'; then exit 1; fi
npx tsc --noEmit
npm run build
```

Expected: the scan prints no matches and all commands exit 0.

- [ ] **Step 6: Commit semantic component cleanup**

```bash
git add components/custom/CTAButton.tsx components/custom/Hero.tsx components/custom/ProjectTabs.tsx components/custom/SkillsGrid.tsx components/custom/Stats.tsx components/AppProjectCard.tsx 'app/projects/[slug]/page.tsx'
git commit -m "style: apply semantic theme colors"
```

### Task 5: End-to-End Theme and Accessibility Verification

**Files:**
- Modify only files implicated by a failed verification; do not broaden scope.

**Interfaces:**
- Consumes: completed theme provider, global tokens, theme toggle, and semantic component styles.
- Produces: verified production build and manual acceptance evidence for both themes and reduced-motion behavior.

- [ ] **Step 1: Run repository-required automated checks**

Run:

```bash
npx tsc --noEmit
npm run build
git diff --check HEAD~4..HEAD
```

Expected: all exit 0. Do not run or claim lint or unit tests.

- [ ] **Step 2: Start the production server**

Run:

```bash
npm start
```

Expected: the built app serves at `http://localhost:3000` without console errors.

- [ ] **Step 3: Verify dark-first and persistence behavior**

In a browser with site data cleared:

1. Open `/` and confirm the first painted frame is dark.
2. Confirm `<html>` has class `dark` and `localStorage.theme` is initially absent.
3. Activate the top-right button; confirm the page becomes light and `localStorage.theme === "light"`.
4. Reload; confirm the first painted frame remains light without a dark flash.
5. Open a second tab, toggle dark in the first tab, and confirm the second tab synchronizes.
6. Temporarily block site storage and reload in a fresh context; confirm the page remains usable with the dark default and no uncaught exception.

- [ ] **Step 4: Verify the control and routes**

At mobile and desktop widths, on `/` and one valid `/projects/<slug>` route:

1. Tab to the switcher and confirm a visible primary focus ring.
2. Confirm the target is at least 44 by 44 CSS pixels.
3. Confirm hover and keyboard focus reveal the tooltip.
4. Confirm its accessible name and tooltip say the action that will occur.
5. Confirm sun means switching to light and moon means switching to dark.
6. Confirm the fixed control does not cover essential content or cause horizontal scrolling.
7. Confirm text, borders, media backplates, and controls remain readable in both themes.

- [ ] **Step 5: Verify reduced motion**

Enable “Reduce motion” in browser/OS emulation, reload both route types, and confirm:

- Framer Motion reveals no longer translate or scale substantially.
- CSS transitions and smooth scrolling are effectively removed.
- All content remains present and in the same reading and interaction order.

- [ ] **Step 6: Repair only observed failures and repeat the relevant gate**

For each failure, change the smallest owning file, rerun `npx tsc --noEmit` and `npm run build`, then repeat the exact browser scenario that failed. Do not change copy, layout, or unrelated components.

- [ ] **Step 7: Commit verification repairs if any**

If verification required changes:

```bash
git add app/globals.css app/layout.tsx app/providers.tsx components/custom/ThemeToggle.tsx components/custom/CTAButton.tsx components/custom/Hero.tsx components/custom/ProjectTabs.tsx components/custom/SkillsGrid.tsx components/custom/Stats.tsx components/AppProjectCard.tsx 'app/projects/[slug]/page.tsx'
git commit -m "fix: resolve theme verification issues"
```

If no changes were required, do not create an empty commit.
