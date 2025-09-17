const coffee = {
    name: 'Cappuccino Clássico',
    size: 'Médio',
    price: 12.50,
    available: true
};

const keys = Object.keys(coffee);

console.log(`As chaves do objeto "Coffee": ${keys}`);

console.log('-------------------------------------------------');

const values = Object.values(coffee);

console.log(`Os valores das propriedades "Coffee": ${values}`)

const arr = Object.entries(coffee);

console.log('--------------------------------------------------');

for (const element of arr) {
    const [key, value] = element;

    console.log(`The property ${key}, has the value ${value}.\n`);
}