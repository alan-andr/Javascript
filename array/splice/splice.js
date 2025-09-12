const fruits = ['Banana', 'Uva', 'Pera'];

console.log(`Lista original: ${fruits}`);

console.log('---------------------------------------------------------');

fruits.splice(0, 0, 'Melancia'); // Adiciona ao ínicio
console.log(`Item adicionado no ínicio da lista: ${fruits}`)

console.log('---------------------------------------------------------');

fruits.splice(fruits.length, 0, 'Goiaba'); // Adiciona ao final
console.log(`Item adicionado no final da lista: ${fruits}`);

console.log('---------------------------------------------------------');

fruits.splice(2,1) // Removendo "Uva"
console.log(`"Uva" removido: ${fruits}`);
