const toTop = document.querySelector(".to-top");
let heroHeight;

if (toTop) {
  if (document.querySelector(".hero")) {
    heroHeight = document.querySelector(".hero").offsetHeight;
  };
  
  if (document.querySelector(".page-hero")) {
    heroHeight = document.querySelector(".page-hero").offsetHeight;
  }
  
  const isVisivleToTop = (y = 0) => {
    if (y >= heroHeight) {
      toTop.classList.add("to-top--active");
    } else {
      toTop.classList.remove("to-top--active");
    }
  }
  
  isVisivleToTop(window.scrollY);
  
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    isVisivleToTop(y);
  });
}
