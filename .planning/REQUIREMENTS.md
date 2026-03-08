# Requirements: MHS Curriculum Viewer

**Defined:** 2026-03-07
**Core Value:** Any MHS stakeholder can quickly find and understand the courses available to them — tracks, prerequisites, and course details — in a clean, trustworthy interface.

## v1 Requirements

Requirements for v1 release (pre-release polish and cleanup).

### Bugs

- [x] **BUG-01**: `pos-note` styled box does not render when a course has no `note` field
- [x] **BUG-02**: `ProgramOfStudies` displays a blank page with no message when a subject has no catalog data

### Cleanup

- [x] **CLEAN-01**: `CurriculumMapVariableTrackLengths` default category and track are derived from data, not hardcoded strings
- [x] **CLEAN-02**: `react-app/build/` directory is removed from git history and added to `.gitignore`

### Visual Polish

- [x] **VIS-01**: AP course highlights are visually consistent across all subjects
- [x] **VIS-02**: Track colors and styling are visually consistent across all subject departments

## v2 Requirements

Deferred — not in current roadmap.

### Code Quality

- **DEBT-01**: Duplicate course IDs in `electives.js` (e.g. `el-java`, `el-ap-cs`) cause React key collisions — extract shared course definitions to a top-level map
- **DEBT-02**: Dead `activeClass` field on all track color objects and unused `active-*` CSS rules should be removed
- **DEBT-03**: Duplicate full course objects across elective tracks — updates require touching multiple places

### Infrastructure

- **INFRA-01**: Migrate from CRA (react-scripts) to Vite for a maintained build toolchain
- **INFRA-02**: Add test suite (component tests, data integrity checks)

## Out of Scope

| Feature | Reason |
|---------|--------|
| TypeScript migration | Not needed for v1; static data structure is clear |
| User accounts / authentication | Intentionally public-facing |
| Backend or CMS | Static data files sufficient for school use |
| Lazy loading / code splitting | Performance acceptable at current scale |
| Comprehensive test suite | v2 work; no tests exist as baseline |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| BUG-01 | Phase 1 | Complete |
| BUG-02 | Phase 1 | Complete |
| CLEAN-01 | Phase 1 | Complete |
| CLEAN-02 | Phase 1 | Complete |
| VIS-01 | Phase 2 | Complete |
| VIS-02 | Phase 2 | Complete |

**Coverage:**
- v1 requirements: 6 total
- Mapped to phases: 6
- Unmapped: 0

---
*Requirements defined: 2026-03-07*
*Last updated: 2026-03-07 after roadmap creation — all 6 requirements mapped*
