let numbers = [1, 2, 3, 4, 5];

const reverseNumbers = numbers.map(function(number) {
    if (number[numbers.length - 1] > number) {
       return number[0];
    }
});

console.log(reverseNumbers);