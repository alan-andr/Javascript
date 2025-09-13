function receivingNumbers(n, ...nums) {
    return [...nums]
    .filter(value => value > n)
    .sort((a, b) => a - b);
};

const numbers = [5, 10, 5, 9, 7, 1, 4, 2];

const [fixedNumber, ...rest] = numbers;

console.log(receivingNumbers(fixedNumber, ...rest));