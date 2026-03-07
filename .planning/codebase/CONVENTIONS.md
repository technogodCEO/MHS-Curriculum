# Coding Conventions

**Analysis Date:** 2026-03-07

## Naming Patterns

**Files:**
- React components: PascalCase `.jsx` — `CurriculumMap.jsx`, `ProgramOfStudies.jsx`, `SubjectTitle.jsx`
- Data modules: camelCase `.js` — `math.js`, `subjects.js`, `electives.js`
- Root app files: mixed — `App.js` (capital), `math_curriculum_MHS.jsx` (snake_case, legacy name)
- CSS files: match their JS counterpart — `App.css`, `index.css`

**Functions / Components:**
- React components: PascalCase — `MathCurriculum`, `CurriculumMap`, `SubjectDropdownMenu`
- Helper functions inside components: camelCase — `subject(type)` (the switch dispatcher pattern)
- Event handlers: camelCase verb phrases — `handleClick`, `setOpen`, `onSelect`, `onClose`

**Variables:**
- State variables: camelCase descriptive nouns — `expandedCourse`, `filterTier`, `selectedTrack`, `dropOpen`
- Derived values: camelCase — `effectiveTrack`, `posSubject`, `trackSubject`, `isActive`, `isDisabled`
- Constants / data arrays: camelCase with subject prefix — `mathTracks`, `mathTrackColors`, `mathProgramOfStudies`

**Props:**
- camelCase — `activeSubject`, `accentColor`, `anchorRef`, `gridRgb`
- Boolean props prefixed with `is` for local variables — `isOpen`, `isActive`, `isDisabled`, `isHighlight`
- Callback props prefixed with `on` — `onSelect`, `onClose`

**CSS Classes:**
- kebab-case with BEM-style prefixes — `.pos-card`, `.pos-card-header`, `.pos-cat-title`
- Module-prefix convention: `.pos-*` for ProgramOfStudies, `.track-*` for track UI, `.page-nav-*` for nav
- State modifier classes: short suffix — `.inactive`, `.open`, `.expanded`, `.pn-active`, `.f-active-*`

**Data Exports:**
- Named exports using the pattern `{subjectName}{DataType}` — `mathTracks`, `mathTrackColors`, `mathProgramOfStudies`

## Code Style

**Formatting:**
- No standalone Prettier/ESLint config files; uses CRA's built-in ESLint via `package.json`:
  ```json
  "eslintConfig": { "extends": ["react-app", "react-app/jest"] }
  ```
- Indentation: 2 spaces throughout
- Inline styles: object literals on JSX elements (primary styling approach)
- Template literal CSS: long `<style>` blocks injected via JSX for global/dynamic styles

**Linting:**
- Tool: CRA's `react-app` ESLint preset
- No custom rules configured beyond the CRA defaults

## Import Organization

**Order (observed pattern):**
1. React hooks — `import { useState, useRef, useEffect } from "react"`
2. Data imports — `import { mathTracks, mathTrackColors } from "../data/math"`
3. Component imports — `import { SubjectTitle } from "./components/SubjectTitle.jsx"`

**Extension handling:**
- Data files imported with explicit `.js` extension — `"./data/subjects.js"`
- Component imports use explicit `.jsx` extension — `"./components/SubjectTitle.jsx"`

**Path Aliases:**
- None configured; all imports use relative paths

## Error Handling

**Patterns:**
- Switch-statement exhaustiveness: `default` case always present, falls back gracefully
- Unknown subject IDs log a `console.warn` and return a safe fallback value — never throw
- Example from `CurriculumMap.jsx`:
  ```js
  default:
    console.warn(`CurriculumMap: unknown subject "${type}", falling back to math`);
    return { trackSubject: mathTracks, trackColorsSubject: mathTrackColors };
  ```
- Example from `ProgramOfStudies.jsx`:
  ```js
  default:
    console.warn(`ProgramOfStudies: unknown subject "${type}", rendering empty catalog`);
    return { posSubject: [] };
  ```
- UI guard pattern: if a previously selected track no longer exists after subject switch, fall back to first available track (see `effectiveTrack` in `CurriculumMap.jsx` and `CurriculumMapVariableTrackLengths.jsx`)
- Optional chaining / nullish checks: inline ternaries guard optional data fields — `course.prereqs ? ... : course.prereq || "None"`

**No error boundaries** are configured at any level.

## Logging

**Framework:** `console.warn` only — no logging library used.

**Patterns:**
- `console.warn` used exclusively for unexpected/invalid input in switch default branches
- Template literal messages include the component name and the bad input value for debuggability
- No `console.log` debug statements in source (only referenced in comment in `index.js` for `reportWebVitals`)

## Comments

**When to Comment:**
- Block-level JSX sections marked with ASCII banner comments: `{/* ── Section Name ── */}`
- Every non-trivial variable or derived value gets an inline or preceding comment explaining WHY
- Data files have file-level block comments (using `/* */`) explaining every exported object's schema

**Component-level doc blocks:**
- Every component has a multi-line `/* ... */` doc block at the top describing purpose, props, and local state:
  ```js
  /*
   * ComponentName
   *
   * Purpose paragraph.
   *
   * Props:
   *   propName — description
   *
   * State (local):
   *   stateName — description
   */
  ```

**Data file doc blocks:**
- Data files (`math.js`, `subjects.js`) document every field of every exported object shape using the same `/* */` style

**JSDoc/TSDoc:** Not used (plain JS, no TypeScript).

## Function Design

**Size:** Components are kept single-responsibility; the longest component (`math_curriculum_MHS.jsx`) is 226 lines and handles only state orchestration and layout

**Parameters:** Components receive props objects; helper functions inside components are zero-to-one argument (the subject ID string `type`)

**Return Values:**
- Component functions return JSX fragments or a single root element
- Helper switch functions (the `subject(type)` pattern) return plain objects with named keys, destructured immediately at the call site:
  ```js
  const { posSubject } = subject(activeSubject.id)
  ```

## Module Design

**Exports:**
- Components use named exports — `export function CurriculumMap(...)`, `export function ProgramOfStudies(...)`
- Root app component uses default export — `export default function MathCurriculum()`
- Data modules use named const exports — `export const mathTracks = ...`

**Barrel Files:** None used. Each component is imported by direct path.

## Data Architecture Conventions

**Subject dispatch pattern** (replicated in every multi-subject component):
```js
const subject = (type) => {
  switch (type) {
    case 'math':    return { posSubject: mathProgramOfStudies };
    case 'science': return { posSubject: scienceProgramOfStudies };
    // ... other subjects
    default:
      console.warn(`ComponentName: unknown subject "${type}", ...`);
      return { posSubject: [] };
  }
};
const { posSubject } = subject(activeSubject.id);
```
This pattern appears in `CurriculumMap.jsx`, `ProgramOfStudies.jsx`, and `CurriculumMapVariableTrackLengths.jsx`.

**CSS injection pattern** for dynamic values:
```jsx
<style>{`
  .selector { color: rgba(${gridRgb}, 0.3); border-color: ${accent}; }
`}</style>
```
Used when CSS class values depend on JS state (subject accent color).

---

*Convention analysis: 2026-03-07*
