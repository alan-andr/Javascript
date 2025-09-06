const products = [
    {name: 'camisa', price: 50},
    {name: 'calça', price: 100},
    {name: 'tênis', price: 150}
];

const productsName = products.map(function(product) {
    return product.name;
});

console.log(`Produtos disponíveis: ${productsName}`);