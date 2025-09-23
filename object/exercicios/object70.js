const inventory = [
    { productId: 'P001', productName: 'Laptop', price: 1200.00, stock: 15 },
    { productId: 'P002', productName: 'Wireless Mouse', price: 25.50, stock: 150 },
    { productId: 'P003', productName: 'Mechanical Keyboard', price: 75.00, stock: 80 },
    { productId: 'P004', productName: '27-inch Monitor', price: 300.75, stock: 45 },
    { productId: 'P005', productName: 'Webcam', price: 50.00, stock: 0 }
];

function totalValueInStock(products) {
    let totalValue = 0

    for (const { price, stock } of products) {
        totalValue += price * stock;
    }

    return `O valor total do estoque é R$${totalValue}`;
};

function totalValueWithReduce(products) {
    const totalValue = products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);

    return `O valor total do estoque é R$${totalValue.toFixed(2)}`;
};

console.log(totalValueInStock(inventory));

console.log(totalValueWithReduce(inventory));