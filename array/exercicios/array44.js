const fruits = ['Banana', 'Uva', 'Pera', 'Graviola', 'Maçã'];

console.log(`Mostrando primeiro item: ${fruits[0]}`);
console.log(`Mostrando último item: ${fruits[fruits.length - 1]}`);

console.log(`Colocando item no final: ${fruits.push('Goiaba')}`);
console.log(`Colocando item no início: ${fruits.unshift('Cangrejopera')}`);

console.log(fruits);

console.log(`Removendo último item: ${fruits.pop()}`);
console.log(`Tamanho do array: ${fruits.length}`);
console.log(`Verificando se "Maçã" está no array: ${fruits.includes('Maçã')}`);