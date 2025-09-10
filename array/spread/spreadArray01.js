const numbers = [1, 2, 3];

const newNumbers = [-1, 0, ...numbers];

const comboNumbers = [...newNumbers, 4, 5, 6];

console.log('-------------------- Spread 01 ---------------------');
console.log(`Números: ${numbers}`);
console.log(`Novos números: ${newNumbers}`);
console.log(`Números combinados: ${comboNumbers}`);
console.log('-------------------------------------------------');

