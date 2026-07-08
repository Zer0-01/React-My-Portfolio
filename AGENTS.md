# AGENTS.md

## Project Context

This is a frontend-only web portfolio project built with:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

The portfolio is for personal branding and job hunting. The UI should feel premium, minimal, professional, sharp, and technical.

## Main Design Reference

Always refer to `DESIGN.md` before creating or updating UI.

`DESIGN.md` is the main source of truth for:

* Visual direction
* Colors
* Typography
* Spacing
* Radius
* Layout
* Components
* Animation
* Responsive behavior
* Overall UI/UX quality

Do not create UI that conflicts with `DESIGN.md`.

## Styling Rules

Use Tailwind CSS as the default styling approach.

Use the existing design tokens in `globals.css` as the main design token source.

Prefer semantic Tailwind classes such as:

```tsx
bg-background
text-foreground
bg-card
text-card-foreground
text-muted-foreground
border-border
bg-primary
text-primary-foreground
```

Avoid hardcoded colors, random spacing, custom shadows, custom radius values, or one-off styles when an existing token already exists.

Do not introduce a new design system.

Do not add new design tokens unless they are clearly needed. If a new token is needed, explain why first.

## shadcn/ui Rules

Use `shadcn/ui` as the default component library.

Prefer existing shadcn components before creating custom UI from scratch.

Use shadcn components for things like:

* Button
* Card
* Badge
* Input
* Textarea
* Dialog
* Sheet
* DropdownMenu
* Tabs
* Accordion
* Skeleton
* Separator

Customize shadcn components using:

* Props
* Variants
* `className`
* Tailwind classes
* Existing `globals.css` tokens

Do not edit generated shadcn component files directly unless I explicitly ask.

This includes files inside:

```txt
components/ui/
src/components/ui/
```

If a new shadcn component is needed, tell me the command first and wait for my approval before running it.

## Generated File Rules

Do not manually edit generated files.

Do not modify folders or files such as:

```txt
.next/
out/
dist/
build/
coverage/
node_modules/
*.generated.ts
*.generated.tsx
*.gen.ts
*.gen.tsx
```

If generated files need to be updated, explain which command is needed and wait for my approval.

## File Change Rules

Do not create, edit, delete, move, or rename files unless I explicitly ask.

Before changing files, explain:

1. Which files need to change
2. Why they need to change
3. Whether any new files are needed
4. Whether any command needs to be run

Then wait for my approval.

## Command Rules

Do not run commands unless I approve, except safe read-only inspection commands.

Allowed read-only commands include:

```bash
ls
pwd
cat
grep
find
tree
```

Commands that install packages, generate files, run builds, run tests, format code, or modify the project require my approval first.

Examples:

```bash
npm install
pnpm install
npm run build
pnpm build
npm run lint
pnpm lint
npx shadcn@latest add button
pnpm dlx shadcn@latest add button
```

## UI Quality Rules

All UI must be:

* Premium
* Minimal
* Professional
* Responsive
* Accessible where practical
* Consistent with `DESIGN.md`
* Consistent with `globals.css`
* Built with Tailwind CSS
* Built with shadcn/ui where suitable

Avoid UI that looks:

* Generic
* Messy
* Overdesigned
* AI-generated
* Inconsistent
* Too playful
* Too corporate
* Unpolished

## Component Rules

Keep components small, readable, and focused.

Prefer splitting large sections into clear components, especially for portfolio sections such as:

```txt
Hero
About
Experience
Projects
Skills
Contact
```

Avoid putting too much UI directly inside one large `page.tsx`.

Use clear naming.

Examples:

```txt
hero-section.tsx
about-section.tsx
experience-section.tsx
projects-section.tsx
skills-section.tsx
contact-section.tsx
project-card.tsx
skill-badge.tsx
```

## TypeScript Rules

Use TypeScript properly.

Avoid:

* `any`
* Unsafe type assertions
* Duplicated logic
* Unnecessary abstractions
* Large components with too many responsibilities

Prefer:

* Clear types
* Simple props
* Readable components
* Safe null handling
* Existing project conventions

## Responsive Rules

Design mobile-first.

All sections must work properly on:

* Mobile
* Tablet
* Desktop

Avoid fixed widths that break small screens.

Use responsive Tailwind classes intentionally.

## Accessibility Rules

Use semantic HTML where possible.

Use:

* Proper buttons for actions
* Proper links for navigation
* Proper labels for form fields
* Visible focus states
* Meaningful `alt` text for images

Do not rely on color alone to communicate meaning.

## Final Priority

When working on this project, always prioritize:

1. `DESIGN.md`
2. Existing `globals.css` design tokens
3. Existing shadcn/ui components
4. Tailwind CSS utility classes
5. Existing project structure and naming style
6. Clean, premium, responsive frontend implementation

If something is unclear, ask before making changes.
