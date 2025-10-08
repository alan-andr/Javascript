const product = {
    productName: 'Wireless Noise-Cancelling Headphones',
    sku: 'HP-NC-48B',
    inventory: {
        stock: 85,
        location: 'Warehouse A'
    },
    price: {
        currency: 'USD',
        value: 199.99
    },
    specifications: {
        brand: 'AudioPhonic',
        color: 'Matte Black',
        connectivity: ['Bluetooth 5.0', 'NFC']
    }
};

function getProductSummary(prod) {
    const totalValueStock = prod.inventory.stock * prod.price.value;

    return `Product: ${prod.productName} (SKU: ${prod.sku}) - Stock: ${prod.inventory.stock} - Total Value: $${totalValueStock.toFixed(2)}`;
};

console.log(getProductSummary(product));