const openPopUp = document.querySelector(".open_pop_up");
const closePopUp = document.querySelector(".pop_up_close");
const popUp = document.querySelector(".pop_up");

openPopUp.addEventListener("click", function(e){
  e.preventDefault(); //отключение переходов по ссылке
  popUp.classList.add("active");
})

closePopUp.addEventListener("click", () =>{
  popUp.classList.remove("active");
})
