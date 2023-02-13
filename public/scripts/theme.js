(function initTheme() {
  var isDarkMode = localStorage.getItem('is-phil-website-dark') === 'true' || false;
  if (isDarkMode) {
    document.querySelector('html').classList.add('dark');
  }
})();
