const inventory = {
  'product-001': {
    name: 'Laptop Pro 15"',
    category: 'Electronics',
    warehouses: [
      { name: 'New York', stock: 25 },
      { name: 'London', stock: 15 },
    ]
  },
  'product-002': {
    name: 'Wireless Mouse',
    category: 'Accessories',
    warehouses: [
      { name: 'New York', stock: 150 },
      { name: 'Berlin', stock: 120 },
      { name: 'London', stock: 80 },
    ]
  },
  'product-003': {
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    warehouses: [
      { name: 'Berlin', stock: 75 },
    ]
  }
};

function calculateTotalStock(productId) {
    if (!inventory[productId] ) {
        return 0;
    }

    const totalValueStock = inventory[productId].warehouses.reduce((total, product) => total + product.stock, 0);

    return totalValueStock;
};

function addNewShipment(productId, warehouse, quantityItems = 0) {
    const existing = inventory[productId].warehouses.find(product => product.name.toLowerCase() === warehouse.toLowerCase());

    if (!existing) {
        return inventory[productId].warehouses.push({name: warehouse, stock: quantityItems});
    }

    existing.stock += quantityItems;
};

const productId = 'product-001';

const totalValueStock = calculateTotalStock(productId);

console.log(`${productId}'s stock has a total amount of ${totalValueStock} items.`);

console.log('=======================================================');
addNewShipment('product-001', 'berlin', 5);

console.log(inventory['product-001']);
console.log('=======================================================');

console.log(`${calculateTotalStock(productId)}`);