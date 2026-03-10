# Phase 4: Tech Debt Cleanup — Design

**Date:** 2026-03-10
**Requirements:** DEBT-01, DEBT-02, DEBT-03
**Plans:** 2 (data cleanup / test rewrite)

---

## Goal

The codebase is clean and correct before new features are built — no React key collisions in electives, no dead fields in track color objects, and the test suite exercises the correct components.

---

## Plan 1: Data Cleanup (DEBT-01 + DEBT-02)

### DEBT-01 — Remove IDs from elective track courses

**Problem:** Course objects in `electiveTracks.tracks` in `electives.js` carry an `id` field (e.g. `el-webdev`) that is used as the React key in `CurriculumMapVariableTrackLengths.jsx`. The same course objects appear in multiple tracks with the same `id`, causing React key collision warnings.

**Why IDs are not needed here:** The `electivesProgramOfStudies` export (used by `ProgramOfStudies.jsx`) is a completely separate data structure with its own `pos-*` IDs. The track course `id` fields serve no purpose beyond being a broken React key.

**Fix:**
- Strip the `id` field from every course object inside `electiveTracks.tracks` in `electives.js`.
- In `CurriculumMapVariableTrackLengths.jsx`: change `key={course.id}` → `key={course.name}` and update `expandedCourse` state to track by `course.name` instead of `course.id`. Course names are unique within a track, making this a safe key.

### DEBT-02 — Remove dead `activeClass` field from track color objects

**Problem:** Every track color object across all 5 subject data files (`math.js`, `science.js`, `english.js`, `history.js`, `language.js`) and `electives.js` defines an `activeClass` field (e.g. `activeClass: "active-accel"`). No component ever reads this field — it is a remnant of a legacy class-based styling approach (referenced in a `math.js` comment as "see math_curriculum_MHS.jsx", a file that no longer exists). The current app applies track colors entirely via inline styles using `bg` and `text`.

**Fix:**
- Delete the `activeClass` property from every track color object in all 6 data files.
- Search for any CSS rules targeting `.active-*` class names and delete them.
- Confirm no component references `trackColors[x].activeClass` or equivalent.

### Verification

- Run the app, open Electives, switch tracks — no React key warnings in browser console.
- `npm test` — all existing tests still pass.

---

## Plan 2: Test Rewrite (DEBT-03)

### Problem

`CurriculumMapVariableTrackLengths.test.jsx` imports `CurriculumMap` (not `CurriculumMapVariableTrackLengths`) and tests AP badge visibility — behavior that has nothing to do with the electives component. The component under test (`CurriculumMapVariableTrackLengths`) exists and is untested.

### Fix

Rewrite the test file from scratch to import and exercise `CurriculumMapVariableTrackLengths`.

**What to test:**
- Category tabs render with correct category names
- Default category is selected on mount
- Switching tracks within a category updates the displayed courses
- Course cards render course name and tier badge
- Clicking a course card expands it to reveal description/topics

**Mocking strategy:** Mock `../../data/electives` to return a minimal but realistic shape — 1 category, 2 tracks, 2–3 courses each. Mock `../../data/math`, `science`, `language`, `history`, `english` as empty objects (same pattern as current test file). Use `@testing-library/react` and `userEvent` for interaction tests.

### Verification

- All new tests pass.
- `npm test` shows suite count greater than 109 with no regressions.

---

## Success Criteria

1. All elective course entries render without React key collision warnings in the browser console
2. No `activeClass` field exists in any track color object and no associated CSS rules remain
3. `CurriculumMapVariableTrackLengths.test.jsx` imports and exercises `CurriculumMapVariableTrackLengths` (not a substitute component), and all tests pass
