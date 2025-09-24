const inventory = [
    {
        productId: 'P001',
        productName: 'Wireless Mouse',
        price: 25.50,
        inStock: true,
        details: {
            brand: 'TechGear',
            color: 'Black'
        }
    },
    {
        productId: 'P002',
        productName: 'Mechanical Keyboard',
        price: 89.99,
        inStock: true,
        details: {
            brand: 'GamerPro',
            color: 'RGB'
        }
    },
    {
        productId: 'P003',
        productName: 'USB-C Hub',
        price: 35.00,
        inStock: false,
        details: {
            brand: 'ConnectAll',
            color: 'Silver'
        }
    },
    {
        productId: 'P004',
        productName: '1TB External SSD',
        price: 110.00,
        inStock: true,
        details: {
            brand: 'StoreFast',
            color: 'Gray'
        }
    }
];

function productsInStock(items) {
    const product = items
    .filter(product => product.inStock)
    .map(product => product.productName);

    return `Produtos em estoque: ${product.join(', ')}`;
};

function totalValueInStock(items) {
    const totalValue = items
    .filter(product => product.inStock)
    .reduce((sum, product) => sum + product.price, 0);

    return `O valor total de produtos em estoque é R$${totalValue.toFixed(2)}.`;
};

function findAndMarkProductById(productId, items) {
    const product = items.find(product => product.productId === productId);

    if (product) {
        product.retrievedAt = new Date().toISOString();
        return product;
    } 

    return `Product not found.`;
};

console.log(productsInStock(inventory));
console.log(totalValueInStock(inventory));
console.log(findAndMarkProductById('P004', inventory));
console.log(findAndMarkProductById('P007', inventory));