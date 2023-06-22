const toTop = document.querySelector(".to-top");
const heroHeightn = document.querySelector(".hero").offsetHeight;

const isVisivleToTop = (y = 0) => {
  if (y >= heroHeightn) {
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