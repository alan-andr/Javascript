const onlineStore = {
    products: [
        {
            name: 'Mouse Gamer',
            price: 150,
            category: 'Periférico',
            stock: 12
        },
        {
            name: 'Teclado Mecânico',
            price: 350,
            category: 'Periférico',
            stock: 8
        },
        {
            name: 'Notebook Dell',
            price: 4000,
            category: 'Computador',
            stock: 5 
        },
        {
            name: 'Monitor 27"',
            price: 1200,
            category: 'Monitor',
            stock: 7
        }
    ],

    listByCategory(category) {
            const categories = this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
          
            return categories.length ? categories : `Sorry, there are no product with "${category}" category.`; 
        },

    buyProduct(productName, quantity) {
        const existing = this.products.find(product => product.name.toLowerCase() === productName.toLowerCase());

        if (existing) {
            existing.stock -= quantity;
            const totalValue = quantity * existing.price;

            return `Product: "${productName}", quantity: ${quantity}.\nTotal value of purchase: $${totalValue.toFixed(2)}`;
        } else {
            return `Product unavailable or doesn't have in the store.`;
        }
    },

    getTotalInventoryValue() {
        const totalValue = this.products
        .filter(product => product.stock > 0)
        .reduce((total, value) => total + (value.stock * value.price), 0);

        return `Total value in stock: $${totalValue.toFixed(2)}`;
    }
};

console.log(onlineStore.listByCategory('periférico'));
console.log(onlineStore.buyProduct('mouse gamer', 2));
console.log(onlineStore.getTotalInventoryValue());