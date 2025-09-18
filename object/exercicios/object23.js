 const inventory = [
    { name: 'Mechanical Keyboard', price: 120.00, inStock: 30, isAvailable: true },
    { name: '4K Monitor', price: 350.00, inStock: 100, isAvailable: true },
    { name: 'USB-C Hub', price: 25.00, inStock: 200, isAvailable: false },
    { name: 'Webcam', price: 45.90, inStock: 60, isAvailable: true }
];

const inventoryStatus = {};

inventoryStatus.available = []; // * Cria objeto available com array 
inventoryStatus.unavailable = []; // * Cria objeto unavailable com array

for (const element of inventory) {
    if ( element.isAvailable === true ) {
        inventoryStatus.available.push(element.name);
    } else {
        inventoryStatus.unavailable.push(element.name);
    }
};

console.log('Status do inventário: ', inventoryStatus);
