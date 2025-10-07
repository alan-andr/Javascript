const store = {
    products: [
        { id: 1, name: 'Notebook', price: 4000, stock: 5 },
        { id: 2, name: 'Mouse', price: 100, stock: 20 },
        { id: 3, name: 'Keyboard', price: 200, stock: 15 }
    ],

    cart: [],

    addToCart(productId, quantity) {
        const product = this.products.find(product => product.id === productId);

        if (!product) {
            return `Sorry, product not found.`;
        }

        if (quantity > product.stock) {
            return `Invalid amount, stock: ${product.stock}, selected quantity: ${quantity}`;
        }

        const productToCart = {...product, quantity};
        delete productToCart.stock;

        const cartItem = this.cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            this.cart.push(productToCart);
        }

        product.stock -= quantity

        return `${quantity}x ${product.name} ${quantity > 1 ? 'have' : 'has'} been add to your cart. Remaining stock: ${product.stock}.`;
    },

    calculateTotal() {
        if (this.cart.length === 0) {
            return 0;
        }

        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    checkout() {
        if (this.cart.length === 0) {
            return `Your cart is empty. Nothing to checkout.`;
        }

        const total = this.calculateTotal();

        const summary = this.cart
        .map(item => `${item.quantity}x ${item.name}`)
        .join(', ');

        this.cart = [];

        return `Checkout complete! You purchased: ${summary}. Total: $${total.toFixed(2)}`;
    }
};

store.addToCart(1, 3);
store.addToCart(2, 1);
console.log(store.cart);
console.log('===============================================');
console.log(store.products);
console.log('===============================================');
const total = store.calculateTotal();
console.log(`Total value of your cart: $${total.toFixed(2)}`);
console.log('===============================================');
console.log(store.checkout());
