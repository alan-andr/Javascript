const smartWatch = {
    brand: 'TechWear',
    model: 'Titan Pro',
    color: 'Space Gray',
    price: 349.99,
    features: ['Heart Rate Monitor', 'GPS', 'Waterproof']
};

const keys = Object.keys(smartWatch);

console.log(`Chaves do objeto: ${keys}`);

const values = Object.values(smartWatch);

console.log(`Valores do objeto: ${values}`);

const arrSmartWacth = Object.entries(smartWatch);

for (const element of arrSmartWacth) {
    console.log(`${element[0]} : ${element[1]}`);
};