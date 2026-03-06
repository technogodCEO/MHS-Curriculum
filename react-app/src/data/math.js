/*
 * math.js
 *
 * All data for the Mathematics subject. Three named exports are used by the app:
 *
 *   mathTracks  — grade-by-grade course map for the Curriculum Map tab.
 *     .tracks          — ordered array of pathway names (used as tab labels and object keys)
 *     .grades[]        — one entry per grade (9–12), each containing:
 *       .grade           — numeric grade level
 *       .courses         — object keyed by pathway name; each value is a course object:
 *         .name            — course title string
 *         .topics[]        — topic strings shown when the card is expanded;
 *                            ALL-CAPS prefix before ": " renders as a section header
 *         .color           — hex color for the timeline dot and card accents
 *         .highlight       — true for AP courses; adds a glow effect and AP badge
 *
 *   mathTrackColors  — display metadata for each pathway tab button.
 *     Keyed by pathway name (matching mathTracks.tracks[]). Each value has:
 *       .bg          — button background color when the tab is active
 *       .text        — button text color when active
 *       .label       — full label shown on the tab button (includes emoji)
 *       .activeClass — CSS class name (legacy class-based styling, see math_curriculum_MHS.jsx)
 *
 *   mathProgramOfStudies  — full course catalog for the Program of Studies tab.
 *     Array of category objects, each with:
 *       .category   — section heading (e.g. "High School — Mathematics")
 *       .color      — accent dot color next to the heading
 *       .grades     — grade range string (e.g. "Grades 9–12")
 *       .courses[]  — individual course objects:
 *           .id          — unique string id used for React keys and expansion state
 *           .name        — course title
 *           .tier        — "CP" | "Honors" | "AP" — controls badge color and filter
 *           .weight      — grade point weight added (0 for CP, 5 for Honors/AP)
 *           .gradeLevel  — display string for typical grade(s) (e.g. "Grade 10 (typical)")
 *           .credits     — credit value string (e.g. "5")
 *           .description — full paragraph shown when the card is expanded
 *           .prereqs[]   — structured prerequisites: [{ course, minGrade, note }]
 *                          (preferred over .prereq string)
 *           .prereq      — plain string fallback if no structured prereqs array
 *           .topics[]    — short topic chips shown at the bottom of the expanded card
 */
export const mathTracks = {
  tracks: ["Accelerated", "Advanced", "Enriched", "Standard"],
  grades: [
    {
      grade: 9,
      label: "9th Grade",
      courses: {
        Accelerated: {
          name: "PreCalculus Honors",
          topics: [
            "Analytic trigonometry, unit circle, all six functions, and identities",
            "Exponential and logarithmic functions; natural base e and modeling",
            "Polynomial and rational function analysis — zeros, asymptotes, sign charts",
            "Inverse functions, composition, and function transformations",
            "Conics, polar coordinates, parametric equations, and vectors",
            "Introduction to limits and formal continuity",
            "Summer assignment required"
          ],
          color: "#f59e0b",
          highlight: false
        },
        Advanced: {
          name: "Algebra II Honors",
          topics: [
            "Real and complex number systems; polynomial equations and functions",
            "Systems of equations in two and three variables and determinants",
            "Rational expressions, exponential equations, and logarithms",
            "Sequences, series, probability, and statistics",
            "Trigonometry: unit circle, identities, Law of Sines/Cosines",
            "Prerequisite: 85% in Geometry Honors/UMS Geometry or 95% in Geometry AND 95% in Algebra I",
            "Summer assignment required"
          ],
          color: "#60a5fa"
        },
        Enriched: {
          name: "Geometry Honors",
          topics: [
            "Deductive reasoning and writing complex original proofs",
            "Congruence, similarity, and advanced triangle theorems",
            "Coordinate geometry, transformations, and constructions",
            "Circle theorems, arcs, chords, tangents, and sectors",
            "Surface area, volume, and introductory trigonometry",
            "Prerequisite: 95% in Algebra I",
            "Summer assignment required"
          ],
          color: "#c084fc"
        },
        Standard: {
          name: "Algebra I",
          topics: [
            "Real number system and structure of Algebra",
            "Linear equations, inequalities, and graphing",
            "Systems of equations and inequalities",
            "Exponent rules, polynomial arithmetic, and factoring",
            "Quadratic equations and functions",
            "Functions: domain, range, notation",
            "Prerequisite: Successful completion of Math 8"
          ],
          color: "#94a3b8"
        }
      }
    },
    {
      grade: 10,
      label: "10th Grade",
      courses: {
        Accelerated: {
          name: "AP Calculus AB",
          topics: [
            "Limits and continuity — formal definitions and epsilon-delta intro",
            "Definition of the derivative; all basic differentiation rules",
            "Trig, exponential, and logarithmic derivatives; chain rule; implicit differentiation",
            "Applications: related rates, optimization, curve sketching, L'Hôpital's rule",
            "Definite and indefinite integrals; Riemann sums; Fundamental Theorem of Calculus",
            "u-substitution; area between curves; accumulation; average value",
            "Differential equations: slope fields and separation of variables",
            "AP exam preparation — Prerequisite: 85% in PreCalculus Honors"
          ],
          color: "#f59e0b",
          highlight: true
        },
        Advanced: {
          name: "PreCalculus Honors",
          topics: [
            "In-depth analytic trigonometry, unit circle, and all six functions",
            "Exponential and logarithmic functions and modeling",
            "Polynomial and rational function analysis",
            "Conic sections, polar, parametric, and vectors",
            "Introduction to limits and continuity",
            "Prerequisite: 85% in Algebra II Honors or 95% in Algebra II",
            "Summer assignment required"
          ],
          color: "#60a5fa"
        },
        Enriched: {
          name: "Algebra II Honors",
          topics: [
            "Real and complex number systems; polynomial equations and functions",
            "Systems of equations; determinants; rational expressions",
            "Exponential equations and logarithms",
            "Sequences, series, probability, and statistics",
            "Trigonometry: unit circle, identities, and Laws of Sines/Cosines",
            "Prerequisite: 85% in Geometry Honors or 95% in Geometry AND 95% in Algebra I",
            "Summer assignment required"
          ],
          color: "#c084fc"
        },
        Standard: {
          name: "Geometry",
          topics: [
            "Plane and solid geometry with deductive reasoning",
            "Congruence, similarity, and formal proof writing",
            "Pythagorean theorem and special right triangles",
            "Coordinate geometry and transformations",
            "Circles: arcs, chords, tangents, and sectors",
            "Surface area and volume",
            "Introduction to trigonometry (SOH-CAH-TOA)",
            "Prerequisite: Successful completion of Algebra I — Summer assignment required"
          ],
          color: "#94a3b8"
        }
      }
    },
    {
      grade: 11,
      label: "11th Grade",
      courses: {
        Accelerated: {
          name: "AP Calculus C",
          topics: [
            "All AP Calculus AB topics (review and extension)",
            "Additional techniques of integration: by parts, partial fractions",
            "Polar coordinates and parametric graphing",
            "Infinite sequences and series; convergence tests",
            "Applications of integrals in polar/parametric settings",
            "Differential equations review and extension",
            "Prerequisite: 80% in AP Calculus AB",
            "This course is equivalent to a 2nd semester college calculus course or the second half of AP Calculus BC"
          ],
          color: "#f59e0b",
          highlight: true
        },
        Advanced: {
          name: "AP Calculus AB",
          topics: [
            "Limits, continuity, and formal definitions",
            "Differentiation rules; trig, exponential, and log derivatives",
            "Applications: optimization, related rates, curve sketching",
            "Definite and indefinite integrals; Fundamental Theorem of Calculus",
            "u-substitution; area and accumulation applications",
            "Differential equations: slope fields and separation of variables",
            "Prerequisite: 85% in PreCalculus Honors OR 95% in PreCalculus OR 80% in Calculus"
          ],
          color: "#60a5fa",
          highlight: true
        },
        Enriched: {
          name: "PreCalculus Honors",
          topics: [
            "In-depth analytic trigonometry and identities",
            "Exponential, logarithmic, polynomial, and rational function analysis",
            "Conics, polar coordinates, parametric equations, and vectors",
            "Introduction to limits and continuity",
            "Prerequisite: 85% in Algebra II Honors or 95% in Algebra II",
            "Summer assignment required"
          ],
          color: "#c084fc"
        },
        Standard: {
          name: "Algebra II",
          topics: [
            "Review of Algebra I concepts and real number system",
            "Polynomial, rational, exponential, and logarithmic functions",
            "Solving and graphing nonlinear functions; powers, roots, radicals",
            "Sequences, series, probability, and statistics",
            "Introduction to trigonometry",
            "Prerequisite: 70% in Algebra I and 70% in Geometry",
            "Summer assignment required"
          ],
          color: "#94a3b8"
        }
      }
    },
    {
      grade: 12,
      label: "12th Grade",
      courses: {
        Accelerated: {
          name: "Honors Math Methods in Engineering & Sciences",
          topics: [
            "LINEAR ALGEBRA: Coordinate systems, vectors, matrices, diagonalization, eigenvectors, basis sets",
            "MULTIVARIABLE CALCULUS: Partial derivatives, vector operators, gradients, double integrals",
            "DIFFERENTIAL EQUATIONS: Methods, physics equations, functions as basis sets, calculus of variations",
            "VECTOR CALCULUS: Formal proof writing, vector fields, line integrals, surface integrals",
            "FOURIER ANALYSIS: Frequency analysis, Fourier Series, Transforms, signal processing",
            "Prerequisite: 85% in AP Calculus C or 85% in AP Calculus BC — Summer assignment required"
          ],
          color: "#f59e0b",
          highlight: false
        },
        Advanced: {
          name: "AP Calculus C",
          topics: [
            "All AP Calculus AB topics (continuation and extension)",
            "Advanced integration techniques: by parts, partial fractions",
            "Polar coordinates, parametric graphing, and differential equations",
            "Infinite series and convergence tests",
            "Prerequisite: 80% in AP Calculus AB taken over a full school year"
          ],
          color: "#60a5fa",
          highlight: true
        },
        Enriched: {
          name: "AP Calculus AB",
          topics: [
            "Limits and continuity",
            "Differentiation: all rules, implicit differentiation, related rates",
            "Applications: optimization, curve sketching, L'Hôpital's rule",
            "Definite integrals; Fundamental Theorem of Calculus; area and accumulation",
            "Differential equations and slope fields",
            "Prerequisite: 85% in PreCalculus Honors OR 95% in PreCalculus OR 80% in Calculus"
          ],
          color: "#c084fc",
          highlight: true
        },
        Standard: {
          name: "PreCalculus / Statistics / Advanced Alg & Trig",
          topics: [
            "PRECALCULUS: Functions, polynomial/rational/trig/exponential/log; conics, polar, vectors (Prereq: 80% in Algebra II)",
            "STATISTICS: Exploring data, planning a study, probability, statistical inference; prepares for AP Stats (Prereq: 70% in Algebra II)",
            "ADVANCED ALGEBRA & TRIG: Extended Algebra II skills, problem solving, polynomial/rational/exp/log functions, full trigonometry (Prereq: 70–84% in Algebra II)",
            "Students select the path best aligned with their college and career interests"
          ],
          color: "#94a3b8"
        }
      }
    }
  ]
};

export const mathTrackColors = {
  Accelerated: { bg: "#f59e0b", text: "#000", label: "🚀 Pathway A (Accelerated)", activeClass: "active-accel" },
  Advanced:    { bg: "#60a5fa", text: "#000", label: "⭐ Pathway B (Advanced)",    activeClass: "active-adv"   },
  Enriched:    { bg: "#c084fc", text: "#000", label: "✨ Pathway C (Enriched)",    activeClass: "active-enr"   },
  Standard:    { bg: "#94a3b8", text: "#000", label: "📘 Pathway D (Standard)",    activeClass: "active-std"   },
};

export const mathProgramOfStudies = [
  // ── Main Courses ───────────────────────────────────────────────────
  {
    category: "High School — Mathematics",
    color: "#60a5fa",
    grades: "Grades 9–12",
    courses: [
      {
        id: "hs-math-conn-1", name: "Math Connections I / II", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–10", credits: "2.5 (each, semester)",
        prereq: "Placement by department",
        description: "A targeted intervention course fulfilling the state requirement for mathematics support. Covers Ratios and Proportional Relationships, the Number System, Expressions and Equations, Geometry, Statistics and Probability. Skills and strategies for standardized test taking are developed. Problem solving with mathematical concepts is practiced and expanded upon in the area of Functions.",
        topics: ["Ratios and proportional relationships", "The number system", "Expressions and equations", "Geometry", "Statistics and probability", "Functions and real-life applications"]
      },
      {
        id: "hs-alg1-cp", name: "Algebra I", tier: "CP", weight: 0,
        gradeLevel: "Grade 9 (typical)", credits: "5",
        prereqs: [{ course: "Successful completion of Math 8", minGrade: null, note: null }],
        description: "The first course in the college preparatory program in mathematics. Emphasis is placed upon the development and understanding of the real number system and the basic structure of Algebra. Students develop an appreciation for logical problem-solving and deductive reasoning as well as precision in the communication of mathematical ideas. A scientific calculator is required.",
        topics: ["Real number system", "Linear equations and inequalities", "Systems of equations and graphing", "Exponent rules and polynomial arithmetic", "Factoring: GCF, trinomials, difference of squares", "Quadratic equations", "Functions: domain, range, notation"]
      },
      {
        id: "hs-alg1-lab", name: "Algebra I with Lab", tier: "CP", weight: 0,
        gradeLevel: "Grade 9", credits: "6",
        prereqs: [{ course: "Successful completion of Math 8", minGrade: null, note: null }],
        description: "Identical to Algebra I but with additional instructional time devoted to function comprehension, number properties, and linear equations. This version provides extended support for students who benefit from a deeper paced introduction to algebraic reasoning. A scientific calculator is required.",
        topics: ["Real number system and number properties", "Function comprehension (extended)", "Linear equations and inequalities (extended)", "Systems of equations", "Polynomial arithmetic and factoring", "Quadratic equations", "Functions: domain, range, notation"]
      },
      {
        id: "hs-geo-cp", name: "Geometry", tier: "CP", weight: 0,
        gradeLevel: "Grade 10 (typical)", credits: "5",
        prereqs: [{ course: "Successful completion of Algebra I", minGrade: null, note: "Summer assignment required" }],
        description: "Combines the essential elements of plane and solid geometry with strong emphasis on deductive reasoning and writing original proofs. Students develop powers of spatial visualization, strengthen algebraic skills, and use precise mathematical language. A strong background in Algebra I is required. A scientific calculator is required.",
        topics: ["Deductive reasoning and proof writing", "Plane geometry: congruence, similarity", "Triangle theorems and special right triangles", "Coordinate geometry", "Circles: arcs, chords, tangents, sectors", "Surface area and volume", "Introduction to trigonometry (SOH-CAH-TOA)"]
      },
      {
        id: "hs-geo-lab", name: "Geometry with Lab", tier: "CP", weight: 0,
        gradeLevel: "Grade 10", credits: "6",
        prereqs: [{ course: "Successful completion of Algebra I", minGrade: null, note: "Priority given to Algebra I Lab students" }],
        description: "Combines plane and solid geometry with an emphasis on deductive reasoning, logic in proof writing, and physical constructions. Students develop spatial visualization, precision in measurement, and language for geometric figures while strengthening algebraic skills. Priority placement for Algebra I Lab students.",
        topics: ["Deductive reasoning, logic, and proof writing", "Physical constructions", "Congruence and similarity", "Measurement and geometric figures", "Coordinate geometry", "Circles and solid geometry"]
      },
      {
        id: "hs-geo-h", name: "Geometry Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 9–10", credits: "5",
        prereqs: [{ course: "Algebra I", minGrade: 95, note: "Summer assignment required" }],
        description: "Designed for students who want a more challenging approach to geometry and plan on taking additional mathematics courses in college. Combines plane and solid geometry with strong emphasis on complex original proofs. Additional topics include introductory trigonometry, coordinate geometry, and transformations. Students are expected to transfer concepts to novel applications. A scientific calculator is required.",
        topics: ["Complex original proofs (two-column, paragraph)", "Congruence and similarity — advanced", "Introductory trigonometry beyond right triangles", "Coordinate geometry and transformations", "Circles: arcs, sectors, advanced theorems", "Surface area and volume with applications"]
      },
      {
        id: "hs-alg-func", name: "Algebraic Functions and Analysis", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Successful completion of Algebra I and Geometry", minGrade: null, note: "Intended for students who will continue to Applied Algebraic Extensions" }],
        description: "Offered as the third-year math course, this course reviews terminology, concepts, skills, and applications of Algebra I through a critical examination of the real number system. It furthers algebraic development with factoring, rational expressions, and functions. Units of study: Quadratic Functions, Polynomial Functions, Rational Exponents/Radical Functions, Rational Functions. Designed for juniors and seniors.",
        topics: ["Real number system review", "Quadratic functions and graphs", "Polynomial functions", "Rational exponents and radical functions", "Rational functions and equations", "Algebraic problem solving"]
      },
      {
        id: "hs-app-alg", name: "Applied Algebraic Extensions", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Successful completion of Algebraic Functions & Analysis", minGrade: null, note: null }],
        description: "The sequential course to Algebraic Functions & Analysis for seniors. Continues developing algebraic concepts, skills, and applications with a focus on sequences, series, permutations, combinations, probability, statistics, non-linear functions, and an introduction to Trigonometry.",
        topics: ["Exponential and logarithmic functions", "Data analysis and statistics", "Sequences and series", "Counting: permutations and combinations", "Probability", "Introduction to trigonometric functions"]
      },
      {
        id: "hs-alg2-cp", name: "Algebra II", tier: "CP", weight: 0,
        gradeLevel: "Grade 11 (typical)", credits: "5",
        prereqs: [{ course: "Algebra I", minGrade: 70, note: null }, { course: "Geometry", minGrade: 70, note: "Summer assignment required" }],
        description: "The third course in the regular college preparatory mathematics program. Reviews Algebra I terminology, concepts, and skills through a critical examination of the real number system. Major topics include rational expressions and equations, nonlinear functions, powers, roots, radicals, sequences, series, probability/statistics, and introduction to trigonometry.",
        topics: ["Algebra I review and real number system", "Polynomial and rational functions", "Exponential and logarithmic functions", "Powers, roots, and radicals", "Sequences, series, probability, and statistics", "Introduction to trigonometry", "Graphing and problem solving"]
      },
      {
        id: "hs-alg2-h", name: "Algebra II Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 9–11", credits: "5",
        prereqs: [
          { course: "Geometry Honors / UMS Geometry", minGrade: 85, note: null },
          { course: "Geometry", minGrade: 95, note: "AND 95% in Algebra I — Summer assignment required" }
        ],
        description: "Designed for students who want a more challenging approach to Algebra II and plan to take additional honors mathematics. Topics include real and complex number systems, systems of equations in two and three variables, determinants, polynomial equations and functions, rational expressions, sequences and series, probability/statistics, exponential equations, logarithms, and trigonometry.",
        topics: ["Real and complex number systems", "Systems of equations in two and three variables", "Determinants", "Polynomial equations and functions", "Rational expressions", "Sequences, series, probability, and statistics", "Exponential equations and logarithms", "Trigonometry: unit circle and identities"]
      },
      {
        id: "hs-alg3", name: "Algebra III", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Successful completion of Algebra II", minGrade: null, note: "Ineligible for Advanced Algebra and Trigonometry" }],
        description: "The fourth-year course in a four-year sequence providing a modified version of the traditional math curriculum. Strengthens Algebra skills and concepts with emphasis on equation solving and problem solving. Functions studied include polynomial, rational, logarithmic, and exponential. Additionally, students begin exploring Trigonometry and the Unit Circle.",
        topics: ["Algebra skills review and problem solving", "Polynomial functions", "Rational functions", "Logarithmic functions", "Exponential functions", "Introduction to trigonometry and the Unit Circle"]
      },
      {
        id: "hs-adv-alg-trig", name: "Advanced Algebra and Trigonometry", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Algebra II", minGrade: null, note: "70%–84% in Algebra II" }],
        description: "Designed for students pursuing a four-year college program who need additional development in Algebra mechanics. The first part further develops Algebra II skills and concepts with emphasis on problem solving; the second half includes a complete course in Trigonometry.",
        topics: ["Polynomial functions (extended)", "Rational functions (extended)", "Exponential functions", "Logarithmic functions", "Problem solving emphasis", "Full Trigonometry: functions, identities, equations", "Unit circle and applications"]
      },
      {
        id: "hs-pre-cp", name: "PreCalculus", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Algebra II", minGrade: 80, note: null },
          { course: "Advanced Algebra and Trigonometry", minGrade: 75, note: null },
          { course: "Algebra II Honors", minGrade: 65, note: "Summer assignment required" }
        ],
        description: "Covers all fundamental topics that prepare students for calculus. Emphasis on problem solving and the study of relations, functions, equation solving, and graphing. Functions studied include polynomial, rational, exponential, logarithmic, trigonometric, and inverse.",
        topics: ["Relations and functions: notation, transformations, inverses", "Polynomial and rational functions", "Exponential and logarithmic functions", "Trigonometric functions and equations", "Conic sections", "Polar coordinates and parametric equations (intro)", "Vectors (intro)"]
      },
      {
        id: "hs-pre-h", name: "PreCalculus Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [
          { course: "Algebra II Honors", minGrade: 85, note: null },
          { course: "Algebra II", minGrade: 95, note: "Summer assignment required" }
        ],
        description: "An in-depth examination of analytic trigonometry, trigonometric functions, exponential and logarithmic functions, polynomial and rational functions, and introduction to limits. Additionally, conics, polar, vectors, and parametric may be explored.",
        topics: ["Analytic trigonometry and identities (in-depth)", "Exponential and logarithmic functions (in-depth)", "Polynomial and rational function analysis", "Introduction to limits", "Conic sections", "Polar coordinates and curves", "Parametric equations", "Vectors: components and dot product"]
      },
      {
        id: "hs-calc-cp", name: "Calculus", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "PreCalculus", minGrade: 80, note: "Or completion of PreCalculus Honors" }],
        description: "Provides students with an opportunity to develop a conceptual understanding of calculus and its applications. Emphasizes a multi-representational approach — concepts, results, and problems are expressed geometrically, analytically, verbally, and numerically.",
        topics: ["Limits and continuity", "Definition of the derivative", "Basic differentiation rules", "Applications of derivatives: optimization, curve sketching", "Definite and indefinite integrals", "Fundamental Theorem of Calculus", "Real-world applications of calculus"]
      },
      {
        id: "hs-calc-ab", name: "AP Calculus AB", tier: "AP", weight: 5,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [
          { course: "PreCalculus Honors (full year)", minGrade: 85, note: null },
          { course: "PreCalculus (full year)", minGrade: 95, note: null },
          { course: "Calculus (full year)", minGrade: 80, note: null }
        ],
        description: "Covers limits, derivatives, and applications of both algebraic and transcendental functions as well as methods and applications of integration. Equivalent to a 1st semester college calculus course.",
        topics: ["Limits and continuity", "Derivatives: all rules, implicit, related rates", "Derivatives of trig, exponential, and log functions", "Applications: optimization, curve sketching, L'Hôpital's rule", "Definite integrals and Fundamental Theorem of Calculus", "u-substitution", "Applications of integration: area, accumulation, average value", "Differential equations: slope fields, separation of variables", "AP exam preparation"]
      },
      {
        id: "hs-calc-c", name: "AP Calculus C", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "AP Calculus AB (full year)", minGrade: 80, note: null }],
        description: "Taught as a continuation of Calculus AB. Covers additional techniques of integration, polar coordinates, series, applications of integrals, parametric graphing, and differential equations. Equivalent to a 2nd semester college calculus course.",
        topics: ["Advanced integration techniques: by parts, partial fractions", "Polar coordinates and parametric graphing", "Infinite sequences and series", "Convergence tests", "Applications of integrals in polar and parametric settings", "Differential equations (extended)", "AP exam preparation"]
      },
      {
        id: "hs-calc-bc", name: "AP Calculus BC", tier: "AP", weight: 5,
        gradeLevel: "Grades 11-12", credits: "5",
        prereqs: [{ course: "PreCalculus Honors", minGrade: 95, note: "Teacher's recommendation required" }, { course: "Calculus CP", minGrade: 95, note: "Teacher's recommendation required" }],
        description: "Essentially the College Board Calculus BC Curriculum. Students master material covering two semesters of a college calculus program. The course outline combines the Calculus AB and Calculus C descriptions. Students are expected to understand concepts and transfer them to novel applications.",
        topics: ["Limits and continuity", "Derivatives: all rules, implicit, related rates", "Applications: optimization, curve sketching, L'Hôpital's rule", "Definite integrals and Fundamental Theorem of Calculus", "Applications of integration: area, accumulation, average value", "Differential equations: slope fields, separation of variables", "Advanced integration techniques: by parts, partial fractions", "Polar coordinates and parametric graphing", "Infinite sequences and series", "Convergence tests", "AP BC exam preparation"]
      },
      {
        id: "hs-math-methods", name: "Honors Math Methods in Engineering and the Sciences", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [
          { course: "AP Calculus C", minGrade: 85, note: null },
          { course: "AP Calculus BC", minGrade: 85, note: "Summer assignment required — STEM designation" }
        ],
        description: "Designed for the student interested in pursuing mathematics at the college level. Surveys topics covered in four different college courses with emphasis on applications.",
        topics: ["LINEAR ALGEBRA: Vectors, matrices, diagonalization, eigenvectors, basis sets", "MULTIVARIABLE CALCULUS: Partial derivatives, vector operators, gradients, double integrals", "DIFFERENTIAL EQUATIONS: Methods, physics equations, functions as basis sets", "VECTOR CALCULUS: Formal proofs, vector fields, line and surface integrals", "FOURIER ANALYSIS (if covered): Frequency analysis, Fourier Series and Transforms, signal processing"]
      }
    ]
  },

  // ── Electives ──────────────────────────────────────────────────────
  {
    category: "Math Electives",
    color: "#34d399",
    grades: "Grades 11–12",
    courses: [
      {
        id: "hs-stats-cp", name: "Statistics", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Algebra II", minGrade: 70, note: "Elective for Juniors and Seniors only" }],
        description: "An introductory, non-calculus based study of statistics designed as an elective for Juniors and Seniors. Students are introduced to major concepts and tools for collecting, analyzing, and drawing conclusions from data.",
        topics: ["Exploring data: distributions and displays", "Planning a study: sampling and experimental design", "Anticipating patterns: probability and random variables", "Statistical inference: confidence intervals and significance tests", "Graphing calculator applications", "Preparation for AP Statistics"]
      },
      {
        id: "hs-stats-ap", name: "AP Statistics", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Statistics", minGrade: 85, note: null },
          { course: "PreCalculus", minGrade: 80, note: null },
          { course: "Algebra II Honors", minGrade: 80, note: null },
          { course: "Algebra II", minGrade: 90, note: "Elective for Juniors and Seniors only" }
        ],
        description: "An Advanced Placement course equivalent to a one-semester introductory, non-calculus based college course in statistics. An elective for Juniors and Seniors. Introduces major concepts and tools for collecting, analyzing, and drawing conclusions from data.",
        topics: ["Exploring data: distributions, outliers, transformations", "Comparing distributions", "Bivariate data: regression and residuals", "Study design: sampling methods and experimental design", "Probability: rules, conditional, independence", "Random variables and probability distributions", "Sampling distributions and Central Limit Theorem", "Confidence intervals for means and proportions", "Significance tests: z-tests, t-tests, chi-square", "AP exam preparation"]
      },
      {
        id: "hs-data-science", name: "Data Science, Analytics, and Visualization (w/ Python)", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [
          { course: "Algebra II Honors", minGrade: 65, note: null },
          { course: "Algebra II", minGrade: 80, note: null },
          { course: "Advanced Algebra/Trigonometry", minGrade: 80, note: "Prior programming recommended but not required" }
        ],
        description: "An in-depth exploration of data science concepts and visualization techniques, incorporating hands-on learning with Python and industry tools. Covers computational and inferential thinking, network analysis, database management, and natural language processing.",
        topics: ["Computational and inferential thinking", "Python programming for data science", "Data visualization and analysis", "Network analysis and database management", "Natural language processing", "Machine learning fundamentals: KNN and Decision Trees", "Real-world data problem solving"]
      },
      {
      id: "hs-discrete", name: "Discrete Mathematics", tier: "CP", weight: 0,
      gradeLevel: "Grades 11–12", credits: "5",
      prereqs: [{ course: "Algebra II", minGrade: null, note: "Successful completion" }],
      description: "Addresses topics not covered in traditional math courses with a step-by-step rather than continuous nature. Stresses the connection between contemporary math and modern society. Effective preparation for applied combinatorics and graph theory at the college level.",
      topics: [
        "Election theory and decision-making in a democracy",
        "Graphs and graph theory (networking)",
        "Coding information",
        "Logic and probability",
        "Game theory",
        "Mathematical induction"
      ]
    }
    ]
  }
];