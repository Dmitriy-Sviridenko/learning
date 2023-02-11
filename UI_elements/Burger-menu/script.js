const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")
const body = document.body;


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