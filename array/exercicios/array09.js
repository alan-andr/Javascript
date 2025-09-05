let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

const oddNumbers = numbers.filter(function(number) {
    return number % 2 === 1;
});

console.log('------------------------------------------------------');
console.log(`Números pares da lista: ${evenNumbers}`);
console.log('------------------------------------------------------');
console.log(`Números ímpares: ${oddNumbers}`);
console.log('------------------------------------------------------');