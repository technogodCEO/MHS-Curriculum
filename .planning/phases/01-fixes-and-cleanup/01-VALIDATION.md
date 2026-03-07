---
phase: 1
slug: fixes-and-cleanup
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-07
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — CRA default (react-scripts test); no component tests exist as baseline |
| **Config file** | `react-app/src/setupTests.js` (only `@testing-library/jest-dom` import) |
| **Quick run command** | `git ls-files react-app/build/` (empty output = pass) |
| **Full suite command** | `cd react-app && npm test -- --watchAll=false --coverage` |
| **Estimated runtime** | ~5 seconds (git command); ~60+ seconds (full CRA test suite) |

---

## Sampling Rate

- **After every task commit:** Run `git ls-files react-app/build/` (CLEAN-02 smoke)
- **After every plan wave:** Visual smoke test in browser for BUG-01, BUG-02, CLEAN-01
- **Before `/gsd:verify-work`:** All four success criteria confirmed visually
- **Max feedback latency:** ~5 seconds (git smoke); visual for UI behaviors

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | BUG-01 | manual | N/A — visual in browser | ❌ out of v1 scope | ⬜ pending |
| 1-01-02 | 01 | 1 | BUG-02 | manual | N/A — visual in browser | ❌ out of v1 scope | ⬜ pending |
| 1-02-01 | 02 | 1 | CLEAN-01 | manual | N/A — visual in browser | ❌ out of v1 scope | ⬜ pending |
| 1-02-02 | 02 | 1 | CLEAN-02 | smoke | `git ls-files react-app/build/` | ✅ shell command | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements. No Wave 0 test stubs needed — REQUIREMENTS.md explicitly scopes comprehensive tests to v2.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| No empty amber box when `course.note` is absent | BUG-01 | No component tests in v1 scope | Expand any course card with no note field; verify no amber box renders |
| Empty-state message shows when no catalog data | BUG-02 | No component tests in v1 scope | Open Program of Studies for a subject with no catalog data; verify explanatory message visible, filter bar and legend hidden |
| Electives Curriculum Map loads with first category/track | CLEAN-01 | No component tests in v1 scope | Load Electives Curriculum Map; verify first available category and track are pre-selected, no hardcoded defaults |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
