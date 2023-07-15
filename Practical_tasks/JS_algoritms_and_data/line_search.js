//линейный поиск

const lineSearchArray = [1,4,5,8,5,1,2,7,2,2,11];

function lineSearch (array, item) {
  let count = 0;
  for (let i = 0; i < array.length; i++){
    count += 1
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}
