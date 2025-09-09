const products = [
    {name: 'Camisa', price: 50},
    {name: 'Calça' , price: 80},
    {name: 'Meias', price: 10}
];

const productsWithDiscount = [...products].map(product => ({
    name: product.name,
    price: (product.price * 0.9)
}));

console.log('-------------------- Preço com Desconto --------------------');
console.log('Preço original: ', products);
console.log('------------------------------------------------------------');
console.log('Preço com 10% de desconto: ', productsWithDiscount);