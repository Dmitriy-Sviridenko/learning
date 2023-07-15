//Сортировка выбором

const selectionArray = [13,2,5,7,4,10];
let selectionCount = 0;

function selectionSort (array) {
  for (let i = 0; i < array.length; i++){
    let indexMin = i;

    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[indexMin]) {
        indexMin = j;
      };
      selectionCount += 1;
    };

    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  };

  return array
};

console.log(selectionSort(selectionArray))
console.log(selectionCount);