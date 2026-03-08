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
    - react-app/src/components/CurriculumMap.jsx

key-decisions:
  - "jest.mock() getter pattern: use Object.defineProperty-style getters in jest.mock factory to allow dynamic mock values without resetModules() — avoids React hook invalidation caused by module registry teardown"
  - "Elective WCAG failures treated as pre-existing bugs: contrast.test.js audited all tracks; Media & Graphic Communication, Power Energy & Transportation, Life Skills were failing at <4.5:1 — fixed as Rule 1 (pre-existing bug) alongside Physics Kid"
  - "electives.js AP courses needed highlight:true field — component changed from tier to highlight but data file was not updated; all 6 AP-tier track courses now carry highlight:true"
  - "CurriculumMap.jsx highlight-card inline styles added using trackColorsSubject[effectiveTrack].bg so glow/border match active track color rather than static subject gridRgb"

patterns-established:
  - "Getter-based jest.mock for dynamic data: export getters on the mock return object, mutate a module-level variable before each test to control behavior"
  - "highlight-card always uses inline styles with track color, not CSS class with subject color — ensures visual consistency when track tabs are switched"
  - "AP signal in electives data: course.highlight:true must be explicitly set in electives.js; tier:AP alone is not sufficient"

requirements-completed: [VIS-01, VIS-02]

# Metrics
duration: 20min
completed: 2026-03-08
---

# Phase 2 Plan 02: Visual Polish Wave 1 Summary

**AP detection unified on course.highlight across all subjects, Physics Kid and three elective tracks WCAG AA compliant, highlight-card glow now tracks active track tab color — all 109 tests green**

## Performance

- **Duration:** ~35 min total (including post-review fixes)
- **Started:** 2026-03-08T15:20:00Z
- **Completed:** 2026-03-08
- **Tasks:** 3 complete (Task 3 was human-verify; post-review fixes applied)
- **Files modified:** 5

## Accomplishments

- Fixed `CurriculumMapVariableTrackLengths.jsx`: `isAP` now uses `course.highlight` (was `course.tier === "AP"`); purple fallback badge removed; only AP courses show a badge
- Fixed `science.js`: Physics Kid bg `#0f766e`/text `#fff` → `#12877e`/`#000` (contrast 4.79:1, passes WCAG AA)
- Fixed `electives.js`: 3 pre-existing WCAG failures corrected (Media & Graphic Communication, Power Energy & Transportation, Life Skills); 6 AP-tier courses now carry `highlight: true`
- Fixed test scoping bug in `CurriculumMapVariableTrackLengths.test.jsx`: rewritten with getter-based jest.mock pattern
- Fixed `CurriculumMap.jsx`: highlight-card div now has inline styles using `trackColorsSubject[effectiveTrack].bg` so glow/border/background match the active track tab, not the static subject color
- Full test suite: 109 tests, 4 suites, all green

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix CurriculumMapVariableTrackLengths.jsx AP detection (VIS-01)** - `bab056a` (fix)
2. **Task 2: Fix Physics Kid WCAG failure + elective WCAG fixes (VIS-02)** - `818be7a` (fix)
3. **Task 3 post-review: Fix AP elective highlight field + CurriculumMap track color** - `d12c82a` (fix)

## Files Created/Modified

- `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` - AP detection uses course.highlight; badge block uses `{isAP && ...}` with no purple fallback
- `react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx` - Rewritten with getter-based mock to fix jest.mock factory scoping error
- `react-app/src/data/science.js` - Physics Kid: bg `#0f766e`/text `#fff` → `#12877e`/`#000`
- `react-app/src/data/electives.js` - Three track colors lightened for WCAG compliance; 6 AP courses given `highlight: true`
- `react-app/src/components/CurriculumMap.jsx` - highlight-card div gets inline styles using active track color

## Decisions Made

- **Getter-based jest.mock pattern**: `jest.resetModules()` inside tests invalidates the React module, causing `useState` to be null. Using a module-level variable mutated in `beforeEach`/test body, with the mock returning an object containing getters that read the variable, allows dynamic test data without module resets.
- **Elective colors as pre-existing bugs**: The plan stated "all other 21 already pass per audit" but the contrast audit found 3 additional elective failures. These were fixed under Rule 1 (pre-existing bug) since the test explicitly audits them and full-suite green is the success criterion.
- **electives.js missing highlight field**: Task 1 changed component detection from `tier === "AP"` to `course.highlight`, but the electives data never had a `highlight` field. All 6 AP-tier courses in the `tracks` section now carry `highlight: true`. The `pos-*` section (Programs of Study data) was left unchanged — it is not rendered by CurriculumMapVariableTrackLengths.
- **CurriculumMap.jsx inline styles for highlight-card**: The CSS `.highlight-card` class uses `gridRgb` (subject-level color) which does not change when switching track tabs. Added inline styles using `trackColorsSubject[effectiveTrack].bg` so highlight glow matches the badge color and the active track tab — consistent with how CurriculumMapVariableTrackLengths already worked.

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

**Total deviations:** 4 auto-fixed (all Rule 1 - pre-existing bugs)
**Impact on plan:** All fixes necessary for correctness. Data gap in electives.js was a direct consequence of the detection-signal change in Task 1. Highlight-card color mismatch was a pre-existing inconsistency between the two CurriculumMap components. No scope creep.

## Issues Encountered

- jest.mock scoping: Jest's babel-jest transform hoists `jest.mock()` factories before module scope is initialized, preventing references to locally-defined functions. Resolved with getter-based dynamic mock pattern — no module reset needed.
- contrast.test.js revealed more failing colors than the plan anticipated. All fixed under Rule 1.
- Human review correctly caught that the electives AP badge/highlight was still absent after Task 1 — the data file had no `highlight` field. Key lesson: when changing AP detection signal in component, all consuming data files must also be updated.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 2 (Visual Polish) is complete. Human review confirmed all six subjects show consistent AP badges and track-color highlight effects after post-review fixes.
- All 109 tests green.
- Deferred to v2: inline `<style>` re-injection on render (candidate for CSS custom properties), duplicate course IDs (DEBT-01, DEBT-02, DEBT-03).

## Self-Check: PASSED

- react-app/src/components/CurriculumMapVariableTrackLengths.jsx — FOUND
- react-app/src/data/science.js — FOUND
- react-app/src/data/electives.js — FOUND
- react-app/src/components/CurriculumMap.jsx — FOUND
- .planning/phases/02-visual-polish/02-02-SUMMARY.md — FOUND
- Commit bab056a — FOUND
- Commit 818be7a — FOUND
- Commit d12c82a — FOUND

---
*Phase: 02-visual-polish*
*Completed: 2026-03-08*
