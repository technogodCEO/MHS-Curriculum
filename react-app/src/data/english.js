// ─── English / Language Arts ─────────────────────────────────────────
// Tracks: CP, Honors, Honors + AP
// In grades 11 & 12 the CP and Honors tracks each offer TWO thematic
// course choices — both options are shown together so the student can pick.
// The "Honors + AP" track routes through AP Lit (Jr) → AP Lang (Sr).

export const englishTracks = {
  tracks: ["CP", "Honors", "Honors + AP"],
  grades: [
    // ── 9th Grade ──────────────────────────────────────────────────────
    {
      grade: 9,
      label: "9th Grade",
      courses: {
        CP: {
          name: "English 9 Literature & Composition",
          topics: [
            "Comprehensive survey of elements of literature, language, and composition",
            "Reading: close reading of a wide selection of literary texts",
            "Writing: narrative and argumentative essays with valid reasoning and evidence",
            "Research projects: synthesizing multiple sources on a subject",
            "Speaking, listening, and viewing skills development",
            "Summer reading requirements",
            "Prerequisite: Successful completion of 8th Grade Language Arts"
          ],
          color: "#94a3b8",
          highlight: false
        },
        Honors: {
          name: "English 9 Literature & Composition Honors",
          topics: [
            "Accelerated and in-depth study of literature, language, and composition",
            "Greater emphasis on independent analytical reading and writing",
            "Advanced argumentative and narrative composition",
            "Research projects with synthesis of multiple sources",
            "Summer reading requirements",
            "Prerequisite: 93% MP1 & MP2 in 8th grade LA + Advanced on HS placement test"
          ],
          color: "#e8d5a3",
          highlight: false
        },
        // Honors + AP students follow the Honors path in 9th grade
        "Honors + AP": {
          name: "English 9 Literature & Composition Honors",
          topics: [
            "Accelerated and in-depth study of literature, language, and composition",
            "Greater emphasis on independent analytical reading and writing",
            "Advanced argumentative and narrative composition",
            "Research projects with synthesis of multiple sources",
            "Summer reading requirements",
            "Prerequisite: 93% MP1 & MP2 in 8th grade LA + Advanced on HS placement test"
          ],
          color: "#f59e0b",
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
          name: "English 10 Literature & Composition",
          topics: [
            "Continued exploration of literature, language, and composition from 9th grade",
            "Study of major literary genres with emphasis on the expository essay",
            "Argumentative writing with valid reasoning and sufficient evidence",
            "Narrative writing with effective technique and well-structured sequences",
            "Sustained research projects synthesizing multiple sources",
            "Summer reading requirements",
            "Prerequisite: Successful completion of English 9"
          ],
          color: "#94a3b8",
          highlight: false
        },
        Honors: {
          name: "English 10 Literature & Composition Honors",
          topics: [
            "Rigorous study of literature, language, and composition at an accelerated pace",
            "Advanced expository and analytical essay writing",
            "Critical reading of challenging literary texts across genres",
            "Sustained research and synthesis projects",
            "Summer reading requirements",
            "Prerequisite: 75% in English 9 Honors OR 90% in English 9"
          ],
          color: "#e8d5a3",
          highlight: false
        },
        "Honors + AP": {
          name: "English 10 Literature & Composition Honors",
          topics: [
            "Rigorous study of literature, language, and composition at an accelerated pace",
            "Advanced expository and analytical essay writing",
            "Critical reading of challenging literary texts across genres",
            "Sustained research and synthesis projects",
            "Summer reading requirements",
            "Prerequisite: 75% in English 9 Honors OR 90% in English 9"
          ],
          color: "#f59e0b",
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
          // Two thematic options — students choose one
          name: "English 11 CP (Choose One)",
          topics: [
            "OPTION A — The Moral of the Story: How stories impact ourselves and our world; graphic novels, plays, novels, short stories; critical thinking and self-reflection",
            "OPTION B — A Thousand Different Ways: Objective vs. subjective truth; reality, fantasy, illusion; manipulation of information; heroism vs. villainy",
            "Both options include summer reading requirements",
            "Both options emphasize critical thinking, open dialogue, and literary analysis",
            "Prerequisite: Successful completion of English 10"
          ],
          color: "#94a3b8",
          highlight: false
        },
        Honors: {
          // Two thematic options — students choose one
          name: "English 11 Honors (Choose One)",
          topics: [
            "OPTION A — Reinventing the Canon: Classic American literature paired with acclaimed global works; updating the literary canon for diversity and relevance",
            "OPTION B — The Fate of the Novel: Classic British literature and global contemporary works; evolution of narrative from serials to fanfiction to graphic novels",
            "Both options include summer reading/work requirements",
            "Both options develop advanced critical analysis and academic writing skills",
            "Prerequisite: 75% in English 10 Honors OR 90% in English 10"
          ],
          color: "#e8d5a3",
          highlight: false
        },
        "Honors + AP": {
          name: "AP Literature & Composition",
          topics: [
            "College-level study of fiction, poetry, and drama across genres, periods, and cultures",
            "Critical exposition and analysis of challenging literature",
            "Advanced analytical and argumentative essay writing",
            "Close reading and interpretation of complex literary works",
            "Summer reading requirements",
            "AP exam in May",
            "Prerequisite: 85% in English 10 Honors OR 95% in English 10"
          ],
          color: "#f59e0b",
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
          // Two thematic options — students choose one
          name: "English 12 CP (Choose One)",
          topics: [
            "OPTION A — Expression and Empowerment: How self-expression empowers individuals; creative projects, discussions, and college-readiness writing through advocacy and autonomy",
            "OPTION B — Reflections and Perspectives: Literature from across time and place; morality, motivation, and cultural storytelling; mythology, folklore, novels, and short fiction",
            "Both options include recommended summer reading",
            "Both options build skills for college readiness and the outside world",
            "Prerequisite: Successful completion of a grade 11 English course"
          ],
          color: "#94a3b8",
          highlight: false
        },
        Honors: {
          // Two thematic options — students choose one
          name: "English 12 Honors (Choose One)",
          topics: [
            "OPTION A — Expression and Empowerment Honors: Advanced study of self-expression and empowerment through diverse literary works and creative projects",
            "OPTION B — Reflections and Perspectives Honors: Advanced exploration of literature across time and place; morality, motivation, and humanity through a global lens",
            "Both options include recommended summer reading",
            "Both options emphasize advanced critical analysis and preparation for college-level work",
            "Prerequisite: 75% in English 11 Honors OR 90% in English 11 CP OR completion of AP Lit"
          ],
          color: "#e8d5a3",
          highlight: false
        },
        "Honors + AP": {
          name: "AP Language & Composition",
          topics: [
            "College-level study of prose across periods, disciplines, and rhetorical contexts",
            "Skilled reading and analysis of nonfiction and rhetoric",
            "Composition for a variety of purposes and audiences",
            "Selections from American Literature",
            "Summer reading requirements",
            "AP exam in May",
            "Prerequisite: 85% in English 11 Honors OR 95% in English 11 CP OR completion of AP Lit"
          ],
          color: "#f59e0b",
          highlight: true
        }
      }
    }
  ]
};

// ─── Track Colors ────────────────────────────────────────────────────
export const englishTrackColors = {
  CP:             { bg: "#94a3b8", text: "#000", label: "📘 College Prep (CP)",        activeClass: "active-cp"  },
  Honors:         { bg: "#e8d5a3", text: "#000", label: "✨ Honors",                   activeClass: "active-hon" },
  "Honors + AP":  { bg: "#f59e0b", text: "#000", label: "🚀 Honors + AP",              activeClass: "active-ap"  },
};

// ─── Full Program of Studies (course catalog) ────────────────────────
export const englishProgramOfStudies = [
  // ── Main Courses ───────────────────────────────────────────────────
  {
    category: "High School — English",
    color: "#e8d5a3",
    grades: "Grades 9–12",
    courses: [
      // ── Grade 9 ────────────────────────────────────────────────────
      {
        id: "hs-eng9-cp", name: "English 9 Literature & Composition", tier: "CP", weight: 0,
        gradeLevel: "Grade 9", credits: "5",
        prereqs: [{ course: "Successful completion of 8th Grade Language Arts", minGrade: null, note: null }],
        description: "A comprehensive survey of the elements of literature, language, and composition. Aims to improve students' skills in reading, writing (narrative and argumentative), speaking, listening, and viewing while appreciating a wide selection of readings. Students conduct short and sustained research projects synthesizing multiple sources.",
        topics: ["Elements of literature survey", "Narrative writing with effective technique", "Argumentative writing with valid reasoning", "Research projects: synthesis of multiple sources", "Speaking, listening, and viewing skills"]
      },
      {
        id: "hs-eng9-h", name: "English 9 Literature & Composition Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 9", credits: "5",
        prereqs: [
          { course: "8th Grade Language Arts", minGrade: 93, note: "MP1 & MP2 average" },
          { course: "High school placement test", minGrade: null, note: "Score of Advanced required" }
        ],
        description: "An accelerated and in-depth study of literature, language, and composition with greater emphasis on independent analytical reading and advanced written expression.",
        topics: ["In-depth literary analysis", "Advanced argumentative and narrative composition", "Independent analytical reading", "Research and synthesis projects", "Summer reading requirements"]
      },

      // ── Grade 10 ───────────────────────────────────────────────────
      {
        id: "hs-eng10-cp", name: "English 10 Literature & Composition", tier: "CP", weight: 0,
        gradeLevel: "Grade 10", credits: "5",
        prereqs: [{ course: "English 9", minGrade: null, note: "Successful completion" }],
        description: "Continues exploring elements of literature, language, and composition begun in 9th grade. Major literary genres are studied alongside development of the expository essay. Argumentative and narrative writing are emphasized along with sustained research projects.",
        topics: ["Major literary genres", "Expository essay development", "Argumentative and narrative writing", "Research and synthesis projects", "Summer reading requirements"]
      },
      {
        id: "hs-eng10-h", name: "English 10 Literature & Composition Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 10", credits: "5",
        prereqs: [
          { course: "English 9 Honors", minGrade: 75, note: null },
          { course: "English 9", minGrade: 90, note: null }
        ],
        description: "A rigorous study of literature, language, and composition at an accelerated pace. Emphasizes advanced expository and analytical essay writing with critical reading of challenging literary texts across genres.",
        topics: ["Advanced literary analysis", "Rigorous expository writing", "Critical reading across genres", "Sustained research and synthesis", "Summer reading requirements"]
      },

      // ── Grade 11 CP Options ────────────────────────────────────────
      {
        id: "hs-eng11-moral", name: "English 11: The Moral of the Story", tier: "CP", weight: 0,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [{ course: "English 10", minGrade: null, note: "Successful completion" }],
        description: "What makes a good story? This course explores meaningful ways stories impact ourselves and our world. Through investigation of graphic novels, plays, novels, short stories and more, the course encourages critical thinking, self-reflection, and open dialogue.",
        topics: ["How stories entertain and inspire", "Character identification and identity", "Emotional resonance in literature", "Truth, advocacy, and social change in storytelling", "Analysis across literary genres", "Summer reading requirements"]
      },
      {
        id: "hs-eng11-thousand", name: "English 11: A Thousand Different Ways", tier: "CP", weight: 0,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [{ course: "English 10", minGrade: null, note: "Successful completion" }],
        description: "Explores connections between objective/factual truth and subjective/personal truth. Students consider reality, fantasy, illusion; manipulation and perception of information; and heroism versus villainy through diverse literary genres.",
        topics: ["Objective vs. subjective truth", "Reality, fantasy, and illusion", "Manipulation and perception of information", "Heroism versus villainy", "Analysis across literary genres", "Summer reading requirements"]
      },

      // ── Grade 11 Honors Options ────────────────────────────────────
      {
        id: "hs-eng11-canon", name: "English 11: Reinventing the Canon Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [
          { course: "English 10 Honors", minGrade: 75, note: null },
          { course: "English 10", minGrade: 90, note: null }
        ],
        description: "Explores classic American literature alongside acclaimed global works worthy of an updated, more diverse literary canon. Develops deep understanding of literary traditions that shaped American culture with essential critical thinking and analytical skills.",
        topics: ["Classic American literature", "Global works for an updated canon", "Cultural significance and literary value", "Critical thinking and analytical writing", "Summer reading requirements"]
      },
      {
        id: "hs-eng11-novel", name: "English 11: The Fate of the Novel Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [
          { course: "English 10 Honors", minGrade: 75, note: null },
          { course: "English 10", minGrade: 90, note: null }
        ],
        description: "Builds reading, comprehension, and critical analysis skills through classic British literature and global contemporary works. From serials to fanfiction to graphic novels, students study the multifaceted art of narrative and how stories have evolved.",
        topics: ["Classic British literature", "Global contemporary works", "Evolution of narrative: serials, fanfiction, graphic novels", "Critical analysis and comprehension", "Summer work requirements"]
      },

      // ── Grade 11 AP ────────────────────────────────────────────────
      {
        id: "hs-eng-ap-lit", name: "AP Literature & Composition", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "English 10 Honors (Juniors)", minGrade: 85, note: null },
          { course: "English 10 (Juniors)", minGrade: 95, note: null },
          { course: "English 11 Honors (Seniors)", minGrade: 85, note: null },
          { course: "English 11 CP (Seniors)", minGrade: 95, note: null },
          { course: "AP Language & Composition (Seniors)", minGrade: null, note: "Successful completion" }
        ],
        description: "Engages students in understanding and evaluating works of fiction, poetry, and drama from various genres, periods, and cultures. Focuses on critical exposition and analysis of challenging literature. Students take the AP Literature and Composition exam in May.",
        topics: ["Fiction, poetry, and drama across genres and periods", "Critical exposition and literary analysis", "Advanced argumentative writing", "Close reading of complex texts", "AP exam preparation", "Summer reading requirements"]
      },

      // ── Grade 12 CP Options ────────────────────────────────────────
      {
        id: "hs-eng12-expression", name: "English 12: Expression and Empowerment", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Grade 11 English", minGrade: null, note: "Successful completion" }],
        description: "Explores how different forms of expression can empower individuals to find their voices and assert their rights. Creative projects, discussions, and writing build college readiness through the lens of advocacy and autonomy.",
        topics: ["Self-expression and empowerment", "Advocacy and autonomy", "Creative projects and discussions", "College-readiness writing", "Diverse literary works analysis", "Recommended summer reading"]
      },
      {
        id: "hs-eng12-reflections", name: "English 12: Reflections and Perspectives", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Grade 11 English", minGrade: null, note: "Successful completion" }],
        description: "Explores literary pieces from across time and place — mythology, folklore, novels, short fiction — to see perspectives of others and reflections of ourselves. Examines human nature through morality, motivation, and cultural storytelling.",
        topics: ["Mythology and folklore", "Novels and short fiction across cultures", "Morality, motivation, and human nature", "Cultural storytelling and values", "Recommended summer reading"]
      },

      // ── Grade 12 Honors Options ────────────────────────────────────
      {
        id: "hs-eng12-expression-h", name: "English 12: Expression and Empowerment Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [
          { course: "English 11 Honors", minGrade: 75, note: null },
          { course: "English 11 CP", minGrade: 90, note: null },
          { course: "AP Literature & Composition", minGrade: null, note: "Successful completion" }
        ],
        description: "Advanced study of how self-expression empowers individuals. Students engage in creative projects, discussions, and writing for college readiness through the lens of advocacy and autonomy, analyzing diverse literary works.",
        topics: ["Advanced study of self-expression and empowerment", "Advocacy, autonomy, and voice", "Creative projects and advanced writing", "Diverse literary works analysis", "Recommended summer reading"]
      },
      {
        id: "hs-eng12-reflections-h", name: "English 12: Reflections and Perspectives Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [
          { course: "English 11 Honors", minGrade: 75, note: null },
          { course: "English 11 CP", minGrade: 90, note: null },
          { course: "AP Literature & Composition", minGrade: null, note: "Successful completion" }
        ],
        description: "Advanced exploration of literary pieces from across time and place. Students examine human nature through morality, motivation, and cultural storytelling, gaining understanding of how cultures pass along values and truth.",
        topics: ["Advanced literary analysis across time and place", "Mythology, folklore, and world literature", "Morality, motivation, and cultural perspectives", "Global storytelling traditions", "Recommended summer reading"]
      },

      // ── Grade 12 AP ────────────────────────────────────────────────
      {
        id: "hs-eng-ap-lang", name: "AP Language & Composition", tier: "AP", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [
          { course: "English 11 Honors", minGrade: 85, note: null },
          { course: "English 11 CP", minGrade: 95, note: null },
          { course: "AP Literature & Composition", minGrade: null, note: "Successful completion" }
        ],
        description: "Engages students in becoming skilled readers of prose written in a variety of periods, disciplines, and rhetorical contexts and skilled writers who compose for a variety of purposes. Selections from American Literature are also studied. AP exam in May.",
        topics: ["Rhetorical analysis across periods and disciplines", "Argument and synthesis writing", "American Literature selections", "Skilled reading of nonfiction prose", "AP exam preparation", "Summer reading requirements"]
      }
    ]
  },

  // ── Electives ──────────────────────────────────────────────────────
  {
    category: "English Electives",
    color: "#a78bfa",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-journalism-1", name: "Journalism I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Required English course", minGrade: 75, note: null }],
        description: "Students learn to compose news stories, feature articles, and editorials. Trends in layout, production, graphics, and high technology's impact on journalism are examined. Students write articles for the school newspaper.",
        topics: ["News writing and feature articles", "Editorials", "Layout, production, and graphics", "Technology in journalism"]
      },
      {
        id: "hs-journalism-2", name: "Journalism II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "Journalism I", minGrade: 75, note: "Or letter from newspaper advisor" }],
        description: "A self-paced class for students interested in journalistic writing. Topics include layout and design, in-depth reporting, broadcast journalism, and copy editing.",
        topics: ["Layout and design", "In-depth reporting", "Broadcast journalism", "Copy editing"]
      },
      {
        id: "hs-journalism-3", name: "Journalism III — Portfolio", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Journalism I and II", minGrade: null, note: "Successful completion" }],
        description: "For students seriously interested in developing layout, editing, and journalistic writing skills. Students take an active editorial role in publishing the school newspaper, The Paw Print, and generate a portfolio of work.",
        topics: ["Editorial leadership", "Advanced layout and editing", "Portfolio development", "School newspaper publication"]
      },
      {
        id: "hs-cw-1", name: "Creative Writing Seminar I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Students explore writing as art — reading, analyzing, and creating works of fiction, non-fiction, drama, and poetry. A portfolio of best work is compiled, culminating in presentations of original manuscripts.",
        topics: ["Fiction and non-fiction writing", "Poetry and drama", "Portfolio compilation", "Original manuscript presentations"]
      },
      {
        id: "hs-cw-2", name: "Creative Writing Seminar II", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Creative Writing I", minGrade: null, note: "Successful completion" }],
        description: "Students further develop as writers, designing a focus or theme for their portfolios and submitting work to various publications. Taking both CW I and CW II in the same year is recommended but not required.",
        topics: ["Themed portfolio design", "Fiction, nonfiction, poetry, and drama", "Submission to publications", "Advanced creative techniques"]
      },
      {
        id: "hs-literacy-lab", name: "Literacy Skills Lab", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "1 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "Recommendation from counselor or teacher" }],
        description: "A supplemental course focusing on development of literacy skills essential for success in high school and beyond, including critical reading, formal writing, and research functions.",
        topics: ["Critical reading skills", "Formal writing development", "Research functions"]
      },
      {
        id: "hs-expository", name: "Expository Writing Workshop", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "An intensive writing experience in a workshop environment emphasizing expository writing including essays, research reports, and transactional writing. Types explored include narrative, descriptive, and persuasive.",
        topics: ["Expository essays", "Research reports", "Narrative and descriptive writing", "Persuasive writing", "Writing process and revision"]
      }
    ]
  }
];