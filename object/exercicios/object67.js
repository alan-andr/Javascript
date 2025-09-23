const productCatalog = [
    { id: 101, name: 'Wireless Mouse', price: 29.99, category: 'Electronics' },
    { id: 102, name: 'Bluetooth Keyboard', price: 79.99, category: 'Electronics' },
    { id: 103, name: 'Ergonomic Chair', price: 249.50, category: 'Furniture' },
    { id: 104, name: 'LED Monitor', price: 180.00, category: 'Electronics' },
    { id: 105, name: 'Desk Lamp', price: 45.00, category: 'Home Goods' },
];

const priceThreshold = 100.00;

function filterAndTagProducts(products, limit) {
    products.forEach(product => {
        product.isExpensive = product.price > limit;
    });

    const expensiveProducts = products
    .filter(product => product.isExpensive === true)
    .map(product => product.name);

    return expensiveProducts;
};

console.log(`Produtos acima do limte de R$${priceThreshold}: ${filterAndTagProducts(productCatalog, priceThreshold)}`);

console.log(productCatalog);