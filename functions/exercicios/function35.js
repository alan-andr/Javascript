function filter(arr, callback) {
    return callback(arr);
};

const sumNumbers = (arr) => arr.reduce((total, num) => total + num, 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let resultSum = filter(numbers, sumNumbers);

console.log('================ Somando Valores ================');
console.log(`Os números são: ${numbers}`);
console.log('=================================================');
console.log(`A soma dos números é: ${resultSum}`);
console.log('=================================================');