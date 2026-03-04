// ─── World Language ──────────────────────────────────────────────────
// Tracks represent the typical 4-year progression starting Level 1 in 9th grade.
// Students arriving from middle school with prior levels may shift the sequence.
// Spanish has an additional CP track with Spanish 4 → 5 (non-Honors) for the
// non-Honors path.  Latin has no AP offering — it caps at Latin 4 Honors.
// Categories: Spanish, French, German, Latin

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
        "Spanish (Honors)": {
          name: "Spanish 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Present tense, reflexives, near future, and recent past",
            "Themes: Getting Started, Family & Home, School, Food & Dining",
            "Prerequisite: None — Honors track diverges in 11th grade"
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
          name: "French 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Present, near future, and recent past tenses",
            "Themes: Getting to Know One Another, Family & Home, School & Leisure, Around Town",
            "Cultural focus: Francophone World, Paris",
            "Prerequisite: None — Honors track diverges in 12th grade"
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
          name: "German 1",
          topics: [
            "ACTFL novice-mid proficiency target",
            "Present tense, near future, and modal verbs",
            "Themes: Getting to Know One Another, My School, A Party!, On the Weekend",
            "Prerequisite: None — Honors track diverges in 12th grade"
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
          name: "Latin 2",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Passive voice, participles, future tenses, subjunctive mood",
            "Continued acquisition of reading skills",
            "History and culture: conflicts of the late Roman Republic",
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
          name: "Spanish 3 Honors",
          topics: [
            "ACTFL intermediate-mid proficiency target",
            "Preterite, imperfect, and subjunctive tenses — advanced application",
            "Themes: Adventures & Memories, Nutrition & Wellness, Special Occasions, Art & Expression",
            "Major assignments: family album, cultural presentations, PSA on health, essays",
            "Summer assignments required",
            "Prerequisite: 90% in Spanish 2"
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
          name: "French 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Imperfect, future, conditional, and subjunctive tenses",
            "Themes: Fairy Tales, Wars, My Future, The Environment",
            "Prerequisite: Successful completion of French 2",
            "Prepares for French 4 Honors → AP French pathway"
          ],
          color: "#86efac"
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
          name: "German 3",
          topics: [
            "ACTFL intermediate-low proficiency target",
            "Reflexives, relative pronouns, conjunctions, subjunctive mood, passive voice",
            "Themes: Health & Wellness, Life in a (Divided) City, My Future, Nature & Environment",
            "Prerequisite: Successful completion of German 2",
            "Prepares for German 4 Honors → AP German pathway"
          ],
          color: "#86efac"
        },
        Latin: {
          name: "Latin 3",
          topics: [
            "ACTFL intermediate-mid proficiency target",
            "Completes introduction to grammar and syntax",
            "Reading extended narrative passages",
            "Introduction to unaltered Latin prose and poetry",
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
            "Students choose Spanish 4 or Spanish 5 based on prior course completion",
            "Prerequisite: Successful completion of Spanish 3 (for Sp 4) or Spanish 4 (for Sp 5)"
          ],
          color: "#94a3b8"
        },
        "Spanish (Honors)": {
          name: "Spanish 4 Honors / AP Spanish",
          topics: [
            "SPANISH 4 HONORS: ACTFL intermediate-high; paragraph-level communication; preterite, imperfect, future, conditional, subjunctive; Family & Immigration, Education, Careers, Environment, Human Rights (Prereq: 85% in Sp 3 Honors OR 90% in Sp 3 + 90% proficiency test)",
            "AP SPANISH: Six College Board thematic units using authentic resources; total immersion; target advanced-low proficiency; AP exam in May (Prereq: 85% in Sp 4 Honors)",
            "Spanish 4 Honors is mandatory before AP Spanish",
            "Summer assignments required for AP Spanish"
          ],
          color: "#86efac",
          highlight: true
        },
        French: {
          name: "French 3 (continued) / Power of Language",
          topics: [
            "Students completing French 3 may continue with Power of Language to explore sociolinguistics",
            "POWER OF LANGUAGE: Explore how culture, society, and power affect language; Latin and Romance language connections; project-based sociolinguistic learning",
            "Or students may choose another elective path"
          ],
          color: "#94a3b8"
        },
        "French (Honors)": {
          name: "French 4 Honors / AP French",
          topics: [
            "FRENCH 4 HONORS: ACTFL intermediate-high; paragraph-level communication; analysis, synthesis, and cultural perspectives (Prereq: Completion of French 3)",
            "AP FRENCH: Six College Board thematic units; total immersion; target advanced-low proficiency; AP exam in May (Prereq: 85% in French 4 Honors)",
            "French 4 Honors is mandatory before AP French",
            "Summer assignments required for AP French"
          ],
          color: "#86efac",
          highlight: true
        },
        German: {
          name: "German 3 (continued) / Power of Language",
          topics: [
            "Students completing German 3 may continue with Power of Language to explore sociolinguistics",
            "POWER OF LANGUAGE: Explore how culture, society, and power affect language; Indo-European language connections; project-based sociolinguistic learning",
            "Or students may choose another elective path"
          ],
          color: "#94a3b8"
        },
        "German (Honors)": {
          name: "German 4 Honors / AP German",
          topics: [
            "GERMAN 4 HONORS: ACTFL intermediate-high; paragraph-level communication; analysis, synthesis, and cultural perspectives (Prereq: Completion of German 3)",
            "AP GERMAN: Six College Board thematic units; Germany, Austria, Switzerland culture; total immersion; target advanced-low; AP exam in May (Prereq: 85% in German 4 Honors; seniors may waive with heritage proficiency test)",
            "German 4 Honors is mandatory before AP German",
            "Summer assignments required for AP German"
          ],
          color: "#86efac",
          highlight: true
        },
        Latin: {
          name: "Latin 4 Honors",
          topics: [
            "ACTFL intermediate-high proficiency target",
            "Intensive reading of classical Latin prose and poetry",
            "Caesar's De Bello Gallico and Vergil's Aeneid",
            "Scanning and reading Latin meter (dactylic hexameter)",
            "Political, historical, literary, and cultural context",
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
  // ── Spanish ────────────────────────────────────────────────────────
  {
    category: "Spanish",
    color: "#86efac",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-sp1", name: "Spanish 1", tier: "CP", weight: 0,
        gradeLevel: "Grade 9+", credits: "5",
        prereqs: [],
        description: "ACTFL novice-mid proficiency. Communicates at the word level, recognizing memorized words and phrases. Emphasizes present tense, reflexives, near future, and recent past tenses through thematic vocabulary.",
        topics: ["Let's Get Started!", "My Family — My Home", "In and After School", "What We Eat and Where?"]
      },
      {
        id: "hs-sp2", name: "Spanish 2", tier: "CP", weight: 0,
        gradeLevel: "Grade 10+", credits: "5",
        prereqs: [{ course: "Spanish 1 or UMS Spanish 1B", minGrade: 75, note: null }],
        description: "ACTFL novice-high proficiency. Progresses to sentence-level communication. Covers present, preterite, and imperfect tenses through thematic vocabulary.",
        topics: ["City and Country", "Planes, Trains and Automobiles", "Celebrations", "The World of Technology"]
      },
      {
        id: "hs-sp3", name: "Spanish 3", tier: "CP", weight: 0,
        gradeLevel: "Grade 11+", credits: "5",
        prereqs: [{ course: "Spanish 2", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-low proficiency. Uses simple sentences independently for listening, reading, speaking, and writing. Covers preterite, imperfect, and subjunctive tenses.",
        topics: ["Leisure Time Adventures", "Nutrition and Wellness", "Special Occasions", "The Arts"]
      },
      {
        id: "hs-sp3-h", name: "Spanish 3 Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 11+", credits: "5",
        prereqs: [{ course: "Spanish 2", minGrade: 90, note: "Summer assignments required" }],
        description: "ACTFL intermediate-mid proficiency. Uses strings of sentences independently. Covers preterite, imperfect, and subjunctive tenses with advanced application.",
        topics: ["Adventures and Memories", "Nutrition and Wellness", "Special Occasions", "Art and Expression"]
      },
      {
        id: "hs-sp4", name: "Spanish 4", tier: "CP", weight: 0,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [{ course: "Spanish 3", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-mid proficiency. Covers preterite, imperfect, future, and subjunctive mood. Major assignments include creative writing and individual speeches.",
        topics: ["Trends and Fads", "Technology and Progress", "The World of Entertainment", "Human Diversity"]
      },
      {
        id: "hs-sp4-h", name: "Spanish 4 Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [
          { course: "Spanish 3 Honors", minGrade: 85, note: null },
          { course: "Spanish 3", minGrade: 90, note: "AND 90% on required proficiency test" }
        ],
        description: "ACTFL intermediate-high proficiency. Paragraph-level communication with analysis and synthesis. Covers preterite, imperfect, future, conditional, and subjunctive moods. Mandatory before AP Spanish.",
        topics: ["Family and Immigration", "Contemporary Life: Education, Careers, Relationships", "The Environment", "Human Rights and the Role of Government"]
      },
      {
        id: "hs-sp5", name: "Spanish 5", tier: "CP", weight: 0,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [{ course: "Spanish 4", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-high proficiency. Paragraph-level communication with connected sentences. Deep cultural exploration of Latinos in the Americas. Students create children's stories shared with elementary school Spanish students.",
        topics: ["Contributions of Latinos to the U.S.", "Diversity of the Latin American World", "Hispanic Immigration to the U.S.", "Telling Our Stories"]
      },
      {
        id: "hs-ap-sp", name: "AP Spanish", tier: "AP", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [
          { course: "Spanish 4 Honors", minGrade: 85, note: null },
          { course: null, minGrade: null, note: "Seniors: Heritage speakers may qualify via proficiency test" }
        ],
        description: "College Board thematic units exploring Spanish-speaking countries' history, society, and contemporary issues. Total immersion in the target language. Target proficiency: ACTFL advanced-low.",
        topics: ["Six College Board thematic units", "Authentic texts and media analysis", "Formal oral and written presentations", "Total immersion in Spanish", "AP exam preparation", "Summer assignments required"]
      }
    ]
  },

  // ── French ─────────────────────────────────────────────────────────
  {
    category: "French",
    color: "#60a5fa",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-fr1", name: "French 1", tier: "CP", weight: 0,
        gradeLevel: "Grade 9+", credits: "5",
        prereqs: [],
        description: "ACTFL novice-mid proficiency. Word-level communication. Present, near future, and recent past tenses through thematic vocabulary.",
        topics: ["Getting to Know One Another", "My Family and Home", "School and Leisure Time", "Around Town", "Cultural focus: Francophone World and Paris"]
      },
      {
        id: "hs-fr2", name: "French 2", tier: "CP", weight: 0,
        gradeLevel: "Grade 10+", credits: "5",
        prereqs: [{ course: "French 1 or UMS French 1B", minGrade: 75, note: null }],
        description: "ACTFL novice-high proficiency. Sentence-level communication. Covers present, passé composé, and imperfect tenses.",
        topics: ["My Daily Routine", "Family Relationships", "My Health", "My Childhood"]
      },
      {
        id: "hs-fr3", name: "French 3", tier: "CP", weight: 0,
        gradeLevel: "Grade 11+", credits: "5",
        prereqs: [{ course: "French 2", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-low proficiency. Sentence-level independence. Covers imperfect, future, conditional, and subjunctive tenses.",
        topics: ["Fairy Tales", "Wars", "My Future", "The Environment"]
      },
      {
        id: "hs-fr4-h", name: "French 4 Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [{ course: "French 3", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-high proficiency. Paragraph-level communication with analysis, synthesis, and cultural perspectives. Mandatory before AP French. Eligible for Seton Hall Project Acceleration concurrent enrollment.",
        topics: ["Paragraph-level analysis and synthesis", "Inferring meaning in new contexts", "Author's intent and cultural perspectives", "Advanced thematic vocabulary"]
      },
      {
        id: "hs-ap-fr", name: "AP French", tier: "AP", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [{ course: "French 4 Honors", minGrade: 85, note: "Summer assignments required" }],
        description: "Intensive speaking, writing, and cultural study using College Board thematic units with authentic resources. Total immersion at advanced-low proficiency level.",
        topics: ["Six College Board thematic units", "Authentic resource analysis", "Total immersion in French", "Advanced oral and written expression", "AP exam preparation", "Summer assignments required"]
      }
    ]
  },

  // ── German ─────────────────────────────────────────────────────────
  {
    category: "German",
    color: "#fbbf24",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-de1", name: "German 1", tier: "CP", weight: 0,
        gradeLevel: "Grade 9+", credits: "5",
        prereqs: [],
        description: "ACTFL novice-mid proficiency. Word-level communication. Present tense, near future, and modal verbs through thematic vocabulary.",
        topics: ["Getting to Know One Another", "My School", "A Party!", "On the Weekend"]
      },
      {
        id: "hs-de2", name: "German 2", tier: "CP", weight: 0,
        gradeLevel: "Grade 10+", credits: "5",
        prereqs: [{ course: "German 1 or UMS German 1B", minGrade: 75, note: null }],
        description: "ACTFL novice-high proficiency. Sentence-level communication. Covers present perfect, preterite, future, accusative/dative cases, and modal verbs.",
        topics: ["Holidays and Celebrations", "Travel Adventures", "A Look Back", "Technology and Media"]
      },
      {
        id: "hs-de3", name: "German 3", tier: "CP", weight: 0,
        gradeLevel: "Grade 11+", credits: "5",
        prereqs: [{ course: "German 2", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-low proficiency. Sentence-level independence. Covers reflexives, relative pronouns, conjunctions, subjunctive mood, and passive voice.",
        topics: ["Health and Wellness", "Life in a (Divided) City", "My Future", "Nature and the Environment"]
      },
      {
        id: "hs-de4-h", name: "German 4 Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [{ course: "German 3", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-high proficiency. Paragraph-level communication with analysis, synthesis, and cultural perspectives. Mandatory before AP German.",
        topics: ["Paragraph-level analysis and synthesis", "Inferring meaning in new contexts", "Author's intent and cultural perspectives", "Advanced thematic vocabulary"]
      },
      {
        id: "hs-ap-de", name: "AP German", tier: "AP", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [
          { course: "German 4 Honors", minGrade: 85, note: "Summer assignments required" },
          { course: null, minGrade: null, note: "Seniors: Heritage speakers may waive German 4H with proficiency test and department approval" }
        ],
        description: "Intensive study of Germany, Austria, and Switzerland — culture, history, politics, art, literature, and current events. College Board thematic units with total immersion at advanced-low proficiency.",
        topics: ["Six College Board thematic units", "Germany, Austria, and Switzerland culture", "Total immersion in German", "Advanced oral and written expression", "AP exam preparation", "Summer assignments required"]
      }
    ]
  },

  // ── Latin ──────────────────────────────────────────────────────────
  {
    category: "Latin",
    color: "#d4d4d8",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-la1", name: "Latin 1", tier: "CP", weight: 0,
        gradeLevel: "Grade 9+", credits: "5",
        prereqs: [],
        description: "ACTFL novice-mid proficiency. Emphasizes acquisition of reading skills and basic grammatical structures. Competence in interpretive and presentational communication modes. Introduces Roman history, culture, and literature.",
        topics: ["Basic Latin grammar", "Reading skills acquisition", "Roman history and culture", "Roman literature introduction"]
      },
      {
        id: "hs-la2", name: "Latin 2", tier: "CP", weight: 0,
        gradeLevel: "Grade 10+", credits: "5",
        prereqs: [{ course: "Latin 1", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-low proficiency. Continued reading skills with structures including passive voice, participles, future tenses, and subjunctive mood. Focus on conflicts of the late Roman Republic.",
        topics: ["Passive voice and participles", "Future tenses and subjunctive mood", "Extended reading skills", "Late Roman Republic history"]
      },
      {
        id: "hs-la3", name: "Latin 3", tier: "CP", weight: 0,
        gradeLevel: "Grade 11+", credits: "5",
        prereqs: [{ course: "Latin 2", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-mid proficiency. Completes introduction to grammar and syntax. Aims for proficiency in reading extended narrative passages. Introduction to unaltered Latin prose and poetry.",
        topics: ["Complete grammar and syntax", "Extended narrative passages", "Unaltered Latin prose", "Latin poetry introduction"]
      },
      {
        id: "hs-la4-h", name: "Latin 4 Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12+", credits: "5",
        prereqs: [{ course: "Latin 3", minGrade: null, note: "Successful completion" }],
        description: "ACTFL intermediate-high proficiency. Intensive reading of classical Latin prose and poetry including Caesar's De Bello Gallico and Vergil's Aeneid. Students learn to scan and read Latin meter (dactylic hexameter). Eligible for Seton Hall Project Acceleration concurrent enrollment.",
        topics: ["Caesar's De Bello Gallico", "Vergil's Aeneid", "Dactylic hexameter — scanning and reading aloud", "Political, historical, and literary context", "Author's language choices and rhetorical analysis"]
      }
    ]
  },

  // ── Other / Exploratory ────────────────────────────────────────────
  {
    category: "Exploratory",
    color: "#a1a1aa",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-power-lang", name: "Power of Language", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [],
        description: "Open to all students needing a World Language graduation pathway, exploring facets of language, uncertain which language to study, multilingual with interest in sociolinguistics, or heritage/advanced speakers. Covers Indo-European languages especially Latin and modern Romance and Germanic languages. Meets NJ World Language graduation requirement.",
        topics: ["Origin, nature, and interconnectedness of language", "How language is acquired", "Language evolution and change", "Language and cultural perspectives", "Language as a tool of power — oppression and liberation", "Latin foundations and Romance/Germanic connections"]
      }
    ]
  }
];