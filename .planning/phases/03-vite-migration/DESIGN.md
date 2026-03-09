# Phase 03 — Vite Migration Design

**Date:** 2026-03-09
**Branch:** vite-migration
**Motivation:** CRA (Create React App) is deprecated and unmaintained. Migrating to Vite future-proofs the toolchain with a modern, actively maintained build system.

---

## Approach

Big Bang replacement — remove `react-scripts` entirely and replace with Vite + Vitest in one atomic commit. Justified by the project's zero custom webpack config, no environment variables, and clean CRA setup.

---

## Package Changes

### Remove
- `react-scripts` (CRA)

### Add
- `vite` — build tool and dev server
- `@vitejs/plugin-react` — JSX + Fast Refresh support
- `vitest` — Jest-compatible test runner (Vite-native)
- `@vitest/coverage-v8` — coverage reporting
- `jsdom` — DOM environment for Vitest

### Testing libraries stay unchanged
`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@testing-library/dom` — no changes needed; Vitest's API is Jest-compatible.

### Updated scripts
```json
"start":   "vite",
"build":   "vite build",
"preview": "vite preview",
"test":    "vitest"
```

---

## New Configuration Files

### `react-app/vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `react-app/vitest.config.js`
```js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },
})
```

`globals: true` makes `describe`, `it`, `expect` available without imports, matching existing test behavior — no test file changes needed.

---

## `index.html` Changes

Move `public/index.html` → `react-app/index.html` (Vite reads from project root).

Changes within the file:
- Replace all `%PUBLIC_URL%/` with `/`
- Add Vite module script entrypoint: `<script type="module" src="/src/index.js"></script>`

The `public/` folder stays in place — Vite automatically serves its contents as static assets at `/`.

---

## Vercel Deployment

Add `vercel.json` at the **repo root** (not inside `react-app/`):

```json
{
  "buildCommand": "cd react-app && npm run build",
  "outputDirectory": "react-app/dist",
  "framework": null
}
```

- `"framework": null` disables Vercel's CRA auto-detection
- `outputDirectory` points to `dist/` (Vite default) instead of CRA's `build/`
- Committed in the same atomic commit as the migration — prevents a broken preview deployment state

---

## Files Changed

| File | Action |
|---|---|
| `react-app/package.json` | Remove `react-scripts`, add Vite + Vitest deps, update scripts |
| `react-app/vite.config.js` | Create |
| `react-app/vitest.config.js` | Create |
| `react-app/index.html` | Move from `public/index.html`, update refs, add module script |
| `vercel.json` | Create at repo root |

**No source files, test files, CSS, or components are touched.**

---

## Success Criteria

1. `npm start` launches the Vite dev server with Fast Refresh working
2. `npm run build` produces a production bundle in `react-app/dist/`
3. `npm test` runs all 4 existing test files via Vitest with no test code changes
4. Vercel preview deployment on `vite-migration` branch builds and serves correctly
5. `react-scripts` is fully removed from `package.json`
