let fruits = ['banana', 'graviola', 'pera', 'maçã', 'jabuticabra'];

console.log(`A primeira fruta da lista é: ${fruits[0]}`);
console.log(`A última fruta da lista é: ${fruits[fruits.length - 1]}`);

fruits.unshift('cajú');
fruits.push('melancia');

console.log('Nova lista de frutas: ' + fruits);