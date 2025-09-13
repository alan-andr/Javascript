let numbers = [];

for(let i = 0; i <= 15; i++) {
    numbers.push(i);
}

let reverseOrder = [...numbers].sort((a, b) => b - a);

console.log(numbers)

console.log(reverseOrder);