# Phase 2: Visual Polish - Context

**Gathered:** 2026-03-08
**Status:** Ready for planning

<domain>
## Phase Boundary

Achieve consistent AP highlight and track color styling across all six subject departments (Math, Science, English, History, Language, Electives). The goal is that AP courses look the same regardless of which subject you're viewing, and track tab buttons are readable and consistent. No new features, no data changes beyond fixing styling and detection consistency.

</domain>

<decisions>
## Implementation Decisions

### AP badge color strategy (VIS-01)
- AP badge color is **track-based**, not a fixed global color and not the flat subject `accent`
- In `CurriculumMap.jsx`: replace `accent` with `trackColorsSubject[effectiveTrack].bg` for the AP badge background, text, and border — matching how Electives already handles it
- In `CurriculumMapVariableTrackLengths.jsx`: keep current `trackColor`-based approach (already correct)
- In `ProgramOfStudies.jsx`: leave AP tier badge as hardcoded `#60a5fa` blue (POS has no track tabs visible, so track-based coloring doesn't apply there)

### AP detection consistency (VIS-01)
- Unify on `course.highlight === true` as the single canonical AP signal in both `CurriculumMap.jsx` and `CurriculumMapVariableTrackLengths.jsx`
- `CurriculumMapVariableTrackLengths.jsx` currently uses `course.tier === "AP"` — change this to `course.highlight`
- Non-AP courses in Electives: remove the purple fallback badge (`#6366f1`); non-AP courses get no badge at all (matching CurriculumMap behavior)

### Track color audit approach (VIS-02)
- Audit-and-fix approach: scan all `*TrackColors` data for contrast/readability issues against WCAG AA (4.5:1 minimum) — do not normalize all subjects to a common palette
- Each subject keeps its own color palette; only specific violations get corrected

### Track tab text contrast (VIS-02)
- Rule: **always black text (`#000`)** on active track tab buttons, across all subjects
- Science's `Physics Kid` track currently has `text: "#fff"` — change to `text: "#000"`
- Implementation note: `#0f766e` (Physics Kid bg) with `#000` text may not meet 4.5:1 WCAG AA — if contrast fails, the background color should be lightened to a passing shade rather than reverting to white text

### Claude's Discretion
- How to lighten Physics Kid's background if #000 text fails WCAG 4.5:1 (pick the lightest teal shade that passes)
- Whether any other track background colors in the audit need lightening/darkening to achieve 4.5:1 with black text

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `trackColorsSubject[effectiveTrack].bg` — already used for active tab background; same value can drive the AP badge color in CurriculumMap
- `course.highlight` boolean — already present in all subject track data (math: 5, science: 12, english: 2, history: 2, language: 3, electives: 3 AP courses with highlight:true)
- `highlight-card` CSS class — already defined in `math_curriculum_MHS.jsx` global styles; used by both map components

### Established Patterns
- Track color inline style pattern in `CurriculumMap.jsx`:
  ```jsx
  style={effectiveTrack === track ? {
    background: trackColorsSubject[track].bg,
    color: trackColorsSubject[track].text,
    ...
  } : undefined}
  ```
- AP badge in `CurriculumMapVariableTrackLengths.jsx` uses `trackColor` (correct pattern to replicate in CurriculumMap)
- All `*TrackColors` data objects share the same shape: `{ bg, text, label, activeClass }`

### Integration Points
- `CurriculumMap.jsx` — AP badge style (line ~117): change `accent` → `trackColorsSubject[effectiveTrack].bg`
- `CurriculumMapVariableTrackLengths.jsx` — AP detection (line ~110): change `course.tier === "AP"` → `course.highlight`; remove purple fallback badge on non-AP courses
- Data files (`math.js`, `science.js`, `english.js`, `history.js`, `language.js`, `electives.js`) — `*TrackColors` objects: audit `text` values for WCAG 4.5:1 with their `bg`, fix as needed; all `text` values must be `"#000"` per the decided rule
- `react-app/src/data/science.js` line 352: `Physics Kid: { bg: "#0f766e", text: "#fff" ... }` — change `text` to `"#000"` (and lighten `bg` if contrast fails)

</code_context>

<specifics>
## Specific Ideas

- The track-colored AP badge ties the highlight effect to the active track — so switching tracks shifts the AP glow to match. User felt this integrates better with the overall color scheme than a fixed gold.
- Electives already implements the track-color AP badge correctly; CurriculumMap is the one that needs to catch up.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-visual-polish*
*Context gathered: 2026-03-08*
