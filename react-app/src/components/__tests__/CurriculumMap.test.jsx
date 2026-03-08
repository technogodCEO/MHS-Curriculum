/**
 * CurriculumMap.test.jsx
 *
 * Unit test: AP badge uses track color (trackColorsSubject[effectiveTrack].bg),
 * NOT the accent prop.
 *
 * TDD Phase: RED before CurriculumMap.jsx badge fix (VIS-01).
 */
import { render, screen } from '@testing-library/react';
import { CurriculumMap } from '../CurriculumMap';

// ── Minimal mock data ──────────────────────────────────────────────────────────

const TRACK_BG = '#f59e0b';   // the track color — badge MUST use this
const ACCENT   = '#ff0000';   // a sentinel accent — badge must NOT use this

const mockTrackColors = {
  Accelerated: { bg: TRACK_BG, text: '#000', label: 'Pathway A', activeClass: 'active-accel' },
};

const mockTracks = {
  tracks: ['Accelerated'],
  grades: [
    {
      grade: 9,
      courses: {
        Accelerated: {
          name: 'AP Calculus BC',
          highlight: true,
          color: '#f59e0b',
          topics: ['Limits', 'Derivatives'],
          tier: 'AP',
        },
      },
    },
  ],
};

const mockSubject = { id: 'math', label: 'Math' };

// ── Mock the data imports so CurriculumMap uses our inline mock data ───────────

jest.mock('../../data/math', () => ({
  mathTracks: {
    tracks: ['Accelerated'],
    grades: [
      {
        grade: 9,
        courses: {
          Accelerated: {
            name: 'AP Calculus BC',
            highlight: true,
            color: '#f59e0b',
            topics: ['Limits', 'Derivatives'],
            tier: 'AP',
          },
        },
      },
    ],
  },
  mathTrackColors: {
    Accelerated: { bg: '#f59e0b', text: '#000', label: 'Pathway A', activeClass: 'active-accel' },
  },
}));

jest.mock('../../data/science',  () => ({ scienceTracks: {}, scienceTrackColors: {} }));
jest.mock('../../data/language', () => ({ languageTracks: {}, languageTrackColors: {} }));
jest.mock('../../data/history',  () => ({ historyTracks: {}, historyTrackColors: {} }));
jest.mock('../../data/english',  () => ({ englishTracks: {}, englishTrackColors: {} }));

// ── Tests ──────────────────────────────────────────────────────────────────────

test('AP badge uses track bg color, not accent prop', () => {
  render(
    <CurriculumMap
      accent={ACCENT}
      gridRgb="245, 158, 11"
      activeSubject={mockSubject}
    />
  );

  const badge = screen.getByText('AP');
  const bg = badge.style.background;
  const color = badge.style.color;

  // Badge must contain the track bg, not the accent sentinel
  expect(bg).toContain(TRACK_BG.toLowerCase());
  expect(color.toLowerCase()).toContain(TRACK_BG.toLowerCase());

  // Badge must NOT contain the accent sentinel color
  expect(bg.toLowerCase()).not.toContain(ACCENT.toLowerCase());
  expect(color.toLowerCase()).not.toContain(ACCENT.toLowerCase());
});
