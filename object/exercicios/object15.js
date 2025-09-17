const product = {
    name: 'Dark Roast Blend',
    price: 15.99,
    roastLevel: 'Dark',
    isDecaf: false,
    origin: 'Brazil'
};

const { name: productName, price: productPrice, roastLevel: roast, ...remainingDetails } = product;

console.log(`Nome do produto: ${productName}, preço: ${productPrice}, nível de torra: ${roast}, detalhes restantes: `, remainingDetails);