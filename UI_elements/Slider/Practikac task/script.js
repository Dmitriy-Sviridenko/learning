new Swiper(".testimonials__reviews", {
  //стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  //пагинация 
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  //прокрутка при помощи колеа мыши
  mousewheel: {
    sensitivity: 1,
  },

  //колличество слайдов для показа
  slidesPerView: 3,

  //колличество пролистываемых слайдов
  slidesPerGroup: 3,

  //бесконечный слайдер
  loop: true,

  spaceBetween: 100,
  
});