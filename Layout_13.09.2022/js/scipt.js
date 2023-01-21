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




