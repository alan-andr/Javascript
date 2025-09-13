const shoppingList = [
    {name: 'Computer', price: 3000},
    {name: 'Mouse', price: 120},
    {name: 'Keyboard', price: 200},
    {name: 'Notebook', price: 3000},
    {name: 'MousePad', price: 30},
    {name: 'Gaming chair', price: 900}
];

const price = (arr) => {
    let totalPrice = arr.reduce((total, price) => total + price.price, 0);

    return console.log(`Preço total: R$${totalPrice.toFixed(2)}`);
};

const quantityItens = (arr) => {
    return console.log(`Quantidade de itens: ${arr.length}`);
};

const showItens = (arr) => {
    let show = [];

    for (const i of arr) {
        show.push(i.name);
    }

    return console.log(`Nome dos itens: ${show.join(', ')}`);
}

function filterShoppingList(arr, callback) {
    return callback(arr);
};


console.log('------------- Lista de Compras --------------');
filterShoppingList(shoppingList, showItens);
console.log('---------------------------------------------');
filterShoppingList(shoppingList, quantityItens);
console.log('---------------------------------------------');
filterShoppingList(shoppingList, price);