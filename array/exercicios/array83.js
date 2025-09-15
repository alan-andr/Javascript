function filter(callback, n, ...nums) {
    return callback(n, ...nums);
};

const highestNumbers = (n, ...nums) => {
    return nums.filter(element => element > n);
};

const smallestNumbers = (n, ...nums) => nums.filter(element => element < n);

const fixedNumber = 10;
const numbers = [];

numbers.push(fixedNumber);

for(let i = 1; i <= 20; i++) {
    numbers.push(i)
};

console.log(`Filtrando números maiores e menores que ${fixedNumber}`);
console.log('-----------------------------------------------------');
console.log(`Números maiores que ${fixedNumber}: ${filter(highestNumbers, fixedNumber, ...numbers)}`);
console.log('-----------------------------------------------------');
console.log(`Números menores que ${fixedNumber}: ${filter(smallestNumbers, fixedNumber, ...numbers)}`);