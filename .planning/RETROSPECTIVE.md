# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — MVP

**Shipped:** 2026-03-08
**Phases:** 2 | **Plans:** 4 | **Timeline:** 6 days

### What Was Built
- Conditional rendering fixes for `pos-note` box and ProgramOfStudies empty state (Phase 1)
- Data-derived defaults for CurriculumMapVariableTrackLengths; build artifacts excluded from git (Phase 1)
- TDD test scaffolding (4 test files, 109 tests) with RED→GREEN cycle for Phase 2 requirements
- AP badge and card highlight glow unified on `trackColorsSubject[effectiveTrack].bg` across both curriculum map components
- WCAG AA compliance for Physics Kid + 3 elective tracks; AP elective `highlight: true` data fix

### What Worked
- Wave-based TDD approach: writing failing tests before fixes made verification unambiguous
- Extracting exact fix patterns into PLAN.md `<interfaces>` blocks let executors apply changes without codebase exploration
- Human-verify checkpoint caught two real issues (missing `highlight: true` on elective data, wrong highlight-card color source) that automated tests didn't cover
- Small milestone scope (2 phases, 4 plans) kept context focused and execution fast

### What Was Inefficient
- `CurriculumMapVariableTrackLengths.test.jsx` ended up importing the wrong component (`CurriculumMap` instead of `CurriculumMapVariableTrackLengths`) — the fix was verified correct by code inspection but the test doesn't actually exercise the changed component; should be corrected in v2
- jsdom rgba normalization caused initial test failures that required a second pass to fix assertions — worth noting in test scaffolding instructions going forward

### Patterns Established
- **Derive component state from data:** `Object.keys(dataObject)[0]` instead of hardcoded strings — prevents silent breakage if data order changes
- **Use `effectiveTrack` not `selectedTrack`** for track-dependent styling — guards against stale track names when switching subjects
- **`course.highlight` is the canonical AP signal** — not `course.tier === "AP"` — unified across both curriculum map components
- **jsdom hex normalization:** Inline hex colors (`#abc22`) are normalized to `rgba()` by jsdom/CSSOM — test assertions must compare channel integers, not hex strings

### Key Lessons
1. Data files need `highlight: true` added when AP detection logic changes — it's easy to miss the data-side update when fixing the component
2. Card highlight glow and badge color should always share the same color source — if they diverge (one uses `accent`, one uses `trackColor`) the human eye notices immediately
3. The human-verify checkpoint is worth keeping even when all automated tests pass — visual consistency is hard to fully automate

### Cost Observations
- Model mix: 100% sonnet (all agents)
- Sessions: ~3 context windows
- Notable: Small milestone completed in a single working day of agent sessions

---

## Cross-Milestone Trends

| Milestone | Phases | Plans | Shipped | Notes |
|-----------|--------|-------|---------|-------|
| v1.0 MVP | 2 | 4 | 2026-03-08 | Pre-release polish; first GSD-managed milestone |
