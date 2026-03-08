# Phase 1: Fixes and Cleanup - Context

**Gathered:** 2026-03-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix four specific issues before v1 release: eliminate the empty amber `pos-note` box on courses without a note field (BUG-01), add an empty-state message to ProgramOfStudies when a subject has no catalog data (BUG-02), derive CurriculumMapVariableTrackLengths initial state from data instead of hardcoded strings (CLEAN-01), and remove the committed build artifacts from the repository (CLEAN-02). No new features or visual changes beyond these four items.

</domain>

<decisions>
## Implementation Decisions

### BUG-01: Empty pos-note box
- Conditionally render the `<p className="pos-note">` element only when `course.note` exists
- Current broken code: `<p className="pos-note">{Object.keys(course).includes("note") && course.note}</p>` always renders the `<p>`, producing an empty amber box
- Fix: wrap in a conditional so the element is not mounted at all when `course.note` is absent

### BUG-02: ProgramOfStudies empty state
- Message: "No course catalog available for this subject."
- Style: Subtle muted centered text — consistent with the app's dark minimal aesthetic; no border box
- When no data: hide the filter bar (All / CP / Honors / AP) and the weight legend entirely — showing filter buttons with nothing to filter is confusing
- Trigger: when `posSubject` is an empty array (`[]`)

### CLEAN-01: Derive CurriculumMapVariableTrackLengths defaults from data
- Replace hardcoded `useState("AP Capstone")` and `useState("AP Capstone Program")` with values derived from `electiveCategories` at component initialization
- Initial category: first key of `electiveCategories`
- Initial track: first entry in that category's `tracks` array

### CLEAN-02: Remove build artifacts from repository
- Build is not committed to remote — no history rewrite needed
- Actions: run `git rm -r --cached react-app/build/`, add `react-app/build/` to `.gitignore`, commit
- Result: build/ stays on disk but is no longer tracked by git

### Claude's Discretion
- Exact muted color/font size for the BUG-02 empty state text (should blend with existing `#555`–`#777` text range used elsewhere in the component)
- Whether to show the empty state above or below the filter area (filter is hidden, so placement is just vertical centering)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `pos-note` CSS class (ProgramOfStudies.jsx `<style>` block): amber-styled box — already defined, just needs conditional rendering
- `electiveCategories` (electives.js): already imported in CurriculumMapVariableTrackLengths.jsx — use `Object.keys(electiveCategories)[0]` and `electiveCategories[firstKey].tracks[0]` for defaults

### Established Patterns
- Conditional rendering: other sections in ProgramOfStudies already use `{condition && <element>}` pattern (e.g. `course.tier &&`, `course.prereqs ?`)
- Muted text style: `#555`–`#777` range used for secondary/empty labels; `fontFamily: "'DM Sans', sans-serif"` throughout
- `posSubject.map(...)` is the render loop — empty state should be a sibling, rendered when `posSubject.length === 0`

### Integration Points
- BUG-01: `ProgramOfStudies.jsx` line 175 — the `<p className="pos-note">` render
- BUG-02: `ProgramOfStudies.jsx` — before or replacing the `posSubject.map(...)` block
- CLEAN-01: `CurriculumMapVariableTrackLengths.jsx` lines 24–25 — the two `useState` initializers
- CLEAN-02: `.gitignore` at repo root or `react-app/.gitignore`

</code_context>

<specifics>
## Specific Ideas

- No specific visual references — fixes should blend into the existing aesthetic without drawing attention to themselves

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-fixes-and-cleanup*
*Context gathered: 2026-03-07*
