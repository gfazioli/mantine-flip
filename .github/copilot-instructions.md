# Copilot instructions (mantine-flip)

## Project layout
- Monorepo (Yarn workspaces) with two packages: `package/` (published library) and `docs/` (Next.js docs site).
- Library source lives in `package/src/` (entry: `package/src/index.ts`, main component: `package/src/Flip.tsx`).
- Docs live in `docs/` and import the library via `workspace:*`.

## Key workflows (use these commands)
- Install: `yarn`
- Build library (Rollup + types + CSS): `yarn build` (outputs to `package/dist/`).
- Full CI-style checks: `yarn test` (syncpack + prettier check + typecheck + lint + jest).
- Run docs locally: `yarn dev` (runs Next dev server on port 9281).
- Build/export docs: `yarn docs:build` (runs docgen then `next build`).
- Storybook: `yarn storybook` (port 8271).

## Build/publish details you must respect
- Rollup builds `package/src/index.ts` into `package/dist/esm` and `package/dist/cjs` with `preserveModules` (see `rollup.config.mjs`).
- CSS Modules are extracted + minified; class names are hashed via `hash-css-selector`.
- `yarn build` also generates declaration files via `scripts/generate-dts.ts` and post-processes CSS via `scripts/prepare-css.ts`:
  - publishable styles are `package/dist/styles.css` and `package/dist/styles.layer.css`
  - do not import `package/dist/esm/index.css` directly; it is removed in `prepare-css`.
- Publishing is automated by `scripts/release.ts` (bumps `package/package.json`, builds, copies root docs/license files into `package/`, then `npm publish`).
  - **CRITICAL**: Release script requires a clean git working tree (no uncommitted changes) before running.
- Docs site uses dynamic `basePath` in production (derived from `package/package.json` repository field in `docs/next.config.mjs`), but no basePath in dev.

## Component conventions (Mantine patterns)
- Components follow Mantine Styles API patterns (`useProps`, `useStyles`, `createVarsResolver`, `polymorphicFactory`).
  - Example: `package/src/Flip.tsx` defines `FlipStylesNames` and CSS variables (`--flip-perspective`, `--flip-transition-duration`, `--flip-transition-timing-function`).
- Subcomponents are attached as static members (e.g. `Flip.Target = FlipTarget` in `package/src/Flip.tsx`).
- Runtime guardrails are intentional:
  - `Flip` requires exactly two children and throws if not.
  - `Flip.Target` requires an element child (uses `isElement`/`cloneElement`) and throws otherwise.
- Context is created with Mantine `createSafeContext` (see `package/src/Flip.context.ts`) and errors are centralized in `package/src/Flip.errors.ts`.

## Testing & examples
- Tests use `@mantine-tests/core` + Jest with `esbuild-jest` transform (see `jest.config.cjs` and `package/src/Flip.test.tsx`).
- Story examples live next to the component (`package/src/Flip.story.tsx`).
- Docs demos are in `docs/demos/` and the MDX page is `docs/docs.mdx`.

## When changing the public API
- Update the library code in `package/src/` first, then:
  - Update docs demos/MDX (`docs/demos/*`, `docs/docs.mdx`) if behavior/props changed.
  - Run `yarn build` to ensure types + styles outputs still match packaging.
  - Run `yarn jest` (or `yarn test`) to validate.
