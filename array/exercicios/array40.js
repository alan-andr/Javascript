const sumArray = (numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
}

const numbers = [1, 2, 3, 4, 5];

console.log('----------- Somando números de um Array ----------');
console.log(`Os números são: ` + numbers);
console.log('A soma deles: ' + sumArray(numbers));
console.log('--------------------------------------------------');
