const store = {
    products: [
        { name: 'Keyboard', quantity: 10, price: 150.0 },
        { name: 'Mouse', quantity: 20, price: 80.0},
        { name: 'Monitor', quantity: 5, price: 1200.0}
    ],

    addProduct(name, quantity, price) {
        for (const element of this.products) {
            if (element.name === name) {
                element.quantity += quantity;
                return;
            }
        }

        this.products.push({name, quantity, price});
    }
};

store.addProduct('Mouse', 1);

console.log(store)
