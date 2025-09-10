const colors = ['Vermelho', 'Verde', 'Azul'];

const [color1, ...rest] = colors;

console.log('------------------ Cores ------------------');
console.log(`As cores são: ${colors.join(',')}`);
console.log(`A primeira cor é: ${color1}`);
console.log(`As outras cores são: ${rest}`);
console.log('-------------------------------------------');