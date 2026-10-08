/**
 * main.js
 * Parth Bisht Portfolio — Master Initialization & Scroll Reveal
 * 
 * PYTHON ANALOGY FOR BEGINNERS:
 * In Python scripts, you often have an entry point:
 * if __name__ == "__main__":
 *     main()
 * In frontend JavaScript, we listen for the 'DOMContentLoaded' event,
 * ensuring all HTML tags have loaded into memory before running our scripts!
 */

// Master controller runs once DOM is completely parsed
document.addEventListener('DOMContentLoaded', () => {
  // 1. Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Initializes Scroll Reveal Observer for fade-up micro-interactions
   */
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-down');

    if (prefersReducedMotion) {
      // If user prefers reduced motion, reveal everything immediately
      revealElements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve after reveal so animation runs once only
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  };

  /**
   * Initializes Git Log Journey Staggered Reveal
   */
  const initJourneyReveal = () => {
    const timelineNodes = document.querySelectorAll('.timeline-node');
    if (!timelineNodes.length || prefersReducedMotion) return;

    const journeySection = document.getElementById('journey');
    if (!journeySection) return;

    const journeyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineNodes.forEach((node, index) => {
              setTimeout(() => {
                node.style.opacity = '1';
                node.style.transform = 'translateX(0)';
              }, index * 180);
            });
            journeyObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Initial setup for stagger
    timelineNodes.forEach((node) => {
      node.style.opacity = '0';
      node.style.transform = 'translateX(-12px)';
      node.style.transition = 'opacity 500ms ease, transform 500ms ease';
    });

    journeyObserver.observe(journeySection);
  };

  /**
   * Initializes Dynamic Skills Rendering from data.js
   * Allows Parth to edit skills in data.js and see changes instantly!
   */
  const initSkillsFromData = () => {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.skills) return;

    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    let html = '';
    PORTFOLIO_DATA.skills.forEach((cat) => {
      let itemsHtml = '';
      cat.items.forEach((item) => {
        const progressDot = item.inProgress ? `<span class="pulse-dot-amber" style="width: 6px; height: 6px; margin-left: 6px;" title="Learning in progress"></span>` : "";
        itemsHtml += `
          <span class="skill-pill">
            <span style="color: var(--color-lime); font-weight: bold; font-family: var(--font-mono); font-size: 11px;">#</span>
            <span style="font-weight: 500;">${item.name}</span>
            ${progressDot}
          </span>
        `;
      });

      html += `
        <div class="card skill-category-card scroll-reveal">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <span style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-text-primary); font-weight: 600;">${cat.category}</span>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-muted);">${cat.code}</span>
          </div>
          <div class="skill-items-wrap">
            ${itemsHtml}
          </div>
        </div>
      `;
    });

    skillsContainer.innerHTML = html;
  };

  // 2. Initialize all modules in sequence
  if (typeof NavController !== 'undefined') {
    NavController.init();
  }

  if (typeof TypingController !== 'undefined') {
    TypingController.init();
  }

  if (typeof ProjectsController !== 'undefined') {
    ProjectsController.init();
  }

  if (typeof ContactController !== 'undefined') {
    ContactController.init();
  }

  initSkillsFromData();
  initScrollReveal();
  initJourneyReveal();

  // Console watermark for recruiters & developers
  console.log(
    '%c[PARTH BISHT // NIAT x SUSHANT UNIVERSITY]%c Student Developer Terminal • Built with vanilla web tech and zero build step.',
    'background: #12161B; color: #B6FF4D; font-family: monospace; font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
    'color: #98A2B0; font-family: monospace; font-size: 12px;'
  );
});

