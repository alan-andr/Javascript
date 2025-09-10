const colors = ['red', 'green', 'blue'];

const [firstColor, ...othersColors] = colors;

console.log(`A primeira cor é: ${firstColor}`);
console.log(`As outras cores são: ${othersColors}.`);