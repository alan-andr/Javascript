const shoppingCart = {
    customerName: 'John Doe',
    items: [
        { name: 'Wireless Mouse', price: 25.50, quantity: 2 },
        { name: 'USB Keyboard', price: 45.00, quantity: 1 },
        { name: 'Monitor Stand', price: 70.00, quantity: 1 }
    ],

    discount: 10,

    calculateTotalPrice() {
        const totalPrice = this.items.reduce((total, value) => total + (value.price * value.quantity), 0);

        return totalPrice;
    },

    getFinalPrice(totalPrice) {
        const percentageDiscount = ( 100 - this.discount ) / 100

        const priceWithDiscount = totalPrice * percentageDiscount;

        return `Price with discount of ${this.discount}% : $${priceWithDiscount.toFixed(2)}`;
    },

    addItem(item) {
        const existing = this.items.find(product => product.name === item.name)

        if (existing) {
            existing.price = item.price;
            existing.quantity += item.quantity;
            return `This item already exists.`;
        } else {
            this.items.push(item);
        }
    }
};

const newProduct = { name: 'Webcam', price: 85.00, quantity: 1 };

console.log(shoppingCart.calculateTotalPrice());

console.log(shoppingCart.getFinalPrice(shoppingCart.calculateTotalPrice()))

shoppingCart.addItem(newProduct);
shoppingCart.addItem(newProduct);

console.log(shoppingCart);