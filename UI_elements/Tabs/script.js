//выбираем все кнопки

const tabsBtn = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId);

    if ( ! currentBtn.classList.contains("active")) { // If нужен для проверки текущего класса
      tabsBtn.forEach(function(item){
        item.classList.remove("active")
      });
  
      tabsItems.forEach(function(item){
        item.classList.remove("active")
      });
  
      currentBtn.classList.add("active");
      currentTab.classList.add("active")
    }
  });
});

//вирутальный клик по первому элементу (чтобы не прописывать в html класс вручную)
document.querySelector(".tabs__nav-btn").click(); 
