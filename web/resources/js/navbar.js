function isActive() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(navLink) {
    const linkPath = navLink.getAttribute('href');
    if (currentPath === linkPath) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  isActive();
});