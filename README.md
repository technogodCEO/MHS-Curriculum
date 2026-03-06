# MHS-Curriculum

A curriculum visualizer for MHS students - currently has all but "elective" subjects, which are accessible via a dropdown menu on the current subject title. I am currently working on the elective subject. [Link.](https://mhscurriculum.vercel.app/)

# Version History 

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
