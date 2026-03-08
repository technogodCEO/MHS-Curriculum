---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: MVP
status: complete
stopped_at: v1.0 milestone archived — all phases complete
last_updated: "2026-03-08"
last_activity: 2026-03-08 — v1.0 milestone complete and archived
progress:
  total_phases: 2
  completed_phases: 2
  total_plans: 4
  completed_plans: 4
  percent: 100
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-08 after v1.0 milestone)

**Core value:** Any MHS stakeholder can quickly find and understand the courses available to them — tracks, prerequisites, and course details — in a clean, trustworthy interface.
**Current focus:** Planning next milestone

## Current Position

**v1.0 MVP shipped 2026-03-08.**

All 2 phases complete. All 4 plans complete. 109 tests green.

Next step: `/gsd:new-milestone` to define v1.1 scope.

## Key Decisions (v1.0)

- Inline `<style>` for dynamic theming: causes re-injection on every render — v2 candidate for CSS custom properties
- CRA toolchain: effectively unmaintained — migrate to Vite post-v1
- `course.highlight` is the canonical AP signal (not `course.tier === "AP"`)
- `effectiveTrack` (not `selectedTrack`) guards AP badge against stale track names when switching subjects
- highlight-card glow always uses `trackColorsSubject[effectiveTrack].bg` to match active track tab

## Known Tech Debt (v2)

- DEBT-01: Duplicate course IDs in electives.js (React key collisions)
- DEBT-02: Dead `activeClass` field on all track color objects + unused CSS rules
- DEBT-03: Duplicate full course objects across elective tracks
- INFRA-01: Migrate from CRA to Vite
- TEST: `CurriculumMapVariableTrackLengths.test.jsx` imports wrong component — doesn't actually exercise the fixed file
