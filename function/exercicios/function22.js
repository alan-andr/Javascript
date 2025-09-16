const filterEvens = (arr) => arr.filter(num => num % 2 === 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNumbers = filterEvens(numbers);

console.log('----------- Somente Pares -----------');
console.log(`Lista de números: ${numbers}`);
console.log(`Números pares encontrados na lista: ${evenNumbers}`);
console.log('-------------------------------------');
