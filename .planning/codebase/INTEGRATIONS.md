# External Integrations

**Analysis Date:** 2026-03-07

## APIs & External Services

**Font Delivery:**
- Google Fonts CDN - Serves Playfair Display, DM Sans, and DM Mono typefaces
  - SDK/Client: None (CSS `@import` URL embedded in a `<style>` block inside `react-app/src/math_curriculum_MHS.jsx`)
  - Auth: None required
  - URL: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap`
  - Note: This is the only outbound network request the app makes at runtime. Failure causes font fallback to Georgia/Times New Roman/system sans-serif — layout is preserved.

## Data Storage

**Databases:**
- None - All curriculum data is stored as static JavaScript data files in `react-app/src/data/`:
  - `react-app/src/data/subjects.js` - Subject list with accent colors and flags
  - `react-app/src/data/math.js` - Math tracks, track colors, program of studies
  - `react-app/src/data/science.js` - Science tracks, track colors, program of studies
  - `react-app/src/data/english.js` - English tracks, track colors, program of studies
  - `react-app/src/data/history.js` - History tracks, track colors, program of studies
  - `react-app/src/data/language.js` - Language tracks, track colors, program of studies
  - `react-app/src/data/electives.js` - Elective categories, tracks, track colors, program of studies

**File Storage:**
- Local filesystem only - Static assets served from `react-app/public/` (school logo, icons, manifest)

**Caching:**
- None - No cache layer; CRA build output uses content-hashed filenames for browser cache busting

## Authentication & Identity

**Auth Provider:**
- None - The app is fully public with no login, sessions, or user identity

## Monitoring & Observability

**Error Tracking:**
- None - No error tracking service (e.g., Sentry) is integrated

**Performance Metrics:**
- `web-vitals` ^2.1.4 is installed and wired in `react-app/src/reportWebVitals.js`, but `reportWebVitals()` is called with no callback in `react-app/src/index.js`, so metrics are collected but not reported anywhere

**Logs:**
- None - No structured logging or log aggregation

## CI/CD & Deployment

**Hosting:**
- Not configured in the repository - No deployment config files (e.g., `netlify.toml`, `vercel.json`, `.github/workflows/`) are present
- Build output at `react-app/build/` is gitignored and must be generated locally before any deployment

**CI Pipeline:**
- None - No CI configuration detected

## Environment Configuration

**Required env vars:**
- None - The application requires no environment variables

**Secrets location:**
- Not applicable - No secrets exist in the codebase

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

---

*Integration audit: 2026-03-07*
