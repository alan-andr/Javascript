const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const doubleNumbers = numbers.map(num => num * 2);

const overThanFive = numbers.filter(num => num > 5);

console.log('=========== Números ============');
console.log(`Lista de números: ${numbers}`)
console.log(`Somente números pares: ${evenNumbers}`);
console.log(`Os números com dobro do valor: ${doubleNumbers}`);
console.log(`Números maiores que 5: ${overThanFive}`);
console.log('================================');
