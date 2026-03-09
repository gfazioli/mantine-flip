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
  - `package/src/FlipFront/FlipFront.tsx` — `Flip.Front` compound component (explicit front face)
  - `package/src/FlipBack/FlipBack.tsx` — `Flip.Back` compound component (explicit back face)
  - `package/src/Flip.context.ts` — React context via Mantine `createSafeContext`
  - `package/src/Flip.module.css` — CSS Modules (hashed via `hash-css-selector` with `me` prefix)
  - `package/src/index.ts` — Public exports
- **`docs/`** — Next.js documentation site
  - `docs/demos/` — Interactive demo components
  - `docs/docs.mdx` — Main documentation page

## Architecture & Conventions

- Follows **Mantine Styles API** patterns: `useProps`, `useStyles`, `createVarsResolver`, `polymorphicFactory`.
- CSS variables: `--flip-perspective`, `--flip-transition-duration`, `--flip-transition-timing-function`.
- Subcomponents are attached as static members: `Flip.Target`, `Flip.Front`, `Flip.Back`.
- Two children modes: either exactly 2 raw children (backward compat) or `Flip.Front`/`Flip.Back` compound components. Mixing is not allowed.
- `Flip.Target` requires an element child (uses `isElement`/`cloneElement`) — throws otherwise.
- Supports both controlled (`flipped` prop) and uncontrolled (`defaultFlipped` prop) modes via `useUncontrolled`.
- `disabled` prop blocks all flip interactions (Target clicks, toggleFlip, swipe).
- `onTransitionEnd` callback fires when the CSS flip animation completes (filters on `propertyName === 'transform'`).
- `lazyBack` defers rendering of the back face until first flip (uses a `useRef` flag, not state, to avoid extra re-renders).
- `swipeable` enables touch swipe gestures; direction follows the `direction` prop. Uses native `touchstart`/`touchend` events with configurable `swipeThreshold`.
- `easing="spring"` resolves to a CSS `linear()` spring curve. Other easing values pass through directly.
- Accessibility: root has `aria-live="polite"`, each face gets `aria-hidden` toggled based on `_flipped` state, and `Flip.Target` adds `data-disabled`/`aria-disabled` when disabled.
- When `direction`/`directionFlipIn`/`directionFlipOut` props change at runtime, both `rotateValue` and `flipped` state are reset to keep visual and logical state in sync.
- Rollup builds with `preserveModules`. CSS is extracted, minified, and post-processed by `scripts/prepare-css.ts` into `styles.css` and `styles.layer.css`.
- Non-index chunks get `'use client'` banner automatically.
- Tests use `@mantine-tests/core` + Jest with `esbuild-jest` transform.
- Docs site uses dynamic `basePath` in production (from `package/package.json` repository field).

## Known Pitfalls

- **CSS fallback values**: Must NOT be quoted in `var()` — e.g. `var(--flip-perspective, 1000px)` not `'1000px'`.
- **Sub-components in demos**: Never define child components (e.g. `FrontCard`, `BackCard`) inside a parent render function — React sees new component identity each render, causing remounts, flickering, and form state loss. Always define them at module scope.
- **`rotateValue` accumulates**: With same-direction flip combos (`negative/negative` or `positive/positive`), the rotation value grows unbounded. This is intentional — normalizing via modulo would break CSS transition continuity.

## When Changing the Public API

1. Update library code in `package/src/`
2. Update docs demos/MDX (`docs/demos/*`, `docs/docs.mdx`) if behavior/props changed
3. Run `yarn build` to ensure types + styles outputs are correct
4. Run `yarn test` to validate
