---
gsd_state_version: 1.0
milestone: v1.1
milestone_name: Student Tools
status: defining_requirements
stopped_at: Milestone v1.1 started — defining requirements
last_updated: "2026-03-09"
last_activity: 2026-03-09 — Milestone v1.1 started
progress:
  total_phases: 0
  completed_phases: 0
  total_plans: 0
  completed_plans: 0
  percent: 0
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-09 after v1.1 milestone start)

**Core value:** Any MHS stakeholder can quickly find and understand the courses available to them — tracks, prerequisites, and course details — in a clean, trustworthy interface.
**Current focus:** Defining requirements for v1.1 Student Tools

## Current Position

Phase: Not started (defining requirements)
Plan: —
Status: Defining requirements
Last activity: 2026-03-09 — Milestone v1.1 started

## Accumulated Context (from v1.0 + Phase 3)

- `course.highlight` is the canonical AP signal (not `course.tier === "AP"`)
- `effectiveTrack` (not `selectedTrack`) guards AP badge against stale track names when switching subjects
- highlight-card glow always uses `trackColorsSubject[effectiveTrack].bg` to match active track tab
- Inline `<style>` for dynamic theming causes re-injection on every render — CSS custom properties is a v2 candidate
- Vite migration complete on `vite-migration` branch (Phase 3) — `react-scripts` fully removed, `vercel.json` at repo root
- `CurriculumMapVariableTrackLengths.test.jsx` imports wrong component — doesn't exercise the fixed file (known, fix in Phase 4)
- jsdom normalizes hex inline styles to rgba() — test assertions use channel integers

## Known Tech Debt (targeted in v1.1)

- DEBT-01: Duplicate course IDs in electives.js (React key collisions)
- DEBT-02: Dead `activeClass` field on all track color objects + unused CSS rules
- DEBT-03: Duplicate full course objects across elective tracks
- TEST: `CurriculumMapVariableTrackLengths.test.jsx` imports wrong component
