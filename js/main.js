(function () {
  document.documentElement.classList.add("js");

  var hero = document.querySelector(".hero");
  if (!hero) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function reveal() {
    hero.classList.add("is-ready");
  }

  if (reducedMotion.matches) {
    reveal();
    return;
  }

  // Next frame so the initial hidden state paints before animating in
  requestAnimationFrame(function () {
    requestAnimationFrame(reveal);
  });
})();
