// ─── History / Social Studies ────────────────────────────────────────
// Tracks: CP, AP/Honors
// The AP/Honors track includes AP Gov in senior year.
// Categories: Main Courses, Electives

export const historyTracks = {
  tracks: ["CP", "AP/Honors"],
  grades: [
    // ── 9th Grade ──────────────────────────────────────────────────────
    {
      grade: 9,
      label: "9th Grade",
      courses: {
        CP: {
          name: "World Studies",
          topics: [
            "The Italian Renaissance through the end of the Cold War",
            "Approaches to modern global issues",
            "Fulfills NJ graduation requirement for one-year World History study",
            "Prerequisite: None"
          ],
          color: "#94a3b8",
          highlight: false
        },
        "AP/Honors": {
          name: "World Studies Honors",
          topics: [
            "In-depth exploration of World History from the Italian Renaissance to 21st century issues",
            "Critical reading, analytical thinking, and writing emphasis",
            "Development of independent learning skills",
            "Fulfills NJ graduation requirement for one-year World History study",
            "Summer work requirements",
            "Prerequisite: 93% MP1 & MP2 in 8th grade Social Studies AND Language Arts + Advanced on placement test"
          ],
          color: "#f97316",
          highlight: false
        }
      }
    },

    // ── 10th Grade ─────────────────────────────────────────────────────
    {
      grade: 10,
      label: "10th Grade",
      courses: {
        CP: {
          name: "U.S. History I",
          topics: [
            "American experience from European Colonization to the early 20th century",
            "Extensive use of primary source material",
            "Foundations and Development of the Nation",
            "The Civil War and Industrial Revolution",
            "The Progressive Era and World War I",
            "Prerequisite: Successful completion of World Studies"
          ],
          color: "#94a3b8",
          highlight: false
        },
        "AP/Honors": {
          name: "U.S. History I Honors",
          topics: [
            "American experience from colonial times through the Age of Industry",
            "Follows the College Board AP US History curriculum framework",
            "Higher-level analytical skills in written expression and discussion/debate",
            "Preparation for AP U.S. History II",
            "Summer work requirements",
            "Prerequisite: 90% in World Studies OR 85% in World Studies Honors; 85% in English 9H or 90% in English 9; Advanced on AP Historical Thinking test"
          ],
          color: "#f97316",
          highlight: false
        }
      }
    },

    // ── 11th Grade ─────────────────────────────────────────────────────
    {
      grade: 11,
      label: "11th Grade",
      courses: {
        CP: {
          name: "U.S. History II",
          topics: [
            "American experience during the past century via primary sources",
            "The Great Depression and World War II",
            "Civil rights movements and interventionism",
            "Modern Middle East policy and popular culture trends",
            "Social and political leadership connecting to present-day issues",
            "Prerequisite: Successful completion of U.S. History I"
          ],
          color: "#94a3b8",
          highlight: false
        },
        "AP/Honors": {
          name: "AP U.S. History II",
          topics: [
            "American experience from the Age of the City through the modern era",
            "College seminar–style class with extensive discussion and debate",
            "Advanced analytical skills applied with greater intensity",
            "Preparation for the AP U.S. History Exam in May",
            "Summer work requirements",
            "Prerequisite: 70% in U.S. History I Honors"
          ],
          color: "#f97316",
          highlight: true
        }
      }
    },

    // ── 12th Grade ─────────────────────────────────────────────────────
    {
      grade: 12,
      label: "12th Grade",
      courses: {
        CP: {
          name: "Social Studies Electives",
          topics: [
            "No additional core requirement — choose from available electives:",
            "SOCIOLOGY: Scientific study of society, social institutions, and group behavior (Grades 11–12)",
            "ECONOMICS: Intro to economic thinking, micro/macro analysis, graphical analysis (Grades 10–12)",
            "CRIME & PUNISHMENT: U.S. legal justice system, famous cases, 6th Amendment (Grades 11–12)",
            "A SHORT HISTORY OF EVERYTHING: Big History — from the Big Bang to the present (Grades 10–12)",
            "See electives for full list of options"
          ],
          color: "#94a3b8",
          highlight: false
        },
        "AP/Honors": {
          name: "AP American Government & Politics",
          topics: [
            "College-level study of U.S. government and politics",
            "Student-centered discussions, debates, and cooperative learning",
            "Analysis of foundational documents and Supreme Court decisions",
            "Congress, the White House, the Supreme Court, civil liberties, civil rights",
            "Campaigns, elections, and public policy research",
            "AP exam preparation",
            "Prerequisite: 90% in most recent History OR 85% in most recent AP/Honors History"
          ],
          color: "#f97316",
          highlight: true
        }
      }
    }
  ]
};

// ─── Track Colors ────────────────────────────────────────────────────
export const historyTrackColors = {
  CP:           { bg: "#94a3b8", text: "#000", label: "📘 College Prep (CP)"},
  "AP/Honors":  { bg: "#f97316", text: "#000", label: "🚀 AP / Honors"},
};

// ─── Full Program of Studies (course catalog) ────────────────────────
export const historyProgramOfStudies = [
  // ── Main Courses ───────────────────────────────────────────────────
  {
    category: "Main Courses",
    color: "#f97316",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-world-cp", name: "World Studies", tier: "CP", weight: 0,
        gradeLevel: "Grade 9", credits: "5",
        prereqs: [],
        description: "A full-year course for all freshmen fulfilling the NJ graduation requirement for a one-year study of World History. Covers the Italian Renaissance through the end of the Cold War and approaches modern issues.",
        topics: ["Italian Renaissance", "Reformation and Enlightenment", "Age of Revolution", "Industrialization and Imperialism", "World Wars", "Cold War and modern issues"]
      },
      {
        id: "hs-world-h", name: "World Studies Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 9", credits: "5",
        prereqs: [
          { course: "8th grade Social Studies", minGrade: 93, note: "MP1 & MP2 average" },
          { course: "8th grade Language Arts", minGrade: 93, note: "MP1 & MP2 average" },
          { course: "High school placement test", minGrade: null, note: "Score of Advanced required" }
        ],
        description: "An in-depth exploration of the World Studies curriculum stressing critical reading, analytical thinking and writing, and independent learning. Covers the Italian Renaissance through 21st century issues.",
        topics: ["Italian Renaissance through 21st century", "Critical reading and analytical writing", "Independent learning development", "Summer work requirements"]
      },
      {
        id: "hs-us1-cp", name: "U.S. History I", tier: "CP", weight: 0,
        gradeLevel: "Grade 10", credits: "5",
        prereqs: [{ course: "World Studies or World Studies Honors", minGrade: null, note: "Successful completion" }],
        description: "First course of a two-year sequence meeting state and local graduation requirements. Investigates the American experience from European Colonization to the early 20th century through extensive use of primary source material.",
        topics: ["European Colonization", "Foundations of the Nation", "The Civil War", "Industrial Revolution", "Progressive Era", "World War I"]
      },
      {
        id: "hs-us1-h", name: "U.S. History I Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 10", credits: "5",
        prereqs: [
          { course: "World Studies", minGrade: 90, note: null },
          { course: "World Studies Honors", minGrade: 85, note: null },
          { course: "English 9 Honors", minGrade: 85, note: null },
          { course: "English 9", minGrade: 90, note: null },
          { course: "AP Historical Thinking placement test", minGrade: null, note: "Score of Advanced required" }
        ],
        description: "Study of the American experience from colonial times through the Age of Industry following the College Board AP US History curriculum framework. Introduction to higher-level analytical skills in written expression and discussion/debate. Successful completion is required for AP US History II.",
        topics: ["Colonial America through Age of Industry", "AP US History curriculum framework", "Analytical writing and discussion", "Debate skills development", "Summer work requirements"]
      },
      {
        id: "hs-us2-cp", name: "U.S. History II", tier: "CP", weight: 0,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [{ course: "U.S. History I or US History I Honors", minGrade: null, note: "Successful completion" }],
        description: "Second course of a two-year sequence. Investigates the American experience during the past century through primary sources. Covers the Great Depression, WWII, civil rights movements, interventionism, modern Middle East policy, and popular culture trends.",
        topics: ["The Great Depression", "World War II", "Civil rights movements", "Impact of interventionism", "Modern Middle East policy", "Popular culture trends"]
      },
      {
        id: "hs-us2-ap", name: "AP U.S. History II", tier: "AP", weight: 5,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [{ course: "U.S. History I Honors", minGrade: 70, note: null }],
        description: "Second year of the AP US History program focusing on the American experience from the Age of the City through the modern era. Conducted as a college seminar class with extensive discussion and debate. Prepares students for the AP U.S. History Exam in May.",
        topics: ["Age of the City to modern era", "College seminar format", "Advanced analytical skills", "Extensive discussion and debate", "AP exam preparation", "Summer work requirements"]
      },
      {
        id: "hs-ap-gov", name: "AP American Government & Politics", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Most recent History (US I or US II)", minGrade: 90, note: null },
          { course: "Most recent AP/Honors US History", minGrade: 85, note: null }
        ],
        description: "College-level course teaching students to think critically about U.S. government and politics. Students analyze foundational documents, Supreme Court decisions, and current political events through research, analytical writing, discussions, and debates.",
        topics: ["Foundational documents and Supreme Court decisions", "Congress, the White House, and the Supreme Court", "Civil liberties and civil rights", "Campaigns and elections", "Public policy research", "AP exam preparation", "Summer work requirements"]
      }
    ]
  },

  // ── Electives ──────────────────────────────────────────────────────
  {
    category: "Electives",
    color: "#fb923c",
    grades: "Grades 10–12",
    courses: [
      {
        id: "hs-ap-art-hist", name: "AP Art History", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Most recent History (US I or US II)", minGrade: 90, note: null },
          { course: "Most recent AP/Honors US History", minGrade: 85, note: null }
        ],
        description: "Study of the past through 250 works of art and architecture selected by the College Board. Explores various cultures, societies, and civilizations from prehistoric art to contemporary and modern art. Complements STEAM goals.",
        topics: ["250 College Board works of art", "Pre-historic to contemporary art", "Cultural and societal analysis", "Architecture and design", "Critical observation skills", "AP exam preparation", "Summer work requirements"]
      },
      {
        id: "hs-ap-econ", name: "AP Economics", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Most recent History (US I or US II)", minGrade: 90, note: null },
          { course: "Most recent AP/Honors US History", minGrade: 85, note: null },
          { course: "CP Algebra II / PreCalc / Calculus / Statistics", minGrade: 85, note: null },
          { course: "Algebra II Honors / PreCalc Honors / AP Calculus / AP Statistics", minGrade: 80, note: null }
        ],
        description: "Thorough understanding of microeconomics and macroeconomics principles and applications. Covers scarcity, supply and demand, fiscal and monetary policy, the Federal Reserve System, game theory, international trade, and more. Prepares for both AP Micro and AP Macro exams.",
        topics: ["Microeconomics: scarcity, cost, supply & demand", "Market structures and game theory", "Macroeconomics: fiscal and monetary policy", "Federal Reserve System", "Inflation, unemployment, and aggregate analysis", "International trade", "AP Micro and Macro exam preparation", "Summer work requirements"]
      },
      {
        id: "hs-sociology", name: "Sociology", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Scientific study of society, social institutions, social relationships, and human group behavior. Students explore their own behavior in groups and study topics that directly affect them — socialization, personality development, group behavior, stereotypes, gender identity, families, and social issues.",
        topics: ["Socialization through life stages", "Personality development", "Group behavior and social norms", "Stereotypes, morals, and values", "Gender identity and families", "Discrimination and social issues"]
      },
      {
        id: "hs-human-behavior", name: "Elements of Human Behavior", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Explores human behavior by examining how mental processes, chemical imbalances, and external factors contribute to mental health and decision-making. Students uncover how the brain perceives and interprets the environment.",
        topics: ["Motivation and emotion", "Stress and mental health", "Brain perception and interpretation", "Chemical imbalances and behavior", "Research and experiments"]
      },
      {
        id: "hs-crime-punishment", name: "Crime and Punishment", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Examines the complexities of the U.S. Legal Justice System. Through analysis of famous cases from the late 20th century and contemporary trials, students gain insight into how the justice system operates.",
        topics: ["6th Amendment and right to a fair trial", "Famous legal cases", "Criminal and civil procedures", "Strengths and challenges of the justice system", "Critical thinking and discussion"]
      },
      {
        id: "hs-film", name: "American History & Culture through Film", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "An alternative way to view how and why America changed over its history. Films are chosen for their specific message typifying the depicted time period. Some films may carry an R-rating.",
        topics: ["Film as historical lens", "Social climate analysis", "American cultural change", "Film analysis and discussion"]
      },
      {
        id: "hs-power-inequity", name: "Power, Inequity and the Human Experience", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Examines the historical and contemporary impact of power on prejudice, identity, race, class, and gender in American society. Explores slavery, racial discrimination, gender roles, and socio-economic inequality through literature, film, music, and primary sources.",
        topics: ["Power and prejudice", "Race, class, and gender", "Slavery and racial discrimination", "Socio-economic inequality", "Literature, film, and music analysis"]
      },
      {
        id: "hs-big-history", name: "A Short History of Everything", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Most recent history course", minGrade: null, note: "Successful completion" }],
        description: "Big History course examining history on the grand scale through interdisciplinary learning. From the Big Bang to the present, uncover patterns that shape our world and consider our place in the universe.",
        topics: ["Big Bang to the present", "Interdisciplinary lens", "Patterns that shape the world", "Philosophy, science, and history", "Discussion-based learning"]
      },
      {
        id: "hs-economics", name: "Economics", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Most recent history course", minGrade: null, note: "Successful completion" }],
        description: "Introduces students to economic thinking with graphical analysis and application of theory to current and historical events. Covers microeconomic incentives and macroeconomic considerations. Provides a foundation for AP Economics.",
        topics: ["Economic way of thinking", "Microeconomic incentives", "Consumer and business decisions", "Unemployment, inflation, and growth", "Graphical analysis"]
      },
      {
        id: "hs-contemp-issues", name: "Contemporary Issues & Leadership Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [
          { course: "Most recent History (US I or US II)", minGrade: 85, note: null },
          { course: "Most recent AP/Honors US History", minGrade: 80, note: null }
        ],
        description: "Examines the ever-changing 21st century world with emphasis on current events. Links major recent events to present-day impact. Features civic engagement, leadership, and hands-on engagement with the school community and local leaders.",
        topics: ["Current events analysis", "Historical context for present-day issues", "Civic engagement and leadership", "Community engagement", "Primary research"]
      }
    ]
  }
];