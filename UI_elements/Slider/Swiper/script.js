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
    type: "bullets",
    
    // clickable: true,
    // dynamicBullets: true,

    // 1 / 2, 3 / 6 etc.
    //type: "fraction",
    
    //type: "progressbar",
  },

  //скролл 
  scrollbar: {
    el: ".swiper-scrollbar",

    //возможность перетаскивать скролл
    draggable: true
  },

  //переключение при клике на слайд
  slideToClickedSlide: true,

  //управление клавиатурой 
  keyboard: {
    enabled: true,
    //только когда скрол в зоне видимости
    onlyInViewport: true,
    //использование клавиш page up / down
    pageUpDown: true,
  },


  //прокрутка при помощи колеа мыши
  mousewheel: {
    sensitivity: 1,
  },

  //автовысота
  autoHeight: true,

  //колличество слайдов для показа
  slidesPerView: 3,

  //отступ между слайдами
  spaceBetween: 30,

  //колличество пролистываемых слайдов
  slidesPerGroup: 1,

  //активный слайд по центру
  centeredSlides: true,

  //мультирядность
  //slidesPerColumn: 2,

  //бесконечный слайдер
  loop: true,

  //автопрокрутка
  autoplay: {
    //в милисекундах
    delay: 1000,
    //остановить после прокрутки
    stopOnLastSlide: true,
    disableOnInteraction: false
  },

  //скорость переключения слайдов
  speed: 1200,

  //эфекты переключения слайдов
  // effect: "fade",
  // fadeEffect: {
  //   //смена прозрачности
  //   crossFade: true
  // },

  //адаптив по размеру экарана
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },

  //паралакс эффект + необходимо внести правки в HTML
  //parallax: true,
  
});