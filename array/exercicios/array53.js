const numbers = [3, 3, 10, 10, 6, 1, 7, 9, 40, 4, 20, 5, 8, 2];

const orderedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

console.log('---------------------------------------------------------------');
console.log(`Números repetidos e desordenados: ${numbers}`);
console.log('---------------------------------------------------------------');
console.log(`Números ordenados e sem repetição: ${orderedNumbers}`);
console.log('---------------------------------------------------------------');