const numbers = [2, 5, 7, 10, 3];

const multiplyNumbers = numbers.reduce((acc, num) => acc * num, 1);

console.log(multiplyNumbers);