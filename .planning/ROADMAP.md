# Roadmap: MHS Curriculum Viewer

## Overview

Six requirements stand between the current beta state and a public v1 release. Phase 1 fixes behavioral bugs, removes a repository hazard (committed build artifacts), and eliminates fragile hardcoded defaults — making the app correct and the codebase clean. Phase 2 resolves visual inconsistencies across subject departments so the app looks polished and trustworthy to students, parents, and counselors. Both phases are small and the project ships after Phase 2 completes.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Fixes and Cleanup** - Fix behavioral bugs, remove build artifacts, and eliminate fragile hardcoded defaults (completed 2026-03-08)
- [ ] **Phase 2: Visual Polish** - Achieve consistent AP highlight and track color styling across all six subject departments

## Phase Details

### Phase 1: Fixes and Cleanup
**Goal**: The app behaves correctly in all states and the repository is clean for release
**Depends on**: Nothing (first phase)
**Requirements**: BUG-01, BUG-02, CLEAN-01, CLEAN-02
**Success Criteria** (what must be TRUE):
  1. Expanding any course card in Program of Studies never shows an empty amber box when the course has no note field
  2. Opening Program of Studies for a subject with no catalog data shows a visible explanatory message rather than a blank page
  3. The Electives Curriculum Map loads with its first available category and track selected without any hardcoded string defaults in the component
  4. The `react-app/build/` directory is absent from the git repository and listed in `.gitignore`
**Plans**: 2 plans

Plans:
- [ ] 01-01-PLAN.md — Fix empty pos-note box (BUG-01) and add ProgramOfStudies empty-state message (BUG-02)
- [ ] 01-02-PLAN.md — Derive CurriculumMapVariableTrackLengths defaults from data (CLEAN-01) and verify build artifacts excluded from git (CLEAN-02)

### Phase 2: Visual Polish
**Goal**: AP course highlights and track colors are visually consistent across all subjects so the app looks trustworthy to public users
**Depends on**: Phase 1
**Requirements**: VIS-01, VIS-02
**Success Criteria** (what must be TRUE):
  1. AP course highlight styling (badge, card border, or background treatment) is identical in appearance when viewing any subject that has AP courses
  2. Track tab buttons display consistent color contrast, font styling, and active state treatment across all six subject departments
  3. Switching between subjects produces no jarring visual discontinuities in how tracks or AP designations are presented
**Plans**: TBD

Plans:
- [ ] 02-01: Audit and normalize AP highlight styling across all subjects (VIS-01)
- [ ] 02-02: Audit and normalize track color and tab styling across all subjects (VIS-02)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Fixes and Cleanup | 2/2 | Complete   | 2026-03-08 |
| 2. Visual Polish | 0/2 | Not started | - |
