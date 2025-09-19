const shoppingCart = {
    itens: [
        { name: 'Mouse Gamer', price: 150 },
        { name: 'Mechanical Keyboard', price: 350 },
        { name: 'Full HD Monitor', price: 900 }
    ],

    totalCost: (arr) => {
        let totalValue = 0;

        for (const element in arr) {
           totalValue += arr[element].price
        };

        return console.log(`O valor total das compras é R$${totalValue.toFixed(2)}`);
    },

    addItem: (name, price) => {
        return shoppingCart.itens.push({ name , price });
    }

};

let cartItens = shoppingCart.itens; 

shoppingCart.totalCost(cartItens);

shoppingCart.addItem('Mouse RGB', 150);

shoppingCart.totalCost(cartItens);