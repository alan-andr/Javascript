let numbers = [1,3,34,6,7,7,3,35,3,2,9,96,3,21];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(`Números pares: ${evenNumbers}`);

console.log('----------------------------------------------');

const doubleNumbers = numbers.map(function(number) {
    return number * 2;
})

console.log(`Números dobrados: ${doubleNumbers}`);

console.log('----------------------------------------------');

doubleNumbers.sort(function(a, b) {
    return a - b;
});

console.log(`Números em ordem: ${doubleNumbers}`);