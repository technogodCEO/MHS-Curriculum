# MHS-Curriculum

A curriculum visualizer for MHS students - currently has all subjects, which are accessible via a dropdown menu on the current subject title. I am currently working on the elective subject. [Link.](https://mhscurriculum.vercel.app/)

# Version History 
Added polish, resolve continuity errors, and improve internal code practices before full release

1. Fixes and Cleanup
  - Fixed empty amber pos-note box — now only renders when course.note is truthy (BUG-01)
  - Added empty-state message to ProgramOfStudies when a subject has no catalog data (BUG-02)
  - Derived CurriculumMapVariableTrackLengths default category/track from data (Object.keys()[0]) instead of hardcoded
  strings (CLEAN-01)
  - Confirmed react-app/build/ excluded from git via .gitignore (CLEAN-02)

2. Visual Polish
  - Created TDD Wave 0 scaffolding: 4 test files (App smoke, CurriculumMap badge, VariableTrackLengths AP detection,
  WCAG contrast audit) — 109 tests total
  - Unified AP badge color on trackColorsSubject[effectiveTrack].bg in both CurriculumMap.jsx and
  CurriculumMapVariableTrackLengths.jsx — badge now shifts with the active track tab (VIS-01)
  - Fixed AP detection to use course.highlight (not course.tier === "AP") and removed the purple #6366f1 fallback badge
  from electives (VIS-01)
  - Added highlight: true to all 6 AP-tier courses in electives.js (data-side fix caught at human checkpoint)
  - Synced highlight-card glow to use track color — badge and card border now always match (VIS-01)
  - Fixed Physics Kid track: #12877e/#000 for WCAG AA compliance (4.79:1 ratio), preserving the teal gradient across
  science tracks (VIS-02)
  - Fixed 3 additional elective track colors for WCAG AA compliance (VIS-02)

(More information is available in the GSD documentation in the .planning directory)

## Version 1.0:
1. removed discontinutiy erro 

### Beta 3.1
1. Added CurriculumMapVariableTrackLengths.jsx, for elective subjects with variable length tracks.
2. Added the Electives subject with a Program of Studies and the new Curriculum Map.

## Beta 3
1. Added the following subjects -> provided unique tracks and program of studies categories for each.
     1. English
     2. World Language
     3. History
     4. Science
2. Refactored infrastructure and removed hardcodes to make this happen.

## Beta 2
1. Backend update
2. Restructured the program architecture into a helper file system
     1. Two directories and a main file (math_curriculum_MHS.jsx)
          1. data (stores data that will be used by the program)
          2. components (each stores one custom component used in the website)

## Beta 1
1. Initial fork from the Claude artifact
2. Has math data from the MHS Program of Studies
3. Has two pages
     1. Curriculum Map -> A track placement visualizer
     2. Program of Studies -> A visualizer of all math courses the school offers
