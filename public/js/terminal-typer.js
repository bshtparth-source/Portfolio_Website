/**
 * terminal-typer.js
 * Parth Bisht Portfolio — Live Simulated Build Stream & Developer Terminal
 *
 * Simulates a live continuous development & build queue with typewriter
 * commands, test executions, and progress bar feedback.
 * Zero external dependencies. Respects prefers-reduced-motion.
 */

(() => {
  const BUILD_STEPS = [
    {
      type: "cmd",
      text: "git checkout -b feature/agentic-pipeline"
    },
    {
      type: "log",
      className: "term-log-muted",
      text: "Switched to a new branch 'feature/agentic-pipeline'"
    },
    {
      type: "cmd",
      text: "python -m venv .venv && source .venv/bin/activate"
    },
    {
      type: "log",
      className: "term-log-success",
      text: "[+] Python 3.12 runtime activated (isolated environment)"
    },
    {
      type: "cmd",
      text: "python -m builder.compile --verify"
    },
    {
      type: "log",
      className: "term-log-info",
      text: "[1/4] Indexing module registry & schema models... [OK]"
    },
    {
      type: "log",
      className: "term-log-info",
      text: "[2/4] Linking GenAI inference orchestrator... [OK]"
    },
    {
      type: "log",
      className: "term-log-info",
      text: "[3/4] Running automated unit & integration checks..."
    },
    {
      type: "log",
      className: "term-log-success",
      text: "      ✔ 18 passed in 0.32s — 0 warnings, 100% coverage"
    },
    {
      type: "progress",
      label: "[4/4] Compiling assets & generating release artifact...",
      targetPercent: 88,
      statusLabel: "Optimizing weights & distribution"
    },
    {
      type: "log",
      className: "term-log-highlight",
      text: ">> STATUS: CORE_READY // STAGED FOR DEPLOYMENT"
    },
    {
      type: "log",
      className: "term-log-muted",
      text: ">> NOTE: Completed projects will be showcased here automatically."
    }
  ];

  class BuildTerminalController {
    constructor() {
      this.container = document.getElementById("build-terminal-stream");
      if (!this.container) return;

      this.prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      this.isRunning = false;
      this.abortController = null;

      this.init();
    }

    init() {
      if (this.prefersReducedMotion) {
        this.renderStatic();
        return;
      }

      this.startLoop();

      // Pause when tab is inactive to preserve CPU / battery
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.stop();
        } else {
          this.startLoop();
        }
      });
    }

    stop() {
      this.isRunning = false;
      if (this.abortController) {
        this.abortController.abort();
        this.abortController = null;
      }
    }

    sleep(ms, signal) {
      return new Promise((resolve, reject) => {
        if (signal && signal.aborted) {
          return reject(new DOMException("Aborted", "AbortError"));
        }
        const timer = setTimeout(() => resolve(), ms);
        if (signal) {
          signal.addEventListener("abort", () => {
            clearTimeout(timer);
            reject(new DOMException("Aborted", "AbortError"));
          });
        }
      });
    }

    renderStatic() {
      this.container.innerHTML = "";
      BUILD_STEPS.forEach((step) => {
        if (step.type === "cmd") {
          const div = document.createElement("div");
          div.className = "term-line term-cmd";
          div.innerHTML = `<span class="term-prompt">$</span><span>${step.text}</span>`;
          this.container.appendChild(div);
        } else if (step.type === "log") {
          const div = document.createElement("div");
          div.className = `term-line ${step.className || ""}`;
          div.textContent = step.text;
          this.container.appendChild(div);
        } else if (step.type === "progress") {
          const div = document.createElement("div");
          div.className = "term-progress-wrap";
          div.innerHTML = `
            <div class="term-progress-label">
              <span>${step.label}</span>
              <span>${step.targetPercent}%</span>
            </div>
            <div class="term-progress-track">
              <div class="term-progress-fill" style="width: ${step.targetPercent}%;"></div>
            </div>
          `;
          this.container.appendChild(div);
        }
      });

      const idlePrompt = document.createElement("div");
      idlePrompt.className = "term-line term-cmd";
      idlePrompt.innerHTML = `<span class="term-prompt">$</span><span class="term-cursor" aria-hidden="true"></span>`;
      this.container.appendChild(idlePrompt);
    }

    async startLoop() {
      if (this.isRunning) return;
      this.isRunning = true;

      while (this.isRunning) {
        this.abortController = new AbortController();
        const { signal } = this.abortController;

        try {
          await this.runBuildSequence(signal);
          // Wait 6 seconds at the end of the build so user can read everything
          await this.sleep(6000, signal);

          // Gentle fade out before restarting
          this.container.style.opacity = "0.3";
          this.container.style.transition = "opacity 400ms ease";
          await this.sleep(450, signal);
          this.container.style.opacity = "1";
        } catch (err) {
          if (err.name === "AbortError") {
            break;
          }
          console.error("Build stream error:", err);
          break;
        }
      }
    }

    async runBuildSequence(signal) {
      this.container.innerHTML = "";

      for (const step of BUILD_STEPS) {
        if (signal.aborted) return;

        if (step.type === "cmd") {
          await this.typeCommand(step.text, signal);
          await this.sleep(260, signal);
        } else if (step.type === "log") {
          this.appendLogLine(step.text, step.className);
          this.scrollToBottom();
          await this.sleep(180, signal);
        } else if (step.type === "progress") {
          await this.animateProgress(step, signal);
          await this.sleep(280, signal);
        }
      }

      // Finish with blinking idle prompt
      const idlePrompt = document.createElement("div");
      idlePrompt.className = "term-line term-cmd";
      idlePrompt.innerHTML = `<span class="term-prompt">$</span><span class="term-cursor" aria-hidden="true"></span>`;
      this.container.appendChild(idlePrompt);
      this.scrollToBottom();
    }

    async typeCommand(text, signal) {
      const line = document.createElement("div");
      line.className = "term-line term-cmd";

      const promptSpan = document.createElement("span");
      promptSpan.className = "term-prompt";
      promptSpan.textContent = "$";

      const textSpan = document.createElement("span");
      const cursor = document.createElement("span");
      cursor.className = "term-cursor";
      cursor.setAttribute("aria-hidden", "true");

      line.appendChild(promptSpan);
      line.appendChild(textSpan);
      line.appendChild(cursor);
      this.container.appendChild(line);
      this.scrollToBottom();

      for (let i = 0; i < text.length; i++) {
        if (signal.aborted) return;
        textSpan.textContent += text[i];
        // Jitter delay between 20ms and 36ms for natural terminal feel
        const charDelay = Math.floor(Math.random() * 16) + 20;
        await this.sleep(charDelay, signal);
      }

      // Remove active cursor from finished command line
      cursor.remove();
    }

    appendLogLine(text, className) {
      const line = document.createElement("div");
      line.className = `term-line ${className || ""}`;
      line.textContent = text;
      this.container.appendChild(line);
    }

    async animateProgress(step, signal) {
      const wrap = document.createElement("div");
      wrap.className = "term-progress-wrap";

      const labelRow = document.createElement("div");
      labelRow.className = "term-progress-label";

      const leftLabel = document.createElement("span");
      leftLabel.textContent = step.label;

      const rightLabel = document.createElement("span");
      rightLabel.textContent = "0%";

      labelRow.appendChild(leftLabel);
      labelRow.appendChild(rightLabel);

      const track = document.createElement("div");
      track.className = "term-progress-track";

      const fill = document.createElement("div");
      fill.className = "term-progress-fill";
      fill.style.width = "0%";

      track.appendChild(fill);
      wrap.appendChild(labelRow);
      wrap.appendChild(track);

      this.container.appendChild(wrap);
      this.scrollToBottom();

      const target = step.targetPercent || 85;
      const duration = 1600; // ms
      const interval = 40;
      const steps = duration / interval;
      let current = 0;

      for (let s = 1; s <= steps; s++) {
        if (signal.aborted) return;
        current = Math.min(Math.round((s / steps) * target), target);
        fill.style.width = `${current}%`;
        rightLabel.textContent = `${current}%`;
        await this.sleep(interval, signal);
      }
    }

    scrollToBottom() {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new BuildTerminalController();
    });
  } else {
    new BuildTerminalController();
  }
})();
