# Phase 5: Course Search — Design

**Date:** 2026-03-11
**Phase:** 5 of 7 (v1.1 Student Tools)
**Requirements:** SRCH-01, SRCH-02, SRCH-03, SRCH-04, SRCH-05

---

## Goal

Users can search across all 6 subjects from a top bar and navigate directly to a matching course in Program of Studies.

---

## Architecture & Data Flow

The root component (`math_curriculum_MHS.jsx`) owns two new state values:
- `searchOpen` (bool) — controls overlay visibility
- `searchFilter` (string | null) — the filter term to apply when navigating to a POS view

Root builds a flat `allCourses` array by aggregating all six `*ProgramOfStudies` exports, each entry tagged with `subjectId` and `subjectLabel`. This array is memoized with `useMemo`.

**Result click flow:**
1. User clicks a result → `SearchBar` fires `onNavigate(subjectId, filterTerm)`
2. Root: sets active subject, sets active tab to Program of Studies, sets `searchFilter` to the course name, closes search overlay
3. `ProgramOfStudies` receives `searchFilter` prop — a `useEffect([searchFilter])` applies it to internal filter state when truthy, then calls `onSearchFilterConsumed()` to clear it in root
4. This prevents the filter from re-applying on subsequent navigations to the same view

**Live results while typing:**
`query` is controlled state in `SearchBar`. Every keystroke calls `setQuery`. `results` is derived from `query` during render (not stored in state) — filtering `allCourses` on each render. No debounce needed; all data is in-memory.

---

## Component Structure

### New: `src/components/SearchBar.jsx`

**Props:**
- `courses` — flat allCourses array (built by root)
- `isOpen` / `onOpen` / `onClose` — controlled open state
- `onNavigate(subjectId, filterTerm)` — result click handler

**Internal state:** `query` (string)

**Behavior:**
- Renders a slim search icon button in the top bar (when closed)
- On open: renders a full-screen dimmed overlay with a results panel
- Results grouped by subject, capped at 5 per subject
- Each result row: course name + subject label + tier badge (CP / Honors / AP)
- Escape key → `onClose`
- Click on backdrop → `onClose` (with `e.stopPropagation()` on panel)

### Modified: `math_curriculum_MHS.jsx`

- Add `searchOpen`, `searchFilter` state
- Build `allCourses` array with `useMemo` from all 6 subject POS exports
- Render `<SearchBar>` above the existing subject title/header
- `onNavigate` handler: sets active subject, sets active tab to POS, sets `searchFilter`, closes search
- Pass `searchFilter` and `onSearchFilterConsumed` to `ProgramOfStudies`

### Modified: `src/components/ProgramOfStudies.jsx`

- Accept `searchFilter` prop and `onSearchFilterConsumed` callback
- `useEffect([searchFilter])`: if truthy, set internal filter state and call `onSearchFilterConsumed()`

---

## CSS & Overlay

Inline `<style>` block in `SearchBar.jsx` (consistent with codebase pattern):

- **Top bar**: slim row above subject title, right-aligned search icon
- **Overlay**: `position:fixed; inset:0; background:rgba(0,0,0,0.65); z-index:1000`
- **Results panel**: centered, `max-width:560px`, scrollable, top-anchored within overlay
- **Input**: lives inside the results panel (not in the header bar)
- **Result rows**: course name + tier badge, hoverable, divided by subject label headers

---

## UX Details

- Search icon is in a top global bar above the subject title — feels app-wide, not subject-scoped
- Results overlay dims the page, drawing full focus to search (VS Code / Spotlight feel)
- Clicking a result navigates to the subject's Program of Studies with the course name pre-filled in the filter — the course is immediately visible
- Dismiss: Escape key or click outside the results panel

---

## Testing

### New: `SearchBar.test.jsx`
- Typing filters results correctly
- Escape key closes the overlay
- Clicking a result fires `onNavigate` with correct subjectId and course name
- Clicking the backdrop closes the overlay
- Empty query shows no results

### New (optional): `filterCourses.test.js` (if logic extracted to pure helper)
- Name match (case-insensitive)
- Description match
- No match returns empty array
- Results capped per subject

### Addendum to `ProgramOfStudies.test.jsx`
- When `searchFilter` prop is provided, internal filter state is applied and `onSearchFilterConsumed` is called

---

## Success Criteria

1. User can click a search icon in the top bar to open the search overlay
2. User sees course results appear as they type, matched against name and description across all subjects
3. Each result displays course name, subject, and tier badge (CP / Honors / AP)
4. User can click a result and land on that subject's Program of Studies view with the course pre-filtered
5. User can dismiss the search with Escape or clicking outside the panel
