const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = (nums) => (nums
    .reduce((acc, num) => acc + num, 0));

console.log('-------- Soma de números de um array ---------');
console.log(`Os números são: ${numbers.join(', ')}`);
console.log(`A soma dos números é: ${sumOfNumbers(numbers)}`);