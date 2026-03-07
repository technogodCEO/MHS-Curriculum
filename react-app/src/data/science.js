// ─── Science ─────────────────────────────────────────────────────────
// Normal sequence: IPELS → Chemistry → Biology
// Tracks reflect six typical student pathways from general to most advanced.
// Categories: Physics, IPELS, Chemistry, Biology, Environmental, iSTEM

export const scienceTracks = {
  tracks: ["General Science", "CP", "Honors", "AP (Standard)", "Bio Kid", "Physics Kid"],
  grades: [
    // ── 9th Grade ──────────────────────────────────────────────────────
    {
      grade: 9,
      label: "9th Grade",
      courses: {
        "General Science": {
          name: "IPELS",
          topics: [
            "Integrated Physical, Environmental & Life Sciences",
            "Phenomena exploration across science disciplines",
            "Engineering design principles and scientific modeling",
            "Lab investigations: cause/effect, energy storage, patterns",
            "Claim, evidence, and reasoning (CER) statements",
            "Prerequisite: None — open to all students"
          ],
          color: "#94a3b8",
          highlight: false
        },
        CP: {
          name: "IPELS",
          topics: [
            "Integrated Physical, Environmental & Life Sciences",
            "Phenomena exploration across science disciplines",
            "Engineering design principles and scientific modeling",
            "Lab investigations: cause/effect, energy storage, patterns",
            "Claim, evidence, and reasoning (CER) statements",
            "Prerequisite: None — open to all students"
          ],
          color: "#6ee7b7",
          highlight: false
        },
        Honors: {
          name: "HIPELS (Honors)",
          topics: [
            "Honors-level Integrated Physical, Environmental & Life Sciences",
            "Energy in mechanical systems, global climate science, forces and interactions",
            "Sophisticated lab investigations and scientific writing",
            "Advanced mathematical and scientific reasoning required",
            "Prerequisite: Demonstrated aptitude in proportional reasoning and advanced algebra proficiency"
          ],
          color: "#2dd4bf",
          highlight: false
        },
        "AP (Standard)": {
          name: "AP Physics 1",
          topics: [
            "Algebra-based introductory college-level physics",
            "Systems, dynamics, conservation, fields, and waves",
            "Inquiry-based laboratory work with advanced math",
            "Summer assignments required",
            "Prerequisite: Completion of HIPELS (or a recommendation from UMS); concurrent or completed Algebra II",
            "AP exam preparation"
          ],
          color: "#14b8a6",
          highlight: true
        },
        "Bio Kid": {
          name: "AP Physics 1",
          topics: [
            "Algebra-based introductory college-level physics",
            "Systems, dynamics, conservation, fields, and waves",
            "Inquiry-based laboratory work with advanced math",
            "Summer assignments required",
            "Prerequisite: Completion of HIPELS (or UMS recommendation); concurrent or completed Algebra II",
            "AP exam preparation"
          ],
          color: "#0d9488",
          highlight: true
        },
        "Physics Kid": {
          name: "AP Physics 1",
          topics: [
            "Algebra-based introductory college-level physics",
            "Systems, dynamics, conservation, fields, and waves",
            "Inquiry-based laboratory work with advanced math",
            "Summer assignments required",
            "Prerequisite: Completion of HIPELS (or UMS recommendation); concurrent or completed Algebra II",
            "AP exam preparation"
          ],
          color: "#0f766e",
          highlight: true
        }
      }
    },

    // ── 10th Grade ─────────────────────────────────────────────────────
    {
      grade: 10,
      label: "10th Grade",
      courses: {
        "General Science": {
          name: "General Chemistry",
          topics: [
            "Basic physical chemistry concepts through student discourse and labs",
            "States of matter, solutions, basic chemical reactions, role of energy",
            "Problem solving and critical thinking skills",
            "Builds on energy theme from IPELS",
            "Permission coordinated through counselor and Science Supervisor"
          ],
          color: "#94a3b8",
          highlight: false
        },
        CP: {
          name: "Chemistry",
          topics: [
            "College prep laboratory science — matter at the particle level",
            "Atomic structure, periodic law, bonding, chemical formulas and equations",
            "States of matter, solutions, reactions, and energy in chemistry",
            "Algebraic equations, graphing, scientific notation, significant figures",
            "Builds on energy theme from IPELS"
          ],
          color: "#6ee7b7",
          highlight: false
        },
        Honors: {
          name: "Chemistry Honors",
          topics: [
            "Conceptual understanding with 21st century skills training",
            "Matter at the particle level — advanced critical thinking and articulation",
            "Ratios, proportionality, scientific notation, metric conversions, graphing",
            "Summer review packet and core competency assessment",
            "Independent and collaborative work expected",
            "Honors-weighted credit"
          ],
          color: "#2dd4bf",
          highlight: false
        },
        "AP (Standard)": {
          name: "AP Chemistry",
          topics: [
            "Rigorous college-level first-year chemistry for science majors",
            "Structure and states of matter, reactions, kinetics, equilibrium",
            "Thermodynamics, electrochemistry, descriptive and organic chemistry",
            "Extensive lab work with data analysis and interpretation",
            "Summer assignment: atomic models, stoichiometry — assessed in first 2 weeks",
            "AP exam preparation"
          ],
          color: "#14b8a6",
          highlight: true
        },
        "Bio Kid": {
          name: "AP Chemistry",
          topics: [
            "Rigorous college-level first-year chemistry for science majors",
            "Structure and states of matter, reactions, kinetics, equilibrium",
            "Thermodynamics, electrochemistry, descriptive and organic chemistry",
            "Extensive lab work with data analysis and interpretation",
            "Summer assignment required — assessed in first 2 weeks",
            "AP exam preparation"
          ],
          color: "#0d9488",
          highlight: true
        },
        "Physics Kid": {
          name: "AP Chemistry",
          topics: [
            "Rigorous college-level first-year chemistry for science majors",
            "Structure and states of matter, reactions, kinetics, equilibrium",
            "Thermodynamics, electrochemistry, descriptive and organic chemistry",
            "Extensive lab work with data analysis and interpretation",
            "Summer assignment required — assessed in first 2 weeks",
            "AP exam preparation"
          ],
          color: "#0f766e",
          highlight: true
        }
      }
    },

    // ── 11th Grade ─────────────────────────────────────────────────────
    {
      grade: 11,
      label: "11th Grade",
      courses: {
        "General Science": {
          name: "General Biology",
          topics: [
            "Conceptual understandings and skills in biology",
            "Unity/diversity of life, biochemical processes, genetics, evolution",
            "Ecosystems, classification, and biotechnology",
            "Builds on prior science coursework",
            "Permission coordinated through counselor and Science Supervisor"
          ],
          color: "#94a3b8",
          highlight: false
        },
        CP: {
          name: "Biology",
          topics: [
            "College prep laboratory biology building on chemistry concepts",
            "Unity/diversity of life, form and function in organisms",
            "Biochemical processes, genetics, evolution",
            "Ecosystems, classification, and biotechnology",
            "Simulations, readings, and lab activities"
          ],
          color: "#6ee7b7",
          highlight: false
        },
        Honors: {
          name: "Biology Honors",
          topics: [
            "Advanced biology continuing energy themes from chemistry and physics",
            "Probability, mathematical modeling, and multiple representations",
            "Extensive analytical lab, reading, and writing assignments",
            "Sophisticated analysis and application of core ideas",
            "Honors-weighted credit",
            "Recommended: Advanced Chemistry Honors or superior understanding of CP Chemistry"
          ],
          color: "#2dd4bf",
          highlight: false
        },
        "AP (Standard)": {
          name: "AP Biology",
          topics: [
            "College-level first-year biology for science majors",
            "Biochemistry, cellular biology, molecular genetics, biotechnology",
            "Diversity, structure/function of organisms, ecology, evolution",
            "Builds on chemistry and physics concepts",
            "Summer assignments required",
            "AP exam preparation"
          ],
          color: "#14b8a6",
          highlight: true
        },
        "Bio Kid": {
          name: "AP Biology",
          topics: [
            "College-level first-year biology for science majors",
            "Biochemistry, cellular biology, molecular genetics, biotechnology",
            "Diversity, structure/function of organisms, ecology, evolution",
            "Builds on AP Chemistry and AP Physics 1 foundations",
            "Summer assignments required",
            "AP exam preparation"
          ],
          color: "#0d9488",
          highlight: true
        },
        "Physics Kid": {
          name: "AP Physics C: Mechanics & E&M",
          topics: [
            "Calculus-based college physics for physical science and engineering majors",
            "Mechanics: kinematics, Newton's laws, energy, momentum, rotation",
            "Electricity & Magnetism: electrostatics, circuits, magnetism, induction",
            "Methods of calculus used throughout — requires concurrent/completed calculus",
            "Prepares for both AP Physics C exams",
            "AP exam preparation",
            "Summer assignments required"
          ],
          color: "#0f766e",
          highlight: true
        }
      }
    },

    // ── 12th Grade ─────────────────────────────────────────────────────
    {
      grade: 12,
      label: "12th Grade",
      courses: {
        "General Science": {
          name: "iSTEM Elective / Environmental Science",
          topics: [
            "iSTEM: Semester modules in topics like anatomy, forensics, weather, horticulture",
            "ENVIRONMENTAL SCIENCE: Current topics and trends with engineering mindset",
            "Choose modules based on interest and availability",
            "See iSTEM section for full module list"
          ],
          color: "#94a3b8",
          highlight: false
        },
        CP: {
          name: "AP Elective / iSTEM",
          topics: [
            "APES: Environmental science capstone — requires IPELS, chemistry, biology (AP-weighted)",
            "iSTEM MODULES: Anatomy, forensics, weather, horticulture, environmental science",
            "iSTEMi: Full-year independent research project (Honors-weighted)",
            "Choose based on interest and college/career goals"
          ],
          color: "#6ee7b7",
          highlight: false
        },
        Honors: {
          name: "AP Elective / iSTEM Honors",
          topics: [
            "APES: College-level environmental science capstone (AP-weighted)",
            "AP BIOLOGY: If not yet taken — first-year college bio for science majors",
            "iSTEM HONORS: Biotechnology, organic chemistry, or independent research",
            "Choose based on interest and college/career goals"
          ],
          color: "#2dd4bf",
          highlight: false
        },
        "AP (Standard)": {
          name: "APES / AP Physics C",
          topics: [
            "APES: Environmental science capstone integrating bio, chem, and physics — AP exam in May",
            "AP PHYSICS C: Calculus-based physics — Mechanics and E&M — requires concurrent or completed calculus",
            "Both are AP-weighted capstone courses for STEM-focused students",
            "Summer assignments required for both",
            "Students choose one or both based on schedule and goals"
          ],
          color: "#14b8a6",
          highlight: true
        },
        "Bio Kid": {
          name: "AP Environmental Science",
          topics: [
            "College-level environmental science capstone",
            "Integrates prior bio, chem, and physics knowledge",
            "Social Ecological Systems and transdisciplinary analysis",
            "Data analysis, lab and field experiments",
            "Strong math skills recommended",
            "AP exam preparation",
            "Summer assignments required"
          ],
          color: "#0d9488",
          highlight: true
        },
        "Physics Kid": {
          name: "AP Biology",
          topics: [
            "College-level first-year biology for science majors",
            "Biochemistry, cellular biology, molecular genetics, biotechnology",
            "Diversity, structure/function of organisms, ecology, evolution",
            "Builds on AP Chemistry and AP Physics C foundations",
            "AP exam preparation",
            "Summer assignments required"
          ],
          color: "#0f766e",
          highlight: true
        }
      }
    }
  ]
};

// ─── Track Colors ────────────────────────────────────────────────────
export const scienceTrackColors = {
  "General Science": { bg: "#94a3b8", text: "#000", label: "📘 General Science",          activeClass: "active-gen"  },
  CP:                { bg: "#6ee7b7", text: "#000", label: "📗 College Prep (CP)",         activeClass: "active-cp"   },
  Honors:            { bg: "#2dd4bf", text: "#000", label: "✨ Honors",                    activeClass: "active-hon"  },
  "AP (Standard)":   { bg: "#14b8a6", text: "#000", label: "🚀 AP (Standard)",             activeClass: "active-ap"   },
  "Bio Kid":         { bg: "#0d9488", text: "#000", label: "🧬 Bio Kid (AP → APES Sr.)",   activeClass: "active-bio"  },
  "Physics Kid":     { bg: "#0f766e", text: "#fff", label: "⚛️ Physics Kid (AP → Phys C)", activeClass: "active-phys" },
};

// ─── Full Program of Studies (course catalog) ────────────────────────
export const scienceProgramOfStudies = [
  // ── IPELS / Physics ────────────────────────────────────────────────
  {
    category: "Physics / IPELS",
    color: "#14b8a6",
    grades: "Grades 9–10",
    courses: [
      {
        id: "hs-ipels", name: "Integrated Physical, Environmental & Life Sciences (IPELS)", tier: "CP", weight: 0,
        gradeLevel: "Grade 9", credits: "5",
        prereqs: [],
        description: "A college preparatory laboratory science program designed for students taking their first MHS science course. Explores phenomena through a combination of science disciplines with engineering design principles. Develops scientific models, designs lab investigations, and builds CER skills.",
        topics: ["Phenomena exploration across disciplines", "Engineering design principles", "Scientific modeling", "Cause and effect relationships", "Energy storage modes", "Claim, evidence, and reasoning"]
      },
      {
        id: "hs-hipels", name: "HIPELS (Honors IPELS)", tier: "Honors", weight: 5,
        gradeLevel: "Grade 9", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Demonstrated aptitude in proportional reasoning and advanced algebra proficiency recommended" }],
        description: "Honors-level IPELS exploring energy in mechanical systems, global climate science, and forces/interactions. Requires advanced mathematical and scientific writing skills. Prepares students for AP-level science courses.",
        topics: ["Energy in mechanical systems", "Global climate science", "Forces and interactions", "Sophisticated lab investigations", "Advanced mathematical reasoning", "Scientific writing"]
      },
      {
        id: "hs-ap-phys1", name: "AP Physics 1", tier: "AP", weight: 5,
        gradeLevel: "Grade 9+", credits: "5",
        prereqs: [
          { course: "HIPELS", minGrade: null, note: "Successful completion" },
          { course: "Algebra II", minGrade: null, note: "Concurrent or completed; new students must pass entrance assessments" },
          { course: "", minGrade: null, note: "Both prerequisites are required, some students may take in Freshman year via UMS recommendation"}
        ],
        description: "Algebra-based introductory college-level physics. Students explore systems, dynamics, conservation, fields, and waves through hands-on inquiry-based lab work. Designed to prepare students for the AP Physics 1 exam.",
        topics: ["Kinematics and dynamics", "Conservation of energy and momentum", "Rotational motion", "Waves and sound", "Electrostatics (intro)", "AP exam preparation", "Summer assignments required"]
      },
      {
        id: "hs-ap-physc", name: "AP Physics C: Mechanics and Electricity & Magnetism", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Calculus", minGrade: null, note: "Concurrent or completed; previous physics recommended" }
        ],
        description: "Calculus-based college physics forming the foundation for physical science and engineering majors. Prepares students for both the AP Physics C: Mechanics and Electricity & Magnetism exams.",
        topics: ["Mechanics: kinematics, Newton's laws, work, energy, momentum, rotation", "Electricity & Magnetism: electrostatics, circuits, magnetism, induction", "Calculus methods throughout", "Laboratory science with data analysis", "AP Physics C Mechanics exam", "AP Physics C E&M exam", "Summer assignments required"]
      }
    ]
  },

  // ── Chemistry ──────────────────────────────────────────────────────
  {
    category: "Chemistry",
    color: "#2dd4bf",
    grades: "Grades 10–12",
    courses: [
      {
        id: "hs-genchem", name: "General Chemistry", tier: "CP", weight: 0,
        gradeLevel: "Grade 10+", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Permission coordinated through counselor and Science Supervisor" }],
        description: "College prep science cultivating basic physical chemistry concepts through student discourse and lab activities. Introduces states of matter, solutions, basic chemical reactions, and the role of energy in chemistry.",
        topics: ["Basic physical chemistry concepts", "States of matter and solutions", "Basic chemical reactions", "Role of energy in chemistry", "Problem solving and critical thinking"]
      },
      {
        id: "hs-chem-cp", name: "Chemistry", tier: "CP", weight: 0,
        gradeLevel: "Grade 10", credits: "5",
        prereqs: [],
        description: "College preparatory laboratory science. Develops a coherent description of matter at the particle level based on observable evidence. Covers atomic structure, periodic law, bonding, chemical formulas, equations, and quantitative representations of reactions.",
        topics: ["Atomic structure and periodic law", "Chemical bonding and formulas", "Chemical equations and reactions", "States of matter and solutions", "Algebraic equations and graphing in chemistry", "Energy in chemistry"]
      },
      {
        id: "hs-chem-h", name: "Chemistry Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 10", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Summer review packet; core competency assessment with first unit" }],
        description: "Rigorous college prep course seeking conceptual understanding with 21st century skills. Requires fundamental understanding of ratios, proportionality, scientific notation, exponents, metric conversions, and graphing. Higher level of critical thinking and articulation required.",
        topics: ["Matter at the particle level (advanced)", "Ratios, proportionality, and mathematical analysis", "Advanced critical thinking and articulation", "Independent and collaborative work", "Summer review and competency assessment"]
      },
      {
        id: "hs-ap-chem", name: "AP Chemistry", tier: "AP", weight: 5,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Strong algebra skills required; previous chemistry recommended; summer assignment on atomic models, stoichiometry assessed in first 2 weeks" }],
        description: "Rigorous and demanding college-level first-year chemistry for science majors. Covers structure/states of matter, reactions, kinetics, equilibrium, thermodynamics, electrochemistry, and descriptive chemistry. Extensive lab work with data analysis.",
        topics: ["Structure and states of matter", "Chemical reactions and kinetics", "Equilibrium and thermodynamics", "Electrochemistry", "Descriptive and organic chemistry", "Laboratory data analysis and interpretation", "AP exam preparation", "Summer assignments required"]
      }
    ]
  },

  // ── Biology ────────────────────────────────────────────────────────
  {
    category: "Biology",
    color: "#6ee7b7",
    grades: "Grades 11–12",
    courses: [
      {
        id: "hs-genbio", name: "General Biology", tier: "CP", weight: 0,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Permission coordinated through counselor and Science Supervisor" }],
        description: "College prep lab science for 11th graders to gain conceptual understandings in biology. Builds on prior science knowledge with connections to everyday life. Covers unity/diversity of life, biochemistry, genetics, evolution, ecosystems, classification, and biotechnology.",
        topics: ["Unity and diversity of life", "Biochemical processes", "Genetics and evolution", "Ecosystems and classification", "Biotechnology"]
      },
      {
        id: "hs-bio-cp", name: "Biology", tier: "CP", weight: 0,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [],
        description: "College prep laboratory biology building on chemistry and broader scientific concepts. Covers unity/diversity of life, form and function, biochemistry, genetics, evolution, ecosystems, classification, and biotechnology.",
        topics: ["Unity and diversity of life", "Form and function in organisms", "Biochemical processes", "Genetics and evolution", "Ecosystems and classification", "Biotechnology"]
      },
      {
        id: "hs-bio-h", name: "Biology Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 11", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Advanced Chemistry Honors or superior understanding of CP Chemistry strongly recommended" }],
        description: "Advanced biology continuing energy themes from chemistry and physics. Incorporates probability, mathematical modeling, and multiple representations. Includes more extensive analytical lab, reading, and writing assignments than CP biology.",
        topics: ["Energy transfer and transformation themes", "Probability and mathematical modeling", "Extensive analytical lab work", "Advanced reading and writing assignments", "Application-focused assessments"]
      },
      {
        id: "hs-ap-bio", name: "AP Biology", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Previous biology strongly recommended; students without biology should have AP Chemistry or Chemistry Honors" }],
        description: "College-level first-year biology for science majors. Comprehensive survey covering biochemistry, cellular biology, molecular genetics, biotechnology, diversity, structure/function, ecology, and evolution. Builds on chemistry and physics concepts.",
        topics: ["Biochemistry and cellular biology", "Molecular genetics and heredity", "Biotechnology applications", "Diversity and evolution", "Structure and function of organisms", "Ecology", "AP exam preparation", "Summer assignments required"]
      }
    ]
  },

  // ── Environmental Science ──────────────────────────────────────────
  {
    category: "Environmental Science",
    color: "#34d399",
    grades: "Grades 11–12",
    courses: [
      {
        id: "hs-apes", name: "AP Environmental Science", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [
          { course: "Freshman science, chemistry, and biology", minGrade: null, note: "Must have completed all three (biology may be concurrent)" }
        ],
        description: "Full-year capstone lab science incorporating prior biology, chemistry, and physics knowledge as it relates to environmental studies. Explores Social Ecological Systems with transdisciplinary critical analysis. Strong math skills highly recommended.",
        topics: ["Social Ecological Systems", "Transdisciplinary analysis", "Data analysis, lab, and field experiments", "Integration of bio, chem, and physics", "AP exam preparation", "Summer assignments required"]
      }
    ]
  },

  // ── iSTEM ──────────────────────────────────────────────────────────
  {
    category: "iSTEM",
    color: "#a7f3d0",
    grades: "Grades 10–12",
    courses: [
      {
        id: "hs-istemi", name: "iSTEMi — Advanced Independent Scientific Investigations Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Follow-up to iSTEM or formal research proposal approved by Science Supervisor; draft proposal by Aug 15" }],
        description: "Full-year independent science investigations. Students propose a project budget, maintain lab space, publish findings in Tau Magazine, and present a capstone poster. Encourages submission to student research conferences.",
        topics: ["Independent research project", "Project proposal and budgeting", "Laboratory safety and IRB approval", "Publication in Tau Magazine", "Capstone poster presentation"]
      },
      {
        id: "hs-anatomy", name: "Anatomy & Physiology", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [
          { course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" },
          { course: "Biology", minGrade: null, note: "Or instructor/supervisor approval" }
        ],
        description: "Examines how systems and body parts work together to sustain life. Involves real-life and online dissections. Prior biological science knowledge is necessary.",
        topics: ["Human body systems", "Structure and function", "Real-life and online dissections", "Organ interaction and homeostasis"]
      },
      {
        id: "hs-env-sci", name: "Environmental Science (iSTEM)", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        description: "Explores current environmental science topics with an engineering mindset. Lab activities build understanding of Earth's environmental systems. Examines challenges facing humans in preserving our living environment.",
        topics: ["Earth's environmental systems", "Current environmental issues", "Engineering mindset", "Collaborative problem solving"]
      },
      {
        id: "hs-weather", name: "Weather and Meteorology", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        description: "Builds a global weather model. Explores the science behind weather forecasting and how agencies gather, analyze, and predict weather events. Examines common weather apps and the factors influencing weather models.",
        topics: ["Global weather modeling", "Weather forecasting science", "Weather data collection and analysis", "Weather apps and data sources"]
      },
      {
        id: "hs-biotech", name: "Biotechnology Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [
          { course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" },
          { course: "Biology", minGrade: null, note: "Or instructor/supervisor approval" }
        ],
        description: "Application of biological concepts to DNA fingerprinting, RNA vaccines, CRISPR, and more. Students learn techniques and their real-world applications as well as ethical implications of biotechnology.",
        topics: ["DNA fingerprinting", "RNA vaccines", "CRISPR gene editing", "Ethical implications of biotechnology"]
      },
      {
        id: "hs-orgchem", name: "Organic Chemistry Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [
          { course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" },
          { course: null, minGrade: null, note: "Prior chemistry knowledge required" }
        ],
        description: "Introductory organic chemistry labs building a coherent model for an end-of-module synthesis project. Primarily laboratory-based with content delivered in a flipped classroom format.",
        topics: ["Introductory organic chemistry", "Laboratory investigations", "Synthesis project", "Flipped classroom content delivery"]
      },
      {
        id: "hs-hort", name: "Horticultural and Agricultural Science", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        description: "Inquiry-driven introduction to plant growth and production using the MHS student garden, hoop-house, and greenhouse. Covers organic vegetable, flower, and herb production from propagation to harvest.",
        topics: ["Plant biology and propagation", "Organic production methods", "Nutrition and food systems", "Environmental stewardship and food justice"]
      },
      {
        id: "hs-forensics", name: "Forensic Science", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        description: "Introduction to crime scene investigation. Students observe, collect, analyze, and evaluate evidence using physics, chemistry, and biology principles. Considers ethical and social justice aspects of forensic science.",
        topics: ["Crime scene investigation methods", "Evidence collection and analysis", "Physics, chemistry, and biology in forensics", "Ethical and social justice considerations"]
      },
      {
        id: "hs-astronomy", name: "Astronomy", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        note: "Not running in 2026-2027",
        description: "Explores the origins of science through observations and considers a philosophical viewpoint about how we do science. Covers how modern scientists make observations and measurements in space, how objects interact in space, and how discoveries are made from both Eurocentric and global viewpoints.",
        topics: ["Origins of scientific observation", "Modern space measurements", "Object interactions in space", "Eurocentric and global perspectives on astronomy"]
      },
      {
        id: "hs-microelectronics", name: "Microelectronics Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        note: "Not running in 2026-2027",
        description: "Explores various electronic circuits and uses puzzles to uncover mysteries and possibilities within microchips. Examines common DIY microelectronics including Arduino, Raspberry Pi, and other microcontrollers. Some programming involved; no prior coding required.",
        topics: ["Electronic circuits and microchips", "Arduino and Raspberry Pi", "DIY microelectronics", "Introductory programming"]
      },
      {
        id: "hs-nutrition", name: "Nutrition and Food Science", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "One IPELS/physics, chemistry and biology (biology may be taken concurrently) course or permission of the MHS Science Supervisor" }],
        note: "Not running in 2026-2027",
        description: "Explores the biochemistry of foods and nutrients with consideration of physiological effects of specialized diets. Topics include cultural, religious, and economic factors influencing food acceptance and availability, as well as nutrient requirements of various life stages.",
        topics: ["Biochemistry of foods and nutrients", "Specialized diets and physiological effects", "Cultural and economic factors in nutrition", "Nutrient requirements across life stages"]
      }
    ]
  }
];