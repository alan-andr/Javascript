const numbers = [1, 2, 3, 4, 21, 7, 143, 41, 12];

const highestNumber = numbers.reduce((max, num) => max > num ? max : num);

console.log(highestNumber)

