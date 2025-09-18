const inventoryItem = {
    productName: 'Smartphone',
    quantity: 50,
    unitPrice: 850.00
};

inventoryItem.quantity += 10;

console.log(`10 unidades recebidas: ${inventoryItem.quantity} em estoque.`);

inventoryItem.quantity -= 3;

console.log(`Venda de 3 unidades: ${inventoryItem.quantity} em estoque.`);

const {quantity, unitPrice} = inventoryItem;

inventoryItem.totalValue = unitPrice * quantity;

console.log(`Quantitade final em estoque ${inventoryItem.quantity}\nValor total calculado: R$${inventoryItem.totalValue.toFixed(2)}`);