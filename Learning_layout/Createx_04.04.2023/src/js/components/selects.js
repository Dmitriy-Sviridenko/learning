const { bottom } = require("@popperjs/core");

const selects = document.querySelectorAll('.form-field__select');

if (selects) {
  selects.forEach(el => {
    new Choices(el, {
      shouldSort: false,
      position: "bottom",
      searchEnabled: false,
    }); 
  });  
}

