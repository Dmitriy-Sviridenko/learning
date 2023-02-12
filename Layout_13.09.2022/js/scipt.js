//start show adventures__item

const adventuresBtn = document.querySelector(".btn--orange-adventures");
const adventuresProductsLength = document.querySelectorAll(".adventures__item").length;
let adventuresItems; //amount of start adventures__item
let addadventuresItems; //amount of adding adventures__item

//опредялем размер окна
function adventuresCards () {
  if (window.innerWidth <= 639) {
    adventuresItems = 1;
    addadventuresItems = 1;
  } else if (window.innerWidth <= 919) {
    adventuresItems = 4;
    addadventuresItems = 2;
  } else if (window.innerWidth <= 1199) {
    adventuresItems = 6;
    addadventuresItems = 3;
  } else if (window.innerWidth > 1200) {
    adventuresItems = 8;
    addadventuresItems = 4;
  }
}

adventuresCards()

console.log(adventuresItems)
console.log(addadventuresItems)

adventuresBtn.addEventListener('click', () => { 
  adventuresItems += addadventuresItems;
  const array = Array.from(document.querySelector('.adventures__cards').children);
  const adventuresVisItems = array.slice(0, adventuresItems);
  adventuresVisItems.forEach(el => el.classList.add('is-visible'));
  if(adventuresVisItems.length === adventuresProductsLength) {
      adventuresBtn.style.display = 'none'
  }
})

// end show adventures__item

//start Swiper
new Swiper(".testimonials__reviews", {

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

    breakpoints: {
      1051: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      804: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });



const body = document.querySelector("body")
const openPopUp = document.querySelectorAll(".pop-up__button").forEach(
    item => item.addEventListener("click", function(e){
    e.preventDefault(); //отключение переходов по ссылке
    popUp.classList.add("active");
    body.classList.add("swith_off_body");
  })
)

const closePopUp = document.querySelector(".pop_up_close");
const popUp = document.querySelector(".pop_up");
const popUpBackground = document.querySelector(".pop_up_container");


//закрытие поп-ап по крестику
closePopUp.addEventListener("click", () =>{
  popUp.classList.remove("active");
  body.classList.remove("swith_off_body");
})

//закрытие поп-ап по оверлею
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popUpBackground) {
    popUp.classList.remove("active");
    body.classList.remove("swith_off_body");
  }
});


// Burger-menu

const burger = document.querySelector(".burger")
const nav = document.querySelector(".header__nav")

// взаимодействие с бургер-меню
burger.addEventListener("click", () =>{
  body.classList.toggle("stop-scroll") //отключение скрола по странице
  burger.classList.toggle("burger--active") //изменение значка бургер меню
  nav.classList.toggle('nav--visible');  //раскрытие меню
})


// скрытие меню по клику
const navItems = nav.querySelectorAll("a")
navItems.forEach(el => {
  el.addEventListener("click", () => { 
    body.classList.remove("stop-scroll")
    burger.classList.remove("burger--active")
    nav.classList.remove('nav--visible'); 
  });
});