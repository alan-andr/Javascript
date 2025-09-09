const numbers = [1, 3, 5, 12, 8, 10,];

const highestNumber = (arr) => (arr.reduce((max, value) => max > value ? max : value, 0));

console.log('-------------- Maior valor no array ------------------');
console.log(`Os valores do array são: ${numbers.join(', ')}`);
console.log(`O maior valor encontrado foi: ${highestNumber(numbers)}`);
console.log('------------------------------------------------------');