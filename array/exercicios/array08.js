let fruits = ['banana', 'maçã', 'uva', 'pera', 'abacaxi'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.unshift('melão');
fruits.push('maracujá');

console.log(fruits);

fruits.shift();
fruits.pop();

console.log(fruits);

if (fruits.includes('manga')) {
    console.log('Tem "manga".');
} else {
    console.log('Não tem "manga".');
}

console.log(`No array existem ${fruits.length} elementos!`);