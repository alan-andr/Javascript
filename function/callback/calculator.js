function sum(a, b) {
    console.log('Operação de Adição');
    return console.log(`${a} + ${b} = ${a + b}`);
}

function subtraction(a, b) {
    console.log('Operação de Subtração');
    return console.log(`${a} - ${b} = ${a - b}`);
}

function multiplication(a, b) {
    console.log('Operação de Multiplicação');
    return console.log(`${a} x ${b} = ${a * b}`);
}

function division(a, b) {
    console.log('Operação de Divisão');
    return console.log(`${a} / ${b} = ${a / b}`);
}

const calculate = (a = 0, b = 0, callback) => callback(a, b);

let num1 = 10;
let num2 = 5;

console.log('------------ Operações matemáticas ------------');
calculate(num1, num2, sum);
calculate(num1, num2, subtraction);
calculate(num1, num2, multiplication);
calculate(num1, num2, division);
console.log('-----------------------------------------------');