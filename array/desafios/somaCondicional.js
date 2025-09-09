const numbers = [5, 12, 8, 20, 7, 30];

const evenNumbers = numbers
.filter(number => number % 2 === 0)
.reduce((acc, number) => acc + number, 0);

console.log(evenNumbers);