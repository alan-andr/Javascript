const coffeeInventory = {
    'latte': {
        price: 4.50,
        stock: 50,
        specialty: true
    },

    'americano': {
        price: 3.00,
        stock: 100,
        specialty: false
    },

    'mocha': {
        price: 5.00,
        stock: 30,
        specialty: true
    }
};

coffeeInventory.espresso = {
    price: 2.50,
    stock: 75,
    specialty: false
};

for(const key in coffeeInventory) {
    const {price, stock} = coffeeInventory[key]

    let totalValueStock = price * stock;

    console.log(`The coffee ${key} total stock value is $${totalValueStock.toFixed(2)}`);
}