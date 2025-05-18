// theme.js
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');

  // If the toggle exists on this page (like in settings), update it
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.checked = theme === 'dark';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});
