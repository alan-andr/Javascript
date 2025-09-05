const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = numbers.reduce(function(accumulator, number) {
    return accumulator + number;
}, 0)

console.log(sumOfNumbers);