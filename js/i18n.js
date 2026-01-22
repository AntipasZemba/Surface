const defaultLang = document.documentElement.lang || "en";

async function loadTranslations(lang) {
  const res = await fetch(`/locales/${lang}.json`);
  return res.json();
}

function applyTranslations(t) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
}

(async () => {
  const translations = await loadTranslations(defaultLang);
  applyTranslations(translations);
})();
