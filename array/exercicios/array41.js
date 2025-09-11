function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(filterEvenNumbers(numbers));