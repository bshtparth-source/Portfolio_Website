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
 * Update your skills, projects, or links here without touching complex HTML!
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
    resume: null // Set to "assets/Parth_Bisht_Resume.pdf" when PDF is ready
  },

  // Professional Technical Arsenal Matrix (Categorized cleanly by domain)
  skills: [
    {
      category: "What I work with",
      code: "[01] // core_stack",
      items: [
        { name: "Python", tag: "" },
        { name: "HTML (Learning)", tag: "" },
        { name: "CSS (Learning)", tag: "" }
      ]
    }
  ],

  // Projects Lab — filterable by categories: 'python', 'genai', 'web'
  projects: [],
  
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
      description: "Deep dive into clean script architecture, data structures, automation tools, and file handling.",
      isCurrentHead: false,
      isAmberMilestone: false
    },
    {
      hash: "a1b2c3d",
      badge: "education",
      title: "Joined NIAT x Sushant University",
      description: "Started B.Tech Undergraduate Engineering cohort 2024-2028, focusing on AI and software systems.",
      isCurrentHead: false,
      isAmberMilestone: true
    }
  ]
};
