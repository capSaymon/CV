document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <img src="./assets/icons/logo.png" alt="Logo" id="logo-icon"/>
    <div class="nav-menu">
      <ul>
        <li><a href="./about_me.html">O mnie</a></li>
        <li><a href="./education.html">Wykształcenie</a></li>
        <li><a href="./skills.html">Umiejętności</a></li>
        <li><a href="./projects.html">Projekty</a></li>
        <li><a href="./contact.html">Kontakt</a></li>
      </ul>
    </div>
    <img src="./assets/icons/menu.png" alt="Menu" id="menu-icon"/>
  `;

  const expandedMenu = document.getElementById('expanded-menu');
  expandedMenu.innerHTML = `
    <div id="expanded-menu-content">
      <a href="./about_me.html">O mnie</a>
      <a href="./education.html">Wykształcenie</a>
      <a href="./skills.html">Umiejętności</a>
      <a href="./projects.html">Projekty</a>
      <a href="./contact.html">Kontakt</a>
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
