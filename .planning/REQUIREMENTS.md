# Requirements: MHS Curriculum Viewer

**Defined:** 2026-03-09
**Milestone:** v1.1 Student Tools
**Core Value:** Any MHS stakeholder can quickly find and understand the courses available to them — tracks, prerequisites, and course details — in a clean, trustworthy interface.

## v1.1 Requirements

### Search

- [ ] **SRCH-01**: User can open a search input from a search icon in the header
- [ ] **SRCH-02**: User sees course results as they type, matched against course name and description across all subjects
- [ ] **SRCH-03**: User sees results grouped by subject with tier badge (CP/Honors/AP) displayed
- [ ] **SRCH-04**: User can click a result to navigate to that subject's Program of Studies view
- [ ] **SRCH-05**: User can close the search input with the Escape key or by clicking outside

### My Plan

- [ ] **PLAN-01**: User can access a "My Plan" view from the subject dropdown menu
- [ ] **PLAN-02**: User sees a freeform 4-column grid (Grade 9, 10, 11, 12) with no required course count per year
- [ ] **PLAN-03**: User can open a course picker to browse and search courses across all 6 subjects
- [ ] **PLAN-04**: User can add a course from the picker to a specific grade year column
- [ ] **PLAN-05**: User can remove a course from their plan
- [ ] **PLAN-06**: User's plan persists across page refreshes via localStorage

### Tech Debt

- [ ] **DEBT-01**: Elective course entries have unique IDs per track appearance (no React key collisions)
- [ ] **DEBT-02**: Dead `activeClass` field removed from all track color objects and associated CSS deleted
- [ ] **DEBT-03**: `CurriculumMapVariableTrackLengths.test.jsx` imports and exercises the correct component

## v2 Requirements

### Deferred from v1.1

- **PLAN-07**: User can export or share their plan as a URL or printable snapshot
- **PLAN-08**: User can add a course to their plan directly from a course card in Curriculum Map or Program of Studies
- **PLAN-09**: User can view a side-by-side comparison of two academic tracks

### Future Features

- **LINK-01**: User can share a URL that lands directly on a specific subject, view, or course
- **PRNT-01**: User can print or export the curriculum for a subject as a PDF
- **A11Y-01**: User can navigate the full app using keyboard only
- **A11Y-02**: Screen reader users can access all course information

## Out of Scope

| Feature | Reason |
|---------|--------|
| User accounts / login | Intentionally public — no auth needed |
| Backend or CMS | Static data files sufficient for school use |
| TypeScript migration | No type safety issues; not worth the conversion cost |
| Real-time data | Curriculum changes infrequently; static files are correct model |
| Mobile app | Web-first; browser responsive is sufficient |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DEBT-01 | Phase 4 | Pending |
| DEBT-02 | Phase 4 | Pending |
| DEBT-03 | Phase 4 | Pending |
| SRCH-01 | Phase 5 | Pending |
| SRCH-02 | Phase 5 | Pending |
| SRCH-03 | Phase 5 | Pending |
| SRCH-04 | Phase 5 | Pending |
| SRCH-05 | Phase 5 | Pending |
| PLAN-01 | Phase 6 | Pending |
| PLAN-02 | Phase 6 | Pending |
| PLAN-03 | Phase 7 | Pending |
| PLAN-04 | Phase 7 | Pending |
| PLAN-05 | Phase 7 | Pending |
| PLAN-06 | Phase 6 | Pending |

**Coverage:**
- v1.1 requirements: 14 total
- Mapped to phases: 14
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-09*
*Last updated: 2026-03-09 after roadmap creation (v1.1)*
