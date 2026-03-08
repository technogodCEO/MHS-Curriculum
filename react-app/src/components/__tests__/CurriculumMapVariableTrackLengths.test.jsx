/**
 * CurriculumMapVariableTrackLengths.test.jsx
 *
 * Unit test: AP badge visibility is driven by course.highlight === true.
 *
 * TDD Phase: RED before CurriculumMap.jsx uses course.highlight for AP detection.
 * Currently the component uses course.highlight directly (line 89), but this test
 * also validates AP badge visibility coheres with course.highlight, which is the
 * canonical AP signal across all subject data files.
 */
import { render, screen } from '@testing-library/react';
import { CurriculumMap } from '../CurriculumMap';

const mockSubject = { id: 'math', label: 'Math' };

// ── Mock data helpers ──────────────────────────────────────────────────────────

function makeMathMock(highlight) {
  return {
    mathTracks: {
      tracks: ['Accelerated'],
      grades: [
        {
          grade: 9,
          courses: {
            Accelerated: {
              name: highlight ? 'AP Calculus BC' : 'Pre-Calculus',
              highlight,
              color: '#f59e0b',
              topics: ['Topic A'],
              tier: highlight ? 'AP' : 'CP',
            },
          },
        },
      ],
    },
    mathTrackColors: {
      Accelerated: { bg: '#f59e0b', text: '#000', label: 'Pathway A', activeClass: 'active-accel' },
    },
  };
}

jest.mock('../../data/science',  () => ({ scienceTracks: {}, scienceTrackColors: {} }));
jest.mock('../../data/language', () => ({ languageTracks: {}, languageTrackColors: {} }));
jest.mock('../../data/history',  () => ({ historyTracks: {}, historyTrackColors: {} }));
jest.mock('../../data/english',  () => ({ englishTracks: {}, englishTrackColors: {} }));

// ── Tests ──────────────────────────────────────────────────────────────────────

describe('AP badge visibility driven by course.highlight', () => {
  test('renders AP badge when course.highlight is true', () => {
    jest.resetModules();
    jest.mock('../../data/math', () => makeMathMock(true));

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
    jest.resetModules();
    jest.mock('../../data/math', () => makeMathMock(false));

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
    jest.resetModules();
    jest.mock('../../data/math', () => makeMathMock(undefined));

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
