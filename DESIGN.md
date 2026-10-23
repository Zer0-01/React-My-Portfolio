---
name: Teal Minimal Portfolio
description: A modern, minimal, borderless portfolio design system with expressive motion, refined surfaces, and balanced light and dark themes.
colors:
  primary: "#0F766E"
  secondary: "#B65F50"
  surface: "#FFFFFF"
  background: "#F8FAF9"
  on-surface: "#171717"
  error: "#DC2626"
dark-colors:
  primary: "#5ED0BB"
  secondary: "#E7A08C"
  surface: "#142421"
  background: "#0B1514"
typography:
  heading:
    fontFamily: "JetBrains Mono"
    fontWeight: 600
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 20px
motion:
  style: expressive
  duration-fast: 150ms
  duration-normal: 300ms
  duration-slow: 500ms
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
---

# Design System

## 1. Overview

A modern, minimal, and refined design system for a personal developer portfolio.

The visual identity combines clean typography, subtle neutral surfaces, a distinctive teal accent, and expressive interactions.

The design should feel professional, polished, modern, and interactive without appearing overly decorative or visually crowded.

### Core Characteristics

- Modern and minimal visual language
- Teal as the primary brand accent
- Balanced light and dark themes
- Clearly distinguishable background and foreground surfaces
- Borderless, shadowless, and gradient-free styling
- Soft, consistent rounded corners
- JetBrains Mono headings and Inter body typography
- Expressive, fluid, purposeful motion
- Strong visual hierarchy
- Accessible interaction states
- Consistent semantic design tokens

The visual system must prioritize clarity, consistency, and a distinctive yet restrained aesthetic.

## 2. Design Principles

### 2.1 Minimalism

Maintain a clean, uncluttered interface.

- Prefer simplicity over unnecessary decoration.
- Use color, typography, spacing, and motion to establish hierarchy.
- Avoid excessive visual elements.
- Keep decorative treatments purposeful.
- Maintain sufficient visual breathing room.
- Avoid unnecessary graphical noise.

### 2.2 Borderless Design

Use a predominantly borderless visual language.

- Components should not rely on visible borders for separation.
- Differentiate elements using background and surface colors.
- Avoid outlining every card or container.
- Prefer surface contrast and whitespace over dividers.
- Borders may be introduced only when necessary for clarity or accessibility.
- Keyboard focus indicators are exempt from the borderless rule.

The interface should feel seamless rather than divided into outlined boxes.

### 2.3 Flat Design

Use a flat visual appearance throughout.

- No box shadows.
- No drop shadows.
- No elevation effects.
- No gradients.
- No glassmorphism.
- No neumorphism.
- No simulated depth through lighting effects.

Visual hierarchy must come from color contrast, typography, spacing, shape, and motion.

### 2.4 Surface Separation

Background and foreground surfaces must remain visually distinguishable.

- Use deliberate tonal differences between the main background and foreground surfaces.
- Keep the subtle background-to-surface distinction clear through spacing and the secondary surface layer.
- Distinguish close light surfaces with spacing and the secondary surface layer.
- Do not compensate for insufficient contrast by adding shadows or borders.
- Preserve a neutral appearance with subtle teal undertones.

### 2.5 Consistency

All components must share a coherent visual language.

- Use centralized design tokens.
- Apply consistent typography rules.
- Reuse the established corner-radius scale.
- Maintain consistent interaction feedback.
- Follow the same motion language.
- Respect both light and dark themes.

## 3. Color System

The color system combines a restrained teal primary with a warm terracotta secondary, neutral backgrounds, and foreground surfaces.

The palette is designed to support both light and dark themes. The light background and white surface have a subtle separation; the secondary surface provides a stronger layer when needed.

### 3.1 Light Theme

The light theme uses a soft, near-white background with pure white foreground surfaces.

| Token | Hex | Purpose |
|---|---|---|
| Primary | `#0F766E` | Main teal accent |
| Secondary accent | `#B65F50` | Occasional warm emphasis |
| Primary Hover | `#115E59` | Hover state |
| Primary Active | `#134E4A` | Pressed state |
| Primary Soft | `#CCFBF1` | Subtle teal backgrounds |
| Background | `#F8FAF9` | Main background |
| Surface | `#FFFFFF` | Cards and foreground surfaces |
| Surface Secondary | `#EAF0ED` | Secondary component surfaces |
| Surface Hover | `#DFE9E5` | Neutral hover state |
| Text Primary | `#171717` | Main text |
| Text Secondary | `#525252` | Supporting text |
| Text Muted | `#737373` | Muted text |
| Text On Primary | `#FFFFFF` | Text on solid teal |
| Error | `#DC2626` | Error and destructive states |
| Success | `#15803D` | Success feedback |

#### Light Theme Rules

- Use `#F8FAF9` as the main background.
- Use `#FFFFFF` for primary foreground surfaces.
- Use `#EAF0ED` for secondary surfaces.
- Use spacing and secondary surfaces to clarify the subtle background-to-card separation.
- Keep teal usage purposeful and restrained.
- Avoid excessive gray-on-gray layering.
- Maintain a bright, clean, and polished appearance.

### 3.2 Dark Theme

The dark theme uses a deep black background with lighter near-black foreground surfaces.

| Token | Hex | Purpose |
|---|---|---|
| Primary | `#5ED0BB` | Main teal accent |
| Secondary accent | `#E7A08C` | Occasional warm emphasis |
| Primary Hover | `#79DCC9` | Hover state |
| Primary Active | `#38BFA9` | Pressed state |
| Primary Soft | `#134E4A` | Subtle teal backgrounds |
| Background | `#0B1514` | Main background |
| Surface | `#142421` | Cards and foreground surfaces |
| Surface Secondary | `#20352F` | Secondary component surfaces |
| Surface Hover | `#294139` | Neutral hover state |
| Text Primary | `#F5F5F5` | Main text |
| Text Secondary | `#A3A3A3` | Supporting text |
| Text Muted | `#8A8A8A` | Muted text |
| Text On Primary | `#042F2E` | Text on bright teal |
| Error | `#F87171` | Error and destructive states |
| Success | `#4ADE80` | Success feedback |

#### Dark Theme Rules

- Use `#0B1514` as the main background.
- Use `#142421` for primary foreground surfaces.
- Use `#20352F` for secondary surfaces.
- Preserve visible separation between the background and foreground elements.
- Avoid pure black as the main page background.
- Use brighter teal accents to maintain visual presence.
- Keep neutral text readable without appearing overly bright.
- Keep dark surfaces green-tinted rather than blue-tinted.

### 3.3 Surface Hierarchy

Surface hierarchy must be established through solid-color contrast rather than elevation.

**Light Mode**

| Layer | Color |
|---|---|
| Main Background | `#F8FAF9` |
| Primary Surface | `#FFFFFF` |
| Secondary Surface | `#EAF0ED` |
| Hover Surface | `#DFE9E5` |

**Dark Mode**

| Layer | Color |
|---|---|
| Main Background | `#0B1514` |
| Primary Surface | `#142421` |
| Secondary Surface | `#20352F` |
| Hover Surface | `#294139` |

#### Surface Rules

- Cards and foreground containers must be distinguishable from the main background.
- Use solid colors exclusively.
- Do not introduce shadows, gradients, or elevation.
- Avoid nesting surfaces with nearly identical colors.
- Surface colors must remain consistent across the interface.
- Use whitespace to reinforce separation.
- Preserve subtle neutral-teal undertones in light mode and green-tinted dark surfaces.
- Use semantic surface tokens rather than arbitrary background colors.

### 3.4 Brand Color Usage

Teal is the signature accent color. The warm secondary accent is used sparingly for meaningful emphasis, never as a substitute for the primary action. In code, `--brand-secondary` is this accent; `--surface-secondary` remains a neutral surface token.

Use teal for:

- Primary interactive elements
- Important emphasis
- Active states
- Selected states
- Interactive text
- Links
- Focus indicators
- Meaningful animated accents

Avoid:

- Applying teal to every component
- Large areas of saturated teal without purpose
- Introducing accent colors beyond the defined teal and warm secondary
- Using teal for ordinary body text
- Relying solely on color to communicate state

### 3.5 Color Accessibility

- Maintain at least 4.5:1 contrast for normal text.
- Maintain at least 3:1 for large text and meaningful non-text UI indicators.
- Use darker teal variants when teal text on light backgrounds does not meet contrast requirements.
- Use appropriate foreground colors for solid teal elements.
- Do not assume white text is readable on every teal shade.
- Validate contrast independently in both themes.
- Keep hover, active, disabled, and focus states distinguishable.

## 4. Typography

The typography system combines the technical character of JetBrains Mono with the readability of Inter.

### 4.1 Font Families

**JetBrains Mono**

Used for:

- Headings
- Titles
- Prominent technical labels
- Short technical emphasis

**Inter**

Used for:

- Body text
- Paragraphs
- Buttons
- Form controls
- Supporting descriptions
- UI labels
- Navigation text

Avoid introducing additional font families without a clear reason.

### 4.2 Typography Scale

| Role | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Display | JetBrains Mono | 48–64px | 600 | 1.1 |
| Heading XL | JetBrains Mono | 36px | 600 | 1.2 |
| Heading LG | JetBrains Mono | 30px | 600 | 1.25 |
| Heading MD | JetBrains Mono | 24px | 600 | 1.3 |
| Heading SM | JetBrains Mono | 20px | 500 | 1.35 |
| Body LG | Inter | 18px | 400 | 1.7 |
| Body MD | Inter | 16px | 400 | 1.6 |
| Body SM | Inter | 14px | 400 | 1.5 |
| Caption | Inter | 12px | 400 | 1.5 |
| Button | Inter | 14–16px | 500 | 1.4 |

### 4.3 Typography Rules

- Use JetBrains Mono consistently for primary headings.
- Use Inter for general content.
- Prefer sentence case over uppercase.
- Keep font weights restrained.
- Avoid excessive bold text.
- Use font size and weight to establish hierarchy.
- Maintain comfortable paragraph line heights.
- Avoid unnecessary letter spacing.
- Apply subtle negative letter spacing to large headings only when appropriate.
- Use responsive typography scaling.
- Preserve readability across different viewport sizes.

## 5. Corner Radius

Use soft, modern rounded corners without making components excessively pill-shaped.

| Token | Value | Usage |
|---|---|---|
| Radius XS | 4px | Small visual details |
| Radius SM | 6px | Compact controls |
| Radius MD | 10px | Buttons and inputs |
| Radius LG | 16px | Cards and surfaces |
| Radius XL | 20px | Large containers |
| Radius Full | 9999px | Circular or intentional pill elements |

### Rules

- Maintain consistent rounding within component categories.
- Prefer 10px for interactive controls.
- Prefer 16px for cards and surfaces.
- Avoid excessive rounding.
- Avoid mixing sharp and rounded corners without purpose.
- Use full rounding only when appropriate.

## 6. Component Styling

These guidelines define the visual treatment of common interface components without prescribing which components must exist.

### 6.1 Buttons

- Flat appearance.
- No shadows.
- Soft rounded corners.
- Consistent padding.
- Clear interaction feedback.
- Smooth state transitions.
- Inter medium-weight typography.

**Primary Buttons**

- Solid teal background.
- Accessible foreground text.
- Theme-appropriate teal hover state.
- Subtle press feedback.

**Secondary Buttons**

- Neutral surface background.
- Primary text color.
- Clear surface differentiation.
- Smooth background transition on hover.

**Ghost Buttons**

- Transparent default background.
- Neutral text.
- Subtle surface-color change on hover.

### 6.2 Cards

- No visible borders by default.
- No shadows.
- No gradients.
- Solid surface background.
- Soft 16px rounded corners.
- Sufficient internal spacing.
- Optional subtle motion-based interaction feedback.

#### Light Mode Cards

- Background: `#FFFFFF`
- Surrounding page background: `#F8FAF9`

#### Dark Mode Cards

- Background: `#142421`
- Surrounding page background: `#0B1514`

Cards must remain distinguishable from their surrounding background through surface contrast rather than elevation.

### 6.3 Inputs

- Borderless or minimally bordered appearance.
- Solid neutral surface backgrounds.
- Soft rounded corners.
- Clear text and placeholder contrast.
- Teal focus indication.
- Smooth hover and focus transitions.
- Accessible keyboard focus feedback.

### 6.4 Links

- Use teal for emphasized links.
- Use neutral text for understated interactive links.
- Provide visible hover and focus feedback.
- Use underlines or equivalent identifiable treatment for inline links where needed.
- Avoid relying exclusively on color to identify links in paragraphs.

### 6.5 Labels and Badges

- Prefer subtle neutral surfaces.
- Use teal-tinted surfaces for meaningful emphasis.
- Avoid excessively saturated backgrounds.
- Maintain accessible foreground contrast.
- Apply restrained corner rounding.
- Keep visual styling lightweight.

### 6.6 Icons

- Prefer simple, modern line icons.
- Use consistent stroke weights.
- Avoid unnecessary decorative detail.
- Use neutral colors by default.
- Use teal for active and emphasized states.
- Maintain consistent optical sizing.
- Avoid gradients, shadows, and unnecessary icon backgrounds.

## 7. Motion and Animation

Animation is a defining characteristic of the design system.

The motion language should feel expressive, fluid, modern, and intentional while remaining professional.

Motion should contribute personality without making the interface distracting or slow.

### 7.1 Motion Principles

**Expressive**

Animations may use noticeable but controlled movement, scaling, and transformation to create personality.

**Fluid**

Movement should feel smooth, continuous, and natural.

**Purposeful**

Every animation should communicate feedback, continuity, emphasis, or interaction.

**Responsive**

User-triggered animations should respond immediately.

**Consistent**

Components should share a coherent animation language.

### 7.2 Animation Timing

| Token | Duration | Usage |
|---|---|---|
| Instant | 100ms | Immediate feedback |
| Fast | 150–200ms | Hover and press |
| Normal | 250–350ms | Standard transitions |
| Expressive | 400–600ms | Reveals and transformations |
| Extended | 600–800ms | Special expressive sequences |

Avoid extended animations for routine interactions.

### 7.3 Easing

**Primary Expressive Easing**

`cubic-bezier(0.22, 1, 0.36, 1)`

**Standard Easing**

`cubic-bezier(0.4, 0, 0.2, 1)`

**Exit Easing**

`cubic-bezier(0.4, 0, 1, 1)`

Spring-inspired movement may be used for expressive interactions when it remains controlled and avoids excessive bouncing.

### 7.4 Hover Interactions

Hover states should feel responsive and polished.

Allowed treatments:

- Subtle scaling
- Small translations
- Color transitions
- Background transitions
- Icon movement
- Underline animations
- Controlled content transformations

Recommended transforms:

- Scale: 1.01–1.03
- Translation: 2–6px
- Duration: 150–250ms

Avoid exaggerated movement during routine interactions.

### 7.5 Entrance Animations

Entrance animations may combine:

- Opacity transitions
- Small vertical translations
- Subtle scaling
- Controlled staggered timing

Recommended characteristics:

- Smooth ease-out movement
- Limited translation distance
- Natural progression
- No excessive delay

Avoid large off-screen movements and repetitive dramatic reveals.

### 7.6 Microinteractions

Microinteractions should provide satisfying visual feedback.

Examples:

- Buttons subtly compress on press.
- Icons shift during hover.
- Interactive text changes smoothly.
- Focus states animate into view.
- Selected states transition fluidly.
- Visual elements respond subtly to pointer interaction.

Microinteractions must remain consistent and should not interfere with functionality.

### 7.7 Continuous Animations

Continuous motion may be used sparingly when it meaningfully contributes to the visual identity.

Rules:

- Avoid unnecessary infinite loops.
- Avoid excessive floating or bouncing.
- Keep ambient movement subtle.
- Never allow motion to compete with important content.
- Stop or pause animations when they are no longer relevant.

### 7.8 Animation Performance

- Prefer animating `transform` and `opacity`.
- Avoid layout-heavy animations where possible.
- Avoid expensive animated visual filters.
- Avoid unnecessary reflows.
- Maintain responsive interactions during transitions.
- Use GPU-friendly animation techniques appropriately.
- Avoid indiscriminate use of `will-change`.

### 7.9 Reduced Motion

Respect the user's `prefers-reduced-motion` setting.

When reduced motion is enabled:

- Remove nonessential entrance animations.
- Disable decorative continuous motion.
- Avoid large translations and scaling.
- Prefer immediate state changes or short opacity transitions.
- Preserve essential interaction feedback.

Expressive motion must not compromise accessibility.

## 8. Spacing and Visual Rhythm

Use a consistent spacing scale.

| Token | Value |
|---|---|
| Space 1 | 4px |
| Space 2 | 8px |
| Space 3 | 12px |
| Space 4 | 16px |
| Space 5 | 20px |
| Space 6 | 24px |
| Space 8 | 32px |
| Space 10 | 40px |
| Space 12 | 48px |
| Space 16 | 64px |

### Rules

- Use consistent spacing increments.
- Prefer whitespace over decorative separators.
- Avoid cramped components.
- Keep spacing proportional to typography and component size.
- Use spacing to reinforce visual hierarchy.
- Maintain consistent visual rhythm.

This section defines spacing tokens only and does not prescribe page layouts or content arrangements.

## 9. Theme Behavior

Both themes must preserve the same design identity.

Theme switching should update colors and surfaces without changing the fundamental visual language.

### 9.1 Light Theme

- Main background: `#F8FAF9`
- Primary surface: `#FFFFFF`
- Secondary surface: `#EAF0ED`
- Main text: `#171717`
- Primary accent: `#0F766E`
- Secondary accent: `#B65F50`

### 9.2 Dark Theme

- Main background: `#0B1514`
- Primary surface: `#142421`
- Secondary surface: `#20352F`
- Main text: `#F5F5F5`
- Primary accent: `#5ED0BB`
- Secondary accent: `#E7A08C`

### 9.3 Theme Transition

- Use smooth color transitions.
- Recommended duration: 200–300ms.
- Avoid dramatic full-screen theme-switch animations.
- Do not animate large geometry changes during theme switching.
- Respect reduced-motion preferences.
- Ensure all components use semantic theme tokens.

## 10. Accessibility

The design must remain usable and legible in both themes.

- Follow WCAG AA contrast guidelines.
- Maintain readable typography.
- Provide clear keyboard focus indicators.
- Ensure interactive states remain distinguishable.
- Avoid relying exclusively on color.
- Support reduced-motion preferences.
- Aim for interactive hit targets of at least 44×44px.
- Maintain typography readability at smaller viewport sizes.
- Preserve usability at increased browser zoom.
- Avoid animations that obstruct interaction.

Accessibility takes priority over visual minimalism when they conflict.

## 11. Visual Restrictions

The following treatments are prohibited unless the design system is explicitly revised:

- Box shadows
- Drop shadows
- Gradient backgrounds
- Gradient text
- Glassmorphism
- Neumorphism
- Heavy borders
- Excessive outlines
- Unrelated saturated accents beyond the defined palette
- Unnecessary decorative shapes
- Excessive corner rounding
- Uncontrolled animations
- Excessive motion blur
- Inconsistent icon styles
- Arbitrary typography variations
- Background and foreground colors with insufficient visual separation

## 12. Do's and Don'ts

### Do

- Use teal as the signature accent.
- Maintain consistent light and dark themes.
- Use `#F8FAF9` for the light background.
- Use `#FFFFFF` for light foreground surfaces.
- Use `#0B1514` for the dark background.
- Use `#142421` for dark foreground surfaces.
- Maintain visible tonal separation between background and cards.
- Use JetBrains Mono for headings.
- Use Inter for body text and UI controls.
- Prefer borderless, flat components.
- Apply soft rounded corners consistently.
- Use expressive, polished motion.
- Establish visual hierarchy through typography and color.
- Maintain accessible contrast and focus states.
- Reuse semantic design tokens.

### Don't

- Add shadows or elevation.
- Introduce gradients.
- Add borders to every component.
- Use pure white as the main light background.
- Use pure black as the main dark background.
- Rely on barely distinguishable surfaces without spacing or a secondary surface layer.
- Introduce accent colors beyond the defined teal and warm secondary.
- Mix unrelated font families.
- Use excessive corner rounding.
- Animate every element.
- Use excessive bouncing or decorative motion.
- Create unnecessary visual complexity.
- Sacrifice usability for aesthetics.
- Hardcode theme-specific colors into reusable components.

## 13. Implementation Guidance

This document serves as the visual source of truth.

All styling decisions should derive from centralized semantic design tokens.

Implementation must:

1. Define centralized light and dark theme variables.
2. Keep brand colors separate from semantic surface colors.
3. Preserve the exact background and primary surface colors defined in this document.
4. Maintain clear tonal separation between background and foreground components.
5. Reuse typography tokens consistently.
6. Reuse the established radius and spacing scales.
7. Apply consistent animation durations and easing.
8. Respect reduced-motion preferences.
9. Use semantic colors instead of hardcoded component-level values.
10. Preserve the flat, borderless visual language.
11. Maintain accessible interaction feedback.
12. Avoid introducing visual styles that contradict this document.

When making a visual decision not explicitly covered here, prioritize consistency, minimalism, accessibility, surface clarity, and the established teal-based identity.

## 14. Scope of This Document

This document governs:

- Color system
- Light and dark themes
- Typography
- Surface styling
- Corner radii
- Component visual appearance
- Motion and animation
- Spacing tokens
- Visual consistency
- Accessibility standards

This document does not define:

- Application features
- Page architecture
- Content structure
- Navigation hierarchy
- Page or section arrangements
- Business logic
- Functional requirements

It is a visual design guideline only and must not be interpreted as a product requirements document or layout specification.
