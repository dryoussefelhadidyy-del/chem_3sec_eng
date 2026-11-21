// Shared UI Utilities: Navbar, Mobile Drawer, and Dark/Light Theme Toggle
(function () {
  if (localStorage.getItem('chem_en_theme') === 'dark') {
    document.body.classList.add('dark');
  }
})();

function renderNavbar(activePage) {
  const nav = document.getElementById('navbar-root');
  if (!nav) return;
  const isDark = document.body.classList.contains('dark');
  const links = [
    { href: 'index.html', id: 'index', label: 'Home' },
    { href: 'lessons.html', id: 'lessons', label: 'Full Lessons' },
    { href: 'mindmaps.html', id: 'mindmaps', label: 'Mind Maps' },
    { href: 'flashcards.html', id: 'flashcards', label: 'Flashcards (200)' },
    { href: 'quiz.html', id: 'quiz', label: 'Q-Bank (1500)' },
    { href: 'exams.html', id: 'exams', label: 'Past Exams (46 Qs)' }
  ];

  nav.innerHTML = `
    <header class="navbar">
      <div class="nav-inner">
        <a href="index.html" class="brand">
          <span class="brand-icon">⚗️</span>
          <span>ChemSec3 Complete</span>
        </a>
        <nav class="nav-links">
          ${links.map(l => `<a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a>`).join('')}
        </nav>
        <div class="nav-actions">
          <button class="theme-btn" id="themeToggleBtn" aria-label="Toggle theme">${isDark ? '☀️' : '🌙'} <span class="txt">${isDark ? 'Light' : 'Dark'}</span></button>
          <button class="menu-toggle" id="menuToggleBtn" aria-label="Menu">☰</button>
        </div>
      </div>
      <nav class="mobile-drawer" id="mobileDrawer">
        ${links.map(l => `<a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a>`).join('')}
      </nav>
    </header>
  `;

  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    localStorage.setItem('chem_en_theme', dark ? 'dark' : 'light');
    document.getElementById('themeToggleBtn').innerHTML = `${dark ? '☀️' : '🌙'} <span class="txt">${dark ? 'Light' : 'Dark'}</span>`;
  });

  document.getElementById('menuToggleBtn').addEventListener('click', () => {
    const drawer = document.getElementById('mobileDrawer');
    drawer.classList.toggle('open');
    document.getElementById('menuToggleBtn').textContent = drawer.classList.contains('open') ? '✕' : '☰';
  });
}

function renderFooter() {
  const ft = document.getElementById('footer-root');
  if (!ft) return;
  ft.innerHTML = `
    <footer class="footer">
      Thanaweya Amma Chemistry Complete Platform (English / Experimental Schools) — 100% Responsive & Offline Ready ⚗️
    </footer>
  `;
}
