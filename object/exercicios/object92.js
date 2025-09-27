const shoppingCart = {
    items: [
        { name: 'Laptop', quantity: 1, price: 1200 },
        { name: 'Headphones', quantity: 2, price: 100 },
        { name: 'Keyboard', quantity: 1, price: 80 }
    ],

    addItem(name, quantity = 0, price = 0) {
        const existing = this.items.find(item => item.name === name);

        if (existing) {
            existing.quantity += quantity;
            existing.price = price;
        } else {
            this.items.push({ name, quantity, price});
        }
    },

    removeItem(productName) {
        const index = this.items.findIndex(product => product.name === productName);

        if (index === -1) {
            return `Item not found.`
        }

        const removed = this.items.splice(index, 1)[0]; 
        return `${removed.name} removed from cart.`;
    },

    calculateTotalValue() {
        const totalValue = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0); 

        return `Cart total value : $${totalValue.toFixed(2)}`;
    }
};

shoppingCart.addItem('Mouse Gamer', 2, 100);

console.log(shoppingCart.items);

shoppingCart.removeItem('Mouse Gamer');

console.log(shoppingCart.calculateTotalValue());

console.log(shoppingCart.items);