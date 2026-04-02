import en from '../i18n/en.json';
import zh from '../i18n/zh.json';
import es from '../i18n/es.json';

const dictionaries: Record<string, Record<string, string>> = { en, zh, es };
const langLabels: Record<string, string> = { en: 'EN', zh: '中文', es: 'ES' };
const langCodes: Record<string, string> = { en: 'en', zh: 'zh-CN', es: 'es' };

let currentLang = localStorage.getItem('lang') || 'en';

// Init on load
if (currentLang !== 'en') {
  applyLang(currentLang);
}

(window as any).toggleLangMenu = function(e: Event) {
  e.preventDefault();
  document.getElementById('lang-menu')?.classList.toggle('hidden');
};

// Close menu on click outside
document.addEventListener('click', (e) => {
  if (!(e.target as HTMLElement).closest('#lang-dropdown')) {
    document.getElementById('lang-menu')?.classList.add('hidden');
  }
});

(window as any).setLang = function(lang: string, e: Event) {
  e.preventDefault();
  currentLang = lang;
  localStorage.setItem('lang', lang);
  (window as any).setCurrentLang?.(lang);
  applyLang(lang);
  document.getElementById('lang-menu')?.classList.add('hidden');
};

function applyLang(lang: string) {
  const dict = dictionaries[lang];
  if (!dict) return;

  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = langLabels[lang] + ' \u25BE';
  document.documentElement.lang = langCodes[lang] || lang;

  // Swap data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Swap placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key]) (el as HTMLInputElement).placeholder = dict[key];
  });

  // Update current lang for modal
  (window as any).setCurrentLang?.(lang);
}
