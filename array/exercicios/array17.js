let numbers = [10, 20, 30, 40, 50];
let sumOfNumbers = 0;
let averageOfValues = 0;

console.log(numbers);

for (const i of numbers) {
    sumOfNumbers += i;
}

averageOfValues = sumOfNumbers / numbers.length;

console.log(`A soma dos valores é: ${sumOfNumbers}`);

console.log(`A média dos valores é: ${averageOfValues}`);