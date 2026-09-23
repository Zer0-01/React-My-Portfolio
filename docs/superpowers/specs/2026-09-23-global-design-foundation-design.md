# Global design foundation and theme switcher

## Purpose

Align the portfolio's global visual foundation with `DESIGN.md` without redesigning page structure, project content, or component layouts. The result must provide the Maroon Proof color system, prescribed typography, accessible global interaction styles, reduced-motion behavior, and a persistent dark/light theme switcher.

## Scope

### Included

- Replace the existing global palette with the exact dark and light values from `DESIGN.md`.
- Map the approved palette onto Tailwind and shadcn semantic roles.
- Load Inter and JetBrains Mono through `next/font/google` with system fallbacks.
- Add reusable display, heading, body, and label typography tokens.
- Add a dark-first, persistent, no-flash theme system using `next-themes`.
- Add a fixed top-right icon-only theme switcher with accessible text and a tooltip.
- Apply the documented radius scale, focus treatment, selection styling, browser color scheme, and reduced-motion behavior.
- Replace hard-coded dark-only colors in existing custom components and routes when they prevent the light theme from rendering coherently.

### Excluded

- Redesigning the homepage or case-study layouts.
- Adding navigation or restructuring portfolio sections.
- Rewriting content or inventing project outcomes.
- Modifying vendor-managed files in `components/ui/`.
- Adding unrelated component abstractions.

## Architecture

### Root layout

`app/layout.tsx` remains a Server Component. It will:

- Load Inter into the sans font variable and JetBrains Mono into the monospace font variable.
- Add `suppressHydrationWarning` to the root `<html>` element because the theme provider updates its class before hydration.
- Stop hard-coding the `dark` class; theme ownership belongs to `next-themes`.
- Wrap application content with the client provider.
- Render the theme switcher inside that provider so it can read and update theme state.

### Client provider

`app/providers.tsx` will be the narrow client boundary for global browser behavior. It will compose:

- `ThemeProvider` from `next-themes`, configured with `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`, and `disableTransitionOnChange`.
- Framer Motion's `MotionConfig` with `reducedMotion="user"` so existing motion components honor the visitor's operating-system preference.

Dark is intentionally the first-visit default even when the operating system prefers light, as required by `DESIGN.md`. A visitor's explicit choice takes precedence on later visits. `next-themes` supplies pre-paint restoration, persistence, browser color-scheme integration, and cross-tab synchronization.

### Theme switcher

`components/custom/ThemeToggle.tsx` will contain the only new control. It will:

- Use the existing shadcn `Button` without changing `components/ui/button.tsx`.
- Remain fixed in the top-right corner with an appropriate stacking level and safe viewport spacing.
- Maintain a minimum 44 by 44 pixel target.
- Show sun and moon icons that reflect the action the button performs.
- Expose the same action wording to assistive technology, such as “Switch to light theme” or “Switch to dark theme.”
- Display a compact tooltip on pointer hover and keyboard focus without adding another UI dependency.
- Avoid reading theme-dependent browser state during server rendering. Theme-dependent interaction becomes active after mounting, preventing hydration mismatches while retaining a stable control footprint.

## Design tokens

### Theme colors

`:root` will define the light theme and `.dark` will override it with the dark theme.

| Semantic role | Light | Dark |
| --- | --- | --- |
| Primary | `#7B2540` | `#D48BA0` |
| Primary foreground | `#FFFFFF` | `#25191E` |
| Secondary text | `#675B61` | `#AFA1A9` |
| Background | `#FFFCFA` | `#160F14` |
| Surface | `#F6F0F1` | `#21191F` |
| Raised surface | `#FFFFFF` | `#2B2028` |
| On-surface | `#261C22` | `#F7F1F4` |
| Border | `#D8C9D0` | `#483942` |
| Error | `#A32633` | `#FFB4B4` |

The shadcn variables will reuse these values rather than expand the palette:

- Page background and foreground map to background and on-surface.
- Cards and sidebars map to surface.
- Popovers map to raised surface.
- Muted backgrounds map to surface and muted foreground maps to secondary text.
- Secondary and accent controls use approved surface roles with readable on-surface or secondary foreground text.
- Borders and inputs map to border.
- Focus rings map to primary.
- Destructive states map to error.
- Chart variables reuse distinct approved semantic colors only; no new chart palette is introduced.

### Typography

- Sans: Inter with standard system sans-serif fallbacks.
- Mono: JetBrains Mono with standard system monospace fallbacks.
- Display: `clamp(44px, 7vw, 84px)`, weight 650, compact line height, slight negative tracking.
- Heading: `clamp(30px, 4vw, 52px)`, weight 650, compact line height, slight negative tracking.
- Body: 16px base size, regular weight, and a readable line height within the documented 1.55–1.7 range.
- Label: 12px base size, weight 500, using the monospace family.

These are exposed as reusable theme tokens. Existing component-specific sizes remain unchanged unless a global inherited rule applies; broader typography redesign is outside scope.

### Shape and interaction

- Small radius: 6px.
- Medium radius: 10px.
- Large radius: 16px.
- Larger Tailwind radius aliases used by existing components will resolve to the maximum approved 16px rather than invent additional radii.
- Keyboard focus uses the primary ring with sufficient separation from its background.
- Selection uses primary and the correct primary foreground.
- The root advertises the active `color-scheme` so native controls match the selected theme.

## Existing style cleanup

Existing custom components and routes contain literal black, white, and legacy red shadow values. Only theme-sensitive occurrences will change. Replacements will use semantic utilities such as background, surface/card, border, primary, foreground, and muted foreground.

This cleanup preserves component markup, layout, content, and intended hierarchy. Decorative treatments that conflict with `DESIGN.md`, such as strong glow effects or gradients used solely as ornament, will be removed or reduced to a semantic, restrained treatment rather than translated literally into the new palette.

## Motion and accessibility

- Framer Motion receives the user's reduced-motion preference through the global provider.
- A `prefers-reduced-motion: reduce` rule disables smooth scrolling and minimizes CSS animation and transition duration while preserving content and interaction order.
- The theme button is operable by keyboard, has a visible focus state in both themes, and exposes an understandable current action.
- The tooltip appears for both hover and focus and does not carry information absent from the accessible name.
- Theme state is never communicated by color alone: icon shape and accessible text also change.

## Failure handling

Theme persistence is progressive enhancement. If browser storage is unavailable, `next-themes` can still apply the configured default for the current page load. The switcher will not invent an intermediate system mode because only explicit light and dark modes are in scope. Until client mounting completes, it retains a stable, non-misleading visual footprint and does not perform a theme-dependent update.

## Files expected to change

- `app/globals.css`
- `app/layout.tsx`
- `app/providers.tsx` (new)
- `components/custom/ThemeToggle.tsx` (new)
- Existing custom components and route files containing dark-only visual utilities
- `package.json` and `package-lock.json` for `next-themes`

No file under `components/ui/` will be modified.

## Verification

Automated checks:

- `npx tsc --noEmit`
- `npm run build`

Manual checks:

- A first visit renders dark without a light-theme flash.
- Changing theme updates the UI and browser-native color scheme.
- The selected theme survives reloads and synchronizes across open tabs.
- Home and project routes remain readable in both themes.
- No dark-only hard-coded background or border undermines the light theme.
- The theme control is reachable and understandable with keyboard and assistive technology.
- Its fixed placement remains usable at mobile and desktop widths.
- Reduced-motion mode removes nonessential movement while preserving content.
- Foreground, supporting text, controls, and focus indicators meet WCAG AA against their actual backgrounds.

The repository has no lint or test script, so neither will be reported as a completed check.
