const store = {
    products: [
        { id: 1, name: 'Mouse', price: 100 },
        { id: 2, name: 'Teclado', price: 200 },
        { id: 3, name: 'Monitor', price: 1200 }
    ],

    cart: [],

    addToCart: function(productId, quantity) {
        const product = this.products.find(product => product.id === productId);

        if (!product) {
            return `Product doesn't exist.`;
        }

        const existing = this.cart.find(item => item.id === productId);

        if (existing) {
            existing.quantity += quantity;
            existing.subtotal = existing.price * existing.quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity,
                subtotal: product.price * quantity
            })
        }
    },

    getTotal: function() {
        const totalValue = this.cart.reduce((total, cart) => total + cart.subtotal, 0)

        return `Purchase total value: R$${totalValue.toFixed(2)}`;
    }
};

store.addToCart(1, 5);
store.addToCart(2, 5);
console.log(store)
console.log(store.getTotal());