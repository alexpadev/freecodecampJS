// My version

let num = 5;

function factorialCalculator(num) {
  let factorial = 1;
  let result = 1;
  let arr = [];
  for (let i = 1; i<=num; i++) {
    arr.push(i);
  }
  for (let number of arr) {
    for (result; result <= num; result++) {
      factorial = factorial * result;
    };

  }
  return factorial;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

// Claude's version

// function factorialCalculator(num) {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// const factorial = factorialCalculator(num);
// const resultMsg = `Factorial of ${num} is ${factorial}`;
// console.log(resultMsg);