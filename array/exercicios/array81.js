const fruits = ['maçã', 'uva', 'banana'];

const newFruits = [...fruits];

newFruits.splice(2, 1, 'Jabuticaba');

console.log(`Array original: ${fruits}`);
console.log('---------------------------------------------');
console.log(`Cópia do array: ${newFruits}`);
