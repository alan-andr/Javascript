const product = {
    name: 'Notebook',
    price: 3500,
    stock: 10,

    discount(n) {
        this.price -= (this.price * n ) / 100;
        return `Desconto de ${n}% aplicado ao produto, Novo preço: R$${this.price.toFixed(2)}`;
    },

    toSale(quantity) {
        if (this.stock < quantity) {
           return `Não é possível vender, produtos insuficientes!`;
        }
        this.stock -= quantity;
        return `Venda de ${quantity} ${this.name} realizada com sucesso!`;
    }
};

console.log(product.discount(15));

console.log(product.toSale(5));

console.log(product);