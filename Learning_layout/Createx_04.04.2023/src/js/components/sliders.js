const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));
const portSlider = document.querySelector('.portfolio-section__items');
const relatedSlider = document.querySelector('.related-projects__items');
const workImages = document.querySelector(".work-images-slider");
const historySlider = document.querySelector(".history-slider");

if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    slidesPerGroup: 1,
    
    navigation: {
      nextEl: '.portfolio-section__next',
      prevEl: '.portfolio-section__prev',
    },

    autoplay: {
      delay: 2000,
    },
    
    breakpoints: {
      576: {
        slidesPerView: 2,
        autoplay: false,
      },
      768: {
        slidesPerView: 3,
        autoplay: false,
      }
    }
  });
  
  document.querySelector(".portfolio-section__prev").addEventListener("click", () => {
    const activeSlide = portSlider.querySelector(".swiper-slide-next");
  
    document.querySelectorAll(".portfolio-section__items .swiper-slide").forEach(el => {
      el.classList.remove("slider-visible");
    });
  
    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add("slider-visible")
      nextActiveSlide.classList.add("slider-visible");
      activeSlide.nextElementSibling.classList.add("slider-visible")
    };
  });
};

if (relatedSlider) {
  const relatedProjSlider = new Swiper(relatedSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    slidesPerGroup: 1,

    autoplay: {
      delay: 2000,
    },

    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        autoplay: false,
      },
      768: {
        slidesPerView: 3,
        autoplay: false,
      }
    },
  });

  document.querySelector(".related-projects__prev").addEventListener("click", () => {
    const activeSlide = portSlider.querySelector(".swiper-slide-next");
  
    document.querySelectorAll(".related-projects__items .swiper-slide").forEach(el => {
      el.classList.remove("slider-visible");
    });
  
    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add("slider-visible")
      nextActiveSlide.classList.add("slider-visible");
      activeSlide.nextElementSibling.classList.add("slider-visible")
    };
  });
};

const testimonialsSlider = new Swiper(".testimonials__items", {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,

  autoplay: {
    delay: 2000,
  },
 
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

  breakpoints: {
    576: {
      autoplay: false,
    },
  }  
});

if (workImages) {
  const workSlider = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      576: {
        slidesPerView: 6,
        autoplay: false,
      },
      768: {
        slidesPerView: 10,
        autoplay: false,
      }
    },
  });

  const workSliderNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}

if (historySlider) {
  const workSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.history__next',
      prevEl: '.history__prev',
    },
  });

  workSlider.on('slideChange', function () {
    historyBtns.forEach(el => {
      el.classList.remove("history-nav__btn--active");
    });

    document.querySelector(`.history-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add("history-nav__btn--active")
  });

  const historyBtns = document.querySelectorAll(".history-nav__btn")

  historyBtns.forEach((el, idx) => {
    el.setAttribute("data-index", idx);

    el.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach(el => {
        el.classList.remove("history-nav__btn--active");
      });

      e.currentTarget.classList.add("history-nav__btn--active")

      workSlider.slideTo(index);
    });
  });
};

const heroSliderSpeed = 1500;

const bodyStylesHero = window.getComputedStyle(document.body);
const fooBar = bodyStylesHero.getPropertyValue('--hero-slider-speed');

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');

const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
 
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },

  speed: heroSliderSpeed,

  autoplay: {
    delay: 3000
  },

  pagination: {
    el: ".hero__pag",
    type: "bullets",
    clickable: true,
  },

  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll(".hero__pag .swiper-pagination-bullet");
      
      paginationBullets.forEach(el => {
        el.innerHTML = `<span class="hero__bar"></span>`
      });
    },
  },
});


