# Codebase Concerns

**Analysis Date:** 2026-03-07

## Tech Debt

**Duplicate course objects in electives.js:**
- Issue: Multiple elective tracks share the same courses but each track stores its own full copy of the course object. For example, `id: "el-java"` appears at lines 74 and 95, `id: "el-ap-cs"` at lines 81 and 102, `id: "el-webdev"` at lines 60 and 116, `id: "el-game-design"` at lines 67 and 123, `id: "el-tv1/tv2/tv3"` duplicated across TV tracks, `id: "el-culinary1"` and `el-baking` duplicated, `id: "el-theater-design"` and `el-speech` duplicated.
- Files: `react-app/src/data/electives.js` (1456 lines total)
- Impact: Any course description, topic list, or prerequisite update must be made in multiple places. Missing one copy will cause inconsistent data shown to users depending on which track they view. Already 1456 lines — will grow further if more tracks are added.
- Fix approach: Extract shared course definitions into a top-level `const` map keyed by course ID, then reference them from each track rather than embedding full objects.

**`activeClass` field carried but never consumed:**
- Issue: Every track color object across all data files contains an `activeClass` field (e.g. `activeClass: "active-accel"`). The data file comments even label it "legacy class-based styling." No component in `src/components/` reads this field — all track-tab styling is done with inline styles.
- Files: `react-app/src/data/math.js` line 283–286, `react-app/src/data/science.js` lines 338–343, `react-app/src/data/history.js` lines 144–145, `react-app/src/data/language.js` lines 348–354, `react-app/src/data/english.js` lines 203–205, `react-app/src/data/electives.js` line 839
- Impact: Dead data on every track color object. Adds noise and misleads future maintainers into thinking CSS class names matter.
- Fix approach: Remove `activeClass` from all track color objects and delete the `active-*` CSS rules from `math_curriculum_MHS.jsx` `<style>` block (lines 100–104) that are also never applied.

**`CurriculumMapVariableTrackLengths` hardcodes electives-only switch:**
- Issue: The `subject()` function in `CurriculumMapVariableTrackLengths.jsx` only handles `'electives'` and falls back to electives for all other inputs. The component is currently only used for electives, but the pattern suggests it was built to be extensible while the extension path isn't viable without refactoring.
- Files: `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` lines 32–39
- Impact: Low now; becomes fragile if a second variable-length subject is added without updating the switch.
- Fix approach: Either explicitly document the component as electives-only (remove the switch) or add real cases for future subjects when they're built.

**Hardcoded initial state in `CurriculumMapVariableTrackLengths`:**
- Issue: `useState("AP Capstone")` and `useState("AP Capstone Program")` are hardcoded as default state. If `electiveCategories` is ever reordered or "AP Capstone" is renamed, the component will silently render with a stale default state. The guard check partially handles the track name but not the category name.
- Files: `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` lines 24–25
- Impact: Fragile coupling between component initial state and data structure order/naming.
- Fix approach: Derive defaults from data: `Object.keys(electiveCategories)[0]` and `electiveCategories[firstCategory].tracks[0]`.

**Global CSS injected via `<style>` tag in root component:**
- Issue: All shared CSS (`.timeline`, `.grade-card`, `.track-tab`, `.badge`, etc.) is injected as a raw `<style>` string in `math_curriculum_MHS.jsx` using template literals (lines 78–150). Child components `CurriculumMap` and `CurriculumMapVariableTrackLengths` depend on these globally-injected classes without any import or explicit dependency.
- Files: `react-app/src/math_curriculum_MHS.jsx` lines 78–150
- Impact: Child components have invisible implicit dependencies on parent styles. Adding a new page-level component requires either adding it inside `MathCurriculum` or duplicating the styles. Refactoring component hierarchy becomes difficult.
- Fix approach: Extract shared styles to `App.css` or CSS Modules. Move subject-color-derived values (which require JS variables) to CSS custom properties set on a root element.

**`ProgramOfStudies` also injects a large inline `<style>` block:**
- Issue: 40+ CSS rules injected as a string on every render inside `ProgramOfStudies.jsx` (lines 70–110).
- Files: `react-app/src/components/ProgramOfStudies.jsx` lines 70–110
- Impact: Same as above — invisible dependency, re-injection on re-render, hard to maintain.
- Fix approach: Move to a dedicated CSS file or CSS Module.

---

## Known Bugs

**`pos-note` paragraph always rendered, even when no note exists:**
- Symptoms: An empty `<p className="pos-note">` with amber styling renders for every expanded course card that has no `note` field. The conditional `Object.keys(course).includes("note") && course.note` evaluates to `false` but React still renders the `<p>` wrapper with its amber border and background.
- Files: `react-app/src/components/ProgramOfStudies.jsx` line 175
- Trigger: Expand any course card in Program of Studies for a course without a `note` field (i.e. almost all courses).
- Workaround: None visible to users, but an empty amber-styled box appears in the expanded card body.

**Duplicate course IDs within electives tracks cause React key collisions:**
- Symptoms: When `CurriculumMapVariableTrackLengths` renders the "Computer Science (Express)" track, it renders two course objects both with `id: "el-java"`. The `expandedCourse` state uses `course.id` to track which card is open, so expanding "Foundations of JAVA" in the Express track may incorrectly expand the same course in the regular CS track (and vice versa) if the state is not reset on track switch.
- Files: `react-app/src/data/electives.js` lines 74 and 95, `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` line 108
- Trigger: Switch to "Computer Science" track, open a card, then switch to "Computer Science (Express)" track — expanded state may be stale. Also causes React `key` prop warnings in the console.
- Workaround: `setExpandedCourse(null)` is called on track switch (line 87), which partially mitigates the stale-open issue but does not fix the key collision or data duplication.

---

## Security Considerations

**Google Fonts loaded via external CDN at runtime:**
- Risk: The app imports Playfair Display, DM Sans, and DM Mono from `fonts.googleapis.com` via an `@import` inside the injected `<style>` tag. This is a network dependency — if Google Fonts is unavailable, the entire typographic design degrades to system fallbacks.
- Files: `react-app/src/math_curriculum_MHS.jsx` line 79
- Current mitigation: CSS fallback fonts (`Georgia`, `Times New Roman`, `sans-serif`) are declared on root elements.
- Recommendations: Self-host fonts in `/public/` or `src/assets/` for offline reliability and to avoid the Google Fonts privacy request. This is particularly relevant for a school tool.

**Build artifacts committed to repository:**
- Risk: The `react-app/build/` directory (compiled JS bundles, CSS, source maps) is committed to version control. Source maps (`main.2b88be93.js.map`) expose the full unminified source code of the production bundle.
- Files: `react-app/build/` (entire directory)
- Current mitigation: None.
- Recommendations: Add `react-app/build/` to `.gitignore`. Deploy via CI/CD build step rather than committing build output.

---

## Performance Bottlenecks

**Electives data file loaded in full on every subject switch:**
- Problem: `electives.js` is 1456 lines and defines every elective track, category, and course as a single static JS module. All data is loaded when the module is first imported, even if the user never visits the Electives subject.
- Files: `react-app/src/data/electives.js`
- Cause: Static imports at the top of `CurriculumMapVariableTrackLengths.jsx` (line 2) pull in all elective data eagerly.
- Improvement path: CRA supports `React.lazy` + `Suspense` for component-level code splitting. Subject data files could be loaded lazily only when the user selects that subject.

**Inline `<style>` blocks re-create style strings on every render:**
- Problem: Both `math_curriculum_MHS.jsx` and `ProgramOfStudies.jsx` construct large CSS strings inside the render function body, which are re-evaluated and re-inserted into the DOM on every render.
- Files: `react-app/src/math_curriculum_MHS.jsx` lines 78–150, `react-app/src/components/ProgramOfStudies.jsx` lines 70–110
- Cause: Template literal `<style>` injection evaluated at render time.
- Improvement path: Extract static rules to CSS files. Keep only the dynamic `gridRgb`/`accent` values as CSS custom properties on a container element.

---

## Fragile Areas

**`CurriculumMap` fallback defaults to Math data on unknown subject:**
- Files: `react-app/src/components/CurriculumMap.jsx` lines 41–44
- Why fragile: When an unknown `activeSubject.id` is passed (e.g. from a future subject), the component silently renders Math data with a console warning. A user would see the wrong curriculum with no visible error.
- Safe modification: If a new subject is added to `subjects.js`, add a matching case to the switch in `CurriculumMap.jsx` and `ProgramOfStudies.jsx` before setting `available: true`.
- Test coverage: No tests cover the switch fallback behavior.

**`selectedTrack` state not reset when subject changes in `CurriculumMap`:**
- Files: `react-app/src/components/CurriculumMap.jsx` lines 27, 53–55
- Why fragile: When the user switches subjects, `selectedTrack` retains its previous value (e.g. "Accelerated"). The guard on line 53–55 catches the case where the track name doesn't exist in the new subject and falls back to the first track. However, if two subjects happen to share a track name (e.g. both have "CP"), the guard passes and the new subject renders the "CP" track even if the user was last on a different track — this is likely desired, but is implicit behavior without a `useEffect` to intentionally reset.
- Safe modification: Add a `useEffect([activeSubject])` to explicitly reset `selectedTrack` to the first track of the new subject.

**`ProgramOfStudies` data switch has no fallback for missing `posSubject`:**
- Files: `react-app/src/components/ProgramOfStudies.jsx` lines 42–54, 57
- Why fragile: The `subject()` function returns `{ posSubject: [] }` for unknown subjects, which causes `posSubject.map(...)` to render nothing. There is no user-visible message indicating the catalog is empty vs. not yet built. Students would see a blank page with no explanation.
- Safe modification: Add an empty-state message when `posSubject.length === 0`.

---

## Scaling Limits

**Data schema maintained by hand across 6 subject files:**
- Current capacity: 6 subject data files managed as plain JS objects with no validation.
- Limit: Each new subject, track, or course requires a developer to manually follow the schema defined only in comments in `math.js`. No runtime schema validation, TypeScript types, or Zod schemas enforce structure.
- Scaling path: Add TypeScript or JSDoc type annotations to the data schema. Consider a JSON schema validation step in CI to catch malformed data files before deploy.

---

## Dependencies at Risk

**`react-scripts` 5.0.1 (Create React App) is effectively unmaintained:**
- Risk: CRA's underlying toolchain (webpack 5, babel) has not received meaningful updates. The CRA project has been in maintenance-only mode since 2022 and has known unresolved security advisories in its dependency tree.
- Impact: `npm audit` will likely report moderate/high vulnerabilities in transitive dev dependencies. No path to Vite or other modern bundlers without ejecting or migrating.
- Migration plan: Migrate to Vite (`vite` + `@vitejs/plugin-react`) which is a drop-in replacement for CRA at this scale of project. All source files are standard JSX and require no changes.

**`web-vitals` 2.1.4 pinned to old major:**
- Risk: `web-vitals` v4 is current; v2 reports a different set of metrics. The `reportWebVitals` file is present but the call in `index.js` passes no callback, making the import effectively dead.
- Files: `react-app/src/reportWebVitals.js`, `react-app/src/index.js`
- Migration plan: Either remove `web-vitals` and `reportWebVitals` entirely (no observability benefit currently), or upgrade to v4 and wire up a real reporting callback.

---

## Test Coverage Gaps

**Only one placeholder test exists, and it is broken:**
- What's not tested: The entire application — every component, all data loading, subject switching, track selection, card expansion, tier filtering, and dropdown behavior.
- Files: `react-app/src/App.test.js`
- Risk: `App.test.js` tests for the text `/learn react/i`, which is the default CRA test and will never pass against this app (which renders curriculum data, not "Learn React"). Running `npm test` will fail immediately.
- Priority: High — there is no safety net for regressions, data breakage, or component bugs.

**No tests for data integrity:**
- What's not tested: Duplicate course IDs in `electives.js`, missing required fields (e.g. `topics` array, `prereqs` array), mismatched track names between `electiveCategories` and `electiveTracks.tracks`.
- Files: `react-app/src/data/electives.js`, `react-app/src/data/science.js`, all other data files.
- Risk: Data bugs (like the existing duplicate IDs) are invisible until a user encounters broken UI behavior.
- Priority: Medium — a simple Node.js validation script or Jest test suite over the data exports would catch structural issues on every commit.

---

*Concerns audit: 2026-03-07*
