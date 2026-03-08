/**
 * contrast.test.js
 *
 * WCAG audit of all trackColors data.
 *
 * For each track color entry:
 *   - text must be "#000"
 *   - contrast ratio between bg and #000 must be >= 4.5:1 (WCAG AA normal text)
 *
 * TDD Phase: RED before science.js Physics Kid bg is fixed (current bg #0f766e
 * gives ~3.84:1 which fails the 4.5 threshold, and text is "#fff" not "#000").
 *
 * WCAG relative luminance formula:
 *   L = 0.2126*R + 0.7152*G + 0.0722*B
 *   where R/G/B are linearized sRGB:
 *     c/255 <= 0.04045 ? c/255/12.92 : ((c/255 + 0.055) / 1.055)^2.4
 *   contrast = (L_lighter + 0.05) / (L_darker + 0.05)
 */

import { mathTrackColors }     from '../math';
import { scienceTrackColors }  from '../science';
import { englishTrackColors }  from '../english';
import { historyTrackColors }  from '../history';
import { languageTrackColors } from '../language';
import { electiveTrackColors } from '../electives';

// ── WCAG helpers ──────────────────────────────────────────────────────────────

function linearize(c) {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hex1);
  const l2 = relativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker  = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ── Test data: [subjectName, colorMap] pairs ──────────────────────────────────

const colorMaps = [
  ['math',     mathTrackColors],
  ['science',  scienceTrackColors],
  ['english',  englishTrackColors],
  ['history',  historyTrackColors],
  ['language', languageTrackColors],
  ['electives', electiveTrackColors],
];

// ── Tests ──────────────────────────────────────────────────────────────────────

describe('trackColors WCAG audit', () => {
  colorMaps.forEach(([subject, colorMap]) => {
    describe(`${subject} trackColors`, () => {
      Object.entries(colorMap).forEach(([trackName, entry]) => {
        test(`${subject}/${trackName}: text is "#000"`, () => {
          expect(entry.text).toBe('#000');
        });

        test(`${subject}/${trackName}: bg vs #000 contrast >= 4.5:1`, () => {
          const ratio = contrastRatio(entry.bg, '#000000');
          expect(ratio).toBeGreaterThanOrEqual(4.5);
        });
      });
    });
  });
});
