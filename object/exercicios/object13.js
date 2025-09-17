const coffee = {
    name: 'Cappuccino Clássico',
    size: 'Médio',
    price: 12.50,
    available: true
};

coffee.roastLevel = 'Medium';
coffee.isDecaf = false;

delete coffee.available;

let coffeeDescription = '';

for(const key in coffee) {
    coffeeDescription += `${key}: ${coffee[key]} `
};

console.log(coffeeDescription);
