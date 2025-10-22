document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <p>Szymon<p>
    <div class="nav-menu">
      <ul>
        <li><a href="#">O mnie</a></li>
        <li><a href="#">Wykształcenie</a></li>
        <li><a href="#">Umiejętności</a></li>
        <li><a href="#">Projekty</a></li>
      </ul>
    </div>
  `;

  const expandedMenu = document.getElementById('expanded-menu');
  expandedMenu.innerHTML = `
    <div id="expanded-menu-content">
      <a href="#">O mnie</a>
      <a href="#">Wykształcenie</a>
      <a href="#">Umiejętności</a>
      <a href="3">Projekty</a>
    </div>
  `;

  const menuIcon = document.getElementById('menu-icon');
  menuIcon.addEventListener('click', () => {
    expandedMenu.classList.toggle('show');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && expandedMenu.classList.contains('show')) {
      expandedMenu.classList.remove('show');
    }
  });

});
