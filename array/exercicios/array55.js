let numbers = [];

let getHere = 15;

for(let i = 1; i <= getHere; i++) {
    numbers.push(i);
}

function processNumber(arr, callback) {
    return callback(arr);
};

const square = (arr) => {
    return arr.map(num => num * num);
};

console.log('---------- Operações com Números ----------');
console.log(`Números a processar: ${numbers}`);
console.log('-------------------------------------------');
setTimeout(() => {
    console.log('processando...')
    console.log(`Números ao quadrado: ${processNumber(numbers, square)}`);
    console.log('-------------------------------------------');
}, 1000);


