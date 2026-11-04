---
version: alpha
name: Burgundy Minimal Developer Portfolio
description: Modern minimalist, approachable developer portfolio with a dark-default burgundy and muted-gold visual identity.
colors:
  primary: "#8C3547"
  primary-hover: "#752B3A"
  primary-dark-text: "#DCA0AC"
  primary-dark-outline: "#DCA0AC"
  secondary: "#B89B5E"
  background-dark: "#121212"
  surface-dark: "#1C1C1E"
  on-surface-dark: "#F5F5F5"
  on-surface-muted-dark: "#A3A3A3"
  background-light: "#FAF9F6"
  surface-light: "#FFFFFF"
  on-surface-light: "#242424"
  on-surface-muted-light: "#666666"
  on-primary: "#FFFFFF"
  tag-dark: "#29292B"
  tag-light: "#EEECE9"
  input-dark: "#242426"
  input-light: "#F0EEEB"
  focus-dark: "#DCA0AC"
  focus-light: "#8C3547"
  error: "#B3261E"
typography:
  headline-display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0em
rounded:
  none: 0px
  sm: 4px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 96px
  container-max: 1200px
  grid-gap: 24px
  grid-columns-desktop: 3
  grid-columns-tablet: 2
  grid-columns-mobile: 1
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary-light:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 16px
  button-secondary-dark:
    backgroundColor: transparent
    textColor: "{colors.primary-dark-text}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 16px
  project-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-surface-dark}"
    rounded: "{rounded.sm}"
    padding: 24px
  project-card-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface-light}"
    rounded: "{rounded.sm}"
    padding: 24px
  input-dark:
    backgroundColor: "{colors.input-dark}"
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
  input-light:
    backgroundColor: "{colors.input-light}"
    textColor: "{colors.on-surface-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
  tag-dark:
    backgroundColor: "{colors.tag-dark}"
    textColor: "{colors.on-surface-muted-dark}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
  tag-light:
    backgroundColor: "{colors.tag-light}"
    textColor: "{colors.on-surface-muted-light}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
---

## Overview

A modern minimalist personal developer portfolio with a professional yet approachable personality. The experience should feel confident, welcoming, and technically capable to recruiters and prospective clients. Prioritize clear hierarchy, thoughtful whitespace, readable content, and consistent geometric structure. Dark mode is the initial theme; provide a user-controlled light-mode alternative.

## Colors

Muted Burgundy (`#8C3547`) is the primary brand color for key actions and selected emphasis. Muted Gold (`#B89B5E`) is a restrained secondary accent for occasional small highlights, not broad fills. Use solid colors exclusively.

- **Dark mode (default):** near-black background `#121212`, elevated-by-tone surface `#1C1C1E`, primary text `#F5F5F5`, secondary text `#A3A3A3`.
- **Light mode:** off-white background `#FAF9F6`, white surface `#FFFFFF`, primary text `#242424`, secondary text `#666666`.
- **Primary actions:** muted burgundy `#8C3547` with white text `#FFFFFF`; darker burgundy `#752B3A` for hover.
- **Dark-mode burgundy text and outlines:** use the lighter accessible variation `#DCA0AC` instead of `#8C3547` against near-black backgrounds. In light mode, burgundy `#8C3547` can serve as link and outline text.
- **Supporting surfaces:** neutral-filled tags `#29292B` (dark) / `#EEECE9` (light) and filled inputs `#242426` (dark) / `#F0EEEB` (light).
- **Focus states:** clearly visible `#DCA0AC` on dark and `#8C3547` on light; do not rely on color alone to communicate errors or focus.

## Typography

Use **Space Grotesk** for all headings and **Inter** for body copy, navigation, labels, buttons, and metadata. Set headings with tight `-0.03em` letter spacing and `1.1–1.2` line height; set body with normal letter spacing and `1.6` line height.

- **Hero:** `headline-display`, 64px / 700 on desktop; scale down responsively for smaller screens. The headline ends with a static gold cursor block (the A_ mark) and may set one word in burgundy text.
- **Sections:** `headline-lg` (40px / 600) or `headline-md` (32px / 600) depending on hierarchy.
- **Project titles:** `headline-sm` (24px / 600).
- **Body:** `body-md` (16px / 400), with `body-lg` (18px) for introductory copy and `body-sm` (14px) for supporting descriptions.
- **Navigation and labels:** `label-md` (14px / 500), `label-lg` (16px / 600) for button labels, `label-sm` (12px / 500) for tags.

Maintain comfortable line lengths and consistent hierarchy across device sizes. Do not substitute decorative fonts. **Exception:** the system monospace stack is reserved for the brand identity only: the logo name, the project breadcrumb and the hero identity line (name, role, location and local time).

## Layout

Use a centered, responsive content container with a maximum width of **1200px**. Full-viewport background colors may extend beyond the content container. Adapt horizontal padding to viewport width to prevent content touching the screen edge.

Follow an **8px-based spacing scale**: 8, 16, 24, 32, 48, 64, and 96px. Use 24px standard grid gutters. Card grids, where used, follow **3 columns on desktop, 2 on tablet, and 1 on mobile**, with equal card alignment and spacing. Selected work uses a full-width editorial list instead (see Components). Give sections breathing room without making the composition excessively sparse.

## Elevation & Depth

Use a **completely flat** visual system. Do not use box shadows, drop shadows, raised surfaces, or hover elevation. Distinguish sections and cards through deliberate whitespace, typography, and modest tonal differences between the page background and surface colors. Keep interactive feedback to subtle color transitions.

## Shapes

Use a consistent **4px corner radius** on buttons, project cards, input fields, technology tags, and rectangular image containers. Preserve simple, geometric silhouettes. Avoid oversized radii, pills, and mixed corner treatments for the same component family.

## Components

- **Hero:** single-column and typography-led. A 64px square portrait (4px corners) sits beside a mono identity line, followed by the headline, a one-line subline, a primary and a secondary button, and icon links to professional profiles.
- **Primary buttons:** solid muted burgundy background, white label, 4px corners; use a slightly darker burgundy on hover. Provide visible keyboard focus indication and distinct disabled states.
- **Secondary buttons:** transparent background and a thin burgundy outline; use accessible light burgundy for text and outlines on dark backgrounds. Maintain the same 4px radius and subtle hover feedback.
- **Selected work:** a full-width editorial list, not a card grid. Each project is separated by 1px tonal rules and shows its screens first, in their real shape, inside a neutral `tag` frame. Mobile apps show every screen side by side at the true phone ratio (the first three on small screens). Web apps show one 16:9 screen with real thumbnails the visitor clicks to switch (`aria-pressed`, no autoplay, a 150ms crossfade that is instant under reduced motion). Below: title, the role on the project (e.g. "Mobile Developer · Aonic"), a one-line summary, neutral technology tags and a "View project" link. Longer detail belongs on the project page.
- **More projects:** the remaining projects as a compact list of rows (title, project type, arrow) under 1px rules; the title and arrow turn burgundy on hover.
- **Navigation:** horizontal bar with the A_ cursor mark and name aligned left, and section links, a secondary "Let's talk" button and the theme switcher aligned right. At the top of the page the bar is transparent with no container. Once the page scrolls, it floats as a functional container: solid `surface` fill, 1px tonal border, 4px corners, no blur or shadow. It hides on scroll down and returns on scroll up, but never while it holds keyboard focus. A 2px burgundy underline marks the section in view (`aria-current`). Project pages show a mono breadcrumb (`/ work / <slug>`). On mobile, use a hamburger that opens a full-screen solid menu with large links.
- **Navigation motion:** limited to the floating transition, the hide/show slide, the active-underline slide and a cursor blink on logo hover/focus. All of it becomes instant under `prefers-reduced-motion`.
- **Experience:** the same editorial rows as Selected work (1px rules, no cards). Short dates (`Sep 2024 – Now`) sit in their own left column and move above the company on mobile. Several roles at one company are joined by a thin line with square markers: filled burgundy for the current role, hollow for earlier ones. One line per contribution, starting with a verb.
- **Tech stack:** the same editorial rows (1px rules, no cards). The group label (`label-lg`) sits in the same left column as Experience dates, with neutral technology tags on the right. No group descriptions, skill bars, percentages or logos. List only tools actually used.
- **Project page:** title (`headline-display`) and the one-line summary, then a facts list in editorial rows (Role, For, Year, Platform, Stack, Links as secondary buttons), the same `ScreenGallery` as the home page (or the demo video), and short Overview, What I built and Outcome sections with the heading in the left column. "What I built" lists only what exists. The page ends with a Next project row; the navbar breadcrumb replaces a back link.
- **Footer:** starts with a closing prompt ("Have a product in mind?", `headline-md`), the primary and secondary buttons and an email link. Below a 1px rule: the A_ mark with name and role on the left; section links and profile links on the right. A last row holds the copyright year and Back to top. No oversized wordmark, icon rows or newsletter.
- **Inputs:** filled neutral surfaces, labels above controls, 4px corners, and no visible default outline border. Use a highly visible burgundy-toned focus indicator; make placeholders subordinate to labels.
- **Technology tags:** compact filled-neutral chips with secondary text, 4px corners, and no borders or shadows.

- **Arrows:** use an arrow icon only where it is the only cue that text is clickable or shows direction: More projects rows (→) the project page Next project link (→) and the footer Back to top link (↑). Do not add arrows to filled or outlined buttons, or to text links that already read as links.

## Do's and Don'ts

- **Do** use clean, modern, professional, approachable compositions with intentional whitespace.
- **Do** use natural, unfiltered project screenshots in consistent aspect ratios; apply 4px corners and no overlays.
- **Do** prioritize readable text and accessible contrast, targeting WCAG AA (at least 4.5:1 for normal text and 3:1 for large text).
- **Do** use restrained, functional hover and color transitions; respect `prefers-reduced-motion`.
- **Do** preserve the same visual hierarchy, palette identity, and component language across light and dark modes.
- **Don't** use gradients, glassmorphism, blur-glass treatments, glow effects, decorative shadows, or background patterns.
- **Don't** use scroll reveal, entrance animations, excessive motion, or decorative movement.
- **Don't** use image filters, tinted image overlays, or inconsistent preview aspect ratios.
- **Don't** introduce unneeded ornamentation, large corner radii, or elevation-based interactions.
