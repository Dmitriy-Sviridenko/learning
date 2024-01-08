
var array = [1, 1, 1, 2, 4, 4, 3]


const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


console.log(findOdd(array));