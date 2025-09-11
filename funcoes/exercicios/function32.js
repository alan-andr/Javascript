function calculator(a, b, callback) {
    return callback(a, b);
};

const sum = (a = 0, b = 0) => {
    return `${a} + ${b} = ${a + b}`;
};

const subtraction = (a = 0, b = 0) => {
    return `${a} - ${b} = ${a - b}`;
};

const multiply = (a = 0, b = 0) => {
    return `${a} x ${b} = ${a * b}`;
};

const division = (a = 0, b = 0) => {
    return b === 0 ? null : `${a} / ${b} = ${a / b}`;
} 

let a = 5;
let b = 5;

console.log('============================ Calculadora ============================');
console.log(calculator(a, b, sum));
console.log(calculator(a, b, subtraction));
console.log(calculator(a, b, multiply));
console.log(calculator(a, b, division));
console.log('=====================================================================');