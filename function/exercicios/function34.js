const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = (arr) => {
    let even = arr.filter(num => num % 2 === 0);

    return console.log(`Quantidade de números pares: ${even.length}\nOs números pares são: ${even}`);
};

const oddNumbers = (arr) => {
    let odd = arr.filter(num => num % 2 === 1);

    return console.log(`Quantidade de números ímpares: ${odd.length}\nOs números ímpares são: ${odd}`);
}

function filter(arr, callback) {
    callback(arr);
};

console.log('===================== Filtro de Números =====================');
filter(numbers, evenNumbers);
console.log('=============================================================');
filter(numbers, oddNumbers);
console.log('=============================================================');