const multiply = function(...nums) {
     return nums.reduce((acc, number) => acc * number, 1);
}

const subtraction = function(...nums) {
    return nums.reduce((acc, number) => acc - number);
}

console.log('-------------------- Rest em Funções --------------------');
console.log(`Multiplicando: 5 x 5 = ${multiply(5, 5)}`);
console.log(`Subtraindo: 10 - 5 = ${subtraction(10, 5)}`);
console.log('---------------------------------------------------------');
