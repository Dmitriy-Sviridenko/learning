new Swiper(".image-slider", {
  //стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  //пагинация 
  pagination: {
    el: ".swiper-pagination",
    //буллеты
    // type: "bullets",
    
    // clickable: true,
    // dynamicBullets: true,

    // 1 / 2, 3 / 6 etc.
    //type: "fraction",
    
    type: "progressbar",
  },

  //скролл 
  scrollbar: {
    el: ".swiper-scrollbar",

    //возможность перетаскивать скролл
    draggable: true
  },

  //переключение при клике на слайд
  slideToClickedSlide: true,
});