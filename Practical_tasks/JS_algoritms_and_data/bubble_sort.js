//Сортировка выбором

const array1 = [13,2,5,7,4,10];
let count = 0;

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      };
      count+=1;
    };
    console.log(array)
  };
  return array;
};

console.log(bubbleSort(array1));
console.log(count);


