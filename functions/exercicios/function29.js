const double = (arr) => {
    return arr.map(arr => arr * 2);
};

const triple = (arr) => {
    return arr.map(arr => arr * 3);
};

const onlyEven = (arr) => arr.filter(num => num % 2 === 0);

const onlyOdd = (arr) => arr.filter(num => num % 2 === 1);

const processArray = (arr, callback) => {
    return callback(arr)
};

const nums = [1, 2, 3];
let result = (processArray(nums, double));

console.log('------------- Processador de números -------------');
console.log(`Números a serem processados: ${nums}`);
console.log('Processando...');
setTimeout(() => {
    console.log(result);
    console.log('---------------------------------------------------');
}, 1000);