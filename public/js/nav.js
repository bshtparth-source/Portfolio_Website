/**
 * nav.js
 * Parth Bisht Portfolio — Sticky Header, Active Links & Mobile Navigation
 * 
 * PYTHON ANALOGY FOR BEGINNERS:
 * In Python, to find an item matching a criterion, you might use:
 * for link in links:
 *     if link.target == current_section:
 *         link.active = True
 * In JavaScript, we use document.querySelectorAll() and loop with .forEach().
 * The browser's IntersectionObserver checks which section is visible on screen!
 */

// eslint-disable-next-line no-unused-vars
const NavController = {
  headerHeight: 72,

  /**
   * Initializes the IntersectionObserver to highlight navigation links
   * based on which section is currently scrolled into view.
   */
  initActiveLinkObserver() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-menu .nav-link');

    if (!sections.length || !navLinks.length) return;

    // IntersectionObserver options: fires when a section enters the top portion of viewport
    const observerOptions = {
      root: null,
      rootMargin: `-${this.headerHeight}px 0px -40% 0px`,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');

          // Loop through all nav links and set active state
          navLinks.forEach((link) => {
            const linkTarget = link.getAttribute('href');
            if (linkTarget === `#${currentId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  },

  /**
   * Sets up smooth scrolling with automatic header offset calculation for all anchor links.
   * Prevents sticky header from covering up section titles.
   */
  initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        event.preventDefault();

        // Calculate offset position
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - this.headerHeight + 10;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile drawer if open
        this.closeMobileMenu();

        // Push clean hash to browser history without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      });
    });
  },

  /**
   * Sets up the mobile hamburger menu with full keyboard and focus accessibility.
   * Closes on Escape key press, link click, or resize past 768px.
   */
  initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!hamburgerBtn || !mobileMenu) return;

    // Toggle menu on hamburger click
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    // Close when Escape key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        this.closeMobileMenu();
        hamburgerBtn.focus();
      }
    });

    // Close on mobile link click
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Auto-close if screen expands to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && mobileMenu.classList.contains('is-open')) {
        this.closeMobileMenu();
      }
    });
  },

  openMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburgerBtn || !mobileMenu) return;

    mobileMenu.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  },

  closeMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburgerBtn || !mobileMenu) return;

    mobileMenu.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  },

  /**
   * Initialize all navigation behaviors
   */
  init() {
    this.initActiveLinkObserver();
    this.initSmoothScroll();
    this.initMobileMenu();
  }
};
