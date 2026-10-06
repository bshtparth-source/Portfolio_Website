/**
 * data.js
 * Parth Bisht Portfolio — Single Source of Truth Data Object
 * 
 * PYTHON ANALOGY FOR BEGINNERS:
 * In Python, you use a dictionary (dict) with lists and nested dicts to hold structured data:
 * portfolio_data = {
 *     "personal": {"name": "Parth Bisht", ...},
 *     "projects": [{"id": "01", "title": "..."}, ...]
 * }
 * In JavaScript, PORTFOLIO_DATA is an Object containing Arrays and nested Objects.
 * When you want to add or update your skills, projects, or links, simply edit this file!
 */

// eslint-disable-next-line no-unused-vars
const PORTFOLIO_DATA = {
  personal: {
    name: "Parth Bisht",
    institution: "NIAT x Sushant University",
    role: "First-Year B.Tech Student & Developer",
    location: "Gurugram, Haryana, India",
    focus: ["GenAI", "Python", "Web development"],
    tagline: "Building with GenAI and Python, one commit at a time.",
    bio: "First-year student at NIAT, learning to turn ideas into working software. I build small projects, share what I learn, and keep shipping."
  },

  links: {
    email: "bshtparth@gmail.com",
    github: "https://github.com/bshtparth-source",
    instagram: "https://www.instagram.com/parth_icy_heart?stkn=N3FnODg5cGw5aHky",
    repo: "https://github.com/bshtparth-source/Portfolio_Website",
    // Resume is currently in 'coming-soon' state. When you add your PDF, set this path:
    resume: null // e.g. "assets/Parth_Bisht_Resume.pdf"
  },

  // Skills categorized with proficiency levels matching the Obsidian design
  // Levels: 'using' (filled dot), 'learning' (half dot), 'exploring' (hollow dot)
  skills: [
    {
      category: "Languages",
      code: "[01] // lang",
      items: [
        { name: "Python", level: "Using", levelType: "using" },
        { name: "HTML", level: "Learning", levelType: "learning" },
        { name: "CSS", level: "Learning", levelType: "learning" }
      ]
    },
    {
      category: "Tools",
      code: "[02] // devtools",
      items: [
        { name: "Git", level: "Learning", levelType: "learning" },
        { name: "GitHub", level: "Learning", levelType: "learning" },
        { name: "Netlify", level: "Learning", levelType: "learning" }
      ]
    },
    {
      category: "Focus",
      code: "[03] // research",
      items: [
        { name: "Generative AI", level: "Exploring", levelType: "exploring" },
        { name: "Prompt design", level: "Exploring", levelType: "exploring" }
      ]
    }
  ],

  // Projects list — filterable by categories: 'python', 'genai', 'web'
  projects: [
    {
      id: "project_01",
      title: "Expense Tracker CLI",
      description: "A command-line tool that logs daily expenses to a CSV file and calculates totals, averages, and breakdowns by category.",
      categories: ["python"],
      status: "Shipped",
      tags: ["Python", "CSV"],
      githubUrl: "https://github.com/bshtparth-source/Portfolio_Website", // Updated with repository
      liveUrl: null, // Shows disabled with tooltip 'Coming soon'
      isFeatured: true,
      lastCommit: "2 weeks ago",
      // Dedicated terminal demo data shown in the featured project card
      terminalOutput: {
        command: "python tracker.py --summary",
        fileInfo: "[+] Loaded records from expenses.csv (42 entries)",
        headers: ["CATEGORY", "AMOUNT (INR)", "PERCENTAGE"],
        rows: [
          { category: "Food & Dining", amount: "₹ 4,250.00", pct: "42.5%" },
          { category: "Books & Learning", amount: "₹ 3,100.00", pct: "31.0%" },
          { category: "Travel", amount: "₹ 1,650.00", pct: "16.5%" },
          { category: "Misc", amount: "₹ 1,000.00", pct: "10.0%" }
        ],
        total: "₹ 10,000.00",
        status: "STATUS: OK"
      }
    },
    {
      id: "project_02",
      title: "Student Records Manager",
      description: "Stores, retrieves, and searches structured student academic records using Python binary files with serialization.",
      categories: ["python"],
      status: "In progress",
      tags: ["Python", "Binary files"],
      githubUrl: null, // Null links automatically show disabled with 'Coming soon'
      liveUrl: null,
      isFeatured: false,
      footerMeta: "src/main.py"
    },
    {
      id: "project_03",
      title: "Personal Portfolio",
      description: "This portfolio website: designed in Stitch, engineered with Antigravity, and deployed on Netlify with zero build step.",
      categories: ["web"],
      status: "In progress",
      tags: ["HTML", "CSS", "Netlify"],
      githubUrl: "https://github.com/bshtparth-source/Portfolio_Website",
      liveUrl: "https://github.com/bshtparth-source/Portfolio_Website",
      isFeatured: false,
      footerMeta: "index.html"
    },
    {
      id: "project_04",
      title: "Next up: GenAI mini-project",
      description: "Exploring prompt engineering, tool use, LLM agents, and automated development workflows. Kicking off soon.",
      categories: ["genai"],
      status: "coming-soon",
      tags: ["GenAI", "LLM", "Prompting"],
      githubUrl: null,
      liveUrl: null,
      isFeatured: false,
      isComingSoon: true, // Triggers animated marching dashes & looping typer
      footerMeta: "specifying requirements"
    }
  ],

  // Git Log Journey Timeline
  timeline: [
    {
      hash: "HEAD -> main",
      badge: "[active]",
      title: "Building my first portfolio",
      description: "Designing with Google Stitch and building production-quality vanilla web code.",
      isCurrentHead: true,
      isAmberMilestone: false
    },
    {
      hash: "7c8d9e0",
      badge: "milestone",
      title: "Started HTML and CSS",
      description: "Learning semantic HTML5 structure, modern CSS flexbox/grid layout, and responsive design fundamentals.",
      isCurrentHead: false,
      isAmberMilestone: false
    },
    {
      hash: "e4f5a6b",
      badge: "milestone",
      title: "Learned Python fundamentals",
      description: "Deep dive into clean script architecture, CSV parsing, data structures, and binary file handling.",
      isCurrentHead: false,
      isAmberMilestone: false
    },
    {
      hash: "a1b2c3d",
      badge: "education",
      title: "Joined NIAT x Sushant University",
      description: "Started B.Tech Undergraduate Engineering cohort 2024-2028, focusing on AI and software systems.",
      isCurrentHead: false,
      isAmberMilestone: true // Highlights with warm amber accent
    }
  ]
};
