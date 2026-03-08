---
phase: 02-visual-polish
plan: "02"
subsystem: ui, testing
tags: [react, jest, wcag, tdd, curriculum-map, electives]

# Dependency graph
requires:
  - phase: 02-01
    provides: Wave 0 test scaffolds (RED for VIS-01 badge, contrast audit); CurriculumMap.jsx badge already fixed
provides:
  - CurriculumMapVariableTrackLengths.jsx using course.highlight for AP detection (no purple fallback badge)
  - science.js Physics Kid track at #12877e/#000 (WCAG AA 4.79:1)
  - electives.js Media & Graphic Communication, Power Energy & Transportation, Life Skills WCAG-compliant colors
  - All 109 tests green across 4 test suites
affects: [visual-polish-release, v1.0]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "jest.mock() factory with getter-based module object: allows dynamic mock data without resetModules() or out-of-scope references"

key-files:
  created: []
  modified:
    - react-app/src/components/CurriculumMapVariableTrackLengths.jsx
    - react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx
    - react-app/src/data/science.js
    - react-app/src/data/electives.js

key-decisions:
  - "jest.mock() getter pattern: use Object.defineProperty-style getters in jest.mock factory to allow dynamic mock values without resetModules() — avoids React hook invalidation caused by module registry teardown"
  - "Elective WCAG failures treated as pre-existing bugs: contrast.test.js audited all tracks; Media & Graphic Communication, Power Energy & Transportation, Life Skills were failing at <4.5:1 — fixed as Rule 1 (pre-existing bug) alongside Physics Kid"

patterns-established:
  - "Getter-based jest.mock for dynamic data: export getters on the mock return object, mutate a module-level variable before each test to control behavior"

requirements-completed: [VIS-01, VIS-02]

# Metrics
duration: 20min
completed: 2026-03-08
---

# Phase 2 Plan 02: Visual Polish Wave 1 Summary

**AP detection unified on course.highlight in CurriculumMapVariableTrackLengths, Physics Kid and three elective tracks lightened to WCAG AA compliance — all 109 tests green**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-03-08T15:20:00Z
- **Completed:** 2026-03-08T15:40:00Z
- **Tasks:** 2 of 3 (Task 3 is a human-verify checkpoint)
- **Files modified:** 4

## Accomplishments

- Fixed `CurriculumMapVariableTrackLengths.jsx`: `isAP` now uses `course.highlight` (was `course.tier === "AP"`); purple fallback badge removed; only AP courses show a badge
- Fixed `science.js`: Physics Kid bg `#0f766e`/text `#fff` → `#12877e`/`#000` (contrast 4.79:1, passes WCAG AA)
- Fixed `electives.js`: 3 pre-existing WCAG failures also corrected (Media & Graphic Communication, Power Energy & Transportation, Life Skills)
- Fixed test scoping bug in `CurriculumMapVariableTrackLengths.test.jsx`: rewritten with getter-based jest.mock pattern
- Full test suite: 109 tests, 4 suites, all green

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix CurriculumMapVariableTrackLengths.jsx AP detection (VIS-01)** - `bab056a` (fix)
2. **Task 2: Fix Physics Kid WCAG failure + elective WCAG fixes (VIS-02)** - `818be7a` (fix)

_Note: Task 3 (visual checkpoint) awaits human review_

## Files Created/Modified

- `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` - AP detection uses course.highlight; badge block uses `{isAP && ...}` with no purple fallback
- `react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx` - Rewritten with getter-based mock to fix jest.mock factory scoping error
- `react-app/src/data/science.js` - Physics Kid: bg `#0f766e`/text `#fff` → `#12877e`/`#000`
- `react-app/src/data/electives.js` - Three track colors lightened for WCAG compliance

## Decisions Made

- **Getter-based jest.mock pattern**: `jest.resetModules()` inside tests invalidates the React module, causing `useState` to be null. Using a module-level variable mutated in `beforeEach`/test body, with the mock returning an object containing getters that read the variable, allows dynamic test data without module resets.
- **Elective colors as pre-existing bugs**: The plan stated "all other 21 already pass per audit" but the contrast audit found 3 additional elective failures. These were fixed under Rule 1 (pre-existing bug) since the test explicitly audits them and full-suite green is the success criterion.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed jest.mock factory scoping error in CurriculumMapVariableTrackLengths.test.jsx**
- **Found during:** Task 1 (run RED test to confirm failure mode)
- **Issue:** The test from plan 01 called `jest.mock('../../data/math', () => makeMathMock(true))` — Jest hoists `jest.mock()` calls above all imports, so `makeMathMock` was not in scope when the factory ran. Test suite crashed with `ReferenceError`.
- **Fix:** Rewrote test to use a module-level `let mockHighlight` variable (allowed in factory closures) with object getters returning dynamic mock data. `beforeEach` resets the variable; each test sets it before render.
- **Files modified:** `react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx`
- **Verification:** Test suite compiles and all 3 assertions pass
- **Committed in:** `bab056a` (Task 1 commit)

**2. [Rule 1 - Bug] Fixed 3 additional WCAG failures in electives.js**
- **Found during:** Task 2 (run contrast test to confirm failing state)
- **Issue:** contrast.test.js revealed 5 failing entries, not 2 as the plan stated. Three elective track colors (Media & Graphic Communication `#c2410c` at 4.055:1, Power Energy & Transportation `#b45309` at 4.182:1, Life Skills `#e11d48` at 4.471:1) all failed the 4.5:1 threshold.
- **Fix:** Lightened each color minimally to achieve ≥4.5:1 contrast with black: `#cc4d1e` (4.65:1), `#c26010` (4.97:1), `#f03566` (5.41:1)
- **Files modified:** `react-app/src/data/electives.js`
- **Verification:** contrast.test.js passes all 109 tests
- **Committed in:** `818be7a` (Task 2 commit)

---

**Total deviations:** 2 auto-fixed (Rule 1 - pre-existing bugs)
**Impact on plan:** Both fixes necessary for test suite green and WCAG compliance. No scope creep.

## Issues Encountered

- jest.mock scoping: Jest's babel-jest transform hoists `jest.mock()` factories before module scope is initialized, preventing references to locally-defined functions. Resolved with getter-based dynamic mock pattern — no module reset needed.
- contrast.test.js revealed more failing colors than the plan anticipated. All fixed under Rule 1.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Task 3 (human visual review) is the final gate before Phase 2 is declared complete
- All automated tests are green; visual consistency review across 6 subjects is pending
- Phase 2 plan 02 automation complete — awaiting human sign-off on checkpoint

---
*Phase: 02-visual-polish*
*Completed: 2026-03-08 (pending Task 3 human verify)*
