function evenNumbers(arr) {
    return console.log(`Números pares: ${arr.filter(number => number % 2 === 0)}`);
}

function oddNumbers(arr) {
    return console.log(`Números ímpares: ${arr.filter(number => number % 2 === 1)}`);
}

function filterArray(arr, callback) {
    callback(arr);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let moreNumbers = [2,2,31,24,44,41,413,6,10];

console.log('-------------- Filtrando dados --------------');
filterArray(numbers, evenNumbers);
filterArray(numbers, oddNumbers);
filterArray(moreNumbers, evenNumbers);
console.log('---------------------------------------------');
