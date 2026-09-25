const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');
const preferredLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme === 'light' || (!savedTheme && preferredLight)) {
  root.dataset.theme = 'light';
}

toggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  if (next === 'light') root.dataset.theme = 'light';
  else delete root.dataset.theme;
  localStorage.setItem('portfolio-theme', next);
});

document.getElementById('year').textContent = new Date().getFullYear();
