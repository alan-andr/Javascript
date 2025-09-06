let numbers = [3, 9, 1, 7, 4];

const sequenceNumbers = numbers.sort(function(a, b) {
    return a - b
})

console.log(`Números em sequência: ${sequenceNumbers}`);