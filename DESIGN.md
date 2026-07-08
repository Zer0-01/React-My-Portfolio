# DESIGN.md

## Project Overview

This project is a personal web portfolio for a Software Engineer. The portfolio should support both personal branding and job hunting by presenting the developer as professional, capable, trustworthy, and technically sharp.

The design should feel like a premium personal website combined with a polished developer resume. It should not feel like a generic template, overly playful portfolio, or overly corporate resume page.

## Design Goals

The interface should communicate:

* Professional software engineering maturity
* Premium minimal presentation
* Sharp and technical visual language
* Clear career positioning
* Strong project storytelling
* Easy scanning for recruiters and hiring managers
* Clean developer personality without looking overly casual

The portfolio should feel modern, confident, and refined.

## Target Impression

When someone visits the portfolio, they should immediately understand:

* The owner is a Software Engineer
* The portfolio is well-designed and thoughtfully built
* The developer cares about clean UI, structure, and implementation quality
* The projects are practical, real, and worth reviewing
* The experience and skills are easy to evaluate quickly

## Tech Stack

The design system is intended for:

* Next.js
* Tailwind CSS
* shadcn/ui
* React components
* Light and dark mode support

## Visual Direction

### Core Style

The portfolio should use a **premium minimal dark-modern style**.

The design should be:

* Clean
* Sharp
* Technical
* Spacious
* Professional
* Premium
* Focused
* Easy to scan

Avoid:

* Excessive gradients
* Loud colors
* Overly playful illustrations
* Random decorative elements
* Heavy shadows
* Overdesigned cards
* Generic SaaS-template appearance

## Theme Mode Direction

The portfolio supports both light mode and dark mode.

Each mode should feel intentionally designed, not simply inverted.

### Dark Mode

Dark mode should feel:

* Premium
* Focused
* Technical
* Elegant
* Slightly cinematic
* High contrast but not harsh

Use deep neutral backgrounds with burgundy accents.

### Light Mode

Light mode should feel:

* Clean
* Professional
* Editorial
* Premium
* Resume-friendly
* Spacious

Use warm off-white or soft neutral backgrounds instead of pure white where possible.

## Brand Color

The primary brand direction is **burgundy**.

Burgundy should be used as a premium accent color, not as a large background color everywhere.

Use burgundy for:

* Primary CTA
* Active navigation state
* Key highlights
* Section labels
* Important links
* Focus rings
* Small decorative technical details

Avoid using burgundy too heavily, because it can make the interface feel aggressive or outdated.

## Suggested Color Tokens

### Light Mode

```css
:root {
  --background: 0 0% 98%;
  --foreground: 222 22% 9%;

  --card: 0 0% 100%;
  --card-foreground: 222 22% 9%;

  --popover: 0 0% 100%;
  --popover-foreground: 222 22% 9%;

  --primary: 345 58% 28%;
  --primary-foreground: 0 0% 98%;

  --secondary: 220 14% 96%;
  --secondary-foreground: 222 22% 12%;

  --muted: 220 14% 95%;
  --muted-foreground: 220 8% 42%;

  --accent: 345 45% 94%;
  --accent-foreground: 345 58% 24%;

  --destructive: 0 72% 50%;
  --destructive-foreground: 0 0% 98%;

  --border: 220 13% 90%;
  --input: 220 13% 90%;
  --ring: 345 58% 28%;

  --radius: 0.75rem;
}
```

### Dark Mode

```css
.dark {
  --background: 222 24% 6%;
  --foreground: 0 0% 96%;

  --card: 222 22% 8%;
  --card-foreground: 0 0% 96%;

  --popover: 222 22% 8%;
  --popover-foreground: 0 0% 96%;

  --primary: 345 56% 42%;
  --primary-foreground: 0 0% 98%;

  --secondary: 222 18% 12%;
  --secondary-foreground: 0 0% 96%;

  --muted: 222 18% 13%;
  --muted-foreground: 220 8% 66%;

  --accent: 345 38% 16%;
  --accent-foreground: 345 56% 72%;

  --destructive: 0 72% 55%;
  --destructive-foreground: 0 0% 98%;

  --border: 222 16% 16%;
  --input: 222 16% 16%;
  --ring: 345 56% 42%;
}
```

## Typography

### Font Direction

Use **Hanjet** as the main brand typography direction if it supports the desired portfolio personality and readability.

Because Hanjet has a distinctive display-like personality, it should be used carefully.

Recommended usage:

* Hero headline
* Section labels
* Large name text
* Selected technical accents
* Logo or personal wordmark

For long paragraphs, project descriptions, and resume-like content, pair Hanjet with a highly readable sans-serif font.

Recommended pairing:

* Hanjet for display
* Inter, Geist, or Plus Jakarta Sans for body text

### Typography Rules

Headings should feel sharp, confident, and structured.

Body text should feel readable, calm, and professional.

Avoid:

* Too many font sizes
* Overly small body text
* Excessive uppercase text
* Long paragraphs without spacing
* Decorative typography that hurts readability

### Suggested Type Scale

```txt
Display / Hero: 56px - 72px
H1: 48px - 60px
H2: 36px - 44px
H3: 24px - 30px
Body: 16px - 18px
Small: 14px
Caption: 12px - 13px
```

For mobile:

```txt
Hero: 40px - 48px
H1: 36px - 44px
H2: 28px - 34px
H3: 22px - 26px
Body: 15px - 16px
Small: 13px - 14px
```

## Layout Principles

The layout should be spacious, structured, and easy to scan.

Use a strong vertical rhythm between sections.

Recommended page structure:

```txt
Hero
About
Experience
Projects
Skills
Contact
Footer
```

### Container Width

Use a centered max-width container.

Recommended values:

```txt
Main container: max-w-6xl
Content-heavy sections: max-w-4xl
Text blocks: max-w-2xl or max-w-3xl
```

### Section Spacing

Use generous vertical spacing.

Recommended:

```txt
Desktop section padding: py-24 to py-32
Mobile section padding: py-16 to py-20
```

### Grid System

Use clean responsive grids.

Examples:

```txt
Projects:
- Desktop: 2-column grid
- Mobile: 1-column grid

Skills:
- Desktop: grouped grid
- Mobile: stacked cards

Experience:
- Timeline or stacked resume-style cards
```

## Shape and Radius

The UI should feel sharp and technical, but still premium.

Use moderate radius, not overly pill-shaped.

Recommended:

```txt
Cards: rounded-xl
Buttons: rounded-lg or rounded-xl
Badges: rounded-md or rounded-full depending on context
Inputs: rounded-lg
Large containers: rounded-2xl
```

Avoid making every component too soft or bubbly.

## Border and Shadow Style

The design should rely more on:

* Borders
* Contrast
* Spacing
* Typography
* Subtle background layers

Use shadows minimally.

Preferred card treatment:

```txt
Light mode:
- White or near-white card
- Subtle border
- Minimal shadow or no shadow

Dark mode:
- Dark elevated surface
- Subtle border
- No heavy glow
```

Avoid:

* Large drop shadows
* Neon glow
* Heavy glassmorphism
* Overly visible outlines everywhere

## Motion and Animation

Animations are allowed, but gradients should be avoided.

Motion should feel premium and intentional.

Use animation for:

* Page entrance
* Section reveal
* Hover interactions
* Button feedback
* Project card hover
* Navigation transitions
* Skill badge reveal

Animation style:

```txt
Duration: 150ms - 400ms
Easing: smooth, calm, not bouncy
Movement: subtle
```

Recommended animation patterns:

```txt
Fade in + slight upward movement
Subtle card lift on hover
Border color transition on hover
Icon movement by 2px - 4px
Smooth navigation indicator
```

Avoid:

* Excessive parallax
* Constant moving backgrounds
* Animated gradients
* Overly playful bouncing
* Distracting cursor effects
* Animation that slows down reading

## Buttons

Buttons should feel premium, direct, and sharp.

### Primary Button

Use for the main action.

Examples:

* View Projects
* Download Resume
* Contact Me

Style:

```txt
Burgundy background
Light text
Medium height
Strong but calm hover state
```

### Secondary Button

Use for supporting actions.

Examples:

* GitHub
* LinkedIn
* View Experience

Style:

```txt
Transparent or muted background
Border
Foreground text
Subtle hover fill
```

### Button Sizes

Recommended:

```txt
Default height: 40px - 44px
Large CTA: 48px
Icon button: 40px
```

## Navigation

The navigation should be minimal and sticky or fixed depending on layout.

Recommended nav items:

```txt
About
Experience
Projects
Skills
Contact
```

Include:

* Name or personal logo on the left
* Navigation links on desktop
* Mobile menu on small screens
* Resume CTA or theme toggle on the right

The active or hover state should use burgundy subtly.

Avoid large navigation bars that take attention away from the hero section.

## Hero Section

The hero section is the most important section.

It should clearly position the person as a Software Engineer.

### Hero Content

Recommended content structure:

```txt
Small intro label
Large name / headline
Short value proposition
Primary CTA
Secondary CTA
Social links
```

Example headline direction:

```txt
Software Engineer building clean, scalable, and user-focused digital products.
```

The hero should feel confident but not exaggerated.

Avoid:

* Generic phrases like “I build amazing things”
* Too much text
* Overly casual tone
* Too many CTAs

### Hero Visual Treatment

Use simple technical visual elements such as:

* Subtle grid background
* Minimal code-like detail
* Abstract border lines
* Small status badge
* Clean profile card
* Technical metadata block

Do not use gradient-heavy hero backgrounds.

## About Section

The About section should explain the person behind the work.

It should include:

* Short professional summary
* Engineering focus
* Product mindset
* UI/UX sensitivity
* Current interests or direction

Keep it concise and human.

Recommended layout:

```txt
Left: Section title and summary
Right: quick facts or profile highlights
```

Possible quick facts:

```txt
Role: Software Engineer
Focus: Web and mobile development
Strength: Clean UI, scalable architecture, product thinking
Location: Malaysia
```

## Experience Section

The Experience section should feel like a premium resume timeline.

Each experience item should include:

* Role
* Company
* Date range
* Short summary
* Key responsibilities
* Technologies used
* Measurable or practical impact where available

Recommended design:

```txt
Timeline layout on desktop
Stacked cards on mobile
```

Each card should be easy to scan.

Use badges for technologies, but do not overload the card.

## Projects Section

The Projects section should be one of the strongest areas of the portfolio.

Each project card should include:

* Project name
* Short description
* Problem
* Solution
* Result or impact
* Tech stack
* Live demo link
* GitHub link
* Case study link if available

### Project Card Layout

Recommended structure:

```txt
Project title
Short description
Problem / Solution / Result summary
Tech stack badges
Action links
```

For important projects, use a larger featured card.

Example layout:

```txt
First project: large featured card
Other projects: 2-column grid
```

### Project Tone

Projects should be described like real product work, not just school assignments or code samples.

Good project framing:

```txt
Built a booking platform to reduce manual admin work and improve customer booking visibility.
```

Avoid weak framing:

```txt
Made a website using Next.js and Tailwind.
```

## Skills Section

The Skills section should show capability clearly without becoming a long keyword dump.

Group skills by category.

Recommended groups:

```txt
Frontend
Mobile
Backend
Database
Tools
UI / Design
```

Example:

```txt
Frontend:
Next.js, React, TypeScript, Tailwind CSS, shadcn/ui

Mobile:
Flutter, Dart, Kotlin, SwiftUI

Backend:
Go, NestJS, REST API

Database:
PostgreSQL, MySQL, Firebase

Tools:
Git, Docker, CI/CD, Figma
```

Use compact badges or grouped cards.

Avoid showing too many unrelated skills with equal weight.

## Contact Section

The Contact section should include both:

* Contact form
* Email and social links

The section should feel simple, trustworthy, and direct.

Recommended content:

```txt
Interested in working together or discussing a role?
Send me a message and I’ll get back to you.
```

Contact form fields:

```txt
Name
Email
Message
Submit button
```

Social/contact links:

```txt
Email
LinkedIn
GitHub
Resume
```

The contact section should not feel too salesy.

## Resume CTA

The portfolio should include a resume download CTA.

Recommended placements:

* Hero section
* Navigation
* Contact section

Button text:

```txt
Download Resume
```

Alternative:

```txt
View Resume
```

Use a secondary or outline button in the hero, unless resume download is the main conversion goal.

## Cards

Cards should be clean, structured, and subtle.

Recommended card style:

```txt
Background: card token
Border: border token
Radius: rounded-xl or rounded-2xl
Padding: p-5 to p-6
Hover: border-primary/40 or slight translate-y
```

Avoid:

* Overly colorful cards
* Heavy shadows
* Random icon backgrounds
* Inconsistent padding
* Too many nested cards

## Badges

Badges should be used for:

* Tech stack
* Role category
* Status labels
* Section metadata

Badge style:

```txt
Small
Muted
Bordered
Readable
Consistent
```

Burgundy badges should be used sparingly for important highlights only.

## Icons

Icons should be minimal and line-based.

Recommended icon style:

```txt
Lucide-style
1.5px - 2px stroke
Rounded caps
Consistent size
```

Use icons for:

* External links
* GitHub
* LinkedIn
* Email
* Download resume
* Tech categories

Avoid unnecessary decorative icons.

## Forms

Form design should follow shadcn/ui patterns.

Inputs should feel clean and premium.

Recommended form style:

```txt
Clear labels
Helpful placeholder text
Visible focus ring
Comfortable input height
Consistent spacing
```

Focus state should use the burgundy ring token.

Validation messages should be clear and not overly technical.

## Accessibility

The design must remain accessible in both light and dark mode.

Requirements:

* Strong text contrast
* Visible focus states
* Keyboard navigable controls
* Clear link states
* Buttons must look clickable
* Do not rely on color alone
* Use semantic HTML structure
* Respect reduced-motion preferences

## Responsive Design

The portfolio must feel carefully designed on mobile, tablet, and desktop.

### Mobile

Mobile should be clean, stacked, and readable.

Prioritize:

* Clear hero message
* Easy navigation
* Large enough touch targets
* Stacked project cards
* Comfortable spacing

### Tablet

Tablet should use balanced spacing and avoid awkward empty areas.

### Desktop

Desktop should feel spacious and premium.

Use:

* Wider grids
* Section-level visual hierarchy
* Strong alignment
* Intentional whitespace

## Content Tone

The writing should sound:

* Professional
* Clear
* Confident
* Direct
* Human
* Not arrogant

Avoid:

* Buzzwords without proof
* Overclaiming
* Too much personality slang
* Generic developer phrases

Preferred tone:

```txt
I design and build practical digital products with clean interfaces, scalable structure, and thoughtful user experience.
```

Avoid:

```txt
I am a passionate developer who loves coding amazing applications.
```

## Section Label Style

Each major section can use a small label above the heading.

Example:

```txt
/ EXPERIENCE
/ SELECTED PROJECTS
/ TECH STACK
```

Style:

```txt
Small uppercase
Letter spacing
Muted foreground
Burgundy accent
```

This supports the sharp technical personality.

## Background Treatment

Use clean layered backgrounds.

Allowed:

* Solid background
* Subtle grid
* Very subtle noise
* Thin border lines
* Section dividers
* Technical alignment guides

Avoid:

* Gradients
* Loud background patterns
* Heavy images
* Neon effects
* Distracting decorative blobs

## Recommended Page Feel

The final website should feel like:

```txt
A premium software engineer portfolio with sharp technical structure, clean resume-like information, polished project storytelling, and subtle burgundy branding.
```

It should not feel like:

```txt
A generic template, colorful student portfolio, over-animated landing page, or plain resume website.
```

## Design Checklist

Before considering the design complete, verify:

* The hero clearly says Software Engineer
* The design works well in both light and dark mode
* Burgundy is used consistently and sparingly
* Typography feels premium and readable
* Project cards explain problem, solution, result, and tech stack
* Resume CTA is visible
* Contact form and social links are easy to find
* Spacing is consistent across sections
* Components follow shadcn/ui patterns
* Animations are subtle and not distracting
* No gradients are used
* Mobile layout feels intentional
* The site looks professional enough for recruiters
* The site still feels personal and memorable

## Final Design Direction

Build a premium minimal portfolio for a Software Engineer using a burgundy-accented light/dark theme, sharp technical layout, refined typography, clean shadcn/ui components, subtle animation, and strong project storytelling.

The design should help recruiters quickly understand the developer’s experience, skills, and project quality while also creating a memorable personal brand.
