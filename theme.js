(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const text = document.getElementById('themeToggleText');

  function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    if (toggle) toggle.setAttribute('aria-pressed', String(isDark));
    if (text) text.textContent = isDark ? 'Тема: Тёмная' : 'Тема: Светлая';
  }

  const initial = getInitialTheme();
  applyTheme(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
})();
