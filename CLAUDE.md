# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

`@gfazioli/mantine-flip` — a Mantine component that renders a two-face container with flip animation between front and back views. Published to npm as `@gfazioli/mantine-flip`.

## Commands

| Command | Purpose |
|---------|---------|
| `yarn build` | Build library (Rollup → `package/dist/` with ESM, CJS, types, CSS) |
| `yarn test` | Full CI checks: syncpack + prettier + typecheck + lint + jest |
| `yarn jest` | Run only Jest tests |
| `yarn jest --testPathPattern Flip` | Run a single test file |
| `yarn dev` | Start docs dev server (port 9281) |
| `yarn storybook` | Start Storybook (port 8271) |
| `yarn docs:build` | Build docs (runs docgen then next build) |
| `yarn docs:deploy` | Build + deploy docs to GitHub Pages |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn prettier:write` | Fix formatting issues |
| `yarn release:patch` | Bump patch version + deploy docs (requires clean git tree) |

## Project Structure

Yarn workspaces monorepo with two packages:

- **`package/`** — The published npm library
  - `package/src/Flip.tsx` — Main component (polymorphic factory, Mantine Styles API)
  - `package/src/FlipTarget/FlipTarget.tsx` — `Flip.Target` subcomponent (click trigger)
  - `package/src/Flip.context.ts` — React context via Mantine `createSafeContext`
  - `package/src/Flip.module.css` — CSS Modules (hashed via `hash-css-selector` with `me` prefix)
  - `package/src/index.ts` — Public exports
- **`docs/`** — Next.js documentation site
  - `docs/demos/` — Interactive demo components
  - `docs/docs.mdx` — Main documentation page

## Architecture & Conventions

- Follows **Mantine Styles API** patterns: `useProps`, `useStyles`, `createVarsResolver`, `polymorphicFactory`.
- CSS variables: `--flip-perspective`, `--flip-transition-duration`, `--flip-transition-timing-function`.
- Subcomponents are attached as static members: `Flip.Target = FlipTarget`.
- Flip requires **exactly two children** (front and back) — throws at runtime otherwise.
- `Flip.Target` requires an element child (uses `isElement`/`cloneElement`) — throws otherwise.
- Supports both controlled (`flipped` prop) and uncontrolled (`defaultFlipped` prop) modes via `useUncontrolled`.
- Rollup builds with `preserveModules`. CSS is extracted, minified, and post-processed by `scripts/prepare-css.ts` into `styles.css` and `styles.layer.css`.
- Non-index chunks get `'use client'` banner automatically.
- Tests use `@mantine-tests/core` + Jest with `esbuild-jest` transform.
- Docs site uses dynamic `basePath` in production (from `package/package.json` repository field).

## When Changing the Public API

1. Update library code in `package/src/`
2. Update docs demos/MDX (`docs/demos/*`, `docs/docs.mdx`) if behavior/props changed
3. Run `yarn build` to ensure types + styles outputs are correct
4. Run `yarn test` to validate
