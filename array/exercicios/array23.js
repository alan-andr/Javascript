let numbers = [5, 2, 9, 1, 7];

const sequenceNumbers = numbers.sort(function(a, b) {
    return a - b;
});

console.log(sequenceNumbers);