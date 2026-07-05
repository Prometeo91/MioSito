// Cielo stellato: genera le stelle una volta sola, con posizioni casuali.
(function buildStarfield() {
  var field = document.querySelector('.starfield');
  if (!field) return;
  var count = window.innerWidth < 720 ? 60 : 120;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    var star = document.createElement('span');
    star.className = 'star';
    var size = Math.random() * 2 + 0.5;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
    star.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + 's';
    fragment.appendChild(star);
  }
  field.appendChild(fragment);
})();

// Menu mobile.
(function mobileNav() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Comparsa progressiva delle sezioni allo scroll.
(function revealOnScroll() {
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { observer.observe(el); });
})();

// Anno corrente nel footer.
(function currentYear() {
  var span = document.getElementById('year');
  if (span) span.textContent = String(new Date().getFullYear());
})();
