(function () {
  function effective() {
    var t = document.documentElement.dataset.theme;
    if (t === 'dark' || t === 'light') return t;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setLabel(btn) {
    var mode = effective();
    btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
  }

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    setLabel(btn);
    btn.addEventListener('click', function () {
      var next = effective() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      document.querySelectorAll('.theme-toggle').forEach(setLabel);
    });
  });
})();
