
const inventary = {
    products: [
        { name: 'T-Shirt', quantity: 10, price: 50 },
        { name: 'Jeans pants', quantity: 5, price: 120 },
        { name: 'Shoes', quantity: 8, price: 250 },
        { name: 'Cap', quantity: 15, price: 40 }
    ],

    addProduct(name, quantity, price) {
        for (const element of this.products) {
            if (element.name === name) {
                 element.quantity += quantity;
                 element.price = price;
                 return
            }
        }

        this.products.push({name, quantity, price});
    }
};

inventary.addProduct('Shoes', 2, 250);
inventary.addProduct('Jacket', 3, 300);

console.log(inventary.products)