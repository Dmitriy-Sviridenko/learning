//рекурсия 

//факториала

const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1)
};

//расчет фибоначи

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return (fibonachi(n - 1)) + (fibonachi(n - 2))
  }
}


console.log(fibonachi(8))

