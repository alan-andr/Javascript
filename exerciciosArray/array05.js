let frutas = ['banana', 'uva', 'maçã', 'pera'];

console.log(frutas);
console.log('----------------------------------');
console.log(frutas[0]);
frutas.push('abacate');
console.log('----------------------------------');
console.log(frutas);
console.log('----------------------------------');
frutas.unshift('Jambo');
console.log(frutas);
console.log('----------------------------------');
console.log(`Última fruta da lista removida: ${frutas.pop()}`);
console.log('----------------------------------');
console.log(`Primeira fruta da lista removida: ${frutas.shift()}`);
console.log('----------------------------------');
