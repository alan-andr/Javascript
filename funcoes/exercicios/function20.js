function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0)
};

const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = sumArray(numbers);

console.log('-------- Somando números --------');
console.log(`Os números são: ${numbers}`);
console.log(`A soma desses números: ${sumOfNumbers}`);
console.log('---------------------------------');