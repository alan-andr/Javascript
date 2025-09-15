function sumOfNumbers(...nums) {
    return nums.reduce((total, value) => total + value, 0);
}

let numbers = [];
let evenNumbers = [];
let oddNumbers = [];

for(let i = 1; i <= 25; i++) {
    numbers.push(i);

    if (i % 2 === 0) {
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i);
    }
};

console.log(`Todos os números: ${numbers}`);
console.log(`A soma de todos os números: ${sumOfNumbers(...numbers)}`);
console.log('-------------------------------------------------------------------');
console.log(`Os números pares: ${evenNumbers}`);
console.log(`A soma de todos os pares: ${sumOfNumbers(...evenNumbers)}`);
console.log('-------------------------------------------------------------------');
console.log(`Os números ímpares: ${oddNumbers}`);
console.log(`A soma de todos os ímpares: ${sumOfNumbers(...oddNumbers)}`);