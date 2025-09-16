function filterNumbers(arr, callback) {
    return callback(arr);
};

const oddNumbers = (arr) => arr.filter(num => num % 2 === 1);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = filterNumbers(nums, oddNumbers);

console.log('====== Somente Ímpares ======');
console.log(`Lista de números: ${nums}`);
console.log(`Números ímpares da lista: ${result}`);
console.log('=============================');