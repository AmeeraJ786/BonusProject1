const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
}); // AI used // 