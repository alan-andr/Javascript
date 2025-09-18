 const products = [
    { name: 'Gaming Mouse', price: 59.99, inStock: 75, isAvailable: true },
    { name: 'Mechanical Keyboard', price: 120.00, inStock: 30, isAvailable: true },
    { name: '4K Monitor', price: 350.00, inStock: 100, isAvailable: true },
    { name: 'USB-C Hub', price: 25.00, inStock: 200, isAvailable: false },
    { name: 'Webcam', price: 45.90, inStock: 60, isAvailable: true }
];

function filterProducts(arr, callback) {
    return callback(arr);
};

const available = (arr) => {
    return arr.filter(product => product.inStock >= 50 && product.isAvailable === true)
};

const unavailable = (arr) => {
    return arr.filter(product => product.isAvailable === false)
};

console.log(`Produtos que têm estoque maior ou igual a 50 e estão disponíveis: `, filterProducts(products, available));

console.log('=======================================================');

console.log(`Produtos que estão indisponíveis: `, filterProducts(products, unavailable));