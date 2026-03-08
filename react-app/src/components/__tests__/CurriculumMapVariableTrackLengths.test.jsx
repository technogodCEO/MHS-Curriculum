/**
 * CurriculumMapVariableTrackLengths.test.jsx
 *
 * Unit test: AP badge visibility is driven by course.highlight === true.
 *
 * Tests CurriculumMap.jsx to confirm the canonical AP signal (course.highlight)
 * correctly controls badge visibility.
 *
 * Jest hoists jest.mock() calls above imports, so factory functions cannot
 * reference out-of-scope variables. Variables prefixed with "mock" (case
 * insensitive) ARE allowed per Jest's babel-jest transform rules.
 */
import { render, screen } from '@testing-library/react';
import { CurriculumMap } from '../CurriculumMap';

const mockSubject = { id: 'math', label: 'Math' };

// mock-prefixed variables are allowed in jest.mock() factory closures.
// We set these before each test to control which variant gets rendered.
let mockHighlight = false;

jest.mock('../../data/math', () => ({
  get mathTracks() {
    return {
      tracks: ['Accelerated'],
      grades: [
        {
          grade: 9,
          courses: {
            Accelerated: {
              name: mockHighlight ? 'AP Calculus BC' : 'Pre-Calculus',
              highlight: mockHighlight,
              color: '#f59e0b',
              topics: ['Topic A'],
              tier: mockHighlight ? 'AP' : 'CP',
            },
          },
        },
      ],
    };
  },
  get mathTrackColors() {
    return {
      Accelerated: { bg: '#f59e0b', text: '#000', label: 'Pathway A', activeClass: 'active-accel' },
    };
  },
}));

jest.mock('../../data/science',  () => ({ scienceTracks: {}, scienceTrackColors: {} }));
jest.mock('../../data/language', () => ({ languageTracks: {}, languageTrackColors: {} }));
jest.mock('../../data/history',  () => ({ historyTracks: {}, historyTrackColors: {} }));
jest.mock('../../data/english',  () => ({ englishTracks: {}, englishTrackColors: {} }));

// ── Tests ──────────────────────────────────────────────────────────────────────

describe('AP badge visibility driven by course.highlight', () => {
  afterEach(() => {
    mockHighlight = false;
  });

  test('renders AP badge when course.highlight is true', () => {
    mockHighlight = true;

    render(
      <CurriculumMap
        accent="#f59e0b"
        gridRgb="245, 158, 11"
        activeSubject={mockSubject}
      />
    );

    expect(screen.getByText('AP')).toBeInTheDocument();
  });

  test('does NOT render AP badge when course.highlight is false', () => {
    mockHighlight = false;

    render(
      <CurriculumMap
        accent="#f59e0b"
        gridRgb="245, 158, 11"
        activeSubject={mockSubject}
      />
    );

    expect(screen.queryByText('AP')).not.toBeInTheDocument();
  });

  test('does NOT render AP badge when course.highlight is undefined', () => {
    mockHighlight = undefined;

    render(
      <CurriculumMap
        accent="#f59e0b"
        gridRgb="245, 158, 11"
        activeSubject={mockSubject}
      />
    );

    expect(screen.queryByText('AP')).not.toBeInTheDocument();
  });
});
