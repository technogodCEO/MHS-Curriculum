# Phase 2: Visual Polish - Research

**Researched:** 2026-03-08
**Domain:** React inline styling, WCAG contrast auditing, CSS consistency across subject data files
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**AP badge color strategy (VIS-01)**
- AP badge color is track-based, not a fixed global color and not the flat subject `accent`
- In `CurriculumMap.jsx`: replace `accent` with `trackColorsSubject[effectiveTrack].bg` for the AP badge background, text, and border — matching how Electives already handles it
- In `CurriculumMapVariableTrackLengths.jsx`: keep current `trackColor`-based approach (already correct)
- In `ProgramOfStudies.jsx`: leave AP tier badge as hardcoded `#60a5fa` blue (POS has no track tabs visible, so track-based coloring doesn't apply there)

**AP detection consistency (VIS-01)**
- Unify on `course.highlight === true` as the single canonical AP signal in both `CurriculumMap.jsx` and `CurriculumMapVariableTrackLengths.jsx`
- `CurriculumMapVariableTrackLengths.jsx` currently uses `course.tier === "AP"` — change this to `course.highlight`
- Non-AP courses in Electives: remove the purple fallback badge (`#6366f1`); non-AP courses get no badge at all (matching CurriculumMap behavior)

**Track color audit approach (VIS-02)**
- Audit-and-fix approach: scan all `*TrackColors` data for contrast/readability issues against WCAG AA (4.5:1 minimum) — do not normalize all subjects to a common palette
- Each subject keeps its own color palette; only specific violations get corrected

**Track tab text contrast (VIS-02)**
- Rule: always black text (`#000`) on active track tab buttons, across all subjects
- Science's `Physics Kid` track currently has `text: "#fff"` — change to `text: "#000"`
- Implementation note: `#0f766e` (Physics Kid bg) with `#000` text may not meet 4.5:1 WCAG AA — if contrast fails, the background color should be lightened to a passing shade rather than reverting to white text

### Claude's Discretion
- How to lighten Physics Kid's background if `#000` text fails WCAG 4.5:1 (pick the lightest teal shade that passes)
- Whether any other track background colors in the audit need lightening/darkening to achieve 4.5:1 with black text

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| VIS-01 | AP course highlights are visually consistent across all subjects | AP badge currently uses `accent` prop in CurriculumMap; Electives already uses `trackColor`; unifying on `trackColorsSubject[effectiveTrack].bg` + changing AP detection to `course.highlight` closes the gap |
| VIS-02 | Track colors and styling are visually consistent across all subject departments | Full WCAG contrast audit performed (see below); only one violation found (Physics Kid `#0f766e` with black text = 3.84:1 FAIL); all other tracks pass at 4.5:1+ with black text |
</phase_requirements>

---

## Summary

Phase 2 is a focused styling-only change across three components and six data files. There are no new features, no data schema changes, and no architectural decisions to make. All locked decisions from the context session are confirmed viable by the code audit.

The AP badge inconsistency (VIS-01) has two parts: (1) `CurriculumMap.jsx` uses the `accent` prop instead of `trackColorsSubject[effectiveTrack].bg` — a one-line fix on line 117; (2) `CurriculumMapVariableTrackLengths.jsx` uses `course.tier === "AP"` instead of `course.highlight` for AP detection — also a one-line fix, plus removing the purple fallback badge for non-AP courses.

The track color audit (VIS-02) found exactly one WCAG AA failure: Science's "Physics Kid" track at `#0f766e` scores 3.84:1 with black text (fails 4.5:1). All other 22 track/text combinations pass. The minimum viable fix is lightening Physics Kid's background to `#12877e` (4.79:1 with black), which stays visibly darker than Bio Kid's `#0d9488` and preserves the intentional teal gradient across the science tracks.

**Primary recommendation:** Make the three targeted code changes (CurriculumMap badge style, CurriculumMapVariableTrackLengths AP detection, Physics Kid data fix) — no other track colors need adjustment.

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19.2.4 | Component rendering | Already in use |
| react-scripts (CRA) | 5.0.1 | Build toolchain | Already in use (v2 migration to Vite deferred) |
| @testing-library/react | 16.3.2 | Component testing | Already installed |
| @testing-library/jest-dom | 6.9.1 | DOM assertions | Already installed |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @testing-library/user-event | 13.5.0 | User interaction simulation | Click/keyboard tests |

No new dependencies are needed for this phase. All work is inline style prop edits and data constant updates.

---

## Architecture Patterns

### Inline Style Pattern (Active Tab Buttons)

All track tab buttons in `CurriculumMap.jsx` already follow this pattern:

```jsx
// Source: react-app/src/components/CurriculumMap.jsx line 66-71
style={effectiveTrack === track ? {
  background: trackColorsSubject[track].bg,
  color: trackColorsSubject[track].text,
  borderColor: trackColorsSubject[track].bg,
  boxShadow: `0 0 20px ${trackColorsSubject[track].bg}66`
} : {}}
```

The AP badge must use the same `trackColorsSubject[effectiveTrack].bg` value.

### AP Badge Pattern (Correct — from CurriculumMapVariableTrackLengths)

```jsx
// Source: react-app/src/components/CurriculumMapVariableTrackLengths.jsx line 146-150
// This is the CORRECT pattern — CurriculumMap.jsx must match it
{course.tier !== "CP" && (
  <span className="badge" style={{
    background: isAP ? `${trackColor}22` : "#6366f122",
    color: isAP ? trackColor : "#6366f1",
    border: `1px solid ${isAP ? trackColor + "44" : "#6366f144"}`,
  }}>
    {course.tier}
  </span>
)}
```

After the fix, `CurriculumMap.jsx` AP badge becomes:

```jsx
// After fix — replaces `accent` with trackColorsSubject[effectiveTrack].bg
// Source: CurriculumMap.jsx line 116-119 (before fix uses `accent`)
{isHighlight && (
  <span className="badge" style={{
    background: `${trackColorsSubject[effectiveTrack].bg}22`,
    color: trackColorsSubject[effectiveTrack].bg,
    border: `1px solid ${trackColorsSubject[effectiveTrack].bg}44`
  }}>
    AP
  </span>
)}
```

### TrackColors Data Shape

All six subject data files use the same shape:

```js
// Shared shape across math.js, science.js, english.js, history.js, language.js, electives.js
{ bg: "#hexcolor", text: "#000", label: "Display Label", activeClass: "active-key" }
```

The `activeClass` field is dead code (v2 cleanup DEBT-02) — do not remove in this phase.

### Anti-Patterns to Avoid

- **Using `accent` prop for dynamic badge colors:** `accent` is a flat subject-level color passed from the parent; it does not change when switching tracks. Using it breaks the track-color-follows-tab contract.
- **Using `course.tier === "AP"` for highlight detection:** `tier` is Electives-specific; `highlight: true` is the canonical AP signal present in all subject data files.
- **Adding a purple fallback badge for non-AP courses in Electives:** Non-AP elective courses currently show a purple `#6366f1` badge. This has no equivalent in CurriculumMap. Remove it — non-AP courses get no badge.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| WCAG contrast calculation | Custom formula | Standard WCAG 2.1 relative luminance algorithm | Edge cases in sRGB linearization; formula is specified by W3C |
| Color lightening | Programmatic lightening function | Pre-computed hex constant | Static data file; one color to fix; a hardcoded value is simpler and more readable |

**Key insight:** The contrast calculations in this research are complete. The planner does not need to re-derive them — use the verified values from the audit table below.

---

## WCAG Contrast Audit Results

Full audit of all `*TrackColors` background values against `#000` (black text), per the locked decision that all active track tabs use black text.

| Track | BG | Text | Ratio | Status |
|-------|----|------|-------|--------|
| Math Accelerated | `#f59e0b` | `#000` | 9.78 | PASS |
| Math Advanced | `#60a5fa` | `#000` | 8.26 | PASS |
| Math Enriched | `#c084fc` | `#000` | 7.95 | PASS |
| Math Standard | `#94a3b8` | `#000` | 8.19 | PASS |
| Sci General Science | `#94a3b8` | `#000` | 8.19 | PASS |
| Sci CP | `#6ee7b7` | `#000` | 13.78 | PASS |
| Sci Honors | `#2dd4bf` | `#000` | 11.28 | PASS |
| Sci AP (Standard) | `#14b8a6` | `#000` | 8.44 | PASS |
| Sci Bio Kid | `#0d9488` | `#000` | 5.61 | PASS |
| **Sci Physics Kid** | **`#0f766e`** | **`#000`** | **3.84** | **FAIL** |
| Eng CP | `#94a3b8` | `#000` | 8.19 | PASS |
| Eng Honors | `#e8d5a3` | `#000` | 14.48 | PASS |
| Eng Honors+AP | `#f59e0b` | `#000` | 9.78 | PASS |
| His CP | `#94a3b8` | `#000` | 8.19 | PASS |
| His AP/Honors | `#f97316` | `#000` | 7.49 | PASS |
| Lang Spanish | `#94a3b8` | `#000` | 8.19 | PASS |
| Lang Spanish Honors | `#86efac` | `#000` | 14.96 | PASS |
| Lang French | `#94a3b8` | `#000` | 8.19 | PASS |
| Lang French Honors | `#86efac` | `#000` | 14.96 | PASS |
| Lang German | `#94a3b8` | `#000` | 8.19 | PASS |
| Lang German Honors | `#86efac` | `#000` | 14.96 | PASS |
| Lang Latin | `#d4d4d8` | `#000` | 14.21 | PASS |

**Verdict:** 1 failure out of 22 tracks. Only Physics Kid requires a background color change.

### Physics Kid Fix — Recommended Value

The decision says "pick the lightest teal shade that passes." The minimum viable passing shade is `#12877e` (4.79:1). However, `#0d9488` (teal-600, Tailwind) is already used by Bio Kid, so using it for Physics Kid would create two identical-looking tracks in the same subject.

**Recommended fix:** `bg: "#12877e"` — the darkest distinct shade that passes WCAG AA with black text (4.79:1), preserving visual separation from Bio Kid (`#0d9488`).

Teal candidate ladder (for reference):
| Hex | Contrast with #000 | Status |
|-----|-------------------|--------|
| `#0f766e` | 3.84 | FAIL (current) |
| `#118077` | 4.38 | FAIL |
| **`#12877e`** | **4.79** | **PASS (recommended)** |
| `#0d9488` | 5.61 | PASS (Bio Kid — avoid collision) |
| `#14b8a6` | 8.44 | PASS (too light, loses distinction) |

---

## Common Pitfalls

### Pitfall 1: `effectiveTrack` vs `selectedTrack`
**What goes wrong:** Using `selectedTrack` instead of `effectiveTrack` for the AP badge color lookup causes a crash or wrong color when the user switches subjects and the previous track name doesn't exist in the new subject.
**Why it happens:** `CurriculumMap.jsx` already guards against this at line 53-55 with the `effectiveTrack` fallback. The badge fix must use `effectiveTrack`, not `selectedTrack`.
**How to avoid:** The existing tab button pattern already uses `effectiveTrack` — match it exactly.

### Pitfall 2: Badge removal scope in CurriculumMapVariableTrackLengths
**What goes wrong:** The `course.tier !== "CP"` condition currently renders a badge for ALL non-CP courses (AP gets track-color badge, others get purple badge). After the fix, only `course.highlight` courses should get a badge.
**Why it happens:** The condition was written when tier was the only signal.
**How to avoid:** Replace the entire badge block condition from `course.tier !== "CP"` to `course.highlight`. The badge text can stay as `"AP"` or use the tier value — either is consistent since only AP courses have `highlight: true`.

### Pitfall 3: Physics Kid bg change breaks the teal gradient visual
**What goes wrong:** Lightening Physics Kid too much (e.g. to `#14b8a6`) makes it visually indistinguishable from AP Standard, defeating the purpose of having six distinct science tracks.
**Why it happens:** The science tracks intentionally darken as they become more advanced.
**How to avoid:** Use `#12877e` — the darkest passing shade — to preserve maximum visual distinctiveness.

### Pitfall 4: Both components share `highlight-card` CSS class
**What goes wrong:** `highlight-card` is defined in `math_curriculum_MHS.jsx` global styles and consumed by both `CurriculumMap.jsx` and `CurriculumMapVariableTrackLengths.jsx`. The class adds the glowing border/bg effect.
**Why it happens:** The class already works correctly. The AP detection change (`course.highlight` vs `course.tier`) affects when the class is applied, not the class itself.
**How to avoid:** Do not modify the CSS class. Only change the condition that applies it.

---

## Code Examples

### Change 1 — CurriculumMap.jsx: AP badge (line 117)

Before:
```jsx
<span className="badge" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
  AP
</span>
```

After:
```jsx
<span className="badge" style={{
  background: `${trackColorsSubject[effectiveTrack].bg}22`,
  color: trackColorsSubject[effectiveTrack].bg,
  border: `1px solid ${trackColorsSubject[effectiveTrack].bg}44`
}}>
  AP
</span>
```

### Change 2 — CurriculumMapVariableTrackLengths.jsx: AP detection and badge (lines 110, 145-152)

Before (two separate lines):
```jsx
const isAP = course.tier === "AP";
// ...
{course.tier !== "CP" && (
  <span className="badge" style={{
    background: isAP ? `${trackColor}22` : "#6366f122",
    color: isAP ? trackColor : "#6366f1",
    border: `1px solid ${isAP ? trackColor + "44" : "#6366f144"}`,
  }}>
    {course.tier}
  </span>
)}
```

After:
```jsx
const isAP = course.highlight;
// ...
{isAP && (
  <span className="badge" style={{
    background: `${trackColor}22`,
    color: trackColor,
    border: `1px solid ${trackColor}44`,
  }}>
    AP
  </span>
)}
```

### Change 3 — science.js: Physics Kid track color (line 352)

Before:
```js
"Physics Kid": { bg: "#0f766e", text: "#fff", label: "⚛️ Physics Kid (AP → Phys C)", activeClass: "active-phys" },
```

After:
```js
"Physics Kid": { bg: "#12877e", text: "#000", label: "⚛️ Physics Kid (AP → Phys C)", activeClass: "active-phys" },
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `course.tier === "AP"` for AP detection in Electives | `course.highlight` (canonical signal in all subjects) | Phase 2 | Unifies detection logic across all components |
| `accent` prop for AP badge color in CurriculumMap | `trackColorsSubject[effectiveTrack].bg` | Phase 2 | Badge now follows track-color on tab switch |
| `#0f766e` + white text for Physics Kid | `#12877e` + black text | Phase 2 | WCAG AA compliance; consistent black-text rule |

**Deprecated/outdated after this phase:**
- `accent` prop usage for badge color in `CurriculumMap.jsx`: replaced by trackColorsSubject lookup
- Purple `#6366f1` fallback badge in `CurriculumMapVariableTrackLengths.jsx`: removed, non-AP courses get no badge

---

## Open Questions

1. **AP badge text label in CurriculumMapVariableTrackLengths**
   - What we know: Before fix, badge renders `{course.tier}` which outputs `"AP"`. After switching to `course.highlight`, the text could stay `"AP"` as a literal or still use `{course.tier}`.
   - What's unclear: Whether any AP elective course has a tier value other than "AP" (unlikely given data).
   - Recommendation: Use the literal string `"AP"` for consistency with CurriculumMap, which already hardcodes `"AP"`.

2. **highlight-card CSS glow color**
   - What we know: The `highlight-card` class injects a glow using `gridRgb` via a `<style>` block in `math_curriculum_MHS.jsx`. This glow color is subject-level, not track-level.
   - What's unclear: Whether the user considers the glow color part of VIS-01 (it was not raised in context).
   - Recommendation: Do not change. The glow uses `gridRgb` (subject color) intentionally; it is not within scope.

---

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Jest + React Testing Library (via react-scripts 5.0.1) |
| Config file | None explicit — CRA default jest config embedded in react-scripts |
| Quick run command | `cd react-app && CI=true npm test -- --testPathPattern="App" --watchAll=false` |
| Full suite command | `cd react-app && CI=true npm test -- --watchAll=false` |

**Note:** `App.test.js` is a stale CRA default that checks for a "learn react link" — this test will fail against the actual app. The existing test file must be replaced or updated in Wave 0 before new tests are added.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| VIS-01 | CurriculumMap AP badge uses track color, not accent | unit | `cd react-app && CI=true npm test -- --testPathPattern="CurriculumMap" --watchAll=false` | ❌ Wave 0 |
| VIS-01 | CurriculumMapVariableTrackLengths uses course.highlight for AP detection | unit | same as above | ❌ Wave 0 |
| VIS-01 | Non-AP elective courses show no badge | unit | same as above | ❌ Wave 0 |
| VIS-02 | Physics Kid track color passes WCAG AA (contrast >= 4.5:1) | unit | `cd react-app && CI=true npm test -- --testPathPattern="contrast" --watchAll=false` | ❌ Wave 0 |
| VIS-02 | All trackColors text values are "#000" | unit | same as above | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `cd react-app && CI=true npm test -- --watchAll=false`
- **Per wave merge:** `cd react-app && CI=true npm test -- --watchAll=false`
- **Phase gate:** Full suite green before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `react-app/src/App.test.js` — replace stale CRA default with a smoke test that renders `<App />` without crashing
- [ ] `react-app/src/components/__tests__/CurriculumMap.test.jsx` — covers VIS-01 AP badge color logic
- [ ] `react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx` — covers VIS-01 AP detection via `course.highlight`, badge-removal for non-AP
- [ ] `react-app/src/data/__tests__/contrast.test.js` — covers VIS-02: verifies all `*TrackColors` entries have `text: "#000"` and bg contrast >= 4.5:1

---

## Sources

### Primary (HIGH confidence)
- Direct code inspection: `react-app/src/components/CurriculumMap.jsx` — confirmed `accent` prop usage at line 117, confirmed `effectiveTrack` guard exists
- Direct code inspection: `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` — confirmed `course.tier === "AP"` at line 110, confirmed purple fallback badge at lines 147-149
- Direct code inspection: `react-app/src/data/science.js` line 352 — confirmed `text: "#fff"` on Physics Kid
- Direct code inspection: all six `*TrackColors` export objects — confirmed data shape and all `text` values

### Secondary (HIGH confidence — computed)
- WCAG 2.1 relative luminance formula (W3C specification): all 22 contrast ratios computed in-session using standard algorithm; results verified by cross-checking known-good values (`#0d9488` / black = 5.61, matching the decision note that Bio Kid already passes)

### Tertiary (LOW confidence — not needed)
- No WebSearch was required; all findings are grounded in direct source code inspection and standard WCAG math.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new dependencies; existing CRA + RTL stack inspected directly
- Architecture: HIGH — patterns extracted from live source files, not assumed
- WCAG audit: HIGH — computed using W3C algorithm against exact hex values from source
- Pitfalls: HIGH — derived from reading both components and identifying the specific mismatches
- Recommended Physics Kid fix (`#12877e`): HIGH — computed; confirmed it does not collide with Bio Kid (`#0d9488`)

**Research date:** 2026-03-08
**Valid until:** 2026-04-08 (stable domain — static data files and inline React styles do not change independently)
