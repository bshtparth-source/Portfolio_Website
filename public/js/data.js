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
      category: "Core Languages & Runtimes",
      code: "[01] // runtime",
      items: [
        { name: "Python 3.12", tag: "Primary" },
        { name: "JavaScript (ES6+)", tag: "Web" },
        { name: "HTML5 Semantic Web", tag: "Markup" },
        { name: "Modern CSS3", tag: "Styling" }
      ]
    },
    {
      category: "AI & GenAI Toolchain",
      code: "[02] // ai_stack",
      items: [
        { name: "Generative AI & LLMs", tag: "Core Focus" },
        { name: "Prompt Engineering", tag: "Specialization" },
        { name: "Google Gemini API", tag: "Integration" },
        { name: "Agentic Workflows", tag: "Research" },
        { name: "RAG Architecture", tag: "Foundations" }
      ]
    },
    {
      category: "Developer Tools & Infrastructure",
      code: "[03] // devtools",
      items: [
        { name: "Git & GitHub", tag: "Version Control" },
        { name: "Linux / Bash Shell", tag: "Environment" },
        { name: "VS Code", tag: "Editor" },
        { name: "Netlify Edge", tag: "Deployment" },
        { name: "REST APIs & JSON", tag: "Networking" },
        { name: "Virtual Environments", tag: "Tooling" }
      ]
    }
  ],

  // Catchy Projects Lab — filterable by categories: 'python', 'genai', 'web'
  projects: [
    {
      id: "project_01",
      title: "Autonomous AI Agent Workbench",
      description: "An experimental Python evaluation harness exploring LLM tool-calling, multi-step agentic reasoning, and automated developer workflows.",
      categories: ["python", "genai"],
      status: "Active Build",
      tags: ["Python 3.12", "Gemini API", "Agentic Workflows", "CLI"],
      githubUrl: "https://github.com/bshtparth-source/Portfolio_Website",
      liveUrl: null,
      isFeatured: true,
      lastCommit: "Active sprint",
      // Live Agent execution trace shown in the featured terminal window
      terminalOutput: {
        command: "python agent_bench.py --eval --target=gemini",
        fileInfo: "[+] Initializing autonomous agent runtime environment...",
        traceLines: [
          "[+] System prompt: loaded (developer_mode / zero_shot)",
          "[+] Tool registry: [git_cli, bash_exec, file_search] (3 active tools)",
          "----------------------------------------------------------------",
          "AGENT > Thought: Analyzing repository workspace and test suites...",
          "AGENT > Tool Call: bash_exec(\"pytest -q tests/\")",
          "AGENT > Observation: 18 passed, 0 failed in 0.38s",
          "AGENT > Output: Workflow verified. Ready for deployment dispatch.",
          "----------------------------------------------------------------"
        ],
        status: "CONFIDENCE: 98.6% // STATUS: NOMINAL"
      }
    },
    {
      id: "project_02",
      title: "Neural Scripting & Automation Engine",
      description: "A modular Python automation suite engineered for high-throughput batch file processing, structured data pipelines, and scheduled web scraping.",
      categories: ["python"],
      status: "In progress",
      tags: ["Python", "Data Pipelines", "Automation"],
      githubUrl: "https://github.com/bshtparth-source/Portfolio_Website",
      liveUrl: null,
      isFeatured: false,
      footerMeta: "core/engine.py"
    },
    {
      id: "project_03",
      title: "Developer Terminal Portfolio",
      description: "This portfolio website: zero-build architecture, handwritten CSS variables, Obsidian glass aesthetic, and instant Netlify CDN deployment.",
      categories: ["web"],
      status: "Shipped",
      tags: ["Vanilla JS", "CSS3 Variables", "Netlify Edge"],
      githubUrl: "https://github.com/bshtparth-source/Portfolio_Website",
      liveUrl: "https://parth-bisht-dev.netlify.app",
      isFeatured: false,
      footerMeta: "public/index.html"
    },
    {
      id: "project_04",
      title: "Next GenAI Research Sprint",
      description: "Deep dive into local LLM inference, multimodal prompt tuning, and autonomous multi-agent swarms. Specifying requirements.",
      categories: ["genai"],
      status: "coming-soon",
      tags: ["GenAI", "Local LLM", "Swarm Arch"],
      githubUrl: null,
      liveUrl: null,
      isFeatured: false,
      isComingSoon: true,
      footerMeta: "sprint_02/spec.md"
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
