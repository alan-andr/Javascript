const cart = [
    {
        product: 'Laptop', 
        price: 1200,
        quantity: 1
    },
    {
        product: 'Headphones',
        price: 100,
        quantity: 2
    },
    {
        product: 'Mouse',
        price: 40,
        quantity: 3
    }
];

const calculateTotalValue = (products) => {
    const totalValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    return totalValue;
};

const cheapestProduct = (products) => {
    const cheapest = products.reduce((cheaper, product) => cheaper.price < product.price ? cheaper : product);
    
    return cheapest;
};

console.log(`Cart's total value: $${calculateTotalValue(cart).toFixed(2)}`);

console.log(cheapestProduct(cart));