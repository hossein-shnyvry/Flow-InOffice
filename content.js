/**
 * Content script injected into Google Flow pages.
 * Injects a minimal floating banner with status and social links below the chat box.
 */
(function () {
  const SELECTOR = 'flow-prompt-box.prompt-box-container';
  const BANNER_CLASS = 'inoffice-minimal-banner';
  const STYLE_ID = 'inoffice-minimal-banner-style';

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const link = document.createElement('link');
    link.id = STYLE_ID;
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('banner.css');
    document.head.appendChild(link);
  }

  function injectBanner() {
    if (document.querySelector('.' + BANNER_CLASS)) return;

    const target = document.querySelector(SELECTOR);
    if (!target) return;

    const banner = document.createElement('div');
    banner.className = BANNER_CLASS;

    banner.innerHTML =
      '<div class="banner-status">' +
        '<span class="status-dot"></span>' +
        '<span class="status-text">InOffice Flow فعال است</span>' +
      '</div>' +
      '<div class="banner-socials">' +
        '<a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">' +
          '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>' +
            '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>' +
            '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>' +
          '</svg>' +
        '</a>' +
        '<a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">' +
          '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>' +
            '<rect x="2" y="9" width="4" height="12"></rect>' +
            '<circle cx="4" cy="4" r="2"></circle>' +
          '</svg>' +
        '</a>' +
      '</div>';

    target.insertAdjacentElement('afterend', banner);
  }

  function init() {
    injectStyle();
    injectBanner();

    const observer = new MutationObserver(function () {
      injectBanner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
