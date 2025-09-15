const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function receivingNumbers (...nums) {
    const [firstNumber, ...rest] = nums;

    let newNumbers = [...rest];

    return newNumbers;
};

console.log(`Todos os números do array: ${numbers}`);
console.log('-------------------------------------------------------------');
console.log(`Array anterior sem o primeiro número: ${receivingNumbers(...numbers)}`);