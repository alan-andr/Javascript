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

const findLowStockProducts = (threshold = 0) => {
    return Object.values(productInventory)
        .filter(product => product.stock <= threshold)
        .map(product => `${product.productName} (stock: ${product.stock})`);
};

console.log(findLowStockProducts(100));