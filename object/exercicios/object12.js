const coffee = {
    name: 'Cappuccino Clássico',
    size: 'Médio',
    price: 12.50,
    available: true
};

coffee.roastLevel = 'Medium';
coffee.isDecaf = false;

delete coffee.available;

const newCoffee = {
    name: 'Espresso',
    price: 9.00,
    roastLevel: 'Dark'
};

console.log(`Coffee com modificações: `, coffee);
console.log('------------------------------------------');
console.log('New coffee: ', newCoffee);