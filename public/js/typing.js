/**
 * typing.js
 * Parth Bisht Portfolio — Interactive Terminal Typing Effects
 * 
 * PYTHON ANALOGY FOR BEGINNERS:
 * In Python, you can print text letter-by-letter with time.sleep(0.05).
 * In JavaScript in the browser, time.sleep would freeze the page!
 * Instead, JS uses asynchronous timers: setTimeout(function, delayMs).
 * Here, we type terminal commands realistically and loop the coming-soon prompt.
 */

// Global typing controller object
// eslint-disable-next-line no-unused-vars
const TypingController = {
  // Flag to check if user has prefers-reduced-motion set
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,

  /**
   * Types a string letter-by-letter into a target DOM element.
   * Python analogy: for char in text: sys.stdout.write(char); time.sleep(speed)
   * 
   * @param {HTMLElement} element - The DOM element to receive text
   * @param {string} text - The string to type out
   * @param {number} speed - Milliseconds between keystrokes
   * @param {Function} callback - Function called when typing completes
   */
  typeText(element, text, speed, callback) {
    if (this.reducedMotion) {
      element.textContent = text;
      if (typeof callback === 'function') callback();
      return;
    }

    element.textContent = '';
    let index = 0;

    const timer = setInterval(() => {
      element.textContent += text.charAt(index);
      index++;

      if (index >= text.length) {
        clearInterval(timer);
        if (typeof callback === 'function') {
          setTimeout(callback, 200);
        }
      }
    }, speed);
  },

  /**
   * Initializes the Hero terminal sequence:
   * Types whoami -> prints bio -> types cat focus.txt -> prints focus -> types ls projects/ -> prints list -> blinks cursor.
   * Runs only once per page load.
   */
  initHeroTerminal() {
    const termBody = document.getElementById('hero-terminal-body');
    if (!termBody || this.reducedMotion) return;

    // Command sequence and output definitions
    const sequence = [
      {
        cmd: 'whoami',
        output: 'parth bisht | first-year @ NIAT x Sushant University',
        outputClass: 'terminal-output'
      },
      {
        cmd: 'cat focus.txt',
        output: 'GenAI / Python / Web development',
        outputClass: 'terminal-output'
      },
      {
        cmd: 'ls projects/',
        output: 'expense-tracker/   student-records/   portfolio/',
        outputClass: 'terminal-output',
        outputColor: 'var(--color-amber)'
      }
    ];

    // Clear body to play live typing sequence
    termBody.innerHTML = '';

    let step = 0;

    const runNextStep = () => {
      if (step >= sequence.length) {
        // Finished all commands: add final active prompt with blinking cursor
        const finalPrompt = document.createElement('div');
        finalPrompt.className = 'term-line term-active-prompt';
        finalPrompt.style.marginTop = '10px';
        finalPrompt.innerHTML = '<span class="terminal-prompt">$</span> <span class="terminal-cursor cursor-blink" aria-hidden="true"></span>';
        termBody.appendChild(finalPrompt);
        return;
      }

      const item = sequence[step];

      // 1. Create prompt line
      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-line';
      if (step > 0) cmdLine.style.marginTop = '10px';
      cmdLine.innerHTML = '<span class="terminal-prompt">$</span> <span class="terminal-command"></span>';
      termBody.appendChild(cmdLine);

      const cmdTextSpan = cmdLine.querySelector('.terminal-command');

      // 2. Type out command
      this.typeText(cmdTextSpan, item.cmd, 50, () => {
        // 3. Append command output
        const outDiv = document.createElement('div');
        outDiv.className = item.outputClass;
        if (item.outputColor) outDiv.style.color = item.outputColor;
        outDiv.textContent = item.outputOutput || item.output;
        termBody.appendChild(outDiv);

        step++;
        setTimeout(runNextStep, 350);
      });
    };

    // Kick off typing after a brief 400ms delay so user sees window first
    setTimeout(runNextStep, 400);
  },

  /**
   * Simulates typing a cd command into the terminal when user clicks a navigation chip.
   * e.g., typing "$ cd ~/projects" then smoothly scrolling to that section.
   * 
   * @param {string} sectionId - Target section id without hash (e.g. 'projects')
   */
  simulateCdCommand(sectionId) {
    const termBody = document.getElementById('hero-terminal-body');
    const targetElement = document.getElementById(sectionId);

    if (termBody) {
      // Find or create prompt line
      const line = document.createElement('div');
      line.className = 'term-line';
      line.style.marginTop = '8px';
      line.innerHTML = `<span class="terminal-prompt">$</span> <span class="terminal-command" style="color: var(--color-lime);">cd ~/${sectionId}</span>`;
      termBody.appendChild(line);

      // Scroll terminal to bottom
      termBody.scrollTop = termBody.scrollHeight;
    }

    // Scroll page smoothly to target section offset by header height
    if (targetElement) {
      const headerHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: this.reducedMotion ? 'auto' : 'smooth'
      });
    }
  },

  /**
   * Loops the mini terminal typer in the Coming Soon project card.
   * Sequence:
   * 1. "$ git checkout -b next-project"
   * 2. "$ building the next project..."
   * 3. "$ status: coming soon_"
   * Loops indefinitely every 3.5 seconds.
   */
  initComingSoonTyper() {
    const typerElement = document.getElementById('coming-soon-typer-text');
    if (!typerElement || this.reducedMotion) return;

    const messages = [
      'git checkout -b next-project',
      'building the next project...',
      'status: coming soon'
    ];

    let messageIndex = 0;

    const typeNext = () => {
      const msg = messages[messageIndex];
      this.typeText(typerElement, msg, 40, () => {
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(typeNext, 2500); // Wait 2.5 seconds before typing next state
      });
    };

    typeNext();
  },

  /**
   * Main initializer for all typing interactions on the page.
   */
  init() {
    this.initHeroTerminal();
    this.initComingSoonTyper();

    // Bind navigation chips: [projects] [skills] [journey] [contact]
    const chips = document.querySelectorAll('[data-term-cd]');
    chips.forEach((chip) => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const dest = chip.getAttribute('data-term-cd');
        if (dest) this.simulateCdCommand(dest);
      });
    });
  }
};
