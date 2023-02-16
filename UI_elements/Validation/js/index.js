function validation (form) {

    function createError(input, text){
        const parent = input.parentNode;
        parent.classList.add("eror")
        console.log(parent);
    }

    let result = true;
    
    form.querySelectorAll("input").forEach(input => {
        if (input.value==""){
            console.log("Ошибка поля")
            createError(input, "Поле не заполнено")
            result = false;
        }
    });

    return result
}


document.getElementById("add-form").addEventListener("submit", function(event){
    event.preventDefault()

    if (validation(this) == true) {
        alert("Форма проверена успешная")
    }
})