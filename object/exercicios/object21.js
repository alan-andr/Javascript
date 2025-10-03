const productInventory = {
    "SKU-001": {
        productName: "Quantum Wireless Mouse",
        price: 79.99,
        stock: 150,
        category: "Electronics"
    },
    "SKU-002": {
        productName: "Mechanical Keyboard Pro",
        price: 129.50,
        stock: 85,
        category: "Electronics"
    },
    "SKU-003": {
        productName: "The Art of Code",
        price: 49.90,
        stock: 25,
        category: "Books"
    },
    "SKU-004": {
        productName: "Ergonomic Office Chair",
        price: 350.00,
        stock: 8,
        category: "Furniture"
    },
};

const calculateTotalInventoryValue = function(inventory) {
    let totalValue = 0;

    for (const key in inventory) {
        totalValue += Number((inventory[key].price * inventory[key].stock).toFixed(2));
    };

    return `Total inventory value is $${totalValue}`;
};

const findLowStockProducts = function(threshold = 0) {
    let lowStockProducts = [];

    for (const key in productInventory) {
        if (productInventory[key].stock <= threshold) {
            lowStockProducts.push(`${productInventory[key].productName} (stock: ${productInventory[key].stock})`);
        }
    }

    return lowStockProducts;
};

const countProductsByCategory = function() {
    let catalog = {};
    
    
    for (const key in productInventory) {
        const { category } = productInventory[key];

        if (!catalog[category]) {
            catalog[category] = 0;
        }

        catalog[category] += 1;
    }

    return catalog;
}

console.log(calculateTotalInventoryValue(productInventory));
console.log('===============================================');
console.log(findLowStockProducts(10));
console.log('===============================================');
console.log(countProductsByCategory());