const cart = {
    items: [
        { name: 'Laptop', price: 1200, quantity: 1 },
        { name: 'Headphones', price: 150, quantity: 2 },
        { name: 'Mouse', price: 50, quantity: 1 }
    ],

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    },

    removeItem(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);

        if (index !== -1) {
            this.items.splice(index, 1);
            return `${itemName} removed from cart.`;
        } else {
            return `${itemName} not found in cart.`;
        }
    },

    getTotal() {
        const totalValue = this.items.reduce((total, product) => total + (product.price * product.quantity), 0);

        return `O valor total do carrinho: R$${totalValue.toFixed(2)}`;
    }
};

console.log(cart.removeItem('Laptop'));
console.log(cart.getTotal());
console.log(cart);