const products = [
    {name: 'Mouse', price: 50, status: 'on-sale'},
    {name: 'Keyboard', price: 150, status: 'regular'},
    {name: 'Monitor', price: 300, status: 'on-sale'},
    {name: 'HDMI Cable', price: 20, status: 'regular'}
];

let expensiveProducts = []

for (let i = 0; i < products.length; i++) {
    let { status, price } = products[i]

    if (status === 'on-sale' && price > 100) {
        expensiveProducts.push(products[i])
    } 
};

if (expensiveProducts.length > 0) {
    console.log(expensiveProducts)
} else {
    console.log('Nenhum produto foi adicionado à lista.')
}
