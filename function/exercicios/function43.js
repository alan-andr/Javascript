function sum(...nums) {
    return nums.reduce((total, value) => total + value, 0);
};

let numbers = [10, 20, 30, 40];

let resultSum = sum(...numbers);

console.log(`O resultado da soma: ${resultSum}`);