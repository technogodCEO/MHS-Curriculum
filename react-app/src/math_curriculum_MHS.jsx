import { useState, useRef, useEffect } from "react";

// ─── SUBJECT DEFINITIONS ────────────────────────────────────────────────────

const subjects = [
  { id: "math",     label: "Mathematics",            accent: "#f59e0b", gridColor: "245, 158, 11",  emoji: "∑",  available: true  },
  { id: "english",  label: "English / Language Arts", accent: "#e8d5a3", gridColor: "232, 213, 163", emoji: "✦",  available: false },
  { id: "science",  label: "Science",                 accent: "#2dd4bf", gridColor: "45, 212, 191",  emoji: "⚗",  available: false },
  { id: "history",  label: "History / Social Studies",accent: "#f97316", gridColor: "249, 115, 22",  emoji: "⊕",  available: false },
  { id: "language", label: "World Language",          accent: "#86efac", gridColor: "134, 239, 172", emoji: "◈",  available: false },
  { id: "electives",label: "Electives",               accent: "#d4d4d8", gridColor: "212, 212, 216", emoji: "✦",  available: false },
];

const curriculum = {
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
          color: "#06b6d4",
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

const trackColors = {
  Accelerated: { bg: "#f59e0b", text: "#000", label: "🚀 Pathway A (Accelerated)" },
  Advanced:    { bg: "#60a5fa", text: "#000", label: "⭐ Pathway B (Advanced)" },
  Enriched:    { bg: "#c084fc", text: "#000", label: "✨ Pathway C (Enriched)" },
  Standard:    { bg: "#94a3b8", text: "#000", label: "📘 Pathway D (Standard)" }
};

// ─── PROGRAM OF STUDIES DATA ────────────────────────────────────────────────

const programOfStudies = [
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
        id: "hs-math-methods", name: "Honors Math Methods in Engineering and the Sciences", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [
          { course: "AP Calculus C", minGrade: 85, note: null },
          { course: "AP Calculus BC", minGrade: 85, note: "Summer assignment required — STEM designation" }
        ],
        description: "Designed for the student interested in pursuing mathematics at the college level. Surveys topics covered in four different college courses with emphasis on applications.",
        topics: ["LINEAR ALGEBRA: Vectors, matrices, diagonalization, eigenvectors, basis sets", "MULTIVARIABLE CALCULUS: Partial derivatives, vector operators, gradients, double integrals", "DIFFERENTIAL EQUATIONS: Methods, physics equations, functions as basis sets", "VECTOR CALCULUS: Formal proofs, vector fields, line and surface integrals", "FOURIER ANALYSIS (if covered): Frequency analysis, Fourier Series and Transforms, signal processing"]
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
      }
    ]
  }
];

// ─── SUBJECT DROPDOWN TITLE ONLY───────────────────────────────────────────────────────
function SubjectTitle({ currentSubject, accentColor, open, setOpen, btnRef }) {
  return (
    <button ref={btnRef} onClick={() => setOpen(o => !o)}
      style={{ background:"transparent", border:"none", cursor:"pointer", padding:0, display:"inline-flex", alignItems:"center", gap:"10px" }}
    >
      <span style={{
        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc, ${accentColor})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 900, letterSpacing: "-1px",
      }}>{currentSubject.label}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
        color: accentColor + "99", border: `1px solid ${accentColor}44`,
        borderRadius: "4px", padding: "2px 6px", marginTop: "6px",
        display: "inline-block", transform: open ? "rotate(180deg)" : "none",
      }}>▾</span>
    </button>
  );
}


// ─── SUBJECT DROPDOWN MENU ───────────────────────────────────────
function SubjectDropdownMenu({ activeSubject, onSelect, onClose, anchorRef }) {
  const menuRef = useRef(null);  // to detect clicks outside the menu
  const [pos, setPos] = useState({ top: 0, left: 0 });

  // runs once on mount: reads the button's position and sets top/left
  useEffect(() => {
    if (anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + window.scrollY + 8, left: rect.left + rect.width / 2 });
    }
  }, [anchorRef]);

  // closes menu when you click anywhere outside it
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) &&
          anchorRef.current && !anchorRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [anchorRef, onClose]);

  return (
    <div ref={menuRef} style={{ position:"absolute", top:pos.top, left:pos.left, transform:"translateX(-50%)", zIndex:200,
  background:"#0f0f1a", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px",
  padding:"8px", minWidth:"260px", boxShadow:"0 20px 60px rgba(0,0,0,0.6)" }}>
      {/* Dropdown */}
      {subjects.map(subj => {
        const isActive = subj.id === activeSubject.id;
        const isDisabled = !subj.available;
        return (
          <button
            key={subj.id}
            disabled={isDisabled}
            onClick={() => { if (!isDisabled) { onSelect(subj); onClose(); } }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "none",
              background: isActive ? `${subj.accent}15` : "transparent",
              cursor: isDisabled ? "default" : "pointer",
              textAlign: "left",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => { if (!isDisabled && !isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
          >
            {/* Color dot */}
            <div style={{
              width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: isDisabled ? "#333" : subj.accent,
              boxShadow: isActive ? `0 0 8px ${subj.accent}88` : "none",
            }} />
            {/* Label */}
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem",
              fontWeight: isActive ? 500 : 400,
              color: isDisabled ? "#3a3a4a" : isActive ? subj.accent : "#aaa",
              flex: 1,
            }}>
              {subj.label}
            </span>
            {/* Status */}
            {isDisabled && (
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                color: "#333",
                letterSpacing: "0.08em",
                border: "1px solid #2a2a3a",
                borderRadius: "100px",
                padding: "2px 7px",
              }}>
                SOON
              </span>
            )}
            {isActive && (
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                color: subj.accent,
                letterSpacing: "0.08em",
                border: `1px solid ${subj.accent}44`,
                borderRadius: "100px",
                padding: "2px 7px",
              }}>
                ACTIVE
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── PROGRAM OF STUDIES COMPONENT ──────────────────────────────────────────

function ProgramOfStudies() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [filterTier, setFilterTier] = useState("All");

  const allTiers = ["All", "CP", "Honors", "AP"];
  const tierStyles = {
    CP:     { bg: "#94a3b822", color: "#94a3b8", border: "#94a3b844" },
    Honors: { bg: "#c084fc22", color: "#c084fc", border: "#c084fc44" },
    AP:     { bg: "#a5adb822", color: "#60a5fa", border: "#60a5fa44" },
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
      <style>{`
        .pos-filter-bar { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px; justify-content:center; }
        .pos-filter-btn { padding:7px 18px; border-radius:100px; font-family:'DM Sans',sans-serif; font-size:0.78rem; letter-spacing:0.05em; cursor:pointer; border:1.5px solid #333; background:transparent; color:#666; transition:all 0.2s; }
        .pos-filter-btn:hover { border-color:#555; color:#999; }
        .pos-filter-btn.f-active-all     { border-color:#e2e8f0; color:#e2e8f0; background:#e2e8f011; }
        .pos-filter-btn.f-active-CP      { border-color:#94a3b8; color:#94a3b8; background:#94a3b811; }
        .pos-filter-btn.f-active-Honors  { border-color:#c084fc; color:#c084fc; background:#c084fc11; }
        .pos-filter-btn.f-active-AP      { border-color:#60a5fa; color:#60a5fa; background:#60a5fa11; }
        .pos-category { margin-bottom:40px; }
        .pos-cat-header { display:flex; align-items:center; gap:12px; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.07); }
        .pos-cat-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
        .pos-cat-title { font-family:'Playfair Display',serif; font-size:1.15rem; font-weight:600; color:#e8e8f0; }
        .pos-cat-grades { font-family:'DM Mono',monospace; font-size:0.65rem; color:#555; letter-spacing:0.1em; text-transform:uppercase; margin-left:auto; }
        .pos-card { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:10px; margin-bottom:8px; overflow:hidden; cursor:pointer; transition:all 0.2s; }
        .pos-card:hover { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.1); }
        .pos-card.open { border-color:rgba(255,255,255,0.12); background:rgba(255,255,255,0.04); }
        .pos-card-header { padding:14px 18px; display:flex; align-items:center; gap:12px; }
        .pos-card-name { font-family:'Playfair Display',serif; font-size:1rem; font-weight:600; color:#f0f0f8; flex:1; line-height:1.3; }
        .pos-meta { display:flex; gap:8px; align-items:center; flex-shrink:0; flex-wrap:wrap; justify-content:flex-end; }
        .pos-badge { font-family:'DM Mono',monospace; font-size:0.6rem; padding:3px 9px; border-radius:100px; letter-spacing:0.08em; border:1px solid; white-space:nowrap; }
        .pos-weight-badge { font-family:'DM Mono',monospace; font-size:0.6rem; padding:3px 9px; border-radius:100px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); color:#555; white-space:nowrap; }
        .pos-credit { font-family:'DM Mono',monospace; font-size:0.6rem; padding:3px 9px; border-radius:100px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); color:#555; white-space:nowrap; }
        .pos-grade-lbl { font-family:'DM Mono',monospace; font-size:0.6rem; color:#555; white-space:nowrap; }
        .pos-chevron { color:#444; font-size:0.7rem; transition:transform 0.2s; display:inline-block; }
        .pos-body { padding:0 18px 16px; border-top:1px solid rgba(255,255,255,0.05); }
        .pos-desc { font-family:'DM Sans',sans-serif; font-size:0.875rem; color:#aaa; line-height:1.7; margin:14px 0 14px; }
        .pos-prereq-section { margin-bottom:14px; }
        .pos-lbl { font-family:'DM Mono',monospace; font-size:0.6rem; letter-spacing:0.1em; text-transform:uppercase; color:#444; margin-bottom:8px; }
        .pos-prereq-list { display:flex; flex-direction:column; gap:6px; }
        .pos-prereq-item { display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; font-family:'DM Sans',sans-serif; font-size:0.8rem; }
        .pos-prereq-bullet { color:#333; flex-shrink:0; }
        .pos-prereq-course { color:#bbb; }
        .pos-prereq-grade { font-family:'DM Mono',monospace; font-size:0.68rem; color:#f59e0b; background:#f59e0b11; border:1px solid #f59e0b33; padding:1px 7px; border-radius:100px; white-space:nowrap; flex-shrink:0; }
        .pos-prereq-note { color:#555; font-size:0.75rem; font-style:italic; }
        .pos-chips { display:flex; flex-wrap:wrap; gap:6px; }
        .pos-chip { font-family:'DM Sans',sans-serif; font-size:0.72rem; padding:4px 10px; border-radius:6px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); color:#888; }
        .pos-weight-legend { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:28px; font-family:'DM Sans',sans-serif; font-size:0.75rem; color:#555; }
        .pos-weight-legend-item { display:flex; align-items:center; gap:6px; }
        .pos-weight-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
      `}</style>

      <div className="pos-filter-bar">
        {allTiers.map(t => {
          const isActive = filterTier === t;
          const cls = isActive ? (t === "All" ? "f-active-all" : `f-active-${t}`) : "";
          return (
            <button key={t} onClick={() => setFilterTier(t)} className={`pos-filter-btn ${cls}`}>
              {t === "All" ? "All Courses" : t}
            </button>
          );
        })}
      </div>

      <div className="pos-weight-legend">
        {[["CP","Unweighted (0)","#94a3b8"],["Honors","+5 Weight","#c084fc"],["AP","+5 Weight","#60a5fa"]].map(([tier,wt,clr])=>(
          <div key={tier} className="pos-weight-legend-item">
            <div className="pos-weight-dot" style={{background:clr}}/>
            <span style={{color:clr}}>{tier}</span>
            <span>— {wt}</span>
          </div>
        ))}
      </div>

      {programOfStudies.map(cat => {
        const visible = filterTier === "All" ? cat.courses : cat.courses.filter(c => c.tier === filterTier);
        if (!visible.length) return null;
        return (
          <div key={cat.category} className="pos-category">
            <div className="pos-cat-header">
              <div className="pos-cat-dot" style={{ background: cat.color }} />
              <div className="pos-cat-title">{cat.category}</div>
              <div className="pos-cat-grades">{cat.grades}</div>
            </div>
            {visible.map(course => {
              const isOpen = expandedCourse === course.id;
              const ts = course.tier ? tierStyles[course.tier] : { bg:"#94a3b822", color:"#94a3b8", border:"#94a3b844" };
              return (
                <div key={course.id} className={`pos-card${isOpen ? " open" : ""}`} onClick={() => setExpandedCourse(isOpen ? null : course.id)}>
                  <div className="pos-card-header">
                    <div className="pos-card-name">{course.name}</div>
                    <div className="pos-meta">
                      <span className="pos-grade-lbl">{course.gradeLevel}</span>
                      {course.tier && <span className="pos-badge" style={{ background: ts.bg, color: ts.color, borderColor: ts.border }}>{course.tier}</span>}
                      {course.weight !== undefined && <span className="pos-weight-badge">{course.weight === 0 ? "Unweighted" : `+${course.weight}`}</span>}
                      <span className="pos-credit">{course.credits} cr</span>
                      <span className="pos-chevron" style={{ transform: isOpen ? "rotate(90deg)" : "none" }}>▶</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="pos-body">
                      <p className="pos-desc">{course.description}</p>
                      <div className="pos-prereq-section">
                        <div className="pos-lbl">Prerequisites</div>
                        {course.prereqs ? (
                          <div className="pos-prereq-list">
                            {course.prereqs.map((p, i) => (
                              <div key={i} className="pos-prereq-item">
                                <span className="pos-prereq-bullet">—</span>
                                <span className="pos-prereq-course">{p.course}</span>
                                {p.minGrade && <span className="pos-prereq-grade">min {p.minGrade}</span>}
                                {p.note && <span className="pos-prereq-note">({p.note})</span>}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:"#777"}}>{course.prereq || "None"}</div>
                        )}
                      </div>
                      <div className="pos-lbl">Topics Covered</div>
                      <div className="pos-chips">{course.topics.map((t, i) => <span key={i} className="pos-chip">{t}</span>)}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────────────

export default function MathCurriculum() {
  const [page, setPage] = useState("map");
  const [selectedTrack, setSelectedTrack] = useState("Accelerated");
  const [expandedGrade, setExpandedGrade] = useState(null);
  const [activeSubject, setActiveSubject] = useState(subjects[0]); // Mathematics
  const [dropOpen, setDropOpen] = useState(false)
  const btnRef = useRef(null)

  const accent = activeSubject.accent;
  const gridRgb = activeSubject.gridColor;

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0f0a 100%)",
      minHeight: "100vh",
      color: "#e8e8f0",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }

        .curriculum-header {
          padding: 60px 40px 40px;
          text-align: center;
          position: relative;
        }
        .header-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(${gridRgb}, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${gridRgb}, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          transition: background-image 0.4s;
        }
        .main-title { font-family:'Playfair Display',serif; font-size:clamp(2rem,5vw,3.5rem); font-weight:900; letter-spacing:-1px; color:#fff; margin:0 0 8px; position:relative; }
        .subtitle { font-family:'DM Sans',sans-serif; font-size:1rem; color:#888; letter-spacing:0.2em; text-transform:uppercase; margin:0 0 16px; }
        .track-tabs { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-bottom:0; padding:0 20px 40px; }
        .track-tab { padding:10px 24px; border-radius:100px; font-family:'DM Sans',sans-serif; font-weight:500; font-size:0.875rem; cursor:pointer; border:1.5px solid transparent; transition:all 0.2s; letter-spacing:0.05em; }
        .track-tab.active-accel { background:#f59e0b; color:#000; border-color:#f59e0b; box-shadow:0 0 20px rgba(245,158,11,0.4); }
        .track-tab.active-adv   { background:#60a5fa; color:#000; border-color:#60a5fa; box-shadow:0 0 20px rgba(96,165,250,0.4); }
        .track-tab.active-enr   { background:#c084fc; color:#000; border-color:#c084fc; box-shadow:0 0 20px rgba(192,132,252,0.4); }
        .track-tab.active-std   { background:#94a3b8; color:#000; border-color:#94a3b8; box-shadow:0 0 20px rgba(148,163,184,0.4); }
        .track-tab.inactive { background:transparent; color:#666; border-color:#333; }
        .track-tab.inactive:hover { border-color:#555; color:#999; }
        .timeline { max-width:900px; margin:0 auto; padding:0 24px 80px; position:relative; }
        .timeline::before { content:''; position:absolute; left:50px; top:0; bottom:0; width:2px; background:linear-gradient(180deg,transparent,rgba(${gridRgb},0.3) 10%,rgba(${gridRgb},0.3) 90%,transparent); }
        .grade-row { display:flex; gap:20px; margin-bottom:12px; align-items:flex-start; position:relative; }
        .grade-label { font-family:'DM Mono',monospace; font-size:0.7rem; color:#555; width:44px; flex-shrink:0; padding-top:18px; text-align:right; letter-spacing:0.05em; }
        .timeline-dot { width:12px; height:12px; border-radius:50%; flex-shrink:0; margin-top:20px; border:2px solid; position:relative; z-index:1; transition:all 0.2s; }
        .grade-card { flex:1; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:12px; overflow:hidden; cursor:pointer; transition:all 0.25s; }
        .grade-card:hover, .grade-card.expanded { background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.12); transform:translateX(4px); }
        .grade-card.highlight-card { border-color:rgba(${gridRgb},0.3); background:rgba(${gridRgb},0.05); box-shadow:0 0 30px rgba(${gridRgb},0.1); }
        .card-header { padding:16px 20px; display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .course-name { font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:600; color:#f0f0f8; flex:1; line-height:1.3; }
        .badge { font-family:'DM Mono',monospace; font-size:0.65rem; padding:4px 10px; border-radius:100px; letter-spacing:0.08em; white-space:nowrap; flex-shrink:0; }
        .topics-panel { padding:0 20px 16px; border-top:1px solid rgba(255,255,255,0.06); }
        .topics-list { list-style:none; padding:12px 0 0; margin:0; display:flex; flex-direction:column; gap:6px; }
        .topic-item { font-family:'DM Sans',sans-serif; font-size:0.83rem; color:#999; line-height:1.4; display:flex; gap:8px; align-items:flex-start; }
        .topic-item::before { content:'—'; color:#444; flex-shrink:0; }
        .section-divider { text-align:center; margin:20px 0 8px; position:relative; }
        .section-divider span { font-family:'DM Sans',sans-serif; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:#555; background:#0a0a0f; padding:0 12px; position:relative; z-index:1; }
        .legend-bar { display:flex; gap:24px; justify-content:center; flex-wrap:wrap; padding:20px; margin-bottom:8px; font-family:'DM Sans',sans-serif; font-size:0.78rem; color:#666; }
        .chevron { font-size:0.7rem; color:#444; transition:transform 0.2s; }
        .chevron.open { transform:rotate(90deg); }
        .phase-label { font-family:'DM Mono',monospace; font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; padding:16px 0 4px; color:#555; border-top:1px solid rgba(255,255,255,0.04); margin-top:8px; }
        .page-nav { display:flex; justify-content:center; gap:4px; padding:0 20px 0; margin-bottom:32px; }
        .page-nav-btn { font-family:'DM Sans',sans-serif; font-size:0.82rem; font-weight:500; letter-spacing:0.04em; padding:10px 28px; cursor:pointer; background:transparent; border:none; color:#555; border-bottom:2px solid transparent; transition:all 0.2s; }
        .page-nav-btn:hover { color:#999; }
        .page-nav-btn.pn-active { color:#f0f0f8; border-bottom-color:${accent}; }
        @media (max-width:600px) { .timeline::before { left:36px; } .grade-label { width:30px; font-size:0.6rem; } }
      `}</style>

      {/* Subject Dropdown */}
      {dropOpen && (
        <SubjectDropdownMenu
          activeSubject={activeSubject}
          onSelect={setActiveSubject}
          onClose={() => setDropOpen(false)}
          anchorRef={btnRef}
        />
      )}

      {/* Header */}
      <div className="curriculum-header">
        <div className="header-grid" />
        <p className="subtitle">Montgomery High School</p>
        <h1 className="main-title">
          <SubjectTitle
            currentSubject={activeSubject}
            accentColor={accent}
            open={dropOpen}
            setOpen={setDropOpen}
            btnRef={btnRef}
          />
          {" "}Curriculum
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "0.9rem", maxWidth: 540, margin: "0 auto 0" }}>
          A comprehensive, multi-track program designed for students at Montgomery High School to be able to more easily explore their math progression.
          Pathways are advisory — high school course enrollment is based on prerequisites, not pathway assignment.
        </p>
      </div>

      {/* Page Navigation */}
      <div className="page-nav">
        <button className={`page-nav-btn${page === "map" ? " pn-active" : ""}`} onClick={() => setPage("map")}>
          Curriculum Map
        </button>
        <button className={`page-nav-btn${page === "pos" ? " pn-active" : ""}`} onClick={() => setPage("pos")}>
          Program of Studies
        </button>
      </div>

      {page === "map" && (<>
        <div className="track-tabs">
          {curriculum.tracks.map(track => (
            <button
              key={track}
              className={`track-tab ${selectedTrack === track
                ? track === "Accelerated" ? "active-accel"
                : track === "Advanced" ? "active-adv"
                : track === "Enriched" ? "active-enr"
                : "active-std"
                : "inactive"}`}
              onClick={() => setSelectedTrack(track)}
            >
              {trackColors[track].label}
            </button>
          ))}
        </div>

        <div className="timeline">
          <div className="section-divider" style={{ marginTop: 20 }}><span>High School · Grades 9–12</span></div>
          {curriculum.grades.filter(g => g.grade >= 9).map(gradeData => {
            const course = gradeData.courses[selectedTrack];
            const isExpanded = expandedGrade === gradeData.grade;
            const isHighlight = course.highlight;
            return (
              <div key={gradeData.grade} className="grade-row">
                <div className="grade-label">G{gradeData.grade}</div>
                <div className="timeline-dot" style={{
                  background: course.color + "33",
                  borderColor: course.color,
                  width: isHighlight ? 16 : 12,
                  height: isHighlight ? 16 : 12,
                  boxShadow: isHighlight ? `0 0 20px ${course.color}88` : "none",
                  marginTop: isHighlight ? 18 : 20
                }} />
                <div
                  className={`grade-card${isExpanded ? " expanded" : ""}${isHighlight ? " highlight-card" : ""}`}
                  onClick={() => setExpandedGrade(isExpanded ? null : gradeData.grade)}
                >
                  <div className="card-header">
                    <div className="course-name" style={{ color: isHighlight ? "#fff" : "#f0f0f8" }}>{course.name}</div>
                    {isHighlight && (
                      <span className="badge" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
                        AP
                      </span>
                    )}
                    <span style={{ color: course.color + "aa" }} className={`chevron${isExpanded ? " open" : ""}`}>▶</span>
                  </div>
                  {isExpanded && (
                    <div className="topics-panel">
                      <ul className="topics-list">
                        {course.topics.map((t, i) => {
                          const colonIdx = t.indexOf(": ");
                          const prefix = colonIdx > 0 ? t.slice(0, colonIdx) : null;
                          const isSectionHeader = prefix && prefix === prefix.toUpperCase() && prefix.length < 30;
                          if (isSectionHeader) {
                            return (
                              <li key={i}>
                                <div className="phase-label">{prefix}</div>
                                <div className="topic-item" style={{ marginTop: 4 }}>— {t.slice(colonIdx + 2)}</div>
                              </li>
                            );
                          }
                          return <li key={i} className="topic-item">{t}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ fontFamily:"'DM Sans',sans-serif", textAlign:"center", padding:"0 20px 60px", color:"#444", fontSize:"0.78rem", maxWidth:600, margin:"0 auto", lineHeight:1.7 }}>
          Track placement is reviewed annually. Students may move between tracks based on performance and teacher recommendation.
          Prerequisites are firmly based on proficiency demonstrated over the entire year of work in the preceding course.
          All tracks are designed to support students in reaching the mathematics level appropriate for their college and career goals. Students requiring a waiver to enroll above recommendation must submit an application through the Mathematics Department Supervisor.
        </div>
      </>)}

      {page === "pos" && (
        <div style={{ paddingTop: 8 }}>
          <div style={{ textAlign:"center", padding:"0 20px 32px", maxWidth:600, margin:"0 auto" }}>
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#555", fontSize:"0.85rem", lineHeight:1.7 }}>
              Full course descriptions, prerequisites, and credit information for all mathematics courses at Montgomery High School.
              Filter by course level to view a specific tier. Honors and AP courses each carry a +5 grade point weight.
              A graphing calculator is required for most courses. Prerequisites are strictly enforced; waiver applications are available through the Mathematics Supervisor.
            </p>
          </div>
          <ProgramOfStudies />
        </div>
      )}

      <footer style={{ textAlign:"center", padding:"20px 0" }}>
        <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#555", fontSize:"0.85rem", lineHeight:1.7 }}>2026 © Roshan Kareer, GNU General Public License 3.0 - Beta 1 (Build 6) </p>
      </footer>
    </div>
  );
}