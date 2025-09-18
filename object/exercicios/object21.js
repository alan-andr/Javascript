const shoppingCart = {
    items: [{
        item1: {
            name: 'Wireless Mouse',
            price: 25.50,
            quantity: 2
        },
        item2: {
            name: 'Mechanical Keyboard',
            price: 75.00,
            quantity: 1
        }
    }],

    discountCode: ''
};

shoppingCart.totalPrice = 0;
let totalQuantity = 0

for (const element of shoppingCart.items) {
    for (const key in element) {
        shoppingCart.totalPrice += element[key].price * element[key].quantity;

        totalQuantity += element[key].quantity;
    }
};

if (totalQuantity >= 3) {
    shoppingCart.discountCode += 'SAVE10';
    shoppingCart.totalPrice *= 0.9;
} 

console.log('Carrinho de compras: ', shoppingCart);
console.log(`Valor total: R$${shoppingCart.totalPrice.toFixed(2)}`);