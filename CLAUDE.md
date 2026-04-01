# CLAUDE.md

## Project
`@gfazioli/mantine-flip` — a Mantine 9 component that renders a two-face container with flip animation between front and back views. Supports controlled/uncontrolled modes, swipe gestures, compound components (`Flip.Front`/`Flip.Back`/`Flip.Target`), and spring easing. Requires React 19 and TypeScript 6.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run ESLint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push) |

> **Important**: After changing the public API (props, types, exports), always run `yarn clean && yarn build` before `yarn test`, because `yarn docgen` needs the fresh build output.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 15 documentation site).

### Package Source (`package/src/`)
```
Flip.tsx                  # Main component (polymorphic factory, Mantine Styles API)
Flip.context.ts           # React context via Mantine createSafeContext
Flip.module.css           # CSS Modules (hashed with me prefix)
Flip.errors.ts            # Error definitions
Flip.test.tsx             # Component tests
Flip.story.tsx            # Storybook stories
index.ts                  # Public exports
FlipFront/FlipFront.tsx   # Flip.Front compound component (explicit front face)
FlipBack/FlipBack.tsx     # Flip.Back compound component (explicit back face)
FlipTarget/FlipTarget.tsx # Flip.Target subcomponent (click trigger)
```

Subcomponents are attached as static members: `Flip.Target`, `Flip.Front`, `Flip.Back`.

### Build Pipeline
Rollup bundles to dual ESM (`dist/esm/`) and CJS (`dist/cjs/`) with `'use client'` banner. CSS modules are hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS is split into `styles.css` and `styles.layer.css` (layered version). Non-index chunks get `'use client'` banner automatically. CSS is extracted, minified, and post-processed by `scripts/prepare-css.ts`.

## Component Details

### Mantine Styles API
Follows standard Mantine patterns: `useProps`, `useStyles`, `createVarsResolver`, `polymorphicFactory`. CSS variables: `--flip-perspective`, `--flip-transition-duration`, `--flip-transition-timing-function`.

### Two Children Modes
Either exactly 2 raw children (backward compat) or `Flip.Front`/`Flip.Back` compound components. Mixing is not allowed.

### Controlled / Uncontrolled
Supports both controlled (`flipped` prop) and uncontrolled (`defaultFlipped` prop) modes via `useUncontrolled`.

### Disabled State
`disabled` prop blocks all flip interactions (Target clicks, `toggleFlip`, swipe).

### Flip.Target
Requires an element child (uses `isElement`/`cloneElement`) — throws otherwise. Adds `data-disabled`/`aria-disabled` when disabled.

### Transition Callback
`onTransitionEnd` fires when the CSS flip animation completes. Filters on `propertyName === 'transform'` and `event.target === event.currentTarget` to avoid bubbled transitions from children.

### Lazy Back Face
`lazyBack` defers rendering of the back face until first flip. Uses a `useRef` flag (not state) to avoid extra re-renders. Disabling `lazyBack` at runtime immediately mounts the back face.

### Swipe Gestures
`swipeable` enables touch swipe gestures; direction follows the `direction` prop. Uses native `touchstart`/`touchend` events with configurable `swipeThreshold`. Touch handlers use a stable ref (`toggleFlipRef`) so listeners are not re-attached on every flip.

### Easing
`easing="spring"` resolves to a CSS `linear()` spring curve. Other easing values pass through directly.

### Accessibility
Root has `aria-live="polite"`. Each face gets `inert` toggled based on `_flipped` state to control focusability.

### Direction Reset Logic
When `direction`/`directionFlipIn`/`directionFlipOut` props change at runtime, `rotateValue` is reset to 0. In uncontrolled mode, `flipped` state is also reset to `false`. In controlled mode, only `rotateValue` resets (the parent owns `flipped`). A `directionResetRef` flag prevents the `_flipped` effect from immediately re-applying rotation after a direction reset.

### rotateValue Accumulation
With same-direction flip combos (`negative/negative` or `positive/positive`), the rotation value grows unbounded. This is intentional — normalizing via modulo would break CSS transition continuity.

## Testing
Jest with `jsdom` environment, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Component tests use `@mantine-tests/core` render helper. Run a single test file with `yarn jest --testPathPattern Flip`.

## Known Issues
- **CSS fallback values**: Must NOT be quoted in `var()` — e.g. `var(--flip-perspective, 1000px)` not `'1000px'`.
- **Sub-components in demos**: Never define child components (e.g. `FrontCard`, `BackCard`) inside a parent render function — React sees new component identity each render, causing remounts, flickering, and form state loss. Always define them at module scope.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace `CLAUDE.md` (in the parent directory) for:
- Development checklist (code -> test -> build -> docs -> release)
- Cross-cutting patterns (compound components, responsive CSS, GitHub sync)
- Update packages workflow
- Release process
