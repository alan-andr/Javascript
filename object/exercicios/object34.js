const productInventory = {
    productName: 'Wireless Mouse',
    model: 'MX Master 3S',
    price: 99.99,
    inStock: true,
    lastUptade: '2025-09-19'
};

for (const element in productInventory) {
    console.log(`Key: ${element} | Value: ${productInventory[element]}`);
};