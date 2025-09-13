const numbers = [1, 2, 3, 4, 5];

const [firstElement, ...othersElements] = numbers;

console.log(`Primeiro elemento: ${firstElement}`);
console.log(`Resto dos elementos: ${othersElements}`);