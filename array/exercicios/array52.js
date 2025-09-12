const numbers = [1, 1, 2, 2, 3, 3];

const uniqueNumbers = [...new Set(numbers)];

console.log(`Números repetidos: ${numbers}`);
console.log('==========================================');
console.log(`Números únicos: ${uniqueNumbers}`);