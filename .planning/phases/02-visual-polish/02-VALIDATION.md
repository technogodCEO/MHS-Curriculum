---
phase: 2
slug: visual-polish
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-08
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest + React Testing Library (via react-scripts 5.0.1) |
| **Config file** | None explicit — CRA default jest config embedded in react-scripts |
| **Quick run command** | `cd react-app && CI=true npm test -- --watchAll=false` |
| **Full suite command** | `cd react-app && CI=true npm test -- --watchAll=false` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `cd react-app && CI=true npm test -- --watchAll=false`
- **After every plan wave:** Run `cd react-app && CI=true npm test -- --watchAll=false`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 20 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 0 | VIS-01 | unit | `cd react-app && CI=true npm test -- --testPathPattern="App" --watchAll=false` | ❌ W0 | ⬜ pending |
| 2-01-02 | 01 | 0 | VIS-01 | unit | `cd react-app && CI=true npm test -- --testPathPattern="CurriculumMap" --watchAll=false` | ❌ W0 | ⬜ pending |
| 2-01-03 | 01 | 0 | VIS-01 | unit | `cd react-app && CI=true npm test -- --testPathPattern="CurriculumMapVariableTrackLengths" --watchAll=false` | ❌ W0 | ⬜ pending |
| 2-01-04 | 01 | 0 | VIS-02 | unit | `cd react-app && CI=true npm test -- --testPathPattern="contrast" --watchAll=false` | ❌ W0 | ⬜ pending |
| 2-01-05 | 01 | 1 | VIS-01 | unit | `cd react-app && CI=true npm test -- --testPathPattern="CurriculumMap" --watchAll=false` | ✅ W0 | ⬜ pending |
| 2-02-01 | 02 | 1 | VIS-01 | unit | `cd react-app && CI=true npm test -- --testPathPattern="CurriculumMapVariableTrackLengths" --watchAll=false` | ✅ W0 | ⬜ pending |
| 2-02-02 | 02 | 1 | VIS-02 | unit | `cd react-app && CI=true npm test -- --testPathPattern="contrast" --watchAll=false` | ✅ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `react-app/src/App.test.js` — replace stale CRA default with smoke test rendering `<App />` without crashing
- [ ] `react-app/src/components/__tests__/CurriculumMap.test.jsx` — AP badge color logic (VIS-01): asserts badge uses `trackColorsSubject[effectiveTrack].bg`, not `accent`
- [ ] `react-app/src/components/__tests__/CurriculumMapVariableTrackLengths.test.jsx` — AP detection via `course.highlight` (VIS-01): asserts AP courses show badge; non-AP elective courses show no badge
- [ ] `react-app/src/data/__tests__/contrast.test.js` — WCAG contrast audit (VIS-02): verifies all `*TrackColors` entries have `text: "#000"` and bg contrast ratio >= 4.5:1

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Switching subjects shows no jarring visual discontinuities | VIS-01, VIS-02 | Visual perception check; no automated pixel-diff in CRA stack | Open app, click through all 6 subject tabs, verify AP badges and track tabs look consistent |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
