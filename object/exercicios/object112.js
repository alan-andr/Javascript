const restaurant = {
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
            total: 75
        },
        {
            customer: 'Fernanda',
            items: ['Salada', 'Suco'],
            total: 45
        }
    ],

    addOrder(customer, total, ...items) {
        const existing = this.orders.find(order => order.customer.toLowerCase() === customer.toLowerCase());

        const itemsCustomer = [...items];

        if (existing) {
            return `${existing.customer} already has a order.Do you want to do a new one?`;
        } else {
            this.orders.push({ customer , items: itemsCustomer, total });
        }
    },

    getHighestOrder() {
        const highest = this.orders.reduce((highestOrder, order) => highestOrder.total > order.total ? highestOrder : order);

        return `The highest order is $${highest.total.toFixed(2)} from ${highest.customer}.`
    },

    showAllItemOrders() {
        const order = this.orders.flatMap(items => items.items);

        return [...new Set(order)];
    }
};

restaurant.addOrder('Klebin', 50, 'Batata Frita', 'Refrigerante');
console.log(restaurant.orders);
console.log(restaurant.getHighestOrder());
console.log(restaurant.showAllItemOrders());