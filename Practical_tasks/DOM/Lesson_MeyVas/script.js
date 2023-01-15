// Создать div

const first_div = document.createElement("div")

// Добавить к нему класс wrapper

first_div.className = "wrapper"


// Поместить его внутрь тэга body

document.body.prepend(first_div)


// Создать заголовок H1 "DOM (Document Object Model)"

const title = document.createElement("h1")

title.textContent = "DOM (Document Object Model)"

// Добавить H1 перед DIV с классом wrapper

document.body.prepend(title)

// Создать список <ul></ul>

const ul = document.createElement("ul")

// Добавить в него 3 элемента с текстом "один, два, три"

ul.innerHTML = `
  <li>Один</li>
  <li>Два</li>
  <li>Три</li>
`

// Поместить список внутрь элемента с классом wrapper

first_div.insertAdjacentElement("afterbegin", ul)



// =================================================
// Создать изображение

const image = document.createElement("img")

// Добавить следующие свойства к изображению
// 1. Добавить атрибут source

image.setAttribute("src", "img.jpg" )

// 2. Добавить атрибут width со значением 240

image.setAttribute("width", "240")

// 3. Добавить класс super

image.className = "super"

// 4. Добавить свойство alt со значением "Super Man"

image.alt = "Super Man"

// Поместить изображение внутрь элемента с классом wrapper

first_div.appendChild(image)

console.log(image)


// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами


 
// Поместить этот DIV до элемента <ul></ul>



// Добавить для 2-го параграфа класс text



// Удалить 1-й параграф


// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year


// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>


// Создать новый DIV с классом autos


// Создать 3 карточки авто, используя функцию generateAutoCard



// Поместить эти 3 карточки внутрь DIV с классом autos


// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper



// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки


// 2. Создать функцию удаления


// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
