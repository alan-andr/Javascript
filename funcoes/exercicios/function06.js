let a = 5;
let b = 5;
let c = 5;

const averageNumbers = function(a = 0, b = 0, c = 0) {
    return (a + b + c) / 3;
}

console.log('--------------- Média de Números ---------------');
console.log(`Os números são: ${a}, ${b}, ${c}`);
setTimeout(() => console.log(`A média entre eles é ${averageNumbers(a, b, c).toFixed(1)}`), 1000);
console.log('------------------------------------------------');