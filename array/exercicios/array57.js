const shoppingList = [
    {name: 'Computer', price: 3000},
    {name: 'Mouse', price: 120},
    {name: 'Keyboard', price: 200},
    {name: 'Notebook', price: 3000}
];

const price = (arr) => {
    let totalPrice = arr.reduce((total, price) => total + price.price, 0);

    return console.log(`\nPreço total: R$${totalPrice.toFixed(2)}`);
};

const quantityItens = (arr) => {
    return console.log(`\nQuantidade de itens: ${arr.length}`);
};

const showItens = (arr) => {
    let show = [];

    for (const i of arr) {
        show.push(i.name);
    }

    return console.log(`Nome dos itens: ${show.join(',')}`);
}

function filterShoppingList(arr, callback) {
    return callback(arr);
};


console.log('------------- Lista de Compras --------------');
filterShoppingList(shoppingList, showItens);
filterShoppingList(shoppingList, quantityItens);
filterShoppingList(shoppingList, price);
console.log('---------------------------------------------');