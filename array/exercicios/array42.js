const multiplyArray = (numbers, multiplier) =>  numbers.map(number => number * multiplier);


const numbers = [1, 2, 3, 4, 5, 6];
const multiplier = 5;

console.log('------------- Multiplicando Valores -------------');
console.log('Números: ', numbers);
console.log(`Números multiplicados por ${multiplier}:`, multiplyArray(numbers, multiplier));
console.log('-------------------------------------------------');