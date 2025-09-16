const order = {
    orderId: '2025-A1B2',
    productName: 'Keyboard',
    costumer: {
        name: 'Alan',
        address: {
            street: 'Rua da Cacimba',
            city: 'São Paulo',
            country: 'Brazil'
        }
    }
};

let clientName = order.costumer.name;
let deliveryCity = order.costumer.address.city;

console.log(`O cliente ${clientName}, mora na cidade de ${deliveryCity}.`);
