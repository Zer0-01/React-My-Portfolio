# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 App Router portfolio. Routes live in `app/`, portfolio sections in `components/custom/`, and shadcn/ui primitives in `components/ui/`. Keep content in `data/`, helpers in `lib/`, and static media in `public/projects/<slug>/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start Turbopack at `http://localhost:3000`.
- `npm run build`: create the production build.
- `npm start`: serve the completed production build.
- `npx tsc --noEmit`: run strict TypeScript validation.

No lint or test script is configured. Do not claim either check without adding its tooling.

## UI, Styling & Motion

Use shadcn/ui as the default component library and Tailwind CSS as the default styling system. Treat `components/ui/` as vendor-managed: **do not modify files there**. Compose or extend primitives from `components/custom/` instead.

`DESIGN.md` is the authoritative visual guideline. Use the semantic design tokens defined in `app/globals.css`; do not introduce arbitrary colors, spacing, radii, shadows, or typography when an existing token applies. Use Motion (`framer-motion`) for animation. Keep motion purposeful and restrained, and honor `prefers-reduced-motion`.

## Coding Style & Quality Bar

Write strict TypeScript and focused functional React components. Use PascalCase for components and files, camelCase for utilities and data exports, and lowercase route files. Prefer `@/` aliases, `cn()` for conditional classes, semantic HTML, accessible labels, keyboard support, and responsive layouts. Add `"use client"` only when browser behavior requires it.

Design for scalability and maintenance: keep responsibilities narrow, reuse established patterns, avoid duplication, and choose clear names over clever abstractions. Follow current React and Next.js best practices.

Avoid AI slop: no generic filler copy, invented metrics, fake product claims, placeholder UI, needless abstractions, duplicated components, or indiscriminate gradients, cards, glows, and animations. Every visual or content choice must support the portfolio’s real work and match `DESIGN.md`.

## Testing Guidelines

Before submitting, run `npx tsc --noEmit` and `npm run build`. Manually verify home and project routes, responsive layouts, links, media, keyboard navigation, theme contrast, and reduced-motion behavior. If tests are introduced, colocate them as `*.test.ts(x)` and add an `npm test` script.

## Commit & Pull Request Guidelines

Use focused Conventional Commit-style subjects such as `feat:`, `refactor:`, `style:`, or `chore:`. Pull requests should explain the user-visible change, list verification, link relevant issues, and include before/after screenshots for visual work. Call out new dependencies, assets, or configuration.
