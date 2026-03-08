# Milestones

## v1.0 MVP (Shipped: 2026-03-08)

**Phases completed:** 2 phases, 4 plans
**Timeline:** 2026-03-02 → 2026-03-08 (6 days)
**Files changed:** 24 | **LOC:** ~5,097 JS/JSX

**Key accomplishments:**
1. Conditional `pos-note` rendering — amber box only appears when `course.note` is truthy (BUG-01)
2. Empty-state guard for ProgramOfStudies when subject has no catalog data (BUG-02)
3. Electives defaults derived from data (`Object.keys(electiveCategories)[0]`) — no hardcoded strings (CLEAN-01)
4. Build artifacts confirmed excluded from git via `.gitignore` (CLEAN-02)
5. AP badge unified on `trackColorsSubject[effectiveTrack].bg` with TDD scaffolding across both curriculum map components (VIS-01)
6. Physics Kid + 3 elective tracks fixed for WCAG AA; card highlight glow synced to track color (VIS-02)

**Archive:** `.planning/milestones/v1.0-ROADMAP.md`, `.planning/milestones/v1.0-REQUIREMENTS.md`

---

