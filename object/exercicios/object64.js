const inventory = {
    products: [
        { name: 'Laptop', quantity: 50, unitPrice: 1500},
        { name: 'Mouse', quantity: 30, unitPrice: 120}
    ],

    addNewProduct(name = 'Product', quantity = 0, unitPrice = 0) {
        this.products.push({name, quantity, unitPrice});
    },

    updateProduct(productName, productQuantity = 0) {
        this.products.find(element => element.name === productName).quantity += productQuantity;
    },

    showTotalValueStock() {
        let totalValueOfStock = 0;

        for (const { unitPrice , quantity } of this.products) {
            totalValueOfStock += unitPrice * quantity;
        }

        return `O valor total do estoque é: R$${totalValueOfStock.toFixed(2)}`;
    }
};

inventory.addNewProduct('Monitor FHD', 35, 3000);

inventory.addNewProduct('Mechanical Keyboard', 20, 300)

console.log(inventory);

inventory.updateProduct('Laptop',10);

console.log(inventory);

console.log(inventory.showTotalValueStock());
