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

### Active

- [ ] Fix empty amber `pos-note` box rendering for courses without a note field
- [ ] Fix duplicate course IDs in electives.js causing React key collisions and stale expansion state
- [ ] Remove dead `activeClass` field from all track color objects and unused CSS rules
- [ ] Derive `CurriculumMapVariableTrackLengths` default state from data instead of hardcoded strings
- [ ] Resolve color/styling inconsistencies (AP highlights, track colors) to achieve visual consistency across all subjects
- [ ] Add empty-state message to ProgramOfStudies when no catalog data is found for a subject
- [ ] Remove committed build artifacts from repository (`react-app/build/`)

### Out of Scope

- TypeScript migration — not needed for v1; static data structure is clear
- Vite/CRA migration — tech debt, but not a v1 blocker
- Test suite — no existing tests; adding comprehensive tests is v2 work
- Lazy loading / code splitting — performance is acceptable at current scale
- User accounts or authentication — intentionally public
- Backend or CMS — static data files are sufficient for school use

## Context

- Six subject data files in `react-app/src/data/` (math.js, science.js, english.js, history.js, language.js, electives.js) — plain JS objects, no validation layer
- Electives.js is the largest and most complex data file (1456 lines); has known duplicate course objects across tracks
- All CSS is injected via `<style>` JSX tags in `math_curriculum_MHS.jsx` and `ProgramOfStudies.jsx` — dynamic theming is handled by interpolating `accent` and `gridRgb` JS variables into template literals
- Has gone through multiple beta releases; core functionality is stable
- Build artifacts currently committed to git (should be removed before v1)
- Google Fonts loaded via CDN (Playfair Display, DM Sans, DM Mono) — acceptable for school network context

## Constraints

- **Tech stack**: React 19 + CRA (react-scripts 5) — no framework changes for v1
- **Language**: JavaScript/JSX only — no TypeScript
- **Data**: Static JS data files — no backend, no API
- **Audience**: Public-facing (students, parents, counselors) — must look polished and trustworthy
- **Deployment**: Static site (Netlify, GitHub Pages, or equivalent)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static data files over CMS | School curriculum changes infrequently; no server overhead | — Pending |
| Inline `<style>` for dynamic theming | JS variable interpolation into CSS template literals for per-subject colors | ⚠️ Revisit — causes re-injection on every render; v2 candidate for CSS custom properties |
| No global state library | App is simple enough for prop-drilling from a single root component | ✓ Good |
| CRA toolchain | Chosen early; now effectively unmaintained | ⚠️ Revisit — migrate to Vite post-v1 |

---
*Last updated: 2026-03-07 after initialization*
