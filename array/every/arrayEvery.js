const numbers = [2, 4, 6, 8, 10];

const evenNumbers = numbers.every(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);
