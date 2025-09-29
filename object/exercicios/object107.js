const foodDelivery = {
    orders: [
        { 
            customer: 'João', 
            items: ['Pizza', 'Refrigerante'],
            total: 60
        },
        {
            customer: 'Marina',
            items: ['Sushi', 'Água'],
            total: 90
        },
        {
            customer: 'Carlos',
            items: ['Hambúrguer', 'Batata Frita', 'Refrigerante'],
            total: 70
        },
        {
            customer: 'Ana',
            items: ['Pizza', 'Cerveja'],
            total: 75
        }
    ],

    totalCostsOrder() {
        const total = this.orders.reduce((total, order) => total + order.total, 0);

        return `Total price order: R$${total.toFixed(2)}`;
    },

    findClientOrder(clientName) {
        const client = this.orders.find(order => order.customer.toLowerCase() === clientName.toLowerCase());

        if (!client) {
            return `Client "${clientName}" doesn't have order.`;
        }

        return `${client.customer}'s items: ${client.items.join(', ')} - total cost: R$${client.total.toFixed(2)}`;
    },

    showAllPlates() {
        let plates = [];

        for (const { items } of this.orders) {
            for (const item of items) {
                plates.push(item);
            }
        }

        return [...new Set(plates)];
    }
};

console.log(foodDelivery.totalCostsOrder());
console.log(foodDelivery.findClientOrder('joão'));
console.log(foodDelivery.showAllPlates());