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

/**
 * jsdom/CSSOM normalizes inline styles:
 *   "#f59e0b22" -> "rgba(245, 158, 11, 0.133...)"
 *   "#f59e0b"   -> "rgb(245, 158, 11)"
 *
 * We extract the r,g,b channels from the computed style and compare
 * them against the expected track color and the accent sentinel.
 */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function extractRgbFromComputedStyle(styleValue) {
  // Matches both "rgb(r, g, b)" and "rgba(r, g, b, a)"
  const m = styleValue.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return null;
  return { r: parseInt(m[1]), g: parseInt(m[2]), b: parseInt(m[3]) };
}

test('AP badge uses track bg color, not accent prop', () => {
  render(
    <CurriculumMap
      accent={ACCENT}
      gridRgb="245, 158, 11"
      activeSubject={mockSubject}
    />
  );

  const badge = screen.getByText('AP');
  const bgStyle    = badge.style.background;
  const colorStyle = badge.style.color;

  const trackRgb  = hexToRgb(TRACK_BG);
  const accentRgb = hexToRgb(ACCENT);

  const bgParsed    = extractRgbFromComputedStyle(bgStyle);
  const colorParsed = extractRgbFromComputedStyle(colorStyle);

  // Both background and color must be parseable as rgb values
  expect(bgParsed).not.toBeNull();
  expect(colorParsed).not.toBeNull();

  // Background channels must match the track color, not accent
  expect(bgParsed.r).toBe(trackRgb.r);
  expect(bgParsed.g).toBe(trackRgb.g);
  expect(bgParsed.b).toBe(trackRgb.b);

  // Color channels must match the track color, not accent
  expect(colorParsed.r).toBe(trackRgb.r);
  expect(colorParsed.g).toBe(trackRgb.g);
  expect(colorParsed.b).toBe(trackRgb.b);

  // Sanity: track color is not the accent (ensures the test distinguishes them)
  expect(trackRgb.r).not.toBe(accentRgb.r);
});
