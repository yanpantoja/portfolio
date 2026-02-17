# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (flat config, no args needed)
```

No test runner is configured.

## Architecture

This is a single-page portfolio with a **dual-mode system** — users toggle between an interactive terminal CLI and a traditional portfolio view. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

### Dual-Mode Flow

`src/app/page.tsx` is the only route (`/`). It uses `usePersistedMode` to read the user's saved preference from localStorage (`'portfolio-mode'` key). During SSR, `mounted` is `false` (via `useSyncExternalStore` with `getServerSnapshot = () => false`), so Terminal always renders server-side to avoid hydration mismatch. Once mounted on the client, the persisted mode is read.

### Data Layer

**`src/data/portfolio.ts` is the single source of truth for all content.** Both the Terminal commands (`src/lib/commands.ts`) and all Portfolio section components import from this file. To update any displayed content, edit only this file.

### Terminal (`src/components/Terminal.tsx`)

Client component with CLI emulation: command history (arrow keys), tab autocomplete, staggered line animation (40ms per line via setTimeout). Commands are dispatched in `src/lib/commands.ts` via `processCommand()`, which returns `string[]` of **raw HTML** rendered with `dangerouslySetInnerHTML`. Terminal output is styled via CSS classes in `globals.css`.

### Portfolio (`src/components/portfolio/`)

`Portfolio.tsx` is the shell (fixed header + mobile nav). Section components are rendered in order: Hero, About, Skills, Projects, Experience, Certifications, Contact. Navigation uses anchor links (`#about`, `#skills`, etc.) matching section `id` attributes.

## Styling Conventions

- **Tailwind v4 CSS-first config** — there is no `tailwind.config.js`. All theme tokens are in the `@theme` block in `src/app/globals.css`.
- **No Tailwind utility classes in JSX.** All styling uses custom CSS class names defined in `globals.css` under `@layer components`.
- Class naming: `terminal-*` prefix for terminal, `portfolio-*` prefix for portfolio. Modifiers use `--` suffix (e.g., `terminal-header-dot--close`).
- Responsive breakpoint at `max-width: 640px` in a separate `@layer components` block.
- Body overflow is controlled via CSS `:has()` selector (`body:has(.terminal-container)` → hidden, `body:has(.portfolio-container)` → auto).

## Key Patterns

- All components are `'use client'` — only `layout.tsx` is a server component.
- Component props are optional with `= {}` default destructuring, allowing standalone rendering during SSR fallback.
- Two fonts loaded in `layout.tsx` as CSS variables: `--font-mono` (IBM Plex Mono) and `--font-pixel` (Pixelify Sans).
- Path alias: `@/*` maps to `./src/*`.
- Icons use `lucide-react` with `aria-hidden="true"` on decorative icons.
