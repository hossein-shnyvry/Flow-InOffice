/**
 * Content script injected into Google Flow pages.
 * Injects a visual banner indicating InOffice Flow is active.
 */
(function () {
  const SELECTOR = 'flow-prompt-box.prompt-box-container';
  const BANNER_CLASS = 'inoffice-flow-banner';
  const STYLE_ID = 'inoffice-flow-banner-style';

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
      '<span class="banner-icon">⚡</span>' +
      '<span>دسترسی اختصاصی InOffice Flow فعال است</span>';

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
