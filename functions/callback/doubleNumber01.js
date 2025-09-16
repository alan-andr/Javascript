const doubleNumber = function(arr) {
    return console.log(`Números dobrados: ${arr.map(number => number * 2)}`);
}

const modifyArray = function(arr, callback) {
    callback(arr);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('----------- Dobrando valores -----------');
console.log(`Números: ${numbers}`);
modifyArray(numbers, doubleNumber);
console.log('----------------------------------------');