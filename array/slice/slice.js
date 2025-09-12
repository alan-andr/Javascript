const fruits = ['banana', 'laranja', 'melancia', 'limão', 'goiaba'];
const newFruits = fruits.slice(2, fruits.length); // ** ['melancia', 'limão', 'goiaba']

console.log('============================== Método Slice() ==============================');
console.log(`Array original: ${fruits}`);
console.log('============================================================================');
console.log(`Novo array feito com o slice(): ${newFruits}`);
console.log('============================================================================');