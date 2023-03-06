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
