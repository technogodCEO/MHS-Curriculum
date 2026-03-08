# Phase 1: Fixes and Cleanup - Research

**Researched:** 2026-03-07
**Domain:** React component fixes, conditional rendering, git artifact cleanup
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**BUG-01: Empty pos-note box**
- Conditionally render the `<p className="pos-note">` element only when `course.note` exists
- Current broken code: `<p className="pos-note">{Object.keys(course).includes("note") && course.note}</p>` always renders the `<p>`, producing an empty amber box
- Fix: wrap in a conditional so the element is not mounted at all when `course.note` is absent

**BUG-02: ProgramOfStudies empty state**
- Message: "No course catalog available for this subject."
- Style: Subtle muted centered text — consistent with the app's dark minimal aesthetic; no border box
- When no data: hide the filter bar (All / CP / Honors / AP) and the weight legend entirely — showing filter buttons with nothing to filter is confusing
- Trigger: when `posSubject` is an empty array (`[]`)

**CLEAN-01: Derive CurriculumMapVariableTrackLengths defaults from data**
- Replace hardcoded `useState("AP Capstone")` and `useState("AP Capstone Program")` with values derived from `electiveCategories` at component initialization
- Initial category: first key of `electiveCategories`
- Initial track: first entry in that category's `tracks` array

**CLEAN-02: Remove build artifacts from repository**
- Build is not committed to remote — no history rewrite needed
- Actions: run `git rm -r --cached react-app/build/`, add `react-app/build/` to `.gitignore`, commit
- Result: build/ stays on disk but is no longer tracked by git

### Claude's Discretion
- Exact muted color/font size for the BUG-02 empty state text (should blend with existing `#555`–`#777` text range used elsewhere in the component)
- Whether to show the empty state above or below the filter area (filter is hidden, so placement is just vertical centering)

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| BUG-01 | `pos-note` styled box does not render when a course has no `note` field | Verified bug at ProgramOfStudies.jsx line 175; fix pattern confirmed via existing conditional rendering in same file |
| BUG-02 | `ProgramOfStudies` displays a blank page with no message when a subject has no catalog data | `subject()` switch already returns `{ posSubject: [] }` for unknown subjects; empty-state guard needed before `posSubject.map(...)` |
| CLEAN-01 | `CurriculumMapVariableTrackLengths` default category and track are derived from data, not hardcoded strings | `electiveCategories` already imported; `Object.keys(electiveCategories)[0]` and `electiveCategories[firstKey].tracks[0]` are the correct derivation |
| CLEAN-02 | `react-app/build/` directory is removed from git history and added to `.gitignore` | Build dir exists on disk; NOT tracked in git (git ls-files returned empty); only needs `.gitignore` entry |
</phase_requirements>

---

## Summary

This phase contains four small, contained fixes. None of the changes introduce new abstractions or require new dependencies. Each fix has a single, well-understood touch point in the codebase identified in CONTEXT.md.

BUG-01 and BUG-02 are both conditional-rendering problems in `ProgramOfStudies.jsx`. BUG-01 is a one-line fix: replace an unconditional `<p>` with a JSX short-circuit guard. BUG-02 requires hiding the filter bar and weight legend when `posSubject` is empty, then rendering a centered muted message in their place. CLEAN-01 replaces two hardcoded `useState` initializer strings in `CurriculumMapVariableTrackLengths.jsx` with expressions derived from the already-imported `electiveCategories` object. CLEAN-02 is a git-only operation: the `react-app/build/` directory already exists on disk but is **not currently tracked** by git (confirmed via `git ls-files`) — so the only required action is adding an entry to `.gitignore` and committing.

**Primary recommendation:** All four fixes are surgical, single-file edits. Implement them as individual commits for clean attribution. The `react-app/.gitignore` already includes `/build` — verify this is sufficient before adding a duplicate entry.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | (existing, CRA) | Component rendering and state | Already in use throughout the project |

### Supporting

No new libraries needed. All fixes use patterns already present in the codebase.

### Alternatives Considered

None applicable — all fixes are constrained to existing patterns. No new libraries are introduced.

---

## Architecture Patterns

### Existing Project Structure (relevant files)

```
react-app/
├── .gitignore               # Already contains /build — verify before editing
├── build/                   # Exists on disk, NOT git-tracked
└── src/
    ├── components/
    │   ├── ProgramOfStudies.jsx                  # BUG-01, BUG-02 touch point
    │   └── CurriculumMapVariableTrackLengths.jsx # CLEAN-01 touch point
    └── data/
        └── electives.js     # Source of truth for electiveCategories
```

### Pattern 1: JSX Short-Circuit Conditional Rendering (BUG-01)

**What:** Replace an always-rendered element with a conditional mount using `&&`.
**When to use:** When an element should not appear in the DOM at all when its content is absent.
**Example (existing pattern in same file):**

```jsx
// Existing pattern already used in ProgramOfStudies.jsx:
{course.tier && <span className="pos-badge" ...>{course.tier}</span>}

// BUG-01 fix — same pattern:
// BEFORE (always renders the <p>, producing empty amber box):
<p className="pos-note">{Object.keys(course).includes("note") && course.note}</p>

// AFTER (element not mounted when course.note is absent):
{course.note && <p className="pos-note">{course.note}</p>}
```

### Pattern 2: Empty-State Guard Before a .map() (BUG-02)

**What:** Check the data array length before rendering the list; show a fallback UI instead.
**When to use:** When a component receives data that may legitimately be empty.

```jsx
// BEFORE: filter bar and legend always render, then posSubject.map() produces nothing
// AFTER: conditional structure

{posSubject.length === 0 ? (
  <p style={{
    fontFamily: "'DM Sans', sans-serif",
    textAlign: "center",
    color: "#666",      // within #555–#777 muted range per user decision
    fontSize: "0.875rem",
    marginTop: 60,
  }}>
    No course catalog available for this subject.
  </p>
) : (
  <>
    {/* filter bar */}
    <div className="pos-filter-bar">...</div>
    {/* weight legend */}
    <div className="pos-weight-legend">...</div>
    {/* course categories */}
    {posSubject.map(cat => { ... })}
  </>
)}
```

### Pattern 3: Lazy useState Initialization from Data (CLEAN-01)

**What:** Compute initial state from imported data instead of hardcoding strings.
**When to use:** When the valid initial value is the first element of a data structure that could change.

```jsx
// BEFORE:
const [selectedCategory, setSelectedCategory] = useState("AP Capstone");
const [selectedTrack, setSelectedTrack] = useState("AP Capstone Program");

// AFTER:
const firstCategory = Object.keys(electiveCategories)[0];
const [selectedCategory, setSelectedCategory] = useState(firstCategory);
const [selectedTrack, setSelectedTrack] = useState(electiveCategories[firstCategory].tracks[0]);
```

Note: `electiveCategories` is already imported at line 2 of the component. No import changes needed.

### Anti-Patterns to Avoid

- **Rendering an element unconditionally and relying on empty string:** `{flag && value}` inside a `<p>` still renders an empty `<p>` in the DOM — the element must itself be conditional.
- **Using `Object.keys(course).includes("note")` as a truthiness check:** This returns `true` even when `course.note` is `""` or `null`. Use `course.note` directly as a truthy guard.
- **Rewriting the filter/legend into a separate component to handle BUG-02:** The locked decision is to hide both elements when `posSubject` is empty — wrapping them in the same conditional branch is the correct approach without introducing new abstractions.
- **History rewrite for CLEAN-02:** The build directory is already untracked. Running `git rm -r --cached react-app/build/` would error with "pathspec did not match any files." Only `.gitignore` needs updating.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Conditional mounting | Custom show/hide logic or `display:none` | JSX `{condition && <Element>}` | React unmounts the element from the DOM entirely |
| Derived initial state | A `useEffect` to set state after mount | Compute value inline in `useState(...)` call | Avoids a render cycle; value is stable at mount |

**Key insight:** React's `&&` short-circuit is the standard pattern for conditional rendering. Using CSS `display:none` or setting content to empty string leaves empty DOM nodes, which can cause layout artifacts (as BUG-01 demonstrates).

---

## Common Pitfalls

### Pitfall 1: CLEAN-02 — .gitignore Scope Confusion

**What goes wrong:** Adding `react-app/build/` to the wrong `.gitignore` file, or adding a duplicate entry.
**Why it happens:** The project has both `react-app/.gitignore` (which already contains `/build`) and no root `.gitignore`. The `/build` entry in `react-app/.gitignore` is relative to that file's directory, which correctly covers `react-app/build/`.
**How to avoid:** Verify that `react-app/.gitignore` already contains `/build` before editing. Confirm with `git check-ignore -v react-app/build/index.html` after the commit. Since the directory is already not tracked, the existing entry may already be in force — the build might simply not have been committed to the remote. Check git status to confirm the directory is already ignored.
**Warning signs:** `git status` showing `react-app/build/` as untracked (not ignored) would indicate the `.gitignore` entry is missing or misscoped.

### Pitfall 2: BUG-01 — `&&` with Empty String

**What goes wrong:** `{course.note && <p>...</p>}` would render React's `false` literal if `course.note` is `""` (empty string is falsy — safe). However `course.note` being `0` (number zero) would print `0` in the DOM.
**Why it happens:** JavaScript falsy evaluation.
**How to avoid:** The `note` field in electives.js is always a non-empty string (e.g., "Not running in 2026-2027") or absent. `course.note &&` is safe for this data shape. No defensive casting needed.
**Warning signs:** If `note` field ever gets a `0` or empty string value in data, the guard would behave unexpectedly.

### Pitfall 3: CLEAN-01 — useState Lazy Initializer vs. Direct Expression

**What goes wrong:** Passing a function `() => Object.keys(electiveCategories)[0]` vs. passing the value directly. Both work, but using a function is the React lazy-initializer pattern for expensive computations.
**Why it happens:** `Object.keys()` on a small static object is O(n) on a tiny dataset — not expensive. Direct expression in `useState(value)` is fine.
**How to avoid:** Use direct expression (`useState(firstCategory)`) since `electiveCategories` is a module-level constant — no repeated computation occurs.

---

## Code Examples

Verified patterns from source inspection:

### BUG-01: Exact Line to Change (ProgramOfStudies.jsx line 175)

```jsx
// CURRENT (broken — always renders <p>, creating empty amber box):
<p className="pos-note">{Object.keys(course).includes("note") && course.note}</p>

// FIXED:
{course.note && <p className="pos-note">{course.note}</p>}
```

### BUG-02: Structure of the Empty-State Guard

The filter bar (lines 113–123) and weight legend (lines 126–134) must be siblings of the `posSubject.map()` block. Wrap all three in a ternary:

```jsx
{posSubject.length === 0 ? (
  <p style={{ fontFamily:"'DM Sans',sans-serif", textAlign:"center", color:"#666", fontSize:"0.875rem", marginTop:60 }}>
    No course catalog available for this subject.
  </p>
) : (
  <>
    <div className="pos-filter-bar">...</div>
    <div className="pos-weight-legend">...</div>
    {posSubject.map(cat => { ... })}
  </>
)}
```

### CLEAN-01: Exact Lines to Change (CurriculumMapVariableTrackLengths.jsx lines 24–25)

```jsx
// CURRENT:
const [selectedCategory, setSelectedCategory] = useState("AP Capstone");
const [selectedTrack, setSelectedTrack] = useState("AP Capstone Program");

// FIXED:
const firstCategory = Object.keys(electiveCategories)[0];
const [selectedCategory, setSelectedCategory] = useState(firstCategory);
const [selectedTrack, setSelectedTrack] = useState(electiveCategories[firstCategory].tracks[0]);
```

`electiveCategories` is already imported at line 2 — no import changes needed.

### CLEAN-02: Git Commands

```bash
# Verify current state — build/ should show as untracked or already ignored
git status react-app/build/

# If untracked (not yet ignored), the existing react-app/.gitignore /build entry
# should already cover it. Verify:
git check-ignore -v react-app/build/index.html

# If not ignored, add to react-app/.gitignore:
# Add line: /build

# Stage and commit the .gitignore change:
git add react-app/.gitignore
git commit -m "chore: ignore react-app/build/ artifacts"
```

Note: `git rm -r --cached react-app/build/` is only needed if the directory was tracked. `git ls-files react-app/build/` returned empty, confirming it is **not currently tracked** — no cache removal is needed.

---

## State of the Art

| Old Approach | Current Approach | Notes |
|--------------|------------------|-------|
| `{Object.keys(course).includes("note") && course.note}` inside `<p>` | `{course.note && <p>...</p>}` | Old: always renders element. New: skips mount entirely. |
| Hardcoded `useState("AP Capstone")` | `useState(Object.keys(electiveCategories)[0])` | Old: breaks if data order changes. New: always derives from source of truth. |

---

## Open Questions

1. **CLEAN-02: Is `react-app/build/` already effectively ignored?**
   - What we know: `git ls-files react-app/build/` returned no output (not tracked). `react-app/.gitignore` already contains `/build`.
   - What's unclear: Whether the existing `.gitignore` entry is already active, or whether the planner should defensively add/confirm the entry.
   - Recommendation: The plan should include a verification step (`git check-ignore -v react-app/build/index.html`) before editing `.gitignore`. If already ignored, no file change is needed — only a confirmation note in the commit.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None detected — no test config files, no `__tests__/` directories, no test scripts in react-app/package.json beyond the default CRA `react-scripts test` |
| Config file | None (CRA default — `src/setupTests.js` exists but contains only the `@testing-library/jest-dom` import) |
| Quick run command | `cd react-app && npm test -- --watchAll=false` |
| Full suite command | `cd react-app && npm test -- --watchAll=false --coverage` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| BUG-01 | `pos-note` element is not rendered when `course.note` is absent | manual-only | N/A — no component tests exist; visual verification in browser | ❌ Wave 0 would need to create |
| BUG-02 | Empty state message renders; filter bar and legend are hidden when `posSubject` is empty | manual-only | N/A | ❌ Wave 0 |
| CLEAN-01 | Component mounts with first available category and track selected | manual-only | N/A | ❌ Wave 0 |
| CLEAN-02 | `react-app/build/` not tracked by git | smoke | `git ls-files react-app/build/` (empty output = pass) | ✅ (shell command, no test file needed) |

**Manual-only justification:** The REQUIREMENTS.md Out of Scope section explicitly states "Comprehensive test suite — v2 work; no tests exist as baseline." Writing component tests for these three JSX fixes would exceed v1 scope. The fixes are verifiable by loading the running app in a browser.

### Sampling Rate

- **Per task commit:** `git ls-files react-app/build/` (for CLEAN-02 only)
- **Per wave merge:** Visual smoke test in browser for BUG-01, BUG-02, CLEAN-01
- **Phase gate:** All four success criteria confirmed visually before `/gsd:verify-work`

### Wave 0 Gaps

- No test infrastructure gaps block this phase — the fixes are too small and targeted to require a test harness per v1 scope decisions.
- `(None — existing scope decision defers test suite to v2; manual verification is the phase gate)`

---

## Sources

### Primary (HIGH confidence)
- Direct source inspection: `react-app/src/components/ProgramOfStudies.jsx` — confirmed bug at line 175, confirmed existing conditional rendering patterns
- Direct source inspection: `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` lines 24–25 — confirmed hardcoded useState values
- Direct source inspection: `react-app/src/data/electives.js` lines 6–16 — confirmed `electiveCategories` shape and `tracks` array structure
- Direct source inspection: `react-app/.gitignore` — confirmed `/build` entry already present
- Shell: `git ls-files react-app/build/` — confirmed build directory is NOT currently git-tracked

### Secondary (MEDIUM confidence)
- React documentation (training knowledge): `&&` short-circuit for conditional rendering is the standard React pattern; confirmed by existing usage in the same component

### Tertiary (LOW confidence)
- None

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; all patterns are already in the codebase
- Architecture: HIGH — all touch points located and verified via direct source inspection
- Pitfalls: HIGH — CLEAN-02 git state verified empirically; BUG-01/BUG-02 patterns verified in source

**Research date:** 2026-03-07
**Valid until:** 2026-04-07 (stable codebase; no external dependencies to drift)
