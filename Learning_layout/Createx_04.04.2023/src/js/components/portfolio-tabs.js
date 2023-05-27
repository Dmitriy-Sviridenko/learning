const portfolioTabsNav = document.querySelector(".portfolio-tabs-nav");

portfolioTabsNav.addEventListener("click", (e) => {
  const target = e.target;
  if  (target.classList.contains("portfolio-tabs-nav__btn")) {
    const path = target.dataset.path;

    document.querySelectorAll(".portfolio-tabs__item").forEach(el => {el.style.display = "none"});

    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible');
    });
  }
});