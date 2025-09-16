const products = [
    { name: 'Laptop', price: 2500 },
    { name: 'Mouse', price: 80 },
    { name: 'Teclado', price: 150 },
    { name: 'Monitor', price: 1200}
];

function filterProduct(callback, n, ...nums) {
    return callback(n, ...nums);
};

const lowestPrice = (n, ...nums) => nums.filter(value => value.price <= n);

const highestPrice = (n, ...nums) => nums.filter(value => value.price >= n);

let atLeast = 200;

console.log('============ Filtrando Produtos Caros ==============');
console.log('Produtos disponíveis: ', products);
console.log('====================================================');
console.log(`Produtos até R$${atLeast.toFixed(2)}: `, filterProduct(lowestPrice, atLeast, ...products));
console.log('====================================================');
console.log(`Produtos além de R$${atLeast.toFixed(2)}: `, filterProduct(highestPrice, atLeast, ...products));