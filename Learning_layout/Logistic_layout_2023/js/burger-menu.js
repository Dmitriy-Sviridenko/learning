// Burger-menu start

const burger = document.querySelector(".burger")
const nav = document.querySelector(".header__nav")
const bodyForBurger = document.querySelector("body")
//найти баг почему body работает только на домашней странице


// взаимодействие с бургер-меню
burger.addEventListener("click", () =>{
  bodyForBurger.classList.toggle("stop-scroll") //отключение скрола по странице
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

// Burger-menu end