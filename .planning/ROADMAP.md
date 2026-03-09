# Roadmap: MHS Curriculum Viewer

## Milestones

- ✅ **v1.0 MVP** — Phases 1–2 (shipped 2026-03-08)
- ✅ **Phase 3: Vite Migration** — (shipped 2026-03-09, `vite-migration` branch)
- 🚧 **v1.1 Student Tools** — Phases 4–7 (in progress)

## Phases

<details>
<summary>✅ v1.0 MVP (Phases 1–2) — SHIPPED 2026-03-08</summary>

- [x] Phase 1: Fixes and Cleanup (2/2 plans) — completed 2026-03-08
- [x] Phase 2: Visual Polish (2/2 plans) — completed 2026-03-08

Full details: `.planning/milestones/v1.0-ROADMAP.md`

</details>

<details>
<summary>✅ Phase 3: Vite Migration — SHIPPED 2026-03-08</summary>

- [x] Phase 3: Vite Migration (1/1 plans) — completed 2026-03-08

Full details: `.planning/phases/03-vite-migration/`

</details>

### 🚧 v1.1 Student Tools (In Progress)

**Milestone Goal:** Add the first interactive and personalization features — cross-subject course search and a freeform 4-year plan builder — alongside targeted tech debt cleanup that unblocks new feature development.

- [ ] **Phase 4: Tech Debt Cleanup** - Resolve electives.js data integrity issues and fix the broken test import before new features are added
- [ ] **Phase 5: Course Search** - Users can search all courses from the header and navigate to results
- [ ] **Phase 6: My Plan Foundation** - Users can access a My Plan view, see the 4-year grid, and have their plan persist
- [ ] **Phase 7: My Plan Course Picker** - Users can browse, find, add, and remove courses from their plan

## Phase Details

### Phase 4: Tech Debt Cleanup
**Goal**: The codebase is clean and correct before new features are built — no React key collisions in electives, no dead fields in track color objects, and the test suite exercises the correct components
**Depends on**: Phase 3
**Requirements**: DEBT-01, DEBT-02, DEBT-03
**Success Criteria** (what must be TRUE):
  1. All elective course entries render without React key collision warnings in the browser console
  2. No `activeClass` field exists in any track color object and no associated CSS rules remain
  3. `CurriculumMapVariableTrackLengths.test.jsx` imports and exercises `CurriculumMapVariableTrackLengths` (not a substitute component), and all tests pass
**Plans**: TBD

### Phase 5: Course Search
**Goal**: Users can search across all 6 subjects from the header and navigate directly to a matching course in Program of Studies
**Depends on**: Phase 4
**Requirements**: SRCH-01, SRCH-02, SRCH-03, SRCH-04, SRCH-05
**Success Criteria** (what must be TRUE):
  1. User can click a search icon in the header to reveal an inline search input
  2. User sees course results appear as they type, matched against course name and description across all subjects
  3. Each result displays the course name, subject, and tier badge (CP / Honors / AP)
  4. User can click a result and land on that subject's Program of Studies view
  5. User can dismiss the search input by pressing Escape or clicking outside it
**Plans**: TBD

### Phase 6: My Plan Foundation
**Goal**: Users can open a My Plan view, see an empty 4-column grade grid, and return later to find their plan intact
**Depends on**: Phase 4
**Requirements**: PLAN-01, PLAN-02, PLAN-06
**Success Criteria** (what must be TRUE):
  1. User can select "My Plan" from the subject dropdown and see a dedicated view
  2. User sees a 4-column grid labeled Grade 9, Grade 10, Grade 11, Grade 12 with no required course count per column
  3. User's plan (including any added courses) is still present after refreshing the page
**Plans**: TBD

### Phase 7: My Plan Course Picker
**Goal**: Users can populate their 4-year plan by browsing and searching all courses, adding them to specific grade years, and removing them when needed
**Depends on**: Phase 6
**Requirements**: PLAN-03, PLAN-04, PLAN-05
**Success Criteria** (what must be TRUE):
  1. User can open a course picker that lists courses across all 6 subjects with a search/filter capability
  2. User can select a course in the picker and add it to a specific grade year column in their plan
  3. User can remove a course they previously added from their plan
**Plans**: TBD

## Progress

**Execution Order:** 4 → 5 → 6 → 7 (Phase 6 and 5 can begin in parallel after Phase 4)

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Fixes and Cleanup | v1.0 | 2/2 | Complete | 2026-03-08 |
| 2. Visual Polish | v1.0 | 2/2 | Complete | 2026-03-08 |
| 3. Vite Migration | v1.0 | 1/1 | Complete | 2026-03-08 |
| 4. Tech Debt Cleanup | v1.1 | 0/? | Not started | - |
| 5. Course Search | v1.1 | 0/? | Not started | - |
| 6. My Plan Foundation | v1.1 | 0/? | Not started | - |
| 7. My Plan Course Picker | v1.1 | 0/? | Not started | - |
