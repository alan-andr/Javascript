const shoppingList = [
    {name: 'Arroz', quantity: 2, price: 12},
    {name: 'Feijão', quantity: 1, price: 8},
    {name: 'Macarrão', quantity: 3, price: 5},
    {name: 'Queijo', quantity: 1, price: 20},
    {name: 'Tomate', quantity: 5, price: 4}
];

const itensOverThanTen = shoppingList
.filter(item => item.price > 10)
.map(item => item.name)
.join(', ');

const totalCostShopping = shoppingList
.map(item => item.price * item.quantity)
.reduce((acc, item) => acc + item, 0)
.toFixed(1);

const sequenceItensList = [...shoppingList]
.sort((a, b) => a.name.localeCompare(b.name))
.map(item => item.name)
.join(', ');

console.log('-------------------: Lista de Compras :-------------------\n');
console.log('Itens que custam mais de R$10: ', itensOverThanTen);
console.log('---------------------------------------------------------');
console.log('Total da compra: R$', totalCostShopping);
console.log('---------------------------------------------------------');
console.log('Ordem alfabética da lista: ', sequenceItensList);
console.log('---------------------------------------------------------');