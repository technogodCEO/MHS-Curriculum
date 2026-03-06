/*
 * subjects.js
 *
 * The master list of all subjects available in the curriculum viewer.
 * Consumed by SubjectDropdownMenu (to render the switcher list) and
 * math_curriculum_MHS (to initialize activeSubject and derive accent colors).
 *
 * Each subject object has the following fields:
 *   id        — unique string key used in switch statements across CurriculumMap
 *               and ProgramOfStudies to load the correct data set (e.g. "math")
 *   label     — display name shown in the header and dropdown (e.g. "Mathematics")
 *   accent    — hex color string for interactive elements: badges, nav underline,
 *               dropdown pills, and gradient text
 *   gridColor — same color expressed as "R, G, B" (no # or rgb()) for injection
 *               into CSS template literals where rgba(${gridRgb}, 0.3) is required
 *   emoji     — decorative symbol (currently unused in the UI but reserved)
 *   available — if false, the subject appears as "SOON" in the dropdown and cannot
 *               be selected; set to true once its data file is ready
 */
export const subjects = [
  { id: "math",     label: "Mathematics",            accent: "#f59e0b", gridColor: "245, 158, 11",  emoji: "∑",  available: true  },
  { id: "english",  label: "English / Language Arts", accent: "#e8d5a3", gridColor: "232, 213, 163", emoji: "✦",  available: true },
  { id: "science",  label: "Science",                 accent: "#2dd4bf", gridColor: "45, 212, 191",  emoji: "⚗",  available: true },
  { id: "history",  label: "History / Social Studies",accent: "#f97316", gridColor: "249, 115, 22",  emoji: "⊕",  available: true },
  { id: "language", label: "World Language",          accent: "#86efac", gridColor: "134, 239, 172", emoji: "◈",  available: true },
  { id: "electives",label: "Electives",               accent: "#d4d4d8", gridColor: "212, 212, 216", emoji: "✦",  available: true },
];
