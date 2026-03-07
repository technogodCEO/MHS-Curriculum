# Testing Patterns

**Analysis Date:** 2026-03-07

## Test Framework

**Runner:**
- Jest (bundled via `react-scripts` 5.0.1 / Create React App)
- Config: embedded in CRA — no standalone `jest.config.*` file

**Assertion Library:**
- `@testing-library/jest-dom` ^6.9.1 — custom DOM matchers
- Setup file: `react-app/src/setupTests.js` — imports `@testing-library/jest-dom` globally

**Testing Libraries:**
- `@testing-library/react` ^16.3.2 — component rendering
- `@testing-library/user-event` ^13.5.0 — user interaction simulation
- `@testing-library/dom` ^10.4.1 — DOM queries

**Run Commands:**
```bash
npm test              # Interactive watch mode (CRA default)
npm test -- --watchAll=false   # Run once (CI mode)
npm test -- --coverage         # Run with coverage report
```
All commands must be run from `react-app/`.

## Test File Organization

**Location:**
- Co-located with source: test files live in `react-app/src/` alongside the modules they test
- Current test file: `react-app/src/App.test.js`

**Naming:**
- Pattern: `{FileName}.test.{ext}` — `App.test.js`
- Extension: `.js` (not `.jsx` even for component tests)

**Structure:**
```
react-app/src/
├── App.test.js          # Only existing test file
├── setupTests.js        # Global test setup
└── components/          # No component-level tests currently
```

## Test Structure

**Suite Organization:**

The only existing test uses the CRA-generated boilerplate structure — flat `test()` calls with no `describe` grouping:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

**Patterns:**
- No `describe()` blocks in the existing test
- No `beforeEach`/`afterEach` setup or teardown
- Single assertion per test (current practice)
- The existing test is the unmodified CRA scaffold and does not reflect the actual app content (the app renders a curriculum viewer, not a "learn react link")

## Mocking

**Framework:** Jest built-ins (from CRA)

**Current Usage:** None — no mocks, spies, or stubs exist in the codebase.

**What would need mocking in future tests:**
- `getBoundingClientRect()` — used by `SubjectDropdownMenu` to position itself; must be mocked in jsdom
- `window.scrollY` — used alongside `getBoundingClientRect()` for scroll-offset positioning
- `document.addEventListener` / `removeEventListener` — used by `SubjectDropdownMenu` for outside-click detection

Example skeleton for future dropdown positioning test:
```js
beforeEach(() => {
  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    bottom: 100, left: 200, width: 120,
  }));
  Object.defineProperty(window, 'scrollY', { value: 0 });
});
```

## Fixtures and Factories

**Test Data:** None defined — no fixture files, factory functions, or mock data modules exist.

**What data would be needed:**
- Mock subject objects matching the shape in `react-app/src/data/subjects.js`:
  ```js
  { id: "math", label: "Mathematics", accent: "#f59e0b", gridColor: "245, 158, 11", emoji: "∑", available: true }
  ```
- Mock track data matching the shape in data files like `react-app/src/data/math.js`
- Mock course objects with fields: `id`, `name`, `tier`, `weight`, `gradeLevel`, `credits`, `description`, `prereqs`, `topics`

**Location for future fixtures:**
- `react-app/src/__fixtures__/` or co-located `*.fixture.js` files alongside data modules

## Coverage

**Requirements:** None enforced — no coverage thresholds configured.

**View Coverage:**
```bash
npm test -- --coverage --watchAll=false
```
Coverage report outputs to `react-app/coverage/` (gitignored by CRA default).

## Test Types

**Unit Tests:**
- Only type attempted (via the single `App.test.js` file)
- Scope: full component render via `@testing-library/react`'s `render()`

**Integration Tests:**
- Not implemented

**E2E Tests:**
- Not implemented — no Playwright, Cypress, or similar framework present

## Current Test Coverage Assessment

**Tested:**
- Nothing meaningful — the one test (`renders learn react link`) uses unmodified CRA boilerplate and will fail against the actual app since the app renders a curriculum viewer, not a "learn react" link

**Completely untested:**
- `react-app/src/math_curriculum_MHS.jsx` — root component, all state and routing logic
- `react-app/src/components/CurriculumMap.jsx` — track switching, grade card expand/collapse, topic section-header parsing
- `react-app/src/components/ProgramOfStudies.jsx` — subject dispatch, tier filtering, course card expand/collapse, `useEffect` reset on subject change
- `react-app/src/components/CurriculumMapVariableTrackLengths.jsx` — category/track two-level navigation
- `react-app/src/components/SubjectDropdownMenu.jsx` — position calculation, outside-click close behavior
- `react-app/src/components/SubjectTitle.jsx` — toggle behavior, arrow rotation
- All data files in `react-app/src/data/` — no shape/integrity validation tests

## Common Patterns (for future tests)

**Async Testing:**
No async patterns currently needed — the app is fully synchronous (no data fetching). If added:
```js
import { waitFor } from '@testing-library/react';
await waitFor(() => expect(screen.getByText('...')).toBeInTheDocument());
```

**User Interaction Testing:**
```js
import userEvent from '@testing-library/user-event';
const user = userEvent.setup();
await user.click(screen.getByRole('button', { name: /mathematics/i }));
```

**State Change Testing:**
```js
render(<ProgramOfStudies activeSubject={mockMathSubject} />);
await userEvent.click(screen.getByText('Honors'));
expect(screen.queryByText('CP Course Name')).not.toBeInTheDocument();
```

---

*Testing analysis: 2026-03-07*
