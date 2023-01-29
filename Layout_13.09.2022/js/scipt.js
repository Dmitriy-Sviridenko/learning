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

const openPopUp = document.querySelectorAll(".pop-up__button").forEach(
    item => item.addEventListener("click", function(e){
    e.preventDefault(); //отключение переходов по ссылке
    popUp.classList.add("active");
  })
)

const closePopUp = document.querySelector(".pop_up_close");
const popUp = document.querySelector(".pop_up");
closePopUp.addEventListener("click", () =>{
  popUp.classList.remove("active");
})

