# MHS Curriculum Viewer

## What This Is

A static single-page React app for Monterey High School that lets students, parents, and counselors explore the full curriculum. It offers two views: a Curriculum Map (grade-by-grade course tracks) and a Program of Studies (full course catalog with descriptions, prerequisites, and credits) across six academic departments. No backend, no login — fully public and deployable as a static site.

## Core Value

Any MHS stakeholder can quickly find and understand the courses available to them — tracks, prerequisites, and course details — in a clean, trustworthy interface.

## Requirements

### Validated

- ✓ Subject switching across 6 departments (Math, Science, English, History, Language, Electives) — existing
- ✓ Curriculum Map view with track-based grade progression — existing
- ✓ Variable-length elective track map (CurriculumMapVariableTrackLengths) — existing
- ✓ Program of Studies view with tier filtering — existing
- ✓ Dynamic theming per subject (accent color, grid color) — existing
- ✓ Course card expansion with description, prerequisites, and topics — existing
- ✓ Subject dropdown navigation — existing
- ✓ AP course highlighting system — existing
- ✓ Elective category/track browsing — existing
- ✓ Conditional pos-note rendering (no empty amber box) — v1.0
- ✓ ProgramOfStudies empty-state message for subjects with no catalog data — v1.0
- ✓ CurriculumMapVariableTrackLengths defaults derived from data — v1.0
- ✓ Build artifacts excluded from git — v1.0
- ✓ AP badge and card highlight unified on track color across all subjects — v1.0
- ✓ All track colors WCAG AA compliant (black text, 4.5:1+ contrast) — v1.0

### Active

- [ ] My Plan: freeform 4-year plan builder accessible via subject dropdown, localStorage persistence
- [ ] Course Search: global search icon in header, inline dropdown, cross-subject results
- [ ] Tech debt cleanup: DEBT-01/02/03 (electives.js IDs, duplicates, dead `activeClass` field)
- [ ] Fix broken `CurriculumMapVariableTrackLengths.test.jsx` import

### Out of Scope

- TypeScript migration — not needed; static data structure is clear
- Vite/CRA migration — completed in Phase 3 (v1.1 branch)
- Lazy loading / code splitting — performance acceptable at current scale
- User accounts or authentication — intentionally public
- Backend or CMS — static data files sufficient for school use

## Context

**v1.0 shipped 2026-03-08. Phase 3 (Vite migration) complete on `vite-migration` branch. v1.1 in progress.**

- ~5,097 LOC across React source (JS/JSX)
- Six subject data files in `react-app/src/data/` — plain JS objects, no validation layer
- 109 tests green (App smoke, CurriculumMap badge, VariableTrackLengths AP detection, WCAG contrast audit)
- Electives.js is the largest and most complex data file (~1456 lines); known tech debt: duplicate course objects across tracks (DEBT-01/03) and dead `activeClass` field (DEBT-02)
- All CSS is injected via `<style>` JSX tags — dynamic theming via JS variable interpolation into template literals
- Google Fonts loaded via CDN (Playfair Display, DM Sans, DM Mono) — acceptable for school network context
- Build artifacts excluded from git; static site deployable via `vercel.json` (added Phase 3)

**Known tech debt (being addressed in v1.1):**
- DEBT-01: Duplicate course IDs in electives.js (React key collisions)
- DEBT-02: Dead `activeClass` field on all track color objects + unused CSS rules
- DEBT-03: Duplicate full course objects across elective tracks
- TEST: `CurriculumMapVariableTrackLengths.test.jsx` imports wrong component

## Constraints

- **Tech stack**: React 19 + Vite 6 + Vitest 3 — migrated from CRA in Phase 3
- **Language**: JavaScript/JSX only — no TypeScript
- **Data**: Static JS data files — no backend, no API
- **Audience**: Public-facing (students, parents, counselors) — must look polished and trustworthy
- **Deployment**: Static site (Netlify, GitHub Pages, or equivalent)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static data files over CMS | School curriculum changes infrequently; no server overhead | ✓ Good |
| Inline `<style>` for dynamic theming | JS variable interpolation into CSS template literals for per-subject colors | ⚠️ Revisit — causes re-injection on every render; v2 candidate for CSS custom properties |
| No global state library | App is simple enough for prop-drilling from a single root component | ✓ Good |
| Vite migration (Phase 3) | CRA unmaintained; Vite is faster, actively maintained | ✓ Good — migrated in Phase 3 |
| `effectiveTrack` over `selectedTrack` for AP badge | Guards against stale track names when switching subjects | ✓ Good |
| `course.highlight` as canonical AP signal | Unified detection across both curriculum map components | ✓ Good |
| jsdom rgba normalization in tests | Hex inline styles are normalized to rgba() by jsdom/CSSOM — assertions use channel integers | ✓ Good |
| `#12877e` for Physics Kid (not `#0d9488`) | Preserves darkening gradient across science tracks; `#0d9488` would match Bio Kid | ✓ Good |

---

## Current Milestone: v1.1 Student Tools

**Goal:** Add the first interactive/personalization features — a freeform 4-year plan builder and cross-subject course search — alongside targeted tech debt cleanup.

**Target features:**
- My Plan: freeform 4-column (9–12) plan builder via subject dropdown, localStorage persistence
- Course Search: global search icon in header, inline dropdown, cross-subject results
- Tech debt: DEBT-01/02/03 (electives.js IDs/duplicates/dead field), broken test import fix

---
*Last updated: 2026-03-09 after v1.1 milestone start*
