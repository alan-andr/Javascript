const numbers = [5, 12, 8, 130, 44, 7, 22];

const [firstNum, ...rest] = numbers; // * Pega o primeiro elemento e resto do array

const lastNum = rest.pop(); // * Pega o último elemento 

function filterNums(n, ...nums) {
    return nums.filter(element => element > n);
}

console.log(`Números: ${numbers}`);
console.log('=========================================================');
console.log(`Primeiro número: ${firstNum}`);
console.log('=========================================================');
console.log(`Último número: ${lastNum}`);
console.log('=========================================================');
console.log(`Restante dos números: ${rest}`);
console.log('=========================================================');
console.log(`Números maiores que ${firstNum}: `, filterNums(firstNum, ...rest))