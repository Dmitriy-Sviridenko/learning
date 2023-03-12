// services start

const tabsBtn = document.querySelectorAll(".services__item")
const tabsItems = document.querySelectorAll(".services__info")

console.log(tabsBtn,tabsItems)

tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId);


      tabsBtn.forEach(function(item){
        item.classList.remove("active")
      });
  
      tabsItems.forEach(function(item){
        item.classList.remove("active")
      });
  
      currentBtn.classList.add("active");
      currentTab.classList.add("active")

  });
});

//вирутальный клик по первому элементу (чтобы не прописывать в html класс вручную)
document.querySelector(".services__item").click(); 

// services end

// pop-up start

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

// pop-up end
