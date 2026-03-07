# Technology Stack

**Analysis Date:** 2026-03-07

## Languages

**Primary:**
- JavaScript (JSX) - All application logic, components, and data files in `react-app/src/`

**Secondary:**
- CSS - Inline styles via JS template literals; global CSS in `react-app/src/App.css` and `react-app/src/index.css`
- HTML - Single entry template at `react-app/public/index.html`

## Runtime

**Environment:**
- Node.js 25.2.1 (confirmed on dev machine; no `.nvmrc` or engine constraint declared)

**Package Manager:**
- npm 11.6.2
- Lockfile: `react-app/package-lock.json` present (lockfileVersion 3)

## Frameworks

**Core:**
- React 19.2.4 - UI rendering, component tree (`react-app/src/index.js` mounts via `ReactDOM.createRoot`)
- Create React App (react-scripts 5.0.1) - Build toolchain, dev server, bundling, test runner configuration

**Testing:**
- @testing-library/react 16.3.2 - React component testing
- @testing-library/jest-dom 6.9.1 - DOM assertion matchers (configured in `react-app/src/setupTests.js`)
- @testing-library/dom 10.4.1 - Underlying DOM utilities
- @testing-library/user-event 13.5.0 - User interaction simulation
- Jest - Included and configured by react-scripts; no separate jest.config file

**Build/Dev:**
- react-scripts 5.0.1 - Wraps Webpack, Babel, ESLint, and Jest; no ejected config

## Key Dependencies

**Critical:**
- `react` ^19.2.4 - Component rendering and state management (useState, useRef, useEffect used throughout)
- `react-dom` ^19.2.4 - DOM rendering entry point in `react-app/src/index.js`

**Infrastructure:**
- `web-vitals` ^2.1.4 - Performance metrics collection; wired up in `react-app/src/reportWebVitals.js` but called with no callback (metrics not sent anywhere)

**External Font Delivery:**
- Google Fonts CDN - Loaded via `@import` inside a JSX `<style>` block in `react-app/src/math_curriculum_MHS.jsx`:
  - Playfair Display (400, 600, 700, 900)
  - DM Sans (300, 400, 500)
  - DM Mono (400, 500)

## Configuration

**Environment:**
- No `.env` files present
- No environment variables required; the app is entirely static with no runtime secrets
- `.gitignore` lists `.env.local`, `.env.development.local`, `.env.test.local`, `.env.production.local` as excluded (standard CRA pattern)

**Build:**
- No custom Webpack or Babel config (CRA defaults apply)
- ESLint config embedded in `react-app/package.json` under `"eslintConfig"`: extends `react-app` and `react-app/jest`
- Browserslist defined in `react-app/package.json`: production targets `>0.2%`, `not dead`, `not op_mini all`

## Platform Requirements

**Development:**
- Node.js (25.x used in dev; no minimum declared)
- npm (11.x used in dev)
- Run with: `npm start` from `react-app/` (launches CRA dev server)

**Production:**
- Static site output — `npm run build` from `react-app/` produces `react-app/build/` with bundled HTML/JS/CSS
- `react-app/build/` is gitignored; deployment requires a static file host (e.g., Netlify, GitHub Pages, Vercel, or any web server)
- No server-side runtime required

---

*Stack analysis: 2026-03-07*
