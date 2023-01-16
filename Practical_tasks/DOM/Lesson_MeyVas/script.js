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



// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами

const pDiv = document.createElement('div')
pDiv.className = "pDiv"
pDiv.innerHTML = `
<p>Параграф 1</p>
<p>Параграф 2</p>
`

 
// Поместить этот DIV до элемента <ul></ul>

first_div.insertAdjacentElement('afterbegin', pDiv)

// Добавить для 2-го параграфа класс text

pDiv.children[1].className = "text"

// Удалить 1-й параграф

pDiv.children[0].remove()


// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year

const generateAutoCard = (brand, color, year) => {
  return `
      <div class="autoCard">
        <h2>BRAND YEAR</h2>
        <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
      </div>`
}

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>


// Создать новый DIV с классом autos

const div_auto = document.createElement("div")
div_auto.className = 'autos'


// Создать 3 карточки авто, используя функцию generateAutoCard

const carsList = [
  {brand: 'Tesla', year: 2015, color: 'Красный'},
  {brand: 'Lexus', year: 2016, color: 'Серебристый'},
  {brand: 'Nissan', year: 2012, color: 'Черный'},
]

const carsHTML = carsList.map()

// Поместить эти 3 карточки внутрь DIV с классом autos


// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper

console.log(div_auto)


// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки


// 2. Создать функцию удаления


// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
