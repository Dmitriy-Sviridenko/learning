const adventuresBtn = document.querySelector(".btn--orange-adventures");
const adventuresProductsLength = document.querySelectorAll(".adventures__item").length;
let adventuresItems = 8;

adventuresBtn.addEventListener('click', () => {
    adventuresItems += 4;
    const array = Array.from(document.querySelector('.adventures__cards').children);
    const adventuresVisItems = array.slice(0, adventuresItems);
    adventuresVisItems.forEach(el => el.classList.add('is-visible'));

    if(adventuresVisItems.length === adventuresProductsLength) {
        adventuresBtn.style.display = 'none'
    }
})


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
