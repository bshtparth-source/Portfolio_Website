/**
 * projects.js
 * Parth Bisht Portfolio — Project Card Rendering & Category Filtering
 * 
 * PYTHON ANALOGY FOR BEGINNERS:
 * In Python list comprehensions, you can filter items easily:
 * filtered_projects = [p for p in projects if 'python' in p['categories']]
 * In JavaScript, Array.filter() or checking element attributes works similarly!
 * We filter visible cards smoothly and handle disabled links cleanly.
 */

// eslint-disable-next-line no-unused-vars
const ProjectsController = {
  currentFilter: 'all',

  /**
   * Initializes category filter buttons (All, Python, GenAI, Web)
   */
  initFilters() {
    const filterButtons = document.querySelectorAll('#project-filters .filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterCategory = btn.getAttribute('data-filter') || 'all';
        this.filterProjects(filterCategory);
      });
    });
  },

  /**
   * Filters project cards by matching the data-categories attribute.
   * If category is 'all', shows every project card.
   * 
   * @param {string} category - Category string e.g. 'all', 'python', 'genai', 'web'
   */
  filterProjects(category) {
    this.currentFilter = category;
    const projectCards = document.querySelectorAll('[data-categories]');

    projectCards.forEach((card) => {
      const cardCategories = (card.getAttribute('data-categories') || '').toLowerCase().split(' ');

      const isMatch = category === 'all' || cardCategories.includes(category.toLowerCase());

      if (isMatch) {
        card.style.display = '';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 20);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  },

  /**
   * Renders projects dynamically from PORTFOLIO_DATA if available.
   * Ensures zero build step and supports direct data updates by editing data.js.
   */
  renderFromData() {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;

    const additionalGrid = document.getElementById('additional-projects-grid');
    if (!additionalGrid) return;

    // Filter out the featured project which stays in featured card position
    const secondaryProjects = PORTFOLIO_DATA.projects.filter((p) => !p.isFeatured);

    // Build HTML for secondary projects
    let html = '';

    secondaryProjects.forEach((proj, idx) => {
      const catClass = proj.categories.join(' ');
      const delayClass = `delay-${idx + 1}`;

      if (proj.isComingSoon) {
        // Coming Soon Marching Dashes Card
        html += `
          <article class="card card-coming-soon marching-dashes-card project-card scroll-reveal ${delayClass}" data-categories="${catClass}" aria-label="Upcoming Project">
            <div>
              <div class="project-card-header">
                <span class="chip" style="color: var(--color-lime); border-color: var(--color-lime-border);">Upcoming</span>
                <span class="status-badge status-badge-muted">Planned</span>
              </div>
              <h3 class="project-card-title">${proj.title}</h3>
              <p class="project-card-desc">${proj.description}</p>
              
              <div class="coming-soon-terminal" aria-live="off">
                <div><span style="color: var(--color-lime);">$</span> <span id="coming-soon-typer-text">git checkout -b next-project</span><span class="cursor-blink" style="color: var(--color-lime);">_</span></div>
                <div class="shimmer-track">
                  <div class="shimmer-bar"></div>
                </div>
              </div>
            </div>
            <div class="project-card-footer">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="pulse-dot-lime" aria-hidden="true"></span>
                <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-secondary);">${proj.footerMeta || 'specifying requirements'}</span>
              </div>
              <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-lime); opacity: 0.8;">[queued]</span>
            </div>
          </article>
        `;
      } else {
        // Standard Project Card
        const statusBadgeClass = proj.status === 'Shipped' ? 'status-badge-lime' : 'status-badge-amber';
        const tagsHtml = proj.tags.map((t) => `<span class="chip">${t}</span>`).join(' ');

        // Safely generate GitHub link or disabled button
        let githubHtml = '';
        if (proj.githubUrl) {
          githubHtml = `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-lime); font-family: var(--font-mono); font-size: var(--text-sm);">GitHub ↗</a>`;
        } else {
          githubHtml = `<span class="btn-disabled" data-tooltip="Coming soon" style="color: var(--color-text-muted); font-family: var(--font-mono); font-size: var(--text-sm);">GitHub ↗</span>`;
        }

        // Safely generate Live link or disabled button
        let liveHtml = '';
        if (proj.liveUrl) {
          liveHtml = `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-lime); font-family: var(--font-mono); font-size: var(--text-sm); margin-left: 12px;">Live ↗</a>`;
        }

        html += `
          <article class="card project-card scroll-reveal ${delayClass}" data-categories="${catClass}">
            <div>
              <div class="project-card-header">
                <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-secondary);">${proj.id}</span>
                <span class="status-badge ${statusBadgeClass}">${proj.status}</span>
              </div>
              <h3 class="project-card-title">${proj.title}</h3>
              <p class="project-card-desc">${proj.description}</p>
              <div class="project-card-tags">
                ${tagsHtml}
              </div>
            </div>
            <div class="project-card-footer">
              <div style="display: flex; align-items: center;">
                ${githubHtml}
                ${liveHtml}
              </div>
              <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-muted);">${proj.footerMeta || ''}</span>
            </div>
          </article>
        `;
      }
    });

    additionalGrid.innerHTML = html;
  },

  /**
   * Initializes the projects module
   */
  init() {
    this.renderFromData();
    this.initFilters();
  }
};
