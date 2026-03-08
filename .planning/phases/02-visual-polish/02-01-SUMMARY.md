---
phase: 02-visual-polish
plan: "01"
subsystem: testing, ui
tags: [react, jest, testing-library, wcag, tdd, curriculum-map]

# Dependency graph
requires: []
provides:
  - Wave 0 test scaffolds (App smoke test, CurriculumMap badge test, VariableTrackLengths test, WCAG contrast audit)
  - AP badge in CurriculumMap.jsx now uses trackColorsSubject[effectiveTrack].bg instead of accent prop
affects: [02-02, visual-polish]

# Tech tracking
tech-stack:
  added: []
  patterns: [TDD RED-GREEN, jsdom rgba normalization in test assertions, inline WCAG contrast ratio computation]

key-files:
  created:
    - react-app/src/components/__tests__/CurriculumMap.test.jsx
    - react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx
    - react-app/src/data/__tests__/contrast.test.js
  modified:
    - react-app/src/App.test.js
    - react-app/src/components/CurriculumMap.jsx

key-decisions:
  - "Test assertions must use rgb channel comparison rather than hex string matching — jsdom/CSSOM normalizes inline hex colors to rgba() notation"
  - "AP badge uses effectiveTrack (not selectedTrack) to guard against stale track names when switching subjects"

patterns-established:
  - "jsdom rgba normalization pattern: extract r,g,b channels from computed style string and compare integers against expected hex values"
  - "WCAG contrast ratio computed inline in test with linearize sRGB helper — no external dependency"

requirements-completed: [VIS-01]

# Metrics
duration: 15min
completed: 2026-03-08
---

# Phase 2 Plan 01: Visual Polish Wave 0 Summary

**Wave 0 TDD scaffolds for all Phase 2 visual requirements, plus AP badge color fixed to use track color (VIS-01)**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-03-08T14:40:00Z
- **Completed:** 2026-03-08T14:55:00Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Replaced stale CRA "learn react link" smoke test with a renders-without-throwing assertion (App.test.js now passes)
- Created CurriculumMap.test.jsx (RED -> GREEN after badge fix): AP badge must use track bg color, not accent prop
- Created CurriculumMapVariableTrackLengths.test.jsx (RED — Wave 1 fix in plan 02): badge visibility tied to course.highlight
- Created contrast.test.js (RED — Wave 1 fix in plan 02): WCAG 4.5:1 audit of all six trackColors maps; Physics Kid fails at ~3.84:1
- Fixed CurriculumMap.jsx AP badge to use trackColorsSubject[effectiveTrack].bg instead of accent prop (VIS-01)

## Task Commits

Each task was committed atomically:

1. **Task 1: Wave 0 test scaffolds (RED)** - `759fa9f` (test)
2. **Task 2: Fix AP badge color (VIS-01)** - `62fd804` (fix)

_Note: TDD tasks have two commits (RED scaffold, then GREEN fix)_

## Files Created/Modified

- `react-app/src/App.test.js` - Replaced stale CRA test with smoke test (renders without throwing)
- `react-app/src/components/__tests__/CurriculumMap.test.jsx` - AP badge uses track color not accent; now green
- `react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx` - Badge visibility via course.highlight; still red (Wave 1)
- `react-app/src/data/__tests__/contrast.test.js` - WCAG 4.5:1 audit of all six trackColors; still red (Wave 1)
- `react-app/src/components/CurriculumMap.jsx` - AP badge inline style changed from accent-based to trackColorsSubject[effectiveTrack].bg-based

## Decisions Made

- **jsdom rgba normalization**: jsdom/CSSOM converts `${hex}22` in inline styles to `rgba(r, g, b, a)` notation. Tests must extract rgb channels and compare integers, not match hex strings. This pattern is established for all future CurriculumMap tests.
- **effectiveTrack over selectedTrack**: The badge fix uses `effectiveTrack` (not `selectedTrack`) because effectiveTrack guards against stale track names when switching subjects — if the previously selected track name doesn't exist in the new subject's keys, effectiveTrack falls back to the first available track, preventing a crash.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Updated test assertions to handle jsdom rgba normalization**
- **Found during:** Task 2 (fix CurriculumMap.jsx AP badge)
- **Issue:** Test assertions used `toContain("#f59e0b")` but jsdom normalizes inline style `${hex}22` to `rgba(245, 158, 11, 0.133)` — hex string never appears in computed style
- **Fix:** Updated CurriculumMap.test.jsx to extract r,g,b integer channels from the computed style string and compare them against expected hex values
- **Files modified:** `react-app/src/components/__tests__/CurriculumMap.test.jsx`
- **Verification:** CurriculumMap.test.jsx passes green
- **Committed in:** `62fd804` (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 - bug in test assertion)
**Impact on plan:** Auto-fix necessary for correctness. No scope creep.

## Issues Encountered

- jsdom normalizes hex colors in inline styles to rgba — required updating test assertions from hex string matching to rgb channel integer comparison. Addressed immediately under Rule 1.

## Next Phase Readiness

- Plan 02 can proceed: VariableTrackLengths and contrast tests are RED and waiting for their production fixes
- Physics Kid track in science.js requires bg color fix to achieve WCAG 4.5:1 (current: ~3.84:1 with bg #0f766e)
- AP detection via course.highlight is already used in CurriculumMap.jsx; plan 02 will confirm this is the canonical signal across all subjects

---
*Phase: 02-visual-polish*
*Completed: 2026-03-08*
