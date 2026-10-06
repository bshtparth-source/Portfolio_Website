# 🚀 Parth Bisht — Developer Portfolio

> **B.Tech First Year @ NIAT x Sushant University**  
> Focus: GenAI • Python • Modern Web Systems • Building in Public  
> Designed in **Google Stitch** · Engineered with **Google Antigravity** · Deployed on **Netlify (Zero Build Step)**

---

## 📌 Welcome! (A Note for You)

Welcome to your personal portfolio codebase! As a first-year engineering student strong in Python and learning HTML, CSS, and JavaScript, this entire project has been crafted to be:

1. **100% Beginner-Readable:** No complex build tools, no webpack, no npm installs, no frameworks (no React, no Tailwind).
2. **Double-Clickable:** You can literally double-click `public/index.html` in Windows File Explorer and test the website immediately.
3. **Python-Friendly Architecture:** The entire website content (projects, skills, social links, journey log) is controlled by **one file** (`public/js/data.js`), which is structured just like a Python dictionary!
4. **Production-Ready:** Deploys instantly to Netlify with zero build step and strict security headers.

---

## 🐍 Python Analogies: How This Website Works

If you know Python, frontend web development is much easier than it seems! Here is how JavaScript and CSS map to Python concepts:

| Python Concept | JavaScript / Web Concept | How It's Used in Your Site |
|---|---|---|
| **Dictionary (`dict`)** | **Object (`{key: value}`)** | `PORTFOLIO_DATA` in `data.js` stores your personal information, skills, and projects. |
| **List (`list`)** | **Array (`[item1, item2]`)** | Your list of projects, skills categories, and git timeline nodes. |
| **`for item in items:`** | **`items.forEach((item) => { ... })`** | Looping through projects to display cards on screen. |
| **`[x for x in list if condition]`** | **`array.filter((x) => condition)`** | Category filtering (e.g., viewing only `python` projects). |
| **`time.sleep(seconds)`** | **`setTimeout(function, milliseconds)`** | Delays between terminal typing keystrokes without freezing the browser window. |
| **Variables (`x = 10`)** | **CSS Variables (`--color-lime: #B6FF4D`)** | Defined in `variables.css`. Changing one line updates the entire site's colors! |
| **`print()`** | **`console.log()`** | Messages printed to the developer console (press `F12` in your browser). |

---

## 📁 Project Folder Map

```text
My_Portfolia_Website/
├── .gitignore                     # Ignores OS cache, temp logs, and editor files
├── netlify.toml                   # Netlify configuration (zero build step + security headers)
├── README.md                      # This comprehensive guide
├── stitch_developer_terminal_.../ # Original Google Stitch design files (untouched)
└── public/                        # The live website folder (Netlify publish folder)
    ├── index.html                 # Main website HTML (semantic HTML5, SEO meta, landmarks)
    ├── 404.html                   # Developer-terminal 404 error page
    ├── css/
    │   ├── variables.css          # Design tokens (colors, fonts, radii, spacing)
    │   ├── base.css               # CSS reset, 48px engineering grid background, selection
    │   ├── components.css         # Glass header, terminal window, buttons, chips, badges
    │   ├── sections.css           # Hero, About (with photo card), Projects, Skills, Contact
    │   └── animations.css         # Blinking cursor, marquee ticker, marching dashes, shimmer
    ├── js/
    │   ├── data.js                # SINGLE SOURCE OF TRUTH (your data dictionary)
    │   ├── typing.js              # Terminal typing simulation & quick-navigation cd commands
    │   ├── nav.js                 # Sticky glass header, active link observer & mobile menu
    │   ├── projects.js            # Category filtering & link safety
    │   ├── contact.js             # 3-state contact machine (default, compose, copied toast)
    │   └── main.js                # Master initializer & scroll-reveal animations
    └── assets/
        ├── favicon.svg            # Neon-lime terminal prompt '>_' favicon
        ├── parth_bisht.jpg        # Your professional black & white portrait photo
        └── Parth_Bisht_Resume.pdf # (Place your resume PDF here when ready)
```

---

## 💻 How to Run Locally

You have two easy ways to view and test your website locally on your Windows machine:

### Method 1: The Double-Click Way (Instant)
1. Open Windows File Explorer.
2. Navigate to: `d:\anti_gravity_Workspace\My_Portfolia_Website\public\`.
3. Double-click `index.html`.
4. It opens immediately in Google Chrome, Edge, or Brave! No server required.

### Method 2: Python Local Server (Recommended for true localhost testing)
Since you have Python installed, open your terminal (PowerShell or Command Prompt) and run:

```powershell
cd d:\anti_gravity_Workspace\My_Portfolia_Website\public
python -m http.server 8000
```

Now open your browser and visit: **`http://localhost:8000`**  
*(Press `Ctrl + C` in the terminal to stop the server when you are done).*

---

## 🛠️ How to Update Your Portfolio

Everything is designed so you rarely need to touch complex HTML. Here is how to update common items:

### 1. Adding a New Project
Open **`public/js/data.js`**, scroll down to the `projects` list, and add a new dictionary object:

```javascript
{
  id: "project_04",
  title: "AI Study Buddy",
  description: "A Python CLI assistant powered by the Gemini API that summarizes textbook chapters.",
  categories: ["python", "genai"],
  status: "Shipped",
  tags: ["Python", "Gemini API", "CLI"],
  githubUrl: "https://github.com/bshtparth-source/ai-study-buddy",
  liveUrl: null, // Set null if no web demo exists yet (shows disabled with 'Coming soon')
  isFeatured: false,
  footerMeta: "main.py"
},
```
Save the file and refresh your browser. Your new project will appear automatically with category filters!

### 2. Updating Skills or Experience
In **`public/js/data.js`**, find the `skills` list:
- Change proficiency levels: `'using'` (filled lime dot), `'learning'` (half dot), or `'exploring'` (hollow circle).

### 3. Adding Your Resume PDF
1. Place your resume PDF file into **`public/assets/`** and name it `Parth_Bisht_Resume.pdf`.
2. In **`public/js/data.js`**, set:
   ```javascript
   links: {
     resume: "assets/Parth_Bisht_Resume.pdf",
     ...
   }
   ```
3. In **`public/index.html`**, change the resume button `href` to `"assets/Parth_Bisht_Resume.pdf"` and set `target="_blank"`.

### 4. Changing Theme Colors
Open **`public/css/variables.css`**. At the top, you can adjust:
- `--color-lime`: The neon-green accent for projects and buttons (`#B6FF4D`).
- `--color-amber`: The warm amber accent for NIAT education credentials (`#FFB547`).
- `--color-bg`: Canvas backdrop (`#0A0C0F`).

---

## 🌐 Deploying to Netlify (Step-by-Step)

Because this website requires **ZERO build step**, deployment takes less than 60 seconds!

### Step 1: Push your repo to GitHub
Run the git commands provided at the end of this guide to push your code to your GitHub repo:
`https://github.com/bshtparth-source/Portfolio_Website`

### Step 2: Connect to Netlify
1. Log in to [Netlify](https://app.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize your account.
4. Choose the repository: **`Portfolio_Website`**.
5. Netlify will automatically detect your `netlify.toml` file with these settings:
   - **Base directory:** (leave blank / root)
   - **Build command:** (leave blank — no build command needed!)
   - **Publish directory:** `public`
6. Click **"Deploy Portfolio_Website"**.

Your website will be live with an SSL certificate (`https://`) within 10 seconds!

---

## ✅ Pre-Launch Checklist (Things to Fill In)

Here is a checklist of items for you to complete as your semester progresses:

- [ ] **Resume PDF:** Place `Parth_Bisht_Resume.pdf` into `public/assets/` when ready.
- [ ] **Real GitHub Repos:** Update `githubUrl` in `public/js/data.js` as you make individual project repos public.
- [ ] **Open Graph Image (`og-image.png`):** Create a `1200x630` pixel preview banner and save it to `public/assets/og-image.png` so sharing your website link on WhatsApp, Discord, or Twitter shows a nice banner card.
- [ ] **Custom Domain (Optional):** Add your custom domain (e.g. `parthbisht.dev` or `parthbisht.in`) via Netlify DNS settings.

---

## 🔍 Troubleshooting FAQ

- **Q: Why does clicking "Copy email" say copied, but nothing was copied?**  
  *A:* When testing by double-clicking local files (`file:///`), some browsers restrict access to `navigator.clipboard`. Our code includes an automatic fallback (`document.execCommand`). When hosted on Netlify via HTTPS, modern clipboard copying works 100% reliably.

- **Q: How do I pause the bottom scrolling ticker?**  
  *A:* Hovering your mouse over the bottom ticker will immediately pause the marquee animation so you can read it easily.

- **Q: Does the site support mobile phones?**  
  *A:* Yes! The design is mobile-first and tested down to 320px width. The sticky header switches to an accessible hamburger menu on screens narrower than 768px.

---

## 🏆 Credits & Technology Stack

- **Design:** Designed in [Google Stitch](https://stitch.google.com) (*Developer Terminal Portfolio Hero* & *Obsidian Terminal Design System*).
- **Engineering:** Built pair-programming with [Google Antigravity](https://antigravity.google).
- **Typography:** Space Grotesk, Inter, JetBrains Mono via Google Fonts.
- **Hosting:** Static hosting via Netlify CDN.

---

### 🚀 Git Push Commands

When you are ready to push this code to GitHub, open your terminal in the workspace root and run:

```bash
git remote add origin https://github.com/bshtparth-source/Portfolio_Website.git
git push -u origin main
```
