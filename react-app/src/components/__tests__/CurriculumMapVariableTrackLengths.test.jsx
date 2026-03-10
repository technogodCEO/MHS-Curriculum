/**
 * CurriculumMapVariableTrackLengths.test.jsx
 *
 * Tests the electives curriculum map component:
 *   - Category tabs render correctly
 *   - First category is selected by default
 *   - Switching tracks shows the correct courses
 *   - Course cards render name and tier badge
 *   - Clicking a card expands it to show description and topics
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CurriculumMapVariableTrackLengths } from '../CurriculumMapVariableTrackLengths';

const mockActiveSubject = { id: 'electives', label: 'Electives' };

vi.mock('../../data/electives', () => ({
  electiveCategories: {
    "Computer Science": {
      color: "#60a5fa",
      tracks: ["CS Track", "Digital Track"],
    },
  },
  electiveTracks: {
    tracks: {
      "CS Track": {
        color: "#60a5fa",
        description: "Core CS courses",
        courses: [
          {
            name: "Intro to CS", tier: "CP", weight: 0,
            gradeLevel: "Grades 9–12", credits: "2.5",
            prereqs: [],
            description: "An intro course.",
            topics: ["Scratch", "Python"],
          },
          {
            name: "AP Computer Science A", tier: "AP", weight: 5, highlight: true,
            gradeLevel: "Grades 10–12", credits: "5",
            prereqs: [{ course: "Intro to CS", minGrade: null, note: null }],
            description: "Advanced Java course.",
            topics: ["Java", "OOP"],
          },
        ],
      },
      "Digital Track": {
        color: "#60a5fa",
        description: "Digital design courses",
        courses: [
          {
            name: "Digital Creativity", tier: "CP", weight: 0,
            gradeLevel: "Grades 9–12", credits: "2.5",
            prereqs: [],
            description: "Creative digital arts.",
            topics: ["Photoshop", "Illustrator"],
          },
          {
            name: "Game Design", tier: "CP", weight: 0,
            gradeLevel: "Grades 9–12", credits: "2.5",
            prereqs: [],
            description: "Game development basics.",
            topics: ["Unity", "Level design"],
          },
        ],
      },
    },
  },
  electiveTrackColors: {
    "CS Track":      { bg: "#60a5fa", text: "#000", label: "CS Track" },
    "Digital Track": { bg: "#60a5fa", text: "#000", label: "Digital Track" },
  },
}));

vi.mock('../../data/math',     () => ({ mathTracks: {}, mathTrackColors: {} }));
vi.mock('../../data/science',  () => ({ scienceTracks: {}, scienceTrackColors: {} }));
vi.mock('../../data/language', () => ({ languageTracks: {}, languageTrackColors: {} }));
vi.mock('../../data/history',  () => ({ historyTracks: {}, historyTrackColors: {} }));
vi.mock('../../data/english',  () => ({ englishTracks: {}, englishTrackColors: {} }));

function renderComponent() {
  return render(
    <CurriculumMapVariableTrackLengths
      accent="#60a5fa"
      gridRgb="96, 165, 250"
      activeSubject={mockActiveSubject}
    />
  );
}

// ── Tests ──────────────────────────────────────────────────────────────────────

describe('CurriculumMapVariableTrackLengths', () => {
  test('renders the category tab', () => {
    renderComponent();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
  });

  test('renders the track sidebar buttons for the default category', () => {
    renderComponent();
    // CS Track appears in both the sidebar button and the track title h2
    expect(screen.getAllByText('CS Track').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('button', { name: 'Digital Track' })).toBeInTheDocument();
  });

  test('renders courses for the default track on mount', () => {
    renderComponent();
    expect(screen.getByText('Intro to CS')).toBeInTheDocument();
    expect(screen.getByText('AP Computer Science A')).toBeInTheDocument();
  });

  test('renders AP badge for highlighted courses', () => {
    renderComponent();
    // AP Computer Science A has highlight: true — should show the AP badge
    expect(screen.getByText('AP')).toBeInTheDocument();
  });

  test('switches to Digital Track courses when that track is clicked', async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByText('Digital Track'));

    expect(screen.getByText('Digital Creativity')).toBeInTheDocument();
    expect(screen.getByText('Game Design')).toBeInTheDocument();
    expect(screen.queryByText('Intro to CS')).not.toBeInTheDocument();
  });

  test('clicking a course card expands it to show description and topics', async () => {
    const user = userEvent.setup();
    renderComponent();

    // Description and topics are not visible before expansion
    expect(screen.queryByText('An intro course.')).not.toBeInTheDocument();

    await user.click(screen.getByText('Intro to CS'));

    expect(screen.getByText('An intro course.')).toBeInTheDocument();
    expect(screen.getByText('Scratch')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  test('clicking an expanded course card collapses it', async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByText('Intro to CS'));
    expect(screen.getByText('An intro course.')).toBeInTheDocument();

    await user.click(screen.getByText('Intro to CS'));
    expect(screen.queryByText('An intro course.')).not.toBeInTheDocument();
  });
});
