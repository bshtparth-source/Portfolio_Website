/**
 * contact.js
 * Parth Bisht Portfolio — Interactive 3-State Contact Controller
 * 
 * PYTHON ANALOGY FOR BEGINNERS:
 * In Python, you might model a state machine using an Enum or state string:
 * class ContactState(Enum):
 *     DEFAULT = "default"
 *     COMPOSE = "compose"
 *     COPIED = "copied"
 * In JavaScript, we switch CSS classes on the section element (.state-default, .state-compose, .state-copied)
 * to instantly update the UI and terminal view without any page reload!
 */

// eslint-disable-next-line no-unused-vars
const ContactController = {
  email: 'bshtparth@gmail.com',
  copyTimeout: null,
  composeTimeout: null,

  /**
   * Sets the active visual state on the contact section.
   * 
   * @param {'default' | 'compose' | 'copied'} newState - One of the 3 design states
   */
  setState(newState) {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    // Remove existing state classes
    contactSection.classList.remove('state-default', 'state-compose', 'state-copied');
    // Add requested state class
    contactSection.classList.add(`state-${newState}`);

    // Update terminal title tag
    const titleElem = document.getElementById('contact-term-title');
    if (titleElem) {
      if (newState === 'compose') {
        titleElem.textContent = 'mailer@niat: ~/send_message.sh';
      } else {
        titleElem.textContent = 'parth@niat: ~/contact';
      }
    }
  },

  /**
   * Copies the email address to clipboard using modern Clipboard API
   * with fallback to textarea execCommand for local files or restricted contexts.
   * 
   * @param {string} text - The text string to copy
   * @returns {Promise<boolean>} True if successful
   */
  async copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        // Fallback on permission denial
      }
    }

    // Classic textarea fallback (works in local double-clicked files)
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let success = false;
    try {
      success = document.execCommand('copy');
    } catch (err) {
      success = false;
    }

    document.body.removeChild(textArea);
    return success;
  },

  /**
   * Handles the 'Copy email' button click:
   * 1. Copies bshtparth@gmail.com
   * 2. Switches to State 3: 'copied'
   * 3. Announces to screen readers via aria-live
   * 4. Auto-reverts after 3 seconds
   */
  async handleCopyEmail() {
    await this.copyToClipboard(this.email);

    // Switch to Copied state
    this.setState('copied');

    const copyBtnText = document.getElementById('copy-btn-text');
    if (copyBtnText) copyBtnText.textContent = '✓ Copied!';

    // Clear any existing timer
    if (this.copyTimeout) clearTimeout(this.copyTimeout);

    // Revert back to default state after 3 seconds
    this.copyTimeout = setTimeout(() => {
      this.setState('default');
      if (copyBtnText) copyBtnText.textContent = 'Copy email';
    }, 3000);
  },

  /**
   * Handles the 'Email me' button click:
   * 1. Switches to State 2: 'compose' (in-flight visual terminal state)
   * 2. Reverts back to default after 2.5 seconds
   */
  handleEmailMeClick() {
    this.setState('compose');

    if (this.composeTimeout) clearTimeout(this.composeTimeout);

    this.composeTimeout = setTimeout(() => {
      this.setState('default');
    }, 2500);
  },

  /**
   * Initializes event listeners for the contact section
   */
  init() {
    const copyBtn = document.getElementById('btn-copy-email');
    const emailBtn = document.getElementById('btn-email-me');

    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleCopyEmail();
      });
    }

    if (emailBtn) {
      emailBtn.addEventListener('click', () => {
        this.handleEmailMeClick();
        // Allow default mailto: navigation to proceed naturally
      });
    }
  }
};
