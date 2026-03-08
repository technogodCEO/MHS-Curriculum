// ─── Electives ───────────────────────────────────────────────────────
// Format: tracks is an object keyed by track name, each containing
// a color, description, and an ordered courses array. This way tracks
// with 1–3 courses don't need empty grade slots.

export const electiveCategories = {
  "AP Capstone":              { color: "#fbbf24", tracks: ["AP Capstone Program"] },
  "Computer Science":         { color: "#60a5fa", tracks: ["Computer Science", "Computer Science (Express)", "Digital Creativity"] },
  "Business":                 { color: "#34d399", tracks: ["Online Financial Literacy", "Business and Personal Law", "Introduction to Entrepreneurship", "Sports and Entertainment Marketing"] },
  "Communication Tech":       { color: "#f472b6", tracks: ["Television Production", "Television Production (Only)"] },
  "Industrial Arts":          { color: "#fb923c", tracks: ["Engineering", "Architectural Design", "Engineering Design & Material Fabrication", "Media & Graphic Communication", "Power, Energy & Transportation"] },
  "Family & Consumer Sci":    { color: "#f87171", tracks: ["Culinary Arts", "Culinary: Baking Focus", "Life Skills"] },
  "Visual Art":               { color: "#a78bfa", tracks: ["Studio Art", "Ceramics", "Photography", "Photography Essentials"] },
  "Performing Arts":          { color: "#22d3ee", tracks: ["Band", "Orchestra", "Choir", "Introduction to Guitar", "Dance", "Theater Arts", "Technical Theater & Communication"] },
  "Tomorrow's Teachers":      { color: "#a3e635", tracks: ["Tomorrow's Teachers"] },
};

export const electiveTracks = {
  tracks: {
    // ══════════════════════════════════════════════════════════════════
    // AP CAPSTONE PROGRAM
    // ══════════════════════════════════════════════════════════════════
    "AP Capstone Program": {
      color: "#fbbf24",
      description: "Two-course AP diploma program developing critical thinking, research, and presentation skills. Earn the AP Capstone Diploma with scores of 3+ on Seminar, Research, and four additional AP exams.",
      courses: [
        {
          id: "el-ap-seminar", name: "AP Seminar", tier: "AP", weight: 5,
          gradeLevel: "Grades 10–11", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Teacher recommendation and completed application" }],
          description: "Foundational cross-curricular course exploring complex academic and real-world topics through divergent perspectives. Students analyze articles, research studies, philosophical texts, speeches, and artistic works to craft evidence-based arguments.",
          topics: ["Cross-curricular inquiry framework", "Analyzing articles, studies, and philosophical texts", "Synthesizing multiple sources", "Written essays and evidence-based arguments", "Oral and visual presentations (group and individual)", "AP exam preparation"]
        },
        {
          id: "el-ap-research", name: "AP Research", tier: "AP", weight: 5,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "AP Seminar", minGrade: null, note: "Score of 3+ on AP Seminar Exam Assessment Task" }],
          description: "Yearlong independent investigation of a topic of personal interest. Students develop research questions, employ ethical practices, analyze sources, and produce a 4000–5000 word academic paper with oral defense.",
          topics: ["Independent research investigation", "Research question development", "Ethical research practices", "Source analysis and synthesis", "4000–5000 word academic paper", "Oral presentation and defense"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // COMPUTER APPLICATIONS / COMPUTER SCIENCE
    // ══════════════════════════════════════════════════════════════════
    "Computer Science": {
      color: "#60a5fa",
      description: "Computer science and digital technology courses ranging from introductory programming to AP-level Java. Courses may be taken independently or as a progression.",
      courses: [
        {
          id: "el-intro-comp-lang", name: "Introduction to Computer Languages", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          note: "Not running in 2026-2027",
          description: "For students who want to explore computer programming or have no previous experience. Students explore three programming languages: Scratch, Visual Basic.Net, and C++. Problem-solving skills developed through real-world/business-related programs.",
          topics: ["Scratch programming", "Visual Basic.Net", "C++ fundamentals", "Problem solving with real-world applications"]
        },
        {
          id: "el-webdev", name: "Webpage Design & Development", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Introduction to the design, creation, and maintenance of web pages and websites. Students create professional-looking sites using Adobe Creative Suite with Dreamweaver and Flash, plus a review of HTML code.",
          topics: ["Web page design and creation", "Adobe Creative Suite", "HTML fundamentals", "Project-based environment"]
        },
        {
          id: "el-game-design", name: "Game Design & Application Development", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [{ course: null, minGrade: null, note: "Prior programming experience recommended" }],
          description: "Project-based curriculum teaching the game design and application development process. Students create action, adventure, and puzzle games using game design and creation software.",
          topics: ["Game design process", "Application development", "Action, adventure, and puzzle game creation", "Game creation software"]
        },
        {
          id: "el-java", name: "Foundations of JAVA", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Fundamental concepts of programming with algorithm design and code implementation in Java. Students write efficient programs including graphics, applets, and graphical shapes. Satisfies prerequisite for AP Computer Science A.",
          topics: ["Algorithm design and code implementation", "Java programming fundamentals", "Graphics and applets", "Individual and group projects", "Real-world case studies"]
        },
        {
          id: "el-ap-cs", name: "AP Computer Science A", tier: "AP", weight: 5,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "Foundations of JAVA", minGrade: null, note: "Successful completion" }],
          description: "Full-year course emphasizing object-oriented programming in Java. Students learn programming methodology with focus on problem solving, algorithm development, and data structures. Follows rigorous College Board curriculum.",
          topics: ["Object-oriented programming in Java", "Problem solving and algorithm development", "Data structures", "Programming projects and case studies", "AP exam preparation"]
        }
      ]
    },

    "Computer Science (Express)": {
      color: "#93c5fd",
      description: "Streamlined two-course path for students ready to jump straight into Java. Skip the intro courses and move directly from Java fundamentals to AP-level object-oriented programming.",
      courses: [
        {
          id: "el-java", name: "Foundations of JAVA", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Fundamental concepts of programming with algorithm design and code implementation in Java. Students write efficient programs including graphics, applets, and graphical shapes. Satisfies prerequisite for AP Computer Science A.",
          topics: ["Algorithm design and code implementation", "Java programming fundamentals", "Graphics and applets", "Individual and group projects", "Real-world case studies"]
        },
        {
          id: "el-ap-cs", name: "AP Computer Science A", tier: "AP", weight: 5,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "Foundations of JAVA", minGrade: null, note: "Successful completion" }],
          description: "Full-year course emphasizing object-oriented programming in Java. Students learn programming methodology with focus on problem solving, algorithm development, and data structures. Follows rigorous College Board curriculum.",
          topics: ["Object-oriented programming in Java", "Problem solving and algorithm development", "Data structures", "Programming projects and case studies", "AP exam preparation"]
        }
      ]
    },

    "Digital Creativity": {
      color: "#818cf8",
      description: "Applied technology track for students interested in the creative side of computing. Build websites and design games without the full programming sequence.",
      courses: [
        {
          id: "el-webdev", name: "Webpage Design & Development", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Introduction to the design, creation, and maintenance of web pages and websites. Students create professional-looking sites using Adobe Creative Suite with Dreamweaver and Flash, plus a review of HTML code.",
          topics: ["Web page design and creation", "Adobe Creative Suite", "HTML fundamentals", "Project-based environment"]
        },
        {
          id: "el-game-design", name: "Game Design & Application Development", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [{ course: null, minGrade: null, note: "Prior programming experience recommended" }],
          description: "Project-based curriculum teaching the game design and application development process. Students create action, adventure, and puzzle games using game design and creation software.",
          topics: ["Game design process", "Application development", "Action, adventure, and puzzle game creation", "Game creation software"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // BUSINESS ADMINISTRATION
    // ══════════════════════════════════════════════════════════════════
    "Online Financial Literacy": {
      color: "#34d399",
      description: "Required financial literacy course via Budget Challenge simulation.",
      courses: [
        {
          id: "el-fin-lit", name: "Online Financial Literacy (Budget Challenge)", tier: "CP", weight: 0,
          gradeLevel: "Grade 10 (required); Grades 11–12 if not yet completed", credits: "2.5 (semester)",
          prereqs: [],
          description: "Self-guided financial simulation where students manage budgets, make financial decisions, receive income, and pay bills. Covers emergency funds, retirement savings, and debt management. Fulfills NJ Financial Literacy graduation requirement.",
          topics: ["Budget management simulation", "Income, bills, and financial decisions", "Emergency fund and retirement savings", "Debt management"]
        }
      ]
    },

    "Business and Personal Law": {
      color: "#6ee7b7",
      description: "Standalone semester course in legal fundamentals.",
      courses: [
        {
          id: "el-biz-law", name: "Business and Personal Law", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Basic issues of the legal system relating to everyday living. Covers fundamental principles of law, history of laws, criminal/civil procedures, torts, and crimes through case studies and collaboration.",
          topics: ["Legal system fundamentals", "Criminal and civil procedures", "Torts and crimes", "Case studies and critical analysis"]
        }
      ]
    },

    "Introduction to Entrepreneurship": {
      color: "#4ade80",
      description: "Standalone semester course in entrepreneurship and business fundamentals.",
      courses: [
        {
          id: "el-entrepreneur", name: "Introduction to Entrepreneurship", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Students learn about e-commerce, market analysis, sales strategies, capital, management, and personnel. Includes guest speakers and computer simulations. Fulfills NJ Financial Literacy graduation requirement.",
          topics: ["Electronic commerce", "Market analysis and advertising", "Capital and management", "Guest speakers and simulations"]
        }
      ]
    },

    "Sports and Entertainment Marketing": {
      color: "#22c55e",
      description: "Standalone semester course in sports/entertainment marketing.",
      courses: [
        {
          id: "el-sports-mktg", name: "Sports and Entertainment Marketing", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Core marketing concepts as they apply to the sports and entertainment industries. Covers market research, sponsorship, endorsements, and target marketing through real-world applications, guest speakers, and venue visits.",
          topics: ["Market research and analysis", "Corporate sponsorship and endorsements", "Target marketing", "Guest speakers and venue visits"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // COMMUNICATION TECHNOLOGY
    // ══════════════════════════════════════════════════════════════════
    "Television Production": {
      color: "#f472b6",
      description: "Broadcast media track spanning TV production from intro to executive producer level, plus internet radio broadcasting.",
      courses: [
        {
          id: "el-tv1", name: "Television Production I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Introduction to television techniques and mass communication. Students write, direct, and produce videos as part of a production team. Covers studio practice, camera direction, lighting, and editing with special effects.",
          topics: ["Television production techniques", "Writing, directing, and producing videos", "Camera direction and lighting", "Editing and special effects"]
        },
        {
          id: "el-tv2", name: "Television Production II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "TV Production I", minGrade: null, note: "Successful completion" }],
          description: "Advanced course building on TV Production I. Students act as producers and directors of the cable TV show, develop morning announcements, and manage various projects throughout the year.",
          topics: ["Producer and director roles", "Cable TV show management", "Morning announcements", "Advanced production projects"]
        },
        {
          id: "el-tv3", name: "Television Production III", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "TV Production II", minGrade: null, note: "Successful completion" }],
          description: "Independent study for producing various video products. Students serve as executive producers and produce special segments, applying knowledge from TV Production I and II.",
          topics: ["Executive producer role", "Independent video production", "Special segments", "Applied production skills"]
        },
        {
          id: "el-radio", name: "Radio Broadcasting", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Experience in internet-based radio broadcasting using live and pre-recorded formats. Students develop skills as on-air talent, producers, PR/marketing, and studio engineers. Includes music programming and live broadcast of MHS sports and events.",
          topics: ["Internet radio studio operation", "Live and pre-recorded formats", "Music programming and talk shows", "Live sports and events broadcasting"]
        }
      ]
    },

    "Television Production (Only)": {
      color: "#f9a8d4",
      description: "Three-course television production track without Radio Broadcasting. Focuses solely on TV production from intro techniques through executive producer level.",
      courses: [
        {
          id: "el-tv1", name: "Television Production I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Introduction to television techniques and mass communication. Students write, direct, and produce videos as part of a production team. Covers studio practice, camera direction, lighting, and editing with special effects.",
          topics: ["Television production techniques", "Writing, directing, and producing videos", "Camera direction and lighting", "Editing and special effects"]
        },
        {
          id: "el-tv2", name: "Television Production II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "TV Production I", minGrade: null, note: "Successful completion" }],
          description: "Advanced course building on TV Production I. Students act as producers and directors of the cable TV show, develop morning announcements, and manage various projects throughout the year.",
          topics: ["Producer and director roles", "Cable TV show management", "Morning announcements", "Advanced production projects"]
        },
        {
          id: "el-tv3", name: "Television Production III", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "TV Production II", minGrade: null, note: "Successful completion" }],
          description: "Independent study for producing various video products. Students serve as executive producers and produce special segments, applying knowledge from TV Production I and II.",
          topics: ["Executive producer role", "Independent video production", "Special segments", "Applied production skills"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // INDUSTRIAL ARTS / PRE-ENGINEERING
    // ══════════════════════════════════════════════════════════════════
    "Engineering": {
      color: "#fb923c",
      description: "Three-course engineering design track with CAD, 3D printing, and a senior portfolio capstone.",
      courses: [
        {
          id: "el-eng1", name: "Engineering I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Engineering design fundamentals. Students learn isometric sketching, 2D and 3D CAD/CADD, and precision measurement through reverse engineering and design projects. For students interested in pursuing engineering in college.",
          topics: ["Isometric sketching", "2D and 3D CAD/CADD", "Precision measuring equipment", "Reverse engineering and design projects"]
        },
        {
          id: "el-eng2", name: "Engineering II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "Engineering I", minGrade: null, note: "Successful completion" }],
          description: "Continues from Engineering I with 3D CAD assemblies using materials, bearings, bushings, and gears. Covers advanced engineering drawing, material science, and the design process. Students learn to use a 3D printer.",
          topics: ["3D CAD assemblies", "Advanced engineering drawing", "Basic material science", "3D printing", "Engineering career exploration"]
        },
        {
          id: "el-cad-portfolio", name: "Portfolio Project — Computer Aided Drafting & Design", tier: "CP", weight: 0,
          gradeLevel: "Grade 12", credits: "5",
          prereqs: [{ course: "Level I + Level II Technology Education course", minGrade: null, note: "Senior year only" }],
          description: "Professional portfolio development with concentration in CAD, robotic systems, power & energy, or graphic information systems. Can be used to investigate careers or prepare for college.",
          topics: ["Professional portfolio development", "CAD and design concentration", "Career and college preparation"]
        }
      ]
    },

    "Architectural Design": {
      color: "#f97316",
      description: "Two-course architecture track with optional senior portfolio project.",
      courses: [
        {
          id: "el-arch1", name: "Architectural Design I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Fundamentals of architectural design principles and techniques. Students learn hand sketching and CAD for architectural design. Emphasis on residential and commercial systems design, planning, and construction.",
          topics: ["Hand sketching plans", "Computer Aided Design (CAD)", "Residential design: houses, kitchens, bathrooms", "Commercial systems overview"]
        },
        {
          id: "el-arch2", name: "Architectural Design II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "Architectural Design I", minGrade: null, note: "Successful completion" }],
          description: "Advanced architectural design with extensive CAD use. Covers detailed design of residential and commercial buildings including planning a commercial project, managing home construction, and remodeling projects.",
          topics: ["Advanced CAD for architecture", "Commercial project planning", "Home construction management", "Remodeling projects"]
        },
        {
          id: "el-arch-portfolio", name: "Portfolio Project — Architecture", tier: "CP", weight: 0,
          gradeLevel: "Grade 12", credits: "5",
          prereqs: [{ course: "Level I + Level II Technology Education course", minGrade: null, note: "Senior year only" }],
          description: "Professional portfolio development in architectural design. Investigate a potential career or prepare for a college course of study.",
          topics: ["Professional portfolio development", "Architectural design concentration", "Career and college preparation"]
        }
      ]
    },

    "Engineering Design & Material Fabrication": {
      color: "#ea580c",
      description: "Three-course material fabrication track from intro skills to a senior portfolio project.",
      courses: [
        {
          id: "el-fab1", name: "Engineering Design & Material Fabrication I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Fundamentals of material processing techniques with emphasis on safety. Project-oriented, teaching hand, power, and machine tool skills. Explores manual operations and automated equipment.",
          topics: ["Material processing techniques", "Safety fundamentals", "Hand, power, and machine tool skills", "Manual and automated operations"]
        },
        {
          id: "el-fab2", name: "Engineering Design & Material Fabrication II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "Engineering Design & Material Fabrication I", minGrade: null, note: "Successful completion" }],
          description: "Continues materials processing exploration. Students design and develop a full-year approved project. Reemphasizes safety with real-world design activities.",
          topics: ["Advanced materials processing", "Full-year approved project", "Design and development", "Real-world design impact"]
        },
        {
          id: "el-fab-portfolio", name: "Engineering Design & Material Fabrication: Portfolio Project", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "Engineering Design & Material Fabrication II", minGrade: null, note: "Successful completion" }],
          description: "Professional portfolio development. Students choose from existing plans or create unique designs. May create refined woodworking projects. Covers cost analysis, budgeting, deadlines, and production output.",
          topics: ["Professional portfolio development", "Custom design or existing plans", "Cost analysis and budgeting", "Production output management"]
        }
      ]
    },

    "Media & Graphic Communication": {
      color: "#cc4d1e",
      description: "Two-course graphic communication track with optional senior portfolio.",
      courses: [
        {
          id: "el-media1", name: "Media & Graphic Communication I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Foundations of modern printing, photography, computer graphics, and graphic reproduction. Includes lithographic technology, screen making, and sketching/typography.",
          topics: ["Printing and graphic reproduction", "Computer graphics", "Lithographic technology", "Screen making and typography"]
        },
        {
          id: "el-media2", name: "Media & Graphic Communication II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: "Media & Graphic Communication I", minGrade: null, note: "Successful completion" }],
          description: "Advanced printing, computer graphics, and graphic reproduction techniques. Students master screen making and printing and participate in career opportunities in communication technology.",
          topics: ["Advanced printing techniques", "Advanced computer graphics", "Screen making and printing mastery", "Career opportunities in communication tech"]
        },
        {
          id: "el-media-portfolio", name: "Portfolio Project — Media & Graphics Communication", tier: "CP", weight: 0,
          gradeLevel: "Grade 12", credits: "5",
          prereqs: [{ course: "Level I + Level II Technology Education course", minGrade: null, note: "Senior year only" }],
          description: "Professional portfolio development in media and graphics communication.",
          topics: ["Professional portfolio development", "Graphic communication concentration", "Career and college preparation"]
        }
      ]
    },

    "Power, Energy & Transportation": {
      color: "#c26010",
      description: "Standalone semester course on engine technology and transportation.",
      courses: [
        {
          id: "el-power-energy", name: "Power, Energy & Transportation Technology", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "History and development of the internal combustion engine. Students learn theory of operation for 2-stroke and 4-stroke engines, perform full disassembly/reassembly, test engine parts, and paint and test engines.",
          topics: ["Internal combustion engine theory", "2-stroke and 4-stroke engines", "Engine disassembly and reassembly", "Testing and operation"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // FAMILY & CONSUMER SCIENCES / CULINARY ARTS
    // ══════════════════════════════════════════════════════════════════
    "Culinary Arts": {
      color: "#f87171",
      description: "Culinary track covering food preparation, international cuisine, and baking.",
      courses: [
        {
          id: "el-culinary1", name: "Introduction to Culinary Arts", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Basic techniques of food preparation. Students prepare appetizers, entrees, side dishes, desserts, and snacks across all food groups. Covers nutrition, meal preparation, sanitation, and food service careers.",
          topics: ["Basic food preparation techniques", "Appetizers, entrees, desserts, and snacks", "Nutrition and food selection", "Sanitation and food service"]
        },
        {
          id: "el-culinary2", name: "Culinary Arts II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Introduction to Culinary Arts", minGrade: null, note: "Successful completion" }],
          description: "International and ethnic cuisine as cultural identity. Students analyze the interrelationship between cuisine and culture for countries such as France, Japan, Italy, China, and Mexico. Covers garnishing and plate presentation.",
          topics: ["International and ethnic cuisine", "Cuisine and culture interrelationship", "Garnishing and plate presentation", "Nutrition, safety, and food-borne illness"]
        },
        {
          id: "el-baking", name: "The Art of Baking", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Baking and cake decorating experience. Students research, bake to industry standard, and decorate various types of cakes. Project-based, student-driven curriculum.",
          topics: ["Cake making and decorating", "Baking to industry standard", "Research and technique development", "Transferable baking skills"]
        }
      ]
    },

    "Culinary: Baking Focus": {
      color: "#fca5a5",
      description: "Two-course path for students with a passion for baking and pastry. Begin with culinary fundamentals, then specialize in cakes, decorating, and baking to industry standards.",
      courses: [
        {
          id: "el-culinary1", name: "Introduction to Culinary Arts", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Basic techniques of food preparation. Students prepare appetizers, entrees, side dishes, desserts, and snacks across all food groups. Covers nutrition, meal preparation, sanitation, and food service careers.",
          topics: ["Basic food preparation techniques", "Appetizers, entrees, desserts, and snacks", "Nutrition and food selection", "Sanitation and food service"]
        },
        {
          id: "el-baking", name: "The Art of Baking", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Baking and cake decorating experience. Students research, bake to industry standard, and decorate various types of cakes. Project-based, student-driven curriculum.",
          topics: ["Cake making and decorating", "Baking to industry standard", "Research and technique development", "Transferable baking skills"]
        }
      ]
    },

    "Life Skills": {
      color: "#f03566",
      description: "Standalone semester course preparing students for self-sufficiency.",
      courses: [
        {
          id: "el-life-skills", name: "Life Skills", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Prepares students for self-sufficiency and independence. Covers career selection, resumes, job acquisition, consumer skills, housing, insurance, resources, and ethical decision-making.",
          topics: ["Career selection and resumes", "Consumer skills and budgeting", "Housing and insurance", "Decision-making and ethical choices"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // VISUAL ART
    // ══════════════════════════════════════════════════════════════════
    "Studio Art": {
      color: "#c084fc",
      description: "Progressive five-course visual arts track from foundations through honors portfolio to AP Studio Art.",
      courses: [
        {
          id: "el-intro-art", name: "Introduction to Studio Art", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Foundation in visual arts and design. Students explore painting, drawing, sculpture, and other media. Grades based on willingness to experiment and explore creativity.",
          topics: ["Painting and drawing", "Sculpture and mixed media", "Basic art concepts", "Creative exploration"]
        },
        {
          id: "el-studio1", name: "Studio I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Introduction to Studio Art", minGrade: null, note: "Successful completion (or UMS art teacher recommendation)" }],
          description: "New materials and techniques through guided concepts. Students explore concepts through their own individual voice and develop visual literacy. Prepares for Studio II.",
          topics: ["New materials and techniques", "Guided concepts and assignments", "Individual voice development", "Visual literacy"]
        },
        {
          id: "el-studio2", name: "Studio II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Studio I", minGrade: null, note: "Successful completion" }],
          description: "Students polish technical skills and explore personal themes. Includes advanced media, art history, contemporary trends, and career opportunities. Portfolio guidance provided.",
          topics: ["Advanced media and techniques", "Personal themes and inspiration", "Art history and contemporary trends", "Portfolio guidance and career exploration"]
        },
        {
          id: "el-honors-portfolio", name: "Honors Portfolio", tier: "Honors", weight: 5,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "Studio II", minGrade: null, note: "Successful completion" }],
          description: "Year-long course developing a college portfolio showcasing technical and conceptual achievements at levels synonymous with college art majors. Students participate in the Visual Arts Extravaganza. Prepares for AP Studio.",
          topics: ["College portfolio development", "Advanced technical and conceptual work", "Visual Arts Extravaganza participation", "Independent growth with peer feedback", "Preparation for AP Studio"]
        },
        {
          id: "el-ap-studio", name: "AP Studio Art or 2D Portfolio", tier: "AP", weight: 5,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "Honors Portfolio OR both Advanced Digital and Advanced Darkroom Photography", minGrade: null, note: "Interview with art faculty for concentration placement" }],
          description: "Year-long development of a consistent theme-based body of 12 pieces displayed gallery-style at Art Extravaganza. Students produce a portfolio for college applications and optional College Board evaluation. High commitment and self-discipline required.",
          topics: ["Theme-based body of 12 works", "Gallery-style Art Extravaganza exhibit", "College portfolio production", "Optional College Board evaluation", "Independent artistic direction"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PHOTOGRAPHY
    // ══════════════════════════════════════════════════════════════════
    "Photography": {
      color: "#a855f7",
      description: "Progressive photography track from analog foundations to advanced techniques and AP Photo / 2D Portfolio.",
      courses: [
        {
          id: "el-photo1", name: "Photography I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Foundation in 35mm black and white analog photography with a strong visual arts base. Introduces the four areas of fine arts study: Themes and Forms, Core Concepts, Techniques and Tools, Culture and History. 35mm manual camera recommended.",
          topics: ["35mm black and white analog photography", "Darkroom fundamentals", "Themes, forms, and core art concepts", "Culture and history of photography"]
        },
        {
          id: "el-photo2", name: "Photography II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Photography I", minGrade: null, note: "Successful completion" }],
          description: "Foundation in digital photography and post-processing with Adobe Lightroom. Independent problem solving for conceptual artworks. Digital camera recommended.",
          topics: ["Digital photography", "Adobe Lightroom post-processing", "Conceptual artwork development", "Independent problem solving"]
        },
        {
          id: "el-adv-digital-photo", name: "Advanced Digital Photography", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Photography I and II", minGrade: null, note: "Successful completion" }],
          description: "Advanced student-centered conceptual projects with studio lighting and Adobe Photoshop. Students use DSLR cameras, create visual narratives with symbolism, and showcase work in a solo exhibit at Art Extravaganza. Sets up for AP Studio 2D.",
          topics: ["Advanced studio lighting", "Adobe Photoshop techniques", "DSLR photography", "Visual narrative and symbolism", "Solo exhibit at Art Extravaganza"]
        },
        {
          id: "el-adv-darkroom", name: "Advanced Darkroom Photography", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Photography I", minGrade: null, note: "Successful completion; Photo II and Adv Digital recommended" }],
          description: "Advanced analog alternative processes including cyanotypes, photo transfers, and advanced darkroom techniques. Student-centered conceptual projects with solo exhibit at Art Extravaganza. Sets up for AP Studio 2D.",
          topics: ["Cyanotypes and photo transfers", "Advanced darkroom techniques", "Alternative analog processes", "Conceptual projects and solo exhibit"]
        },
        {
          id: "el-ap-photo", name: "AP Photo / 2D Portfolio", tier: "AP", weight: 5,
          gradeLevel: "Grades 11–12", credits: "5",
          prereqs: [{ course: "Honors Portfolio OR both Advanced Digital and Advanced Darkroom Photography", minGrade: null, note: "Interview with art faculty for concentration placement" }],
          description: "Intensive guided exploration of photography for art-making. Students experience a variety of concepts, techniques, and approaches, producing a college portfolio and solo exhibit at Art Extravaganza. Optional College Board evaluation.",
          topics: ["Intensive photography exploration", "Demonstrations and group critiques", "College portfolio production", "Solo exhibit at Art Extravaganza", "Optional College Board evaluation"]
        }
      ]
    },

    "Photography Essentials": {
      color: "#c4b5fd",
      description: "Self-contained two-course path covering analog foundations and digital technique. Ideal for students who want to explore photography without committing to the advanced or AP sequence.",
      courses: [
        {
          id: "el-photo1", name: "Photography I", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Foundation in 35mm black and white analog photography with a strong visual arts base. Introduces the four areas of fine arts study: Themes and Forms, Core Concepts, Techniques and Tools, Culture and History. 35mm manual camera recommended.",
          topics: ["35mm black and white analog photography", "Darkroom fundamentals", "Themes, forms, and core art concepts", "Culture and history of photography"]
        },
        {
          id: "el-photo2", name: "Photography II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Photography I", minGrade: null, note: "Successful completion" }],
          description: "Foundation in digital photography and post-processing with Adobe Lightroom. Independent problem solving for conceptual artworks. Digital camera recommended.",
          topics: ["Digital photography", "Adobe Lightroom post-processing", "Conceptual artwork development", "Independent problem solving"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // CERAMICS
    // ══════════════════════════════════════════════════════════════════
    "Ceramics": {
      color: "#d946ef",
      description: "Three-course ceramics progression from fundamentals to advanced artistic voice.",
      courses: [
        {
          id: "el-ceramics1", name: "Ceramics", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Explores hand-built and wheel-thrown ceramics. Students develop awareness of Elements and Principles of Design in sculptural form, bas relief, and pottery through additive, subtractive, wheel-thrown, and glazing methods.",
          topics: ["Hand-built ceramics", "Wheel-thrown pottery", "Additive and subtractive methods", "Glazing techniques", "Elements and Principles of Design"]
        },
        {
          id: "el-ceramics2", name: "Ceramics II", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Ceramics", minGrade: null, note: "Successful completion" }],
          description: "Advanced ceramic arts with sculptural forms and experimental techniques. Students further develop wheel skills, personal artistic style, and begin developing their artist voice in clay.",
          topics: ["Sculptural forms", "Experimental techniques", "Advanced wheel throwing", "Personal artistic style development"]
        },
        {
          id: "el-ceramics-adv", name: "Advanced Ceramics", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Ceramics II", minGrade: null, note: "Successful completion" }],
          description: "Development of individual style in wheel-thrown and hand-built forms with surface treatment explorations. Students investigate contemporary concepts through development of a unique series. Eligible for Seton Hall concurrent enrollment.",
          topics: ["Individual artistic style", "Surface treatment explorations", "Slip casting and advanced fabrication", "Contemporary concept series"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PERFORMING ARTS — BAND
    // ══════════════════════════════════════════════════════════════════
    "Band": {
      color: "#38bdf8",
      description: "Three-tier band program plus senior Honors option. Placement by audition.",
      courses: [
        {
          id: "el-symph-band", name: "Symphonic Band", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of band in previous year or successful audition with director permission" }],
          description: "Concert band for grades 9–12. Develops instrumental proficiency, ensemble skills, musical knowledge, and self-discipline. Performs Grade III–IV repertoire at a minimum of three concerts per year.",
          topics: ["Instrumental proficiency development", "Concert band ensemble skills", "Grade III–IV repertoire", "Minimum three performances per year"]
        },
        {
          id: "el-symph-winds", name: "Symphonic Winds", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of band in previous year + successful audition with director permission" }],
          description: "Select auditioned ensemble primarily for grades 10–12 (9th graders may audition in spring of 8th grade). Performs Grade III–V repertoire at a minimum of three concerts per year.",
          topics: ["Auditioned select ensemble", "Grade III–V repertoire", "Advanced instrumental skills", "Minimum three performances per year"]
        },
        {
          id: "el-wind-ensemble", name: "Wind Ensemble", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of curricular band + successful audition with director" }],
          description: "Highest skill-level curricular band. Rigorous study of advanced repertoire normally performed at the collegiate or professional level. Grade IV–VI repertoire. Four+ performances per year, possible weekend rehearsals.",
          topics: ["Collegiate/professional level repertoire", "Grade IV–VI repertoire", "Advanced instrumental pedagogy", "Four+ performances per year"]
        },
        {
          id: "el-wind-ensemble-h", name: "Wind Ensemble Honors", tier: "Honors", weight: 5,
          gradeLevel: "Grade 12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Senior year only; successful audition with band director" }],
          description: "Senior Honors option meeting at the same time as Wind Ensemble. Additional requirements include preparing for and participating in at least one chamber music performance and researching repertoire with historical concert notes.",
          topics: ["All Wind Ensemble requirements", "Chamber music performance", "Repertoire research", "Historical concert notes preparation"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PERFORMING ARTS — ORCHESTRA
    // ══════════════════════════════════════════════════════════════════
    "Orchestra": {
      color: "#0ea5e9",
      description: "Three-tier orchestra program plus senior Honors option. Placement by audition.",
      courses: [
        {
          id: "el-concert-orch", name: "Concert Orchestra", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of orchestra in previous year or successful audition with director permission" }],
          description: "String orchestra for grades 9–12. Develops individual instrumental proficiency, string ensemble skills, and musical knowledge. Performs Grade III–IV repertoire at a minimum of three concerts per year.",
          topics: ["String instrumental proficiency", "String orchestra ensemble skills", "Grade III–IV repertoire", "Minimum three performances per year"]
        },
        {
          id: "el-symph-orch", name: "Symphonic Orchestra", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of curricular orchestra + successful audition with director permission" }],
          description: "Select auditioned ensemble primarily for grades 10–12. Performs Grade III–V repertoire at a minimum of three concerts per year. Instrumentation and balance are rigidly governed.",
          topics: ["Auditioned select ensemble", "Grade III–V repertoire", "Orchestral ensemble skills", "Minimum three performances per year"]
        },
        {
          id: "el-chamber-orch", name: "Chamber Orchestra", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of curricular orchestra + successful audition with director" }],
          description: "Highest skill-level curricular orchestra. Rigorous study of advanced string and full orchestra repertoire at collegiate/professional level. Grade IV–VI repertoire. Four+ performances per year, possible weekend rehearsals.",
          topics: ["Collegiate/professional level repertoire", "Grade IV–VI repertoire", "Advanced string pedagogy", "Four+ performances per year"]
        },
        {
          id: "el-chamber-orch-h", name: "Chamber Orchestra Honors", tier: "Honors", weight: 5,
          gradeLevel: "Grade 12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Senior year only; successful audition with orchestra director" }],
          description: "Senior Honors option meeting at the same time as Chamber Orchestra. Additional requirements include chamber music performance and repertoire research with historical concert notes.",
          topics: ["All Chamber Orchestra requirements", "Chamber music performance", "Repertoire research", "Historical concert notes preparation"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PERFORMING ARTS — CHOIR
    // ══════════════════════════════════════════════════════════════════
    "Choir": {
      color: "#06b6d4",
      description: "Three-tier vocal program plus senior Honors option. Placement by audition for upper tiers.",
      courses: [
        {
          id: "el-concert-choir", name: "Concert Choir", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "5",
          prereqs: [],
          description: "Dynamic and challenging musical environment through a variety of vocal music genres. Develops vocal skills, ensemble singing appreciation, musicianship, and self-confidence. Concert performances required.",
          topics: ["Vocal skill development", "Ensemble singing across genres", "Musicianship fundamentals", "Concert performances required"]
        },
        {
          id: "el-chorale", name: "Chorale", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Completion of choir in previous year + audition and director permission" }],
          description: "Full-year ensemble focusing on challenging soprano and alto voicing. Advanced vocal technique, sight-reading, musicianship through literature from various styles, genres, cultures, and eras.",
          topics: ["Soprano and alto repertoire", "Advanced vocal technique", "Sight-reading and musicianship", "Literature across styles and cultures"]
        },
        {
          id: "el-chamber-choir", name: "Chamber Choir", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Successful audition and recommendation of director" }],
          description: "Smaller advanced-level vocal group for students with outstanding vocal skills and musicianship. Performs advanced high school, collegiate, and professional level repertoire. Active participation in concerts and festivals required.",
          topics: ["Advanced vocal ensemble", "Collegiate/professional level repertoire", "Concerts, festivals, and performance venues", "Wide variety of rigorous literature"]
        },
        {
          id: "el-chamber-choir-h", name: "Chamber Choir Honors", tier: "Honors", weight: 5,
          gradeLevel: "Grade 12", credits: "5",
          prereqs: [{ course: null, minGrade: null, note: "Senior year only; successful audition with choir director" }],
          description: "Senior Honors option meeting at the same time as Chamber Choir. Additional requirements include chamber/solo music performance and repertoire research with historical concert notes.",
          topics: ["All Chamber Choir requirements", "Chamber or solo music performance", "Repertoire research", "Historical concert notes preparation"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PERFORMING ARTS — MUSIC (OTHER)
    // ══════════════════════════════════════════════════════════════════
    "Introduction to Guitar": {
      color: "#7dd3fc",
      description: "Standalone semester course for learning guitar.",
      courses: [
        {
          id: "el-guitar", name: "Introduction to Guitar", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [{ course: null, minGrade: null, note: "None — experienced players should discuss placement with teacher" }],
          description: "Learn, play, and perform on the guitar. Covers melodic and chordal playing as well as music theory concepts applicable to guitar performance. Perfect for beginners.",
          topics: ["Melodic and chordal playing", "Music theory for guitar", "Performance skills", "Suitable for all experience levels"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PERFORMING ARTS — DANCE
    // ══════════════════════════════════════════════════════════════════
    "Dance": {
      color: "#e879f9",
      description: "Two-course dance track from introductory movement to advanced choreography.",
      courses: [
        {
          id: "el-dance", name: "Dance", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Semester-long exploration of dance styles including hip-hop, African, Latinx, Bollywood, ballet, jazz, contemporary, and more. Students develop coordination, flexibility, strength, musicality, and body awareness. Culminates in creating original choreography and an evening performance.",
          topics: ["Hip-hop, African, Latinx, Bollywood, ballet, jazz, contemporary", "Coordination, flexibility, and strength", "Original choreography creation", "Evening performance"]
        },
        {
          id: "el-dance-tech", name: "Dance Techniques and Choreography", tier: "CP", weight: 0,
          gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
          prereqs: [{ course: null, minGrade: null, note: "Permission of teacher or completion of a previous dance class at UMS or MHS" }],
          description: "Performance-based course for students ready for the next level. Deeper technical development and creative exploration. Students learn choreographic devices, create longer original works, develop leadership, and explore teaching methods. Includes evening performance.",
          topics: ["Advanced technical development", "Choreographic devices and direction", "Leadership and collaboration", "Teaching choreography to others", "Evening performance"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PERFORMING ARTS — THEATER
    // ══════════════════════════════════════════════════════════════════
    "Theater Arts": {
      color: "#fb923c",
      description: "Theater courses covering performance, production, public speaking, and technical theater — any may be taken independently.",
      courses: [
        {
          id: "el-theater-arts", name: "Theater Arts", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Fundamentals of theater through improv games, monologues, and scene study. Students learn theater history, voice and movement, improvisation, character development, and script analysis across time periods and cultures.",
          topics: ["Improv games and monologues", "Scene study and script analysis", "Theater history", "Voice, movement, and character development"]
        },
        {
          id: "el-children-theater", name: "Children's Theater Play Production", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Full process of play production — choosing, casting, rehearsing, building, and performing a children's theater show. Students tour the school district performing for younger audiences.",
          topics: ["Play production from start to finish", "Casting, rehearsing, and building", "Performing for younger audiences", "School district tour"]
        },
        {
          id: "el-speech", name: "The Art of Speech and Presentation", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Teaches effective presentation delivery using theater techniques — pacing, inflection, body language, annunciation, and audience awareness. Includes storytelling, interpretive reading, and persuasive performance.",
          topics: ["Presentation preparation and delivery", "Pacing, inflection, and body language", "Storytelling and interpretive reading", "Persuasive performance"]
        },
        {
          id: "el-theater-design", name: "Theater Design, Technology and Stage Management", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Non-performance aspects of theatrical production including set design, lighting, properties, sound, costumes, hair/makeup, stage management, and production management. Hands-on experience in the MHS Performing Arts Center.",
          topics: ["Set design and lighting", "Sound, costumes, and properties", "Stage management and production management", "MHS Performing Arts Center experience"]
        }
      ]
    },

    "Technical Theater & Communication": {
      color: "#fdba74",
      description: "Behind-the-scenes theater track paired with public speaking skills. Ideal for students interested in production, design, and professional communication rather than on-stage performance.",
      courses: [
        {
          id: "el-theater-design", name: "Theater Design, Technology and Stage Management", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Non-performance aspects of theatrical production including set design, lighting, properties, sound, costumes, hair/makeup, stage management, and production management. Hands-on experience in the MHS Performing Arts Center.",
          topics: ["Set design and lighting", "Sound, costumes, and properties", "Stage management and production management", "MHS Performing Arts Center experience"]
        },
        {
          id: "el-speech", name: "The Art of Speech and Presentation", tier: "CP", weight: 0,
          gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Teaches effective presentation delivery using theater techniques — pacing, inflection, body language, annunciation, and audience awareness. Includes storytelling, interpretive reading, and persuasive performance.",
          topics: ["Presentation preparation and delivery", "Pacing, inflection, and body language", "Storytelling and interpretive reading", "Persuasive performance"]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // CAREER EXPLORATION (Journalism already in English; these are standalone)
    // ══════════════════════════════════════════════════════════════════
    "Tomorrow's Teachers": {
      color: "#a3e635",
      description: "Two-part education program for juniors and seniors with Rider University credit opportunity.",
      courses: [
        {
          id: "el-teachers1", name: "Tomorrow's Teachers Part 1: Learning/Educational Theory", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
          prereqs: [],
          description: "Study of the history, development, organization, and practices of education. Explores learning styles, special needs, growth and development, ethics, and professionalism. Includes NJFEA membership.",
          topics: ["History and development of education", "Learning styles and special needs", "Growth, development, and ethics", "NJFEA membership and service projects"]
        },
        {
          id: "el-teachers2", name: "Tomorrow's Teachers Part 2: Practical Applications/Internship", tier: "CP", weight: 0,
          gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
          prereqs: [{ course: "Tomorrow's Teachers Part 1", minGrade: null, note: "Successful completion" }],
          description: "Practical application through internship. Students work with a cooperating teacher to observe classes, create lesson plans, and co-teach lessons. Rider University college credit opportunity available.",
          topics: ["Classroom observation", "Lesson plan creation", "Co-teaching experience", "Rider University college credit opportunity"]
        }
      ]
    }
  }
};

// ─── Track Colors ────────────────────────────────────────────────────
// Generate dynamically from the tracks object — each track inherits its color.
export const electiveTrackColors = Object.fromEntries(
  Object.entries(electiveTracks.tracks).map(([name, track]) => [
    name,
    { bg: track.color, text: "#000", label: name, activeClass: `active-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}` }
  ])
);

// ─── Electives — Full Program of Studies (course catalog) ────────────
// Matches the format of mathProgramOfStudies: array of category objects,
// each containing a courses array with id, name, tier, weight, gradeLevel,
// credits, prereqs, description, and topics.

export const electivesProgramOfStudies = [
  // ══════════════════════════════════════════════════════════════════
  // AP CAPSTONE PROGRAM
  // ══════════════════════════════════════════════════════════════════
  {
    category: "AP Capstone Program",
    color: "#f59e0b",
    grades: "Grades 10–12",
    courses: [
      {
        id: "pos-ap-seminar", name: "AP Seminar", tier: "AP", weight: 5,
        gradeLevel: "Grades 10–11", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Teacher recommendation and completed application" }],
        description: "A foundational course that engages students in cross-curricular conversations exploring the complexities of academic and real-world topics by analyzing divergent perspectives. Students practice reading and analyzing articles, research studies, foundational and philosophical texts, speeches, broadcasts, and artistic works. They learn to synthesize information, develop perspectives in written essays, and deliver oral and visual presentations both collaboratively and individually.",
        topics: ["Cross-curricular inquiry framework", "Analyzing articles, research studies, and philosophical texts", "Listening to speeches, broadcasts, and personal accounts", "Synthesizing multiple sources", "Written essays and evidence-based arguments", "Oral and visual presentations (group and individual)", "AP exam preparation"]
      },
      {
        id: "pos-ap-research", name: "AP Research", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "AP Seminar", minGrade: null, note: "Score of 3+ on AP Seminar Exam Assessment Task" }],
        description: "The second course in the AP Capstone progression. Students engage in a yearlong investigation of a topic of personal interest, developing research questions, employing ethical research practices, and synthesizing information. Students produce a 4000–5000 word academic paper and present and defend their work. Successful completion may earn an AP Capstone Diploma or AP Seminar and Research Certificate.",
        topics: ["Independent yearlong research investigation", "Research question development and refinement", "Ethical research practices", "Source analysis, evaluation, and synthesis", "Process and reflection portfolio", "4000–5000 word academic paper", "Oral presentation and defense"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // COMPUTER APPLICATIONS / COMPUTER SCIENCE
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Computer Applications / Computer Science",
    color: "#60a5fa",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-java", name: "Foundations of JAVA", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Java is one of the fastest-growing programming languages. Students learn fundamental concepts of programming with algorithm design and code implementation. They write efficient programs including graphics, build applets, and create graphical shapes through individual and group projects and real-world case studies. Satisfies the prerequisite for AP Computer Science A.",
        topics: ["Algorithm design and code implementation", "Java programming fundamentals", "Graphics and applets", "Individual and group programming projects", "Real-world case studies"]
      },
      {
        id: "pos-game-design", name: "Game Design & Application Development", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "Prior programming experience recommended but not required" }],
        description: "A project-based curriculum that teaches the game design and application development process. Students are introduced to game design and creation software to create many types of games and applications including action, adventure, and puzzle.",
        topics: ["Game design process", "Application development", "Action, adventure, and puzzle game creation", "Game creation software"]
      },
      {
        id: "pos-webdev", name: "Webpage Design & Development", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Introduction to the design, creation, and maintenance of visually dynamic web pages and websites. Students create professional-looking websites using Adobe Creative Suite featuring Dreamweaver and Flash. A brief review of HTML code is included.",
        topics: ["Web page design and creation", "Adobe Creative Suite (Dreamweaver, Flash)", "HTML code review", "Project-based environment"]
      },
      {
        id: "pos-ap-cs", name: "AP Computer Science A", tier: "AP", weight: 5,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "Foundations of JAVA", minGrade: null, note: "Successful completion" }],
        description: "A full-year course with emphasis on object-oriented programming in Java. Students learn programming methodology focused on problem solving, algorithm development, and data structures. Consists of several programming projects and case studies following the rigorous College Board Java curriculum.",
        topics: ["Object-oriented programming in Java", "Problem solving and algorithm development", "Data structures", "Programming projects and case studies", "AP exam preparation"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // BUSINESS ADMINISTRATION
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Business Administration",
    color: "#34d399",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-fin-lit", name: "Online Financial Literacy (Budget Challenge)", tier: "CP", weight: 0,
        gradeLevel: "Grade 10 (required); Grades 11–12 if not yet completed", credits: "2.5 (semester)",
        prereqs: [],
        description: "A self-guided one-semester class where students participate in a 10-week online financial simulation called Budget Challenge. Students manage budgets, make financial decisions, receive income, pay bills, and work toward goals such as emergency funds, retirement savings, and debt management. Fulfills the NJ State Graduation Requirement for Financial, Economic, and Entrepreneurial Literacy.",
        topics: ["Budget management simulation", "Income, bills, and financial decisions", "Emergency fund and retirement savings", "Debt management", "NJ Financial Literacy graduation requirement"]
      },
      {
        id: "pos-biz-law", name: "Business and Personal Law", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Students learn about the basic issues of the legal system relating to everyday living including fundamental principles of law, history of laws, criminal/civil procedures, and various torts and crimes. Critical analysis through case studies and small group collaboration.",
        topics: ["Legal system fundamentals", "History of laws", "Criminal and civil procedures", "Torts and crimes", "Case studies and critical analysis"]
      },
      {
        id: "pos-entrepreneur", name: "Introduction to Entrepreneurship", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Students learn about e-commerce, market analysis, sales and advertising strategies, capital, management techniques, and personnel management. Includes guest speakers and computer simulations. Fulfills the NJ Financial Literacy graduation requirement.",
        topics: ["Electronic commerce", "Market analysis and advertising strategies", "Capital and management techniques", "Personnel management", "Guest speakers and simulations"]
      },
      {
        id: "pos-sports-mktg", name: "Sports and Entertainment Marketing", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Core marketing and business concepts as they apply to the sports and entertainment industries. Covers market research, corporate sponsorship, endorsements, and target marketing through real-world applications, guest speakers from industry, case studies, and venue visits.",
        topics: ["Market research and analysis", "Corporate sponsorship and endorsements", "Target marketing", "Critical thinking and decision making", "Guest speakers and venue visits"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // COMMUNICATION TECHNOLOGY
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Communication Technology",
    color: "#f472b6",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-tv1", name: "Television Production I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Introduction to television techniques and mass communication. Working as a production team member, each student writes, directs, and produces videos. Covers studio practice, camera direction, lighting, and editing with special effects. Students produce a minimum of one video every other week.",
        topics: ["Television production techniques", "Writing, directing, and producing videos", "Camera direction and lighting", "Editing and special effects", "Cooperative problem solving"]
      },
      {
        id: "pos-tv2", name: "Television Production II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "TV Production I", minGrade: null, note: "Successful completion" }],
        description: "Advanced course building on TV Production I. Students act as producers and directors of the cable television show, develop morning announcements, and manage various projects throughout the year.",
        topics: ["Producer and director roles", "Cable TV show management", "Morning announcements production", "Advanced production projects"]
      },
      {
        id: "pos-tv3", name: "Television Production III", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "TV Production II", minGrade: null, note: "Successful completion" }],
        description: "Independent study for producing various video products. Students serve as executive producers of current shows and produce special segments throughout the year, applying knowledge from TV Production I and II.",
        topics: ["Executive producer role", "Independent video production", "Special segment production", "Applied production skills"]
      },
      {
        id: "pos-radio", name: "Radio Broadcasting", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Experience in internet-based radio broadcasting using live and pre-recorded formats. Students develop skills as on-air talent, producers, PR/marketing, and studio engineers. Includes music programming, talk show format, and live broadcasting of MHS sports and events.",
        topics: ["Internet radio studio operation", "Live and pre-recorded broadcasting", "On-air talent and production", "Music programming and talk shows", "Live sports and events broadcasting"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // INDUSTRIAL ARTS / PRE-ENGINEERING
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Industrial Arts / Pre-Engineering",
    color: "#fb923c",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-media1", name: "Media & Graphic Communication I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Foundations and applications of modern printing, photography, computer graphics, and graphic reproduction. Covers history and career opportunities in graphic arts, lithographic technology, screen making, and sketching/typography.",
        topics: ["Modern printing and graphic reproduction", "Computer graphics", "Lithographic technology", "Screen making and typography", "Career opportunities in graphic arts"]
      },
      {
        id: "pos-media2", name: "Media & Graphic Communication II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "Media & Graphic Communication I", minGrade: null, note: "Successful completion" }],
        description: "Advanced printing, computer graphics, and graphic reproduction. Students develop new graphic art technologies, master screen making and printing, and participate in career-related activities.",
        topics: ["Advanced printing techniques", "Advanced computer graphics", "Screen making and printing mastery", "Career opportunities in communication technology"]
      },
      {
        id: "pos-arch1", name: "Architectural Design I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Fundamentals of architectural design principles and techniques. Students learn hand sketching and Computer Aided Design (CAD) for architectural design. Major emphasis on how residential and commercial systems are designed, planned, and constructed through real-world activities.",
        topics: ["Hand sketching architectural plans", "Computer Aided Design (CAD)", "Residential design: houses, kitchens, bathrooms", "Commercial systems design and planning"]
      },
      {
        id: "pos-arch2", name: "Architectural Design II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "Architectural Design I", minGrade: null, note: "Successful completion" }],
        description: "Advanced architectural design with extensive CAD use. Major emphasis on residential and commercial building design, planning, and construction. Real-world activities include commercial projects, home construction management, and remodeling.",
        topics: ["Extensive CAD for architectural design", "Commercial project planning", "Home construction management", "Remodeling projects"]
      },
      {
        id: "pos-fab1", name: "Engineering Design & Material Fabrication I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Fundamentals of material processing techniques emphasizing safety. Project-oriented, teaching hand, power, and machine tool skills. Students become familiar with manual operations and automated equipment. Explores the nature and impact of technology in everyday lives.",
        topics: ["Material processing techniques", "Safety fundamentals", "Hand, power, and machine tool skills", "Manual and automated operations", "Technology in everyday life"]
      },
      {
        id: "pos-fab2", name: "Engineering Design & Material Fabrication II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "Engineering Design & Material Fabrication I", minGrade: null, note: "Successful completion" }],
        description: "Continues materials processing exploration with safety emphasis. Students design and develop an approved full-year project appropriate for current facilities.",
        topics: ["Advanced materials processing", "Full-year approved project", "Design and development", "Safety and real-world applications"]
      },
      {
        id: "pos-fab-portfolio", name: "Engineering Design & Material Fabrication: Portfolio Project", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Engineering Design & Material Fabrication II", minGrade: null, note: "Successful completion" }],
        description: "Professional portfolio development for experienced students. Choose from existing plans or create unique designs. May produce refined woodworking projects. Covers cost analysis, deadlines, budgeting, and production output.",
        topics: ["Professional portfolio development", "Custom or existing plan design", "Cost analysis and budgeting", "Deadlines and production output"]
      },
      {
        id: "pos-portfolio-media", name: "Portfolio Project — Media & Graphics Communication", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Level I + Level II Technology Education course", minGrade: null, note: "Senior year only" }],
        description: "Professional portfolio with concentration in graphic information systems or media and graphics. Used to investigate a potential career or prepare for a college course of study.",
        topics: ["Professional portfolio development", "Media and graphics concentration", "Career and college preparation"]
      },
      {
        id: "pos-portfolio-arch", name: "Portfolio Project — Architecture", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Level I + Level II Technology Education course", minGrade: null, note: "Senior year only" }],
        description: "Professional portfolio with concentration in architectural design. Used to investigate a potential career or prepare for a college course of study.",
        topics: ["Professional portfolio development", "Architectural design concentration", "Career and college preparation"]
      },
      {
        id: "pos-portfolio-cad", name: "Portfolio Project — Computer Aided Drafting & Design", tier: "CP", weight: 0,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: "Level I + Level II Technology Education course", minGrade: null, note: "Senior year only" }],
        description: "Professional portfolio with concentration in CAD, robotic systems, power and energy, or related areas. Used to investigate a potential career or prepare for a college course of study.",
        topics: ["Professional portfolio development", "CAD and design concentration", "Career and college preparation"]
      },
      {
        id: "pos-power-energy", name: "Power, Energy & Transportation Technology", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Studies transportation technologies including the history and development of the internal combustion engine. Students learn the theory of operation for 2-stroke and 4-stroke engines, perform full disassembly/reassembly, test engine parts, and paint and test engines for operation.",
        topics: ["Internal combustion engine history and theory", "2-stroke and 4-stroke engine operation", "Engine disassembly and reassembly", "Testing, painting, and operation"]
      },
      {
        id: "pos-eng1", name: "Engineering I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Engineering design fundamentals for students interested in pursuing engineering in college. Students learn isometric sketching, extensive 2D and 3D CAD/CADD, and precision measuring equipment through reverse engineering and design projects.",
        topics: ["Isometric sketching", "2D and 3D CAD/CADD", "Precision measuring equipment", "Reverse engineering and design projects", "Engineering career exploration"]
      },
      {
        id: "pos-eng2", name: "Engineering II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: "Engineering I", minGrade: null, note: "Successful completion" }],
        description: "Continues from Engineering I with 3D CAD software to design assemblies using materials, bearings, bushings, and gears. Covers advanced engineering drawing, precision measurement, basic material science, and the design process. Students learn to use a 3D printer.",
        topics: ["3D CAD assembly design", "Advanced engineering drawing", "Basic material science", "3D printing", "Engineering career research"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMILY & CONSUMER SCIENCES / CULINARY ARTS
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Family & Consumer Sciences / Culinary Arts",
    color: "#f87171",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-culinary1", name: "Introduction to Culinary Arts", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Basic techniques of food preparation. Students prepare appetizers, entrees, side dishes, desserts, and snacks incorporating all food groups. Emphasizes nutrition, meal preparation, food selection, preparation techniques, sanitation, and food service. Careers in food service and management explored.",
        topics: ["Basic food preparation techniques", "Appetizers, entrees, side dishes, desserts", "Nutrition and food selection", "Sanitation and food service", "Career exploration"]
      },
      {
        id: "pos-culinary2", name: "Culinary Arts II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Introduction to Culinary Arts", minGrade: null, note: "Successful completion" }],
        description: "Building on Culinary Arts I, students explore international and ethnic cuisine as part of cultural identity. Analyzes the interrelationship between cuisine and culture for countries like France, Japan, Italy, China, and Mexico. Covers garnishing, plate presentation, nutrition, safety, and food-borne illnesses.",
        topics: ["International and ethnic cuisine", "Cuisine and culture interrelationship", "Garnishing and plate presentation", "Nutrition, safety, and food-borne illness", "Culinary and hospitality careers"]
      },
      {
        id: "pos-baking", name: "The Art of Baking", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Experience in the culinary world of cake making and decorating. Students research various types of cakes, bake to industry standard, and decorate them. Project-based, student-driven curriculum developing transferable baking skills.",
        topics: ["Cake making and decorating", "Baking to industry standard", "Research and technique development", "Transferable baking skills"]
      },
      {
        id: "pos-life-skills", name: "Life Skills", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Prepares students for self-sufficiency and independence. Covers career selection, resumes, job acquisition, consumer skills, housing, insurance, available resources, and ethical choices. Incorporates decision-making skills for managing life's challenges.",
        topics: ["Career selection and resumes", "Consumer skills and budgeting", "Housing and insurance", "Decision-making and ethical choices", "Interpersonal relationship management"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // VISUAL ART
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Visual Art",
    color: "#c084fc",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-intro-art", name: "Introduction to Studio Art", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "A foundation in visual arts and design. Students explore painting, drawing, sculpture, and other media. Provides guided experiences in materials, media, and basic art concepts. Grades are based on willingness to experiment and explore creativity.",
        topics: ["Painting and drawing", "Sculpture and mixed media", "Basic art concepts and design", "Creative exploration and experimentation"]
      },
      {
        id: "pos-studio1", name: "Studio I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Introduction to Studio Art", minGrade: null, note: "Successful completion at MHS or UMS art teacher recommendation" }],
        description: "Introduces new materials and techniques through guided concepts. Students explore concepts through their individual voice and develop visual literacy. Introductory course to the studio sequence preparing for Studio II.",
        topics: ["New materials and techniques", "Guided concepts and assignments", "Individual voice development", "Visual literacy foundation"]
      },
      {
        id: "pos-studio2", name: "Studio II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Studio I", minGrade: null, note: "Successful completion" }],
        description: "Students polish technical skills and explore personal themes of interest. Covers advanced media, art history, contemporary trends, and career opportunities. Provides portfolio guidance toward technical competence and visual communication.",
        topics: ["Advanced media and techniques", "Personal themes and inspiration", "Art history and contemporary trends", "Portfolio guidance and career exploration"]
      },
      {
        id: "pos-honors-portfolio", name: "Honors Portfolio", tier: "Honors", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Studio II", minGrade: null, note: "Successful completion" }],
        description: "Year-long course for students seriously developing a college portfolio. Work levels are synonymous with college art majors. Students participate in the Visual Arts Extravaganza. Prepares for AP Studio through independent growth with peer feedback and teacher guidance.",
        topics: ["College portfolio development", "Advanced technical and conceptual work", "Visual Arts Extravaganza participation", "Independent growth with peer feedback", "Preparation for AP Studio"]
      },
      {
        id: "pos-ceramics1", name: "Ceramics", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Explores hand-built and wheel-thrown ceramics. Students develop awareness of the Elements and Principles of Design applied to sculptural form, bas relief, and pottery through additive, subtractive, wheel-thrown, and glazing methods.",
        topics: ["Hand-built ceramics", "Wheel-thrown pottery", "Additive, subtractive, and glazing methods", "Elements and Principles of Design", "Sculptural form and bas relief"]
      },
      {
        id: "pos-ceramics2", name: "Ceramics II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Ceramics", minGrade: null, note: "Successful completion" }],
        description: "Advanced ceramic arts with sculptural forms and experimental techniques. Students further develop wheel skills, personal artistic style, and begin developing their artist voice in clay. Eligible for Seton Hall concurrent enrollment.",
        topics: ["Sculptural forms", "Experimental techniques", "Advanced wheel throwing", "Personal artistic style", "Artist voice development"]
      },
      {
        id: "pos-ceramics-adv", name: "Advanced Ceramics", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Ceramics II", minGrade: null, note: "Successful completion" }],
        description: "Individual style development in wheel-thrown and hand-built ceramic forms with surface treatment explorations. Emphasizes hand building, fabrication, slip casting, and wheel throwing. Students investigate contemporary concepts through a unique series. Eligible for Seton Hall concurrent enrollment.",
        topics: ["Individual artistic style", "Surface treatment explorations", "Slip casting and advanced fabrication", "Contemporary concept series development"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // PHOTOGRAPHY & AP ART STUDIO
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Photography & AP Art Studio",
    color: "#a855f7",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-photo1", name: "Photography I", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Foundation in 35mm black and white analog photography with a strong visual arts base. Introduces the four major areas of fine arts study: Themes and Forms, Core Concepts, Techniques and Tools, Culture and History. A 35mm manual camera is strongly recommended.",
        topics: ["35mm black and white analog photography", "Darkroom fundamentals", "Themes, forms, and core art concepts", "Culture and history of photography"]
      },
      {
        id: "pos-photo2", name: "Photography II", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Photography I", minGrade: null, note: "Successful completion" }],
        description: "Foundation in digital photography and post-processing with Adobe Lightroom. Signature experiences with larger projects and independent problem solving for conceptual artworks. Digital camera strongly recommended.",
        topics: ["Digital photography", "Adobe Lightroom post-processing", "Conceptual artwork development", "Independent problem solving"]
      },
      {
        id: "pos-adv-digital-photo", name: "Advanced Digital Photography", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Photography I and II", minGrade: null, note: "Successful completion of both" }],
        description: "Advanced student-centered conceptual projects focusing on visual communication. Introduces advanced studio lighting and Adobe Photoshop techniques using DSLR cameras. Students use symbolism to create visual narratives, engage in critical dialogue and peer critique, and showcase work in a solo exhibit at Art Extravaganza. Designed to set students up for AP Studio Art 2D.",
        topics: ["Advanced studio lighting", "Adobe Photoshop techniques", "DSLR photography", "Visual narrative and symbolism", "Critical dialogue and peer critique", "Solo exhibit at Art Extravaganza"]
      },
      {
        id: "pos-adv-darkroom", name: "Advanced Darkroom Photography", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Photography I", minGrade: null, note: "Successful completion; Photography II and Advanced Digital recommended" }],
        description: "Advanced analog alternative processes including cyanotypes, photo transfers, and advanced darkroom techniques. Student-centered conceptual projects with critical dialogue and solo exhibit at Art Extravaganza. Designed to set students up for AP Studio Art 2D.",
        topics: ["Cyanotypes and photo transfers", "Advanced darkroom techniques", "Alternative analog processes", "Conceptual projects and peer critique", "Solo exhibit at Art Extravaganza"]
      },
      {
        id: "pos-ap-studio", name: "AP Studio Art or 2D Portfolio", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Honors Portfolio OR both Advanced Digital and Advanced Darkroom Photography", minGrade: null, note: "Interview with art faculty for concentration placement" }],
        description: "Year-long development of a consistent theme-based body of 12 pieces displayed gallery-style at Art Extravaganza. Students investigate a theme deeply, producing polished, stylistically unified works. Portfolio serves college applications and optional College Board evaluation. Requires high commitment and self-discipline.",
        topics: ["Theme-based body of 12 works", "Gallery-style Art Extravaganza exhibit", "College portfolio production", "Optional College Board evaluation", "Independent artistic direction"]
      },
      {
        id: "pos-ap-photo", name: "AP Photo / 2D Portfolio", tier: "AP", weight: 5,
        gradeLevel: "Grades 11–12", credits: "5",
        prereqs: [{ course: "Honors Portfolio OR both Advanced Digital and Advanced Darkroom Photography", minGrade: null, note: "Interview with art faculty for concentration placement" }],
        description: "Intensive guided exploration of photography for art-making including demonstrations, reference gathering, formal group critiques, reflections, and sketch booking. Students produce a college portfolio and showcase work in a solo exhibit at Art Extravaganza. Optional College Board evaluation.",
        topics: ["Intensive photography exploration", "Demonstrations and group critiques", "College portfolio production", "Solo exhibit at Art Extravaganza", "Optional College Board evaluation"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // PERFORMING ARTS — MUSIC (BAND)
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Performing Arts — Band",
    color: "#38bdf8",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-symph-band", name: "Symphonic Band", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of band in previous year or successful audition with director permission" }],
        description: "Concert band for grades 9–12 developing instrumental proficiency, ensemble skills, musical intelligence, and self-discipline. Performs Grade III–IV repertoire at a minimum of three concerts per year.",
        topics: ["Instrumental proficiency", "Concert band ensemble skills", "Grade III–IV repertoire", "Three+ concerts per year", "Individual and group responsibility"]
      },
      {
        id: "pos-symph-winds", name: "Symphonic Winds", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of band in previous year + successful audition with director permission" }],
        description: "Select auditioned ensemble primarily for grades 10–12 (9th graders may audition in spring of 8th grade). Performs Grade III–V repertoire at a minimum of three concerts per year.",
        topics: ["Auditioned select ensemble", "Grade III–V repertoire", "Advanced instrumental skills", "Three+ concerts per year"]
      },
      {
        id: "pos-wind-ensemble", name: "Wind Ensemble", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of curricular band + successful audition with director" }],
        description: "Highest skill-level curricular band. Rigorous study of advanced wind band repertoire at collegiate/professional level. Grade IV–VI repertoire. Four+ performances per year with possible weekend rehearsals.",
        topics: ["Collegiate/professional level repertoire", "Grade IV–VI repertoire", "Advanced instrumental pedagogy", "Four+ performances per year"]
      },
      {
        id: "pos-wind-ensemble-h", name: "Wind Ensemble Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Senior year only; successful audition with band director" }],
        description: "Senior Honors option meeting at the same time as Wind Ensemble. Additional requirements include preparing for and participating in at least one chamber music performance and researching repertoire with historical concert notes.",
        topics: ["All Wind Ensemble requirements", "Chamber music performance", "Repertoire research", "Historical concert notes"]
      },
      {
        id: "pos-guitar", name: "Introduction to Guitar", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "None — experienced players should discuss placement with teacher" }],
        description: "Learn, play, and perform on the guitar. Covers melodic and chordal playing as well as music theory concepts applicable to guitar performance. Perfect for beginners; experienced players should consult the teacher about placement.",
        topics: ["Melodic and chordal playing", "Music theory for guitar", "Performance skills", "All experience levels welcome"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // PERFORMING ARTS — MUSIC (ORCHESTRA)
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Performing Arts — Orchestra",
    color: "#0ea5e9",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-concert-orch", name: "Concert Orchestra", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of orchestra in previous year or successful audition with director permission" }],
        description: "String orchestra for grades 9–12 developing individual instrumental proficiency, string ensemble skills, and musical knowledge. Performs Grade III–IV repertoire at a minimum of three concerts per year.",
        topics: ["String instrumental proficiency", "String orchestra ensemble skills", "Grade III–IV repertoire", "Three+ concerts per year"]
      },
      {
        id: "pos-symph-orch", name: "Symphonic Orchestra", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of curricular orchestra + successful audition with director permission" }],
        description: "Select auditioned ensemble primarily for grades 10–12. Performs Grade III–V repertoire at a minimum of three concerts per year. Instrumentation and balance rigidly governed.",
        topics: ["Auditioned select ensemble", "Grade III–V repertoire", "Orchestral ensemble skills", "Three+ concerts per year"]
      },
      {
        id: "pos-chamber-orch", name: "Chamber Orchestra", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of curricular orchestra + successful audition with director" }],
        description: "Highest skill-level curricular orchestra. Rigorous study of advanced string and full orchestra repertoire at collegiate/professional level. Grade IV–VI repertoire. Four+ performances per year with possible weekend rehearsals.",
        topics: ["Collegiate/professional level repertoire", "Grade IV–VI repertoire", "Advanced string pedagogy", "Four+ performances per year"]
      },
      {
        id: "pos-chamber-orch-h", name: "Chamber Orchestra Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Senior year only; successful audition with orchestra director" }],
        description: "Senior Honors option meeting at the same time as Chamber Orchestra. Additional requirements include chamber music performance and repertoire research with historical concert notes.",
        topics: ["All Chamber Orchestra requirements", "Chamber music performance", "Repertoire research", "Historical concert notes"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // PERFORMING ARTS — MUSIC (CHOIR)
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Performing Arts — Choir",
    color: "#06b6d4",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-concert-choir", name: "Concert Choir", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "5",
        prereqs: [],
        description: "Dynamic and challenging musical environment through a variety of vocal music genres. Develops vocal skills, ensemble singing appreciation, individual and communal growth, self-discipline, and confidence. Concert participation required.",
        topics: ["Vocal skill development", "Ensemble singing across genres", "Musicianship fundamentals", "Concert performances required"]
      },
      {
        id: "pos-chorale", name: "Chorale", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Completion of choir in previous year + audition and director permission" }],
        description: "Full-year ensemble focusing on challenging vocal music for soprano and alto voicing. Advanced vocal technique, sight-reading, and musicianship through literature from various styles, genres, cultures, and eras.",
        topics: ["Soprano and alto repertoire", "Advanced vocal technique", "Sight-reading and musicianship", "Literature across styles and cultures"]
      },
      {
        id: "pos-chamber-choir", name: "Chamber Choir", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Successful audition and recommendation of director" }],
        description: "Smaller advanced-level vocal group for students with outstanding vocal skills. Performs advanced high school, collegiate, and professional level repertoire. Active participation in concerts, festivals, and performance venues required.",
        topics: ["Advanced vocal ensemble", "Collegiate/professional level repertoire", "Concerts, festivals, and performance venues", "Wide variety of rigorous literature"]
      },
      {
        id: "pos-chamber-choir-h", name: "Chamber Choir Honors", tier: "Honors", weight: 5,
        gradeLevel: "Grade 12", credits: "5",
        prereqs: [{ course: null, minGrade: null, note: "Senior year only; successful audition with choir director" }],
        description: "Senior Honors option meeting at the same time as Chamber Choir. Additional requirements include chamber or solo music performance and repertoire research with historical concert notes.",
        topics: ["All Chamber Choir requirements", "Chamber or solo music performance", "Repertoire research", "Historical concert notes"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // PERFORMING ARTS — DANCE
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Performing Arts — Dance",
    color: "#e879f9",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-dance", name: "Dance", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Semester-long exploration of a variety of dance styles including hip-hop, African, Latinx, Bollywood, ballet, jazz, contemporary, and more. Students develop coordination, flexibility, strength, musicality, and body awareness. Culminates in creating original choreography and participating in an evening performance.",
        topics: ["Hip-hop, African, Latinx, Bollywood, ballet, jazz, contemporary", "Coordination, flexibility, and strength", "Original choreography creation", "Evening performance"]
      },
      {
        id: "pos-dance-tech", name: "Dance Techniques and Choreography", tier: "CP", weight: 0,
        gradeLevel: "Grades 10–12", credits: "2.5 (semester)",
        prereqs: [{ course: null, minGrade: null, note: "Permission of teacher or completion of a previous dance class at UMS or MHS" }],
        description: "Performance-based course for students ready for the next level. Deeper technical development and creative exploration across multiple styles. Students learn choreographic devices, create longer original works, develop leadership, and explore teaching methods. Includes evening performance.",
        topics: ["Advanced technical development", "Choreographic devices and creative direction", "Leadership and collaboration", "Teaching choreography to others", "Evening performance"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // PERFORMING ARTS — THEATER
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Performing Arts — Theater",
    color: "#fb923c",
    grades: "Grades 9–12",
    courses: [
      {
        id: "pos-children-theater", name: "Children's Theater Play Production", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Full process of play production from choosing, casting, rehearsing, building, and performing a children's theater show. Students tour the school district performing for younger audiences. Great for students interested in acting and technical theater.",
        topics: ["Complete play production process", "Casting, rehearsing, and set building", "Performance for younger audiences", "School district tour"]
      },
      {
        id: "pos-theater-arts", name: "Theater Arts", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Fundamentals of theater through improv games, monologues, and scene study from the actor's perspective. Students research theater history, explore voice and movement, develop improvisational skill, critique plays, develop characters, and analyze scripts from various time periods and cultures.",
        topics: ["Improv games and monologues", "Scene study and script analysis", "Theater history research", "Voice, movement, and character development", "Audience relationship building"]
      },
      {
        id: "pos-speech", name: "The Art of Speech and Presentation", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Teaches convincing communication through various presentation forms using theater techniques. Focus on pacing, inflection, body language, annunciation, audience awareness, and dramatic impact. Includes storytelling, interpretive reading, and persuasive performance.",
        topics: ["Presentation preparation and delivery", "Pacing, inflection, and body language", "Storytelling and interpretive reading", "Persuasive performance", "Audience awareness and dramatic impact"]
      },
      {
        id: "pos-theater-design", name: "Theater Design, Technology and Stage Management", tier: "CP", weight: 0,
        gradeLevel: "Grades 9–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Non-performance aspects of theatrical production including set design, lighting design, properties, sound design, costumes, hair/makeup, design analysis, stage management, and production management. Hands-on experience in the MHS Performing Arts Center.",
        topics: ["Set design and lighting design", "Sound, costumes, and properties", "Stage management and production management", "MHS Performing Arts Center facilities"]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // CAREER EXPLORATION — TOMORROW'S TEACHERS
  // ══════════════════════════════════════════════════════════════════
  {
    category: "Tomorrow's Teachers",
    color: "#a3e635",
    grades: "Grades 11–12",
    courses: [
      {
        id: "pos-teachers1", name: "Tomorrow's Teachers Part 1: Learning/Educational Theory", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [],
        description: "Study of the history, development, organization, and practices of education from preschool through secondary. Explores learning styles, special needs, growth and development, ethics, and professionalism. Students gain automatic NJFEA membership and can participate in conferences and service projects.",
        topics: ["History and development of education", "Learning styles and special needs", "Growth, development, and ethics", "Professionalism in education", "NJFEA membership and conferences"]
      },
      {
        id: "pos-teachers2", name: "Tomorrow's Teachers Part 2: Practical Applications/Internship", tier: "CP", weight: 0,
        gradeLevel: "Grades 11–12", credits: "2.5 (semester)",
        prereqs: [{ course: "Tomorrow's Teachers Part 1", minGrade: null, note: "Successful completion" }],
        description: "Practical application of educational theories through internship. Students work with a cooperating teacher to observe classes, create lesson plans, and co-teach lessons. Rider University college credit opportunity available.",
        topics: ["Classroom observation", "Lesson plan creation", "Co-teaching experience", "Rider University college credit opportunity"]
      }
    ]
  }
];