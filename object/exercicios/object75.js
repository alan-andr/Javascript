const shoppingCart = {
    items: [
        { name: 'Notebook', price: 3500, quantity: 1 },
        { name: 'Mouse Gamer', price: 150, quantity: 2 },
        { name: 'Headset', price: 300, quantity: 1 },
        { name: 'Teclado Mecânico', price: 450, quantity: 1 }
    ],

    totalValue() {
        const totalValue = this.items.reduce(( total, product ) => total + ( product.price * product.quantity ), 0);

        return `O valor total dos produtos é: R$${totalValue.toFixed(2)}`;
    },

    addProduct(name = 'Product', price = 0, quantity = 0) {
        const existingProduct = this.items.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity += quantity;
            existingProduct.price += price;
        } else {
            this.items.push({ name, price, quantity });
        }
    }
};

console.log(shoppingCart.totalValue());

shoppingCart.addProduct('Monitor 4K', 3000, 2);

console.log(shoppingCart);

shoppingCart.addProduct('Monitor 4K', 0, 2);

console.log(shoppingCart);