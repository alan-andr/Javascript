const names = ['Claudivam', 'Irinosvam', 'Ivanildum'];

const upperNames = names.map(value => value.toUpperCase());

let reverseOrder = [];

for(let i = names.length - 1; i >= 0; i--) {
    reverseOrder.push(names[i])
};

console.log('====== Manipulando lista de nomes =====');
console.log(`Nomes: ${names}`);
console.log(`Nomes em maiúscuças: ${upperNames}`);
console.log(`Ordem invetida da lista: ${reverseOrder}`);
console.log(`=======================================`);