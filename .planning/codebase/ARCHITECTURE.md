# Architecture

**Analysis Date:** 2026-03-07

## Pattern Overview

**Overall:** Single-page React application with a centralized root component that owns all shared state and passes data down to display-only child components.

**Key Characteristics:**
- All shared state (`activeSubject`, `page`, `dropOpen`) lives exclusively in `MathCurriculum` (the root component) in `react-app/src/math_curriculum_MHS.jsx`
- Child components are pure display components — they own only local UI state (expansion, filter selection) and receive data/callbacks as props
- Static data files in `react-app/src/data/` act as the "database"; no backend, no API calls
- Subject switching is handled by a central `activeSubject` object; child components perform `switch` statements on `activeSubject.id` to select the correct data set at render time
- Global CSS is injected as a `<style>` tag inside `MathCurriculum` so dynamic JavaScript variables (`accent`, `gridRgb`) can be interpolated into CSS template literals

## Layers

**Data Layer:**
- Purpose: Static JavaScript modules that define all curriculum content
- Location: `react-app/src/data/`
- Contains: Named export objects and arrays describing tracks, courses, prerequisites, colors, and metadata for each subject
- Depends on: Nothing (pure data)
- Used by: `CurriculumMap`, `CurriculumMapVariableTrackLengths`, and `ProgramOfStudies` components via direct named imports

**Root Orchestrator:**
- Purpose: Owns all cross-cutting state and wires together all child components; injects global dynamic CSS
- Location: `react-app/src/math_curriculum_MHS.jsx` — `MathCurriculum` (default export)
- Contains: `useState` for `page`, `activeSubject`, `dropOpen`; derived values `accent` and `gridRgb`; layout structure (header, nav, footer); global `<style>` block
- Depends on: `react-app/src/data/subjects.js`, all four child components
- Used by: `react-app/src/App.js` (thin wrapper, renders nothing else)

**UI Components:**
- Purpose: Render specific sections of the UI; own only local interaction state
- Location: `react-app/src/components/`
- Contains: `CurriculumMap`, `CurriculumMapVariableTrackLengths`, `ProgramOfStudies`, `SubjectTitle`, `SubjectDropdownMenu`
- Depends on: Data files imported directly (not via root); props passed from `MathCurriculum`
- Used by: `MathCurriculum` root component

**App Shell:**
- Purpose: CRA entry point; renders root component into the DOM
- Location: `react-app/src/index.js`, `react-app/src/App.js`
- Contains: `ReactDOM.createRoot`, `React.StrictMode` wrapper; `App` is a one-line passthrough to `MathCurriculum`
- Depends on: `react-app/src/math_curriculum_MHS.jsx`
- Used by: `react-app/public/index.html` (via CRA build pipeline)

## Data Flow

**Subject Switch:**

1. User clicks `SubjectTitle` button in the header
2. `dropOpen` state in `MathCurriculum` is set to `true`; `SubjectDropdownMenu` mounts at root level
3. User selects a subject; `onSelect(subj)` fires, updating `activeSubject` in `MathCurriculum`
4. `accent` and `gridRgb` are derived from the new `activeSubject`; the global `<style>` tag re-renders with new CSS values
5. `CurriculumMap` and `ProgramOfStudies` receive the new `activeSubject` as a prop; each runs an internal `switch` on `activeSubject.id` to pull the matching data set from their imports

**Tab Navigation:**

1. User clicks "Curriculum Map" or "Program of Studies" nav button
2. `page` state in `MathCurriculum` updates to `"map"` or `"pos"`
3. Conditional rendering shows either `CurriculumMap`/`CurriculumMapVariableTrackLengths` or `ProgramOfStudies`
4. When switching to electives, `CurriculumMapVariableTrackLengths` is rendered instead of `CurriculumMap` (checked inline: `activeSubject.id === "electives"`)

**Course Card Expansion:**

1. User clicks a grade card or course card
2. Local `expandedGrade` / `expandedCourse` state within the component updates
3. The expanded panel renders inline; all other cards collapse (only one open at a time)
4. `ProgramOfStudies` resets `expandedCourse` and `filterTier` on `activeSubject` change via `useEffect`

**State Management:**
- No global state library (no Redux, Zustand, Context API)
- Shared state: `MathCurriculum` component via `useState`
- Local UI state: each child component manages its own expansion and filter state
- Derived values: computed inline from `activeSubject` on each render (no memoization)

## Key Abstractions

**Subject Object:**
- Purpose: A single source of truth for one academic department (id, label, accent color, grid color, availability)
- Examples: `react-app/src/data/subjects.js` — `subjects` array
- Pattern: `{ id, label, accent, gridColor, emoji, available }` — `id` is the key used in all `switch` statements throughout the codebase

**Track Data Shape (`*Tracks`):**
- Purpose: Describes a subject's grade-by-grade course map for the Curriculum Map tab
- Examples: `mathTracks` in `react-app/src/data/math.js`, `scienceTracks` in `react-app/src/data/science.js`
- Pattern: `{ tracks: string[], grades: [{ grade, courses: { [trackName]: { name, topics, color, highlight } } }] }`

**Elective Track Shape (`electiveTracks`):**
- Purpose: Describes elective tracks with variable course counts (not grade-locked)
- Examples: `electiveTracks` in `react-app/src/data/electives.js`
- Pattern: `{ tracks: { [trackName]: { color, description, courses: CourseObject[] } } }` — differs from standard tracks because courses are sequential, not grade-keyed

**Track Colors (`*TrackColors`):**
- Purpose: Display metadata for pathway tab buttons (background, text, label)
- Examples: `mathTrackColors` in `react-app/src/data/math.js`
- Pattern: `{ [trackName]: { bg, text, label, activeClass } }`

**Program of Studies Data (`*ProgramOfStudies`):**
- Purpose: Full course catalog for the Program of Studies tab; grouped by category
- Examples: `mathProgramOfStudies` in `react-app/src/data/math.js`, `electivesProgramOfStudies` in `react-app/src/data/electives.js`
- Pattern: `[{ category, color, grades, courses: [{ id, name, tier, weight, gradeLevel, credits, description, prereqs, topics }] }]`

## Entry Points

**Browser Entry:**
- Location: `react-app/src/index.js`
- Triggers: CRA build injects this as the JS bundle entry; runs on page load
- Responsibilities: Creates React root, wraps app in `React.StrictMode`, calls `reportWebVitals`

**App Component:**
- Location: `react-app/src/App.js`
- Triggers: Rendered by `index.js`
- Responsibilities: Thin passthrough — imports and returns `<MathCurriculum />`; applies `App.css`

**Root Component:**
- Location: `react-app/src/math_curriculum_MHS.jsx` — `MathCurriculum` (default export)
- Triggers: Rendered by `App.js`
- Responsibilities: Owns all state; renders header, nav, dropdown, page content, footer; injects global CSS

## Error Handling

**Strategy:** Defensive fallbacks via guard checks; no error boundaries.

**Patterns:**
- `CurriculumMap` and `CurriculumMapVariableTrackLengths` check if the previously `selectedTrack` exists in the new subject's track list; if not, falls back to `tracks[0]`
- Unknown `activeSubject.id` values in `switch` statements trigger `console.warn` and fall back to a default subject (math or electives)
- `ProgramOfStudies` returns `{ posSubject: [] }` for unknown subjects, rendering an empty catalog

## Cross-Cutting Concerns

**Styling:** All CSS is injected via two `<style>` JSX tags — one in `MathCurriculum` (global layout and shared classes), one in `ProgramOfStudies` (catalog-specific classes). No CSS modules, no Tailwind, no external CSS files beyond `App.css` and `index.css` (which are minimal resets).

**Dynamic theming:** `accent` (hex) and `gridRgb` ("R, G, B" string) are derived from the active subject and threaded through as props to child components. They are interpolated into CSS template literals inside `<style>` tags; this is the only mechanism for theme switching.

**Validation:** No input validation (no forms). Subject availability is enforced by the `available` flag on each subject object; unavailable subjects are disabled in the dropdown.

**Authentication:** None — fully public, no login.

**Logging:** `console.warn` only, on unknown subject IDs in `switch` fallback branches.

---

*Architecture analysis: 2026-03-07*
