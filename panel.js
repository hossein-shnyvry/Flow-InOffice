/**
 * Popup panel logic for the InOffice Flow extension.
 * Manages connection state, UI updates, and script registration.
 */
const FLOW_URL = 'https://flow.google.com/';
const CONTENT_SCRIPT_ID = 'flow-helper';
const UNSUPPORTED_COUNTRY_PATH = '/unsupported-country';

const VISUAL_STATES = {
  idle:          { css: '',              label: 'برای همگام‌سازی با Google Flow آماده‌اید؟',  cta: 'اتصال',     hint: '' },
  enabled:       { css: 'state-connected', label: 'ابزار فعال است',                          cta: 'قطع اتصال', hint: 'برای اعمال، تب Flow را بازنشانی کنید' },
  active:        { css: 'state-connected', label: 'اتصال برقرار است',                        cta: 'قطع اتصال', hint: 'بررسی ریجن با موفقیت اعمال شد' },
  connecting:    { css: 'state-connecting', label: 'در حال اتصال…',                          cta: 'اتصال',     hint: 'صبر کنید…' },
  disabled:      { css: '',              label: 'برای همگام‌سازی با Google Flow آماده‌اید؟',  cta: 'اتصال',     hint: '' },
  error:         { css: 'state-error',   label: 'خطا در اتصال',                             cta: 'تلاش مجدد', hint: 'اتصال خود را بررسی کنید' },
  schemaMismatch:{ css: 'state-error',   label: 'نیاز به به‌روزرسانی',                       cta: 'تلاش مجدد', hint: 'ممکن است Flow تغییر کرده باشد' },
  reloadTab:     { css: 'state-connecting', label: 'بازنشانی تب مورد نیاز است',               cta: 'بازنشانی',  hint: 'این تب Flow را بازنشانی کنید' }
};

const MSG_SAVE_FAILED = 'ذخیره تنظیمات ممکن نبود.';

const toggle = document.getElementById('toggle');
const ctaBtn = document.getElementById('cta');
const ctaText = document.getElementById('ctaText');
const sceneLabel = document.getElementById('sceneLabel');
const hintEl = document.getElementById('hint');
const errorEl = document.getElementById('error');
const illustration = document.getElementById('illustration');

let tab;
let currentState = 'idle';

function applyVisualState(state) {
  const s = VISUAL_STATES[state];
  if (!s) return;
  currentState = state;

  // Remove all state classes from illustration
  illustration.className = 'illustration';
  if (s.css) illustration.classList.add(s.css);

  // Update text
  sceneLabel.textContent = s.label;
  ctaText.textContent = s.cta;
  hintEl.textContent = s.hint;
  hintEl.hidden = !s.hint;
  errorEl.textContent = '';
}

function setEnabled(val) {
  toggle.setAttribute('aria-checked', String(val));
}

async function init() {
  const scripts = await chrome.scripting.getRegisteredContentScripts({ ids: [CONTENT_SCRIPT_ID] });
  const enabled = scripts.length > 0;
  setEnabled(enabled);
  ctaBtn.disabled = false;

  [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const isFlow = tab && tab.url && tab.url.startsWith(FLOW_URL);

  if (!isFlow) {
    applyVisualState('idle');
    return;
  }

  if (enabled) {
    try {
      const resp = await chrome.tabs.sendMessage(tab.id, { type: 'status' });
      if (resp && resp.applied) {
        applyVisualState('active');
      } else {
        applyVisualState('enabled');
      }
    } catch {
      applyVisualState('reloadTab');
    }
  } else {
    applyVisualState('idle');
  }
}

ctaBtn.addEventListener('click', async () => {
  const wasEnabled = toggle.getAttribute('aria-checked') === 'true';
  const wantEnabled = !wasEnabled;

  errorEl.textContent = '';
  ctaBtn.disabled = true;

  // Show connecting state briefly
  if (wantEnabled) {
    applyVisualState('connecting');
  }

  try {
    const registered = await chrome.scripting.getRegisteredContentScripts({ ids: [CONTENT_SCRIPT_ID] });

    if (wantEnabled && registered.length === 0) {
      await chrome.scripting.registerContentScripts([{
        id: CONTENT_SCRIPT_ID,
        matches: ['https://flow.google.com/*'],
        js: ['engine.js'],
        runAt: 'document_start',
        world: 'MAIN',
        persistAcrossSessions: true
      }]);
    }

    if (!wantEnabled && registered.length > 0) {
      await chrome.scripting.unregisterContentScripts({ ids: [CONTENT_SCRIPT_ID] });
    }

    setEnabled(wantEnabled);

    if (!wantEnabled) {
      applyVisualState('idle');
    } else {
      applyVisualState('enabled');
      window.open(FLOW_URL, '_blank');
    }
  } catch (e) {
    errorEl.textContent = MSG_SAVE_FAILED + ' ' + (e.message || '');
    applyVisualState('error');
  } finally {
    ctaBtn.disabled = false;
  }
});

init();
