const shoppingCart = {
    items: [], // Deve guardar objetos { id, name, price, quantity }
    total: 0,

    // Seus métodos virão aqui
    addItem: function(product) {
        const existing = this.items.find(item => item.name.toLowerCase() === product.name.toLowerCase());

        if (existing) {
            existing.quantity += 1;
            this.calculateTotal();

            return `Quantity of "${product.name}" was incremented in the cart. now quantity: ${existing.quantity}.`;
        }

        let newProduct = { ...product, quantity: 1};
        this.items.push(newProduct);
        this.calculateTotal();

        return `Product "${product.name}" was add to the shopping cart **succesfully**.`;
    },

    removeItem: function(productId) {
        const index = this.items.findIndex(item => item.id === productId);

        if (index === -1) {
            return `Product ID not found.`;
        }

        this.items.splice(index, 1);
        this.calculateTotal();
        return `Product was **removed** from the shopping cart **succesfully**.`
    },



    calculateTotal: function() {
        const totalValue = this.items.reduce((total, product) => total + (product.price * product.quantity), 0);

        this.total = totalValue;
    }
};

// Produtos disponíveis para adicionar ao carrinho
const product1 = { id: 1, name: 'Laptop Pro', price: 7500 };
const product2 = { id: 2, name: 'Wireless Mouse', price: 150 };
const product3 = { id: 3, name: 'USB-C Hub', price: 250 };

console.log(shoppingCart.addItem(product1));
console.log('================================================');
console.log(shoppingCart.addItem(product2));
console.log('================================================');
console.log(shoppingCart.addItem(product3));
console.log('================================================');
console.log(shoppingCart.removeItem(1));
console.log('================================================');
shoppingCart.calculateTotal();
console.log(shoppingCart);