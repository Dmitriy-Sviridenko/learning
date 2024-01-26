const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

//Клик по кнопкам с подсказками
for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    
    for (let hint of infoHints) {
      hint.classList.add("none");
    };
    
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

//Закрываем подсказски при клике по всей странице
document,addEventListener("click", function () {
  for (let hint of infoHints) {
    hint.classList.add("none")
  }
});

//Запрещаем всплытие события клика при клике на подсказку
for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
};

// Siper slider

const swiper = new Swiper('.swiper', {
  loop: true,
  freeMode: true,

  slidesPerView: 4,
  spaceBetween: 42,

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});


// Tabs

const tabsBtns = document.querySelectorAll(`[data-tab]`);
const tabsProducts = document.querySelectorAll(`[data-tab-value]`);

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-contols__btn--active");
    };

    this.classList.add("tab-contols__btn--active");

    //Получаем значение категории товаров, которые нужно включить

    // Отоброжение и скрытие товаров
    for (let product of tabsProducts) {

      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        };
      }
    };

    //Update Swiper
    swiper.update()
  });
}

//Mobile Nav

const mobileNavOpen = document.querySelector("#open-mobile-nav-btn");
const mobileNavClose = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav-wrapper");


mobileNavOpen.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
};

mobileNavClose.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
}