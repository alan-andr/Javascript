const item01 = {
    productName: 'Smartphone',
    stockQuantity: 50,
    unitPrice: 750.50,
    supplierName: 'Tech Innovations Inc'
};

const item02 = {
    productName: 'Laptop',
    stockQuantity: 25,
    unitPrice: 1200.00,
    supplierName: 'Global Electronics Ltd'
};

const inventory = [item01, item02];

console.log(inventory);

item02.isLowStock = true;

console.log(inventory);