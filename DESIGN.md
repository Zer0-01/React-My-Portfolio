---
name: Maroon Proof
theme: dark-default-with-light-switcher
colors:
  primary: "#D48BA0"
  secondary: "#AFA1A9"
  background: "#160F14"
  surface: "#21191F"
  surface-raised: "#2B2028"
  on-surface: "#F7F1F4"
  border: "#483942"
  error: "#FFB4B4"
light-colors:
  primary: "#7B2540"
  secondary: "#675B61"
  background: "#FFFCFA"
  surface: "#F6F0F1"
  surface-raised: "#FFFFFF"
  on-surface: "#261C22"
  border: "#D8C9D0"
  error: "#A32633"
typography:
  display:
    fontFamily: Inter
    fontSize: "clamp(44px, 7vw, 84px)"
    fontWeight: 650
  heading:
    fontFamily: Inter
    fontSize: "clamp(30px, 4vw, 52px)"
    fontWeight: 650
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
  label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
rounded:
  sm: 6px
  md: 10px
  lg: 16px
---

# Design System

## Overview

Maroon Proof is a polished portfolio for Anas Zulkifli, a product-focused developer who builds complete solutions. It should help a recruiter quickly assess his work and help a potential client trust his ability to design, build, and ship a product. Mobile engineering is a clear strength, but the portfolio should also demonstrate full product delivery.

The interface is calm, precise, and human. Real product screens are the main visual attraction. Restrained maroon provides identity and clear interaction cues; typography, spacing, and layout provide the polish. The default theme is dark. A deliberate warm light theme is available through a visible switcher.

## Colors

| Role | Dark default | Light | Use |
| --- | --- | --- | --- |
| Primary | `#D48BA0` | `#7B2540` | Main CTA, links, selected states, focus accents |
| Secondary | `#AFA1A9` | `#675B61` | Supporting text and quiet metadata |
| Background | `#160F14` | `#FFFCFA` | Page canvas |
| Surface | `#21191F` | `#F6F0F1` | Cards, navigation, inputs |
| Raised surface | `#2B2028` | `#FFFFFF` | Featured panels and open overlays |
| On-surface | `#F7F1F4` | `#261C22` | Headlines and body text |
| Border | `#483942` | `#D8C9D0` | Frames, dividers, control outlines |
| Error | `#FFB4B4` | `#A32633` | Validation feedback |

- Use the appropriate primary shade for each theme. The dark shade is a soft rose-maroon that stays visible on deep surfaces; the light shade is a deeper maroon that remains readable on warm white.
- On filled primary buttons, use dark text `#25191E` in dark mode and white text `#FFFFFF` in light mode. Avoid white text on the dark theme's lighter primary fill.
- Use one primary action per section. Keep most of the viewport neutral so the work and the action remain clear.
- Check text and control contrast against the actual background beneath them; meet WCAG AA. Do not use color as the sole indication of state.
- The theme switcher changes all semantic tokens, imagery backplates, borders, and focus states together. Start in dark mode for a new visitor; retain the visitor's selected theme on later visits.

## Typography

- **Display and headlines:** Inter, semibold, compact line height (about 1.05), slight negative tracking. Keep the headline short and readable at narrow widths.
- **Body:** Inter, regular, 16–18px with 1.55–1.7 line height. Limit long case-study paragraphs to roughly 70 characters per line.
- **Labels and metadata:** JetBrains Mono, medium, 12–14px. Reserve it for dates, roles, platforms, section indices, and technology notes.
- Use sentence case for headings and interface copy. Uppercase is acceptable for a short metadata label, never for a paragraph.
- Provide system sans-serif and monospace fallbacks. Do not rely on font loading to preserve the page hierarchy.

## Layout and Imagery

- Use a spacious hero that introduces Anas as a product-focused developer; identify Flutter and mobile work in the supporting copy. Show a primary contact action and a secondary path to selected work.
- Present two or three featured projects in large sections. Give each a real screenshot, a concise problem statement, Anas's contribution, and a credible result. Follow with a compact grid of additional projects.
- Use dedicated case-study pages for detail. Each should cover context, role, challenge, important decisions, implementation, outcome, and reflection. Keep the homepage scannable.
- Use authentic product screenshots in simple, consistent phone and browser frames. Preserve legibility and do not hide key UI under decorative overlays. Use public or approved captures, with private content removed where needed.
- Keep a content container around 1200px wide; use generous desktop gutters and at least 20px mobile gutters. Stack showcase copy and imagery on mobile and avoid horizontal scrolling.
- Use spacing in multiples of 8px. Allow whitespace around the work rather than enclosing every section in a card.

## Motion

- Use balanced motion: 150–250ms transitions for controls, and a small number of 400–600ms reveals around featured project imagery.
- Let layered screenshots enter in a meaningful order to show the product. Keep headings and actions available without waiting for animation.
- Avoid scroll hijacking, looping decoration, cursor effects, and parallax behind text.
- Respect `prefers-reduced-motion`: remove movement and preserve all content and interactions in the same order.

## Components

- **Navigation:** Compact identity mark, Work, About, and Contact links, plus a clearly labeled theme switcher. Keep contact reachable on mobile.
- **Buttons:** 10px radius, at least 44px high, clear primary and secondary styles. Define hover, pressed, focus-visible, and disabled states. Make keyboard focus visible in both themes.
- **Featured projects:** Large screenshot or device frame, project name, one-sentence value, role, result, and a clear case-study link. Keep technology tags secondary.
- **Additional project cards:** Smaller screenshot-led cards with consistent aspect ratios and concise descriptions. The whole card may be one link, without nested competing actions.
- **Case-study pages:** Comfortable reading width, full-size imagery with captions when useful, direct back navigation, and a clear contact action at the end.
- **Tags:** Quiet surface and border treatment, short labels, monospace used selectively. Avoid colorful technology badge collections.
- **Contact:** A direct email action is the simplest default. If a form is added, use visible labels, inline validation, success feedback, and an email alternative.
- **Theme switcher:** Visible in navigation, keyboard operable, with an accessible name that states the action and an understandable current state. Prevent a flash of the wrong theme during load.

## Do's and Don'ts

- Do lead with product problems, ownership, and outcomes; place stack details where they support the story.
- Do use maroon consistently as an interaction signal across both themes.
- Do let real project screens carry the visual weight and keep their framing consistent.
- Do show individual contributions accurately and use metrics only when verified.
- Do check mobile layouts, keyboard navigation, reduced motion, and contrast in both themes.
- Don't use fake dashboards, generic technology illustrations, or invented results to fill space.
- Don't cover every section with cards, gradients, shadows, or tinted backgrounds.
- Don't make project content depend on scrolling effects, hover, or a particular theme.
- Don't use skill bars, logo clouds, or long lists of frameworks as a substitute for project evidence.
