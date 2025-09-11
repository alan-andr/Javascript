function findMax(numbers) {
    return numbers.reduce((max, number) => max > number ? max : number);
};

const numbers = [5, 10, 3, 99, 2];
console.log(findMax(numbers));