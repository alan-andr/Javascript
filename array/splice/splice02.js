const fruits = ['maçã', 'banana', 'laranja', 'uva', 'melancia'];

console.log(fruits);

fruits.splice(2,1);

console.log(`"Laranha" removida: ${fruits}`);

fruits.splice(2,0,'abacaxi', 'mamão');

console.log(`"Abacaxi" e "Mamão" inseridos: ${fruits}`);
