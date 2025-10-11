const inventory = [
    { productId: 'P001', productName: 'Laptop Pro', price: 1200, quantity: 15, category: 'Electronics' },
    { productId: 'P002', productName: 'Wireless Mouse', price: 25, quantity: 80, category: 'Electronics' },
    { productId: 'P003', productName: 'Office Chair', price: 150, quantity: 30, category: 'Furniture' },
    { productId: 'P004', productName: 'Bluetooth Keyboard', price: 75, quantity: 0, category: 'Electronics' },
    { productId: 'P005', productName: 'Desk Lamp', price: 40, quantity: 55, category: 'Furniture' }
];

const calculateTotalInventoryValue = (arrInventory) => arrInventory.reduce((total, product) => total + ( product.price * product.quantity), 0);

const findOutOfStockProducts = (arrInventory) => {
    return arrInventory
    .filter(product => product.quantity === 0)
    .map(product => product.productName);
};

const listProductsByCategory = (arrInventory) => {
    return arrInventory
    .reduce((acc, item) => {
        const { category } = item;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(item.productName);

        return acc;
    }, {});
};

const groupProductsByCategory = (arrInventory) => {
    let productsByCategory = {};

    arrInventory.forEach(item => {
        const { category } = item;

        if (!productsByCategory[category]) {
            productsByCategory[category] = [];
        }

        productsByCategory[category].push(item);
    });

    return productsByCategory;
}

const totalValue = calculateTotalInventoryValue(inventory);

console.log(`Total value inventory is $${totalValue.toFixed(2)}`);
console.log('========================================================');
console.log(findOutOfStockProducts(inventory));
console.log('========================================================');
console.log(listProductsByCategory(inventory));
console.log('========================================================');
console.log(groupProductsByCategory(inventory));
console.log('========================================================');
