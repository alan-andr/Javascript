const coffee = {
    name: 'Cappuccino Clássico',
    size: 'Médio',
    price: 12.50,
    available: true
};

const coffeeName = coffee.name;
const coffeePrice = coffee.price;

console.log(`O café ${coffeeName} custa R$${coffeePrice.toFixed(2)}.`);
