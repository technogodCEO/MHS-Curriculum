// ─── World Language ──────────────────────────────────────────────────
// CP tracks: For students starting a language fresh in 9th grade (Level 1→2→3→4)
// Honors tracks: For students who completed Level 1 in middle school (Level 2→3H→4H→AP)
// Latin has a single track (no Honors split until Level 4).

export const languageTracks = {
  tracks: [
    "Spanish",
    "Spanish (Honors)",
    "French",
    "French (Honors)",
    "German",
    "German (Honors)",
    "Latin"
  ],
  grades: [
    // ── 9th Grade ──────────────────────────────────────────────────────
    {
      grade: 9,
      label: "9th Grade",
      courses: {
        // CP tracks — starting Level 1 fresh
        Spanish: {
          name: "Spanish 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Present tense, reflexives, near future, and recent past",
            "Themes: Getting Started, Family & Home, School, Food & Dining",
            "Prerequisite: None"
          ],
          color: "#94a3b8"
        },
        // Honors tracks — Level 1 completed in middle school, start at Level 2
        "Spanish (Honors)": {
          name: "Spanish 2",
          topics: [
            "ACTFL novice-high proficiency target",
            "Present, preterite, and imperfect tenses",
            "Themes: City & Country, Travel, Celebrations, Technology",
            "Prerequisite: Completion of Spanish 1 or 75% in UMS Spanish 1B"
          ],
          color: "#86efac"
        },
        French: {
          name: "French 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Present, near future, and recent past tenses",
            "Themes: Getting to Know One Another, Family & Home, School & Leisure, Around Town",
            "Cultural focus: Francophone World, Paris",
            "Prerequisite: None"
          ],
          color: "#94a3b8"
        },
        "French (Honors)": {
          name: "French 2",
          topics: [
            "ACTFL novice-high proficiency target",
            "Present, passé composé, and imperfect tenses",
            "Themes: Daily Routine, Family Relationships, Health, Childhood",
            "Prerequisite: Completion of French 1 or UMS French 1B with 75%+"
          ],
          color: "#86efac"
        },
        German: {
          name: "German 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Present tense, near future, and modal verbs",
            "Themes: Getting to Know One Another, My School, A Party!, On the Weekend",
            "Prerequisite: None"
          ],
          color: "#94a3b8"
        },
        "German (Honors)": {
          name: "German 2",
          topics: [
            "ACTFL novice-high proficiency target",
            "Present perfect, preterite, future tenses; accusative/dative cases; modal verbs",
            "Themes: Holidays & Celebrations, Travel Adventures, A Look Back, Technology & Media",
            "Prerequisite: Completion of German 1 or UMS German 1B with 75%+"
          ],
          color: "#86efac"
        },
        Latin: {
          name: "Latin 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Introduction to reading skills and basic grammatical structures",
            "Emphasis on interpretive and presentational communication",
            "History, culture, and literature of the Romans",
            "Prerequisite: None"
          ],
          color: "#d4d4d8"
        }
      }
    },

    // ── 10th Grade ─────────────────────────────────────────────────────
    {
      grade: 10,
      label: "10th Grade",
      courses: {
        Spanish: {
          name: "Spanish 2",
          topics: [
            "ACTFL novice-high proficiency target",
            "Present, preterite, and imperfect tenses",
            "Themes: City & Country, Travel, Celebrations, Technology",
            "Prerequisite: Completion of Spanish 1 or 75% in UMS Spanish 1B"
          ],
          color: "#94a3b8"
        },
        "Spanish (Honors)": {
          name: "Spanish 3 Honors",
          topics: [
            "ACTFL intermediate-mid proficiency target",
            "Preterite, imperfect, and subjunctive tenses — advanced application",
            "Themes: Adventures & Memories, Nutrition & Wellness, Special Occasions, Art & Expression",
            "Summer assignments required",
            "Prerequisite: 90% in Spanish 2"
          ],
          color: "#86efac",
          highlight: false
        },
        French: {
          name: "French 2",
          topics: [
            "ACTFL novice-high proficiency target",
            "Present, passé composé, and imperfect tenses",
            "Themes: Daily Routine, Family Relationships, Health, Childhood",
            "Prerequisite: Completion of French 1 or UMS French 1B with 75%+"
          ],
          color: "#94a3b8"
        },
        "French (Honors)": {
          name: "French 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Imperfect, future, conditional, and subjunctive tenses",
            "Themes: Fairy Tales, Wars, My Future, The Environment",
            "Prerequisite: Successful completion of French 2"
          ],
          color: "#86efac"
        },
        German: {
          name: "German 2",
          topics: [
            "ACTFL novice-high proficiency target",
            "Present perfect, preterite, future tenses; accusative/dative cases; modal verbs",
            "Themes: Holidays & Celebrations, Travel Adventures, A Look Back, Technology & Media",
            "Prerequisite: Completion of German 1 or UMS German 1B with 75%+"
          ],
          color: "#94a3b8"
        },
        "German (Honors)": {
          name: "German 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Reflexives, relative pronouns, conjunctions, subjunctive mood, passive voice",
            "Themes: Health & Wellness, Life in a (Divided) City, My Future, Nature & Environment",
            "Prerequisite: Successful completion of German 2"
          ],
          color: "#86efac"
        },
        Latin: {
          name: "Latin 2",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Passive voice, participles, future tenses, subjunctive mood",
            "Continued reading skills; conflicts of the late Roman Republic",
            "Prerequisite: Successful completion of Latin 1"
          ],
          color: "#d4d4d8"
        }
      }
    },

    // ── 11th Grade ─────────────────────────────────────────────────────
    {
      grade: 11,
      label: "11th Grade",
      courses: {
        Spanish: {
          name: "Spanish 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Preterite, imperfect, and subjunctive tenses",
            "Themes: Leisure Adventures, Nutrition & Wellness, Special Occasions, The Arts",
            "Prerequisite: Successful completion of Spanish 2"
          ],
          color: "#94a3b8"
        },
        "Spanish (Honors)": {
          name: "Spanish 4 Honors",
          topics: [
            "ACTFL intermediate-high proficiency — paragraph-level communication",
            "Preterite, imperfect, future, conditional, and subjunctive moods",
            "Themes: Family & Immigration, Education/Careers/Relationships, Environment, Human Rights",
            "Mandatory before AP Spanish",
            "Prerequisite: 85% in Spanish 3H OR 90% in Spanish 3 + 90% on proficiency test"
          ],
          color: "#86efac",
          highlight: false
        },
        French: {
          name: "French 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Imperfect, future, conditional, and subjunctive tenses",
            "Themes: Fairy Tales, Wars, My Future, The Environment",
            "Prerequisite: Successful completion of French 2"
          ],
          color: "#94a3b8"
        },
        "French (Honors)": {
          name: "French 4 Honors",
          topics: [
            "ACTFL intermediate-high proficiency — paragraph-level communication",
            "Analysis, synthesis, inferring meaning, cultural perspectives",
            "Mandatory before AP French; eligible for Seton Hall concurrent enrollment",
            "Prerequisite: Successful completion of French 3"
          ],
          color: "#86efac",
          highlight: false
        },
        German: {
          name: "German 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Reflexives, relative pronouns, conjunctions, subjunctive mood, passive voice",
            "Themes: Health & Wellness, Life in a (Divided) City, My Future, Nature & Environment",
            "Prerequisite: Successful completion of German 2"
          ],
          color: "#94a3b8"
        },
        "German (Honors)": {
          name: "German 4 Honors",
          topics: [
            "ACTFL intermediate-high proficiency — paragraph-level communication",
            "Analysis, synthesis, inferring meaning, cultural perspectives",
            "Mandatory before AP German",
            "Prerequisite: Successful completion of German 3"
          ],
          color: "#86efac",
          highlight: false
        },
        Latin: {
          name: "Latin 3",
          topics: [
            "ACTFL intermediate-mid proficiency target",
            "Completes introduction to grammar and syntax",
            "Reading extended narrative passages; intro to unaltered Latin prose and poetry",
            "Prerequisite: Successful completion of Latin 2"
          ],
          color: "#d4d4d8"
        }
      }
    },

    // ── 12th Grade ─────────────────────────────────────────────────────
    {
      grade: 12,
      label: "12th Grade",
      courses: {
        Spanish: {
          name: "Spanish 4 / Spanish 5",
          topics: [
            "SPANISH 4 (CP): ACTFL intermediate-mid; preterite, imperfect, future, subjunctive; Trends & Fads, Technology, Entertainment, Human Diversity",
            "SPANISH 5 (CP): ACTFL intermediate-high; deep cultural exploration of Latinos in the Americas; paragraph-level communication",
            "Students choose Spanish 4 or 5 based on prior course",
            "Prereq: Completion of Spanish 3 (for Sp 4) or Spanish 4 (for Sp 5)"
          ],
          color: "#94a3b8"
        },
        "Spanish (Honors)": {
          name: "AP Spanish",
          topics: [
            "Six College Board thematic units using authentic resources",
            "Total immersion — target ACTFL advanced-low proficiency",
            "Explores Spanish-speaking countries' history, society, and contemporary issues",
            "AP exam in May; summer assignments required",
            "Prereq: 85% in Spanish 4H (Heritage speakers may qualify via proficiency test)"
          ],
          color: "#86efac",
          highlight: true
        },
        French: {
          name: "French 4 Honors / Power of Language",
          topics: [
            "FRENCH 4H: ACTFL intermediate-high; paragraph-level communication; analysis, synthesis, cultural perspectives (Prereq: French 3)",
            "POWER OF LANGUAGE: Sociolinguistics, culture, society, power, and language; Latin and Romance/Germanic connections (Prereq: None)",
            "Students choose based on interest and goals"
          ],
          color: "#94a3b8"
        },
        "French (Honors)": {
          name: "AP French",
          topics: [
            "Six College Board thematic units using authentic resources",
            "Total immersion — target ACTFL advanced-low proficiency",
            "AP exam in May; summer assignments required",
            "Prerequisite: 85% in French 4 Honors"
          ],
          color: "#86efac",
          highlight: true
        },
        German: {
          name: "German 4 Honors / Power of Language",
          topics: [
            "GERMAN 4H: ACTFL intermediate-high; paragraph-level communication; analysis, synthesis, cultural perspectives (Prereq: German 3)",
            "POWER OF LANGUAGE: Sociolinguistics, culture, society, power, and language; Indo-European connections (Prereq: None)",
            "Students choose based on interest and goals"
          ],
          color: "#94a3b8"
        },
        "German (Honors)": {
          name: "AP German",
          topics: [
            "Six College Board thematic units — Germany, Austria, Switzerland culture",
            "Total immersion — target ACTFL advanced-low proficiency",
            "AP exam in May; summer assignments required",
            "Prereq: 85% in German 4H (Heritage speakers may waive with proficiency test)"
          ],
          color: "#86efac",
          highlight: true
        },
        Latin: {
          name: "Latin 4 Honors",
          topics: [
            "ACTFL intermediate-high proficiency target",
            "Caesar's De Bello Gallico and Vergil's Aeneid",
            "Scanning and reading dactylic hexameter",
            "Political, historical, literary, and cultural context",
            "Eligible for Seton Hall concurrent enrollment",
            "Prerequisite: Successful completion of Latin 3"
          ],
          color: "#d4d4d8",
          highlight: false
        }
      }
    }
  ]
};

// ─── Track Colors ────────────────────────────────────────────────────
export const languageTrackColors = {
  Spanish:            { bg: "#94a3b8", text: "#000", label: "🇪🇸 Spanish (CP)",          activeClass: "active-sp"    },
  "Spanish (Honors)": { bg: "#86efac", text: "#000", label: "🇪🇸 Spanish (Honors/AP)",   activeClass: "active-sp-h"  },
  French:             { bg: "#94a3b8", text: "#000", label: "🇫🇷 French (CP)",            activeClass: "active-fr"    },
  "French (Honors)":  { bg: "#86efac", text: "#000", label: "🇫🇷 French (Honors/AP)",    activeClass: "active-fr-h"  },
  German:             { bg: "#94a3b8", text: "#000", label: "🇩🇪 German (CP)",            activeClass: "active-de"    },
  "German (Honors)":  { bg: "#86efac", text: "#000", label: "🇩🇪 German (Honors/AP)",    activeClass: "active-de-h"  },
  Latin:              { bg: "#d4d4d8", text: "#000", label: "🏛️ Latin",                   activeClass: "active-la"    },
};

// ─── Full Program of Studies (course catalog) ────────────────────────
export const languageProgramOfStudies = [
  {
    category: "Spanish", color: "#86efac", grades: "Grades 9–12",
    courses: [
      { id: "hs-sp1", name: "Spanish 1", tier: "CP", weight: 0, gradeLevel: "Grade 9+", credits: "5", prereqs: [], description: "ACTFL novice-mid proficiency. Communicates at the word level, recognizing memorized words and phrases. Emphasizes present tense, reflexives, near future, and recent past tenses through thematic vocabulary.", topics: ["Let's Get Started!", "My Family — My Home", "In and After School", "What We Eat and Where?"] },
      { id: "hs-sp2", name: "Spanish 2", tier: "CP", weight: 0, gradeLevel: "Grades 9–10+", credits: "5", prereqs: [{ course: "UMS Spanish 1B", minGrade: 75, note: null }, { course: "Spanish 1", minGrade: null, note: "Successful Completion"}], description: "ACTFL novice-high proficiency. Progresses to sentence-level communication. Covers present, preterite, and imperfect tenses.", topics: ["City and Country", "Planes, Trains and Automobiles", "Celebrations", "The World of Technology"] },
      { id: "hs-sp3", name: "Spanish 3", tier: "CP", weight: 0, gradeLevel: "Grades 10–12", credits: "5", prereqs: [{ course: "Spanish 2", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-low proficiency. Uses simple sentences independently. Covers preterite, imperfect, and subjunctive tenses.", topics: ["Leisure Time Adventures", "Nutrition and Wellness", "Special Occasions", "The Arts"] },
      { id: "hs-sp3-h", name: "Spanish 3 Honors", tier: "Honors", weight: 5, gradeLevel: "Grades 10–12", credits: "5", prereqs: [{ course: "Spanish 2", minGrade: 90, note: "Summer assignments required" }], description: "ACTFL intermediate-mid proficiency. Uses strings of sentences independently. Covers preterite, imperfect, and subjunctive with advanced application.", topics: ["Adventures and Memories", "Nutrition and Wellness", "Special Occasions", "Art and Expression"] },
      { id: "hs-sp4", name: "Spanish 4", tier: "CP", weight: 0, gradeLevel: "Grades 11–12", credits: "5", prereqs: [{ course: "Spanish 3", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-mid proficiency. Covers preterite, imperfect, future, and subjunctive mood.", topics: ["Trends and Fads", "Technology and Progress", "The World of Entertainment", "Human Diversity"] },
      { id: "hs-sp4-h", name: "Spanish 4 Honors", tier: "Honors", weight: 5, gradeLevel: "Grades 11–12", credits: "5", prereqs: [{ course: "Spanish 3 Honors", minGrade: 85, note: null }, { course: "Spanish 3", minGrade: 90, note: "AND 90% on proficiency test" }], description: "ACTFL intermediate-high proficiency. Paragraph-level communication. Mandatory before AP Spanish.", topics: ["Family and Immigration", "Contemporary Life: Education, Careers, Relationships", "The Environment", "Human Rights and the Role of Government"] },
      { id: "hs-sp5", name: "Spanish 5", tier: "CP", weight: 0, gradeLevel: "Grade 12", credits: "5", prereqs: [{ course: "Spanish 4", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-high proficiency. Deep cultural exploration of Latinos in the Americas.", topics: ["Contributions of Latinos to the U.S.", "Diversity of the Latin American World", "Hispanic Immigration to the U.S.", "Telling Our Stories"] },
      { id: "hs-ap-sp", name: "AP Spanish", tier: "AP", weight: 5, gradeLevel: "Grade 12", credits: "5", prereqs: [{ course: "Spanish 4 Honors", minGrade: 85, note: null }, { course: null, minGrade: null, note: "Heritage speakers may qualify via proficiency test" }], description: "College Board thematic units. Total immersion. Target: ACTFL advanced-low.", topics: ["Six College Board thematic units", "Authentic texts and media", "Formal oral and written presentations", "Total immersion", "AP exam preparation", "Summer assignments required"] }
    ]
  },
  {
    category: "French", color: "#60a5fa", grades: "Grades 9–12",
    courses: [
      { id: "hs-fr1", name: "French 1", tier: "CP", weight: 0, gradeLevel: "Grade 9+", credits: "5", prereqs: [], description: "ACTFL novice-mid proficiency. Word-level communication.", topics: ["Getting to Know One Another", "My Family and Home", "School and Leisure Time", "Around Town", "Cultural focus: Francophone World and Paris"] },
      { id: "hs-fr2", name: "French 2", tier: "CP", weight: 0, gradeLevel: "Grades 9–10+", credits: "5", prereqs: [{ course: "UMS French 1B", minGrade: 75, note: null }, { course: "French 1", minGrade: null, note: "Successful Completion" }], description: "ACTFL novice-high proficiency. Sentence-level communication.", topics: ["My Daily Routine", "Family Relationships", "My Health", "My Childhood"] },
      { id: "hs-fr3", name: "French 3", tier: "CP", weight: 0, gradeLevel: "Grades 10–12", credits: "5", prereqs: [{ course: "French 2", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-low proficiency. Covers imperfect, future, conditional, and subjunctive.", topics: ["Fairy Tales", "Wars", "My Future", "The Environment"] },
      { id: "hs-fr4-h", name: "French 4 Honors", tier: "Honors", weight: 5, gradeLevel: "Grades 11–12", credits: "5", prereqs: [{ course: "French 3", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-high proficiency. Paragraph-level. Mandatory before AP French. Seton Hall concurrent enrollment eligible.", topics: ["Paragraph-level analysis and synthesis", "Inferring meaning in new contexts", "Author's intent and cultural perspectives", "Advanced thematic vocabulary"] },
      { id: "hs-ap-fr", name: "AP French", tier: "AP", weight: 5, gradeLevel: "Grade 12", credits: "5", prereqs: [{ course: "French 4 Honors", minGrade: 85, note: "Summer assignments required" }], description: "College Board thematic units. Total immersion at advanced-low proficiency.", topics: ["Six College Board thematic units", "Authentic resource analysis", "Total immersion in French", "AP exam preparation", "Summer assignments required"] }
    ]
  },
  {
    category: "German", color: "#fbbf24", grades: "Grades 9–12",
    courses: [
      { id: "hs-de1", name: "German 1", tier: "CP", weight: 0, gradeLevel: "Grade 9+", credits: "5", prereqs: [], description: "ACTFL novice-mid proficiency. Word-level communication.", topics: ["Getting to Know One Another", "My School", "A Party!", "On the Weekend"] },
      { id: "hs-de2", name: "German 2", tier: "CP", weight: 0, gradeLevel: "Grades 9–10+", credits: "5", prereqs: [{ course: "UMS German 1B", minGrade: 75, note: null }, { course: "German 1", minGrade: null, note: "Successful Completion" }], description: "ACTFL novice-high proficiency. Sentence-level communication.", topics: ["Holidays and Celebrations", "Travel Adventures", "A Look Back", "Technology and Media"] },
      { id: "hs-de3", name: "German 3", tier: "CP", weight: 0, gradeLevel: "Grades 10–12", credits: "5", prereqs: [{ course: "German 2", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-low proficiency. Covers reflexives, relative pronouns, subjunctive, passive voice.", topics: ["Health and Wellness", "Life in a (Divided) City", "My Future", "Nature and the Environment"] },
      { id: "hs-de4-h", name: "German 4 Honors", tier: "Honors", weight: 5, gradeLevel: "Grades 11–12", credits: "5", prereqs: [{ course: "German 3", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-high proficiency. Paragraph-level. Mandatory before AP German.", topics: ["Paragraph-level analysis and synthesis", "Inferring meaning in new contexts", "Author's intent and cultural perspectives", "Advanced thematic vocabulary"] },
      { id: "hs-ap-de", name: "AP German", tier: "AP", weight: 5, gradeLevel: "Grade 12", credits: "5", prereqs: [{ course: "German 4 Honors", minGrade: 85, note: "Summer assignments required" }, { course: null, minGrade: null, note: "Heritage speakers may waive with proficiency test" }], description: "College Board thematic units. Germany, Austria, Switzerland. Total immersion at advanced-low.", topics: ["Six College Board thematic units", "Germany, Austria, and Switzerland culture", "Total immersion", "AP exam preparation", "Summer assignments required"] }
    ]
  },
  {
    category: "Latin", color: "#d4d4d8", grades: "Grades 9–12",
    courses: [
      { id: "hs-la1", name: "Latin 1", tier: "CP", weight: 0, gradeLevel: "Grade 9+", credits: "5", prereqs: [], description: "ACTFL novice-mid proficiency. Reading skills and basic grammar. Roman history, culture, and literature.", topics: ["Basic Latin grammar", "Reading skills acquisition", "Roman history and culture", "Roman literature introduction"] },
      { id: "hs-la2", name: "Latin 2", tier: "CP", weight: 0, gradeLevel: "Grade 10+", credits: "5", prereqs: [{ course: "Latin 1", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-low proficiency. Passive voice, participles, future, subjunctive. Late Roman Republic.", topics: ["Passive voice and participles", "Future tenses and subjunctive mood", "Extended reading skills", "Late Roman Republic history"] },
      { id: "hs-la3", name: "Latin 3", tier: "CP", weight: 0, gradeLevel: "Grade 11+", credits: "5", prereqs: [{ course: "Latin 2", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-mid proficiency. Completes grammar/syntax. Extended narrative. Intro to unaltered prose and poetry.", topics: ["Complete grammar and syntax", "Extended narrative passages", "Unaltered Latin prose", "Latin poetry introduction"] },
      { id: "hs-la4-h", name: "Latin 4 Honors", tier: "Honors", weight: 5, gradeLevel: "Grade 12+", credits: "5", prereqs: [{ course: "Latin 3", minGrade: null, note: "Successful completion" }], description: "ACTFL intermediate-high. Caesar's De Bello Gallico and Vergil's Aeneid. Dactylic hexameter. Seton Hall concurrent enrollment eligible.", topics: ["Caesar's De Bello Gallico", "Vergil's Aeneid", "Dactylic hexameter", "Political, historical, and literary context", "Rhetorical analysis"] }
    ]
  },
  {
    category: "Exploratory", color: "#a1a1aa", grades: "Grades 9–12",
    courses: [
      { id: "hs-power-lang", name: "Power of Language", tier: "CP", weight: 0, gradeLevel: "Grades 9–12", credits: "5", prereqs: [], description: "Open to all students needing a World Language graduation pathway, exploring facets of language, multilingual students, or heritage/advanced speakers. Covers Indo-European languages. Meets NJ World Language graduation requirement.", topics: ["Origin, nature, and interconnectedness of language", "How language is acquired", "Language evolution and change", "Language and cultural perspectives", "Language as a tool of power", "Latin foundations and Romance/Germanic connections"] }
    ]
  }
];