// const portSlider = document.querySelector(".portfolio-section__items");

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));



const portfolioSlider = new Swiper(".portfolio-section__items", {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  // on: {
  //   init: function () {
  //     console.log('swiper initialized');

  //     const activeSlide = portSlider.querySelector(".swiper-slide-active")
  //     console.log(activeSlide);
  //   },
  // },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
});

portfolioSlider.on('slideChange', function () {
  console.log('slide changed');
});

