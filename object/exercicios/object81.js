const inventory = {
  'T-Shirt-Red-M': {
    productName: 'Red T-Shirt',
    price: 15.99,
    stock: 25,
    size: 'M'
  },
  'Jeans-Blue-32': {
    productName: 'Blue Jeans',
    price: 49.99,
    stock: 10,
    size: '32'
  },
  'Hoodie-Black-L': {
    productName: 'Black Hoodie',
    price: 35.00,
    stock: 8,
    size: 'L'
  },
  'T-Shirt-Red-S': {
    productName: 'Red T-Shirt',
    price: 15.99,
    stock: 0,
    size: 'S'
  },
  'Sneakers-White-42': {
    productName: 'White Sneakers',
    price: 79.90,
    stock: 12,
    size: '42'
  }
};

function totalValueInStock(products) {
    let totalValue = 0;

    for (const key in products) {
        totalValue += products[key].price * products[key].stock;
    }

    return `O valor total do inventário é: R$${totalValue.toFixed(2)}`;
};

function outOfStock(products) {
    let productName = [];

    for (const key in products) {
        if (products[key].stock === 0) {
            productName.push(products[key].productName);
        }
    }

    return productName;
};

function moreExpensiveProduct(products) {
    const productList = Object.values(products);

    const mostExpensive = productList.reduce((highest, current) => {
        return current.price > highest.price ? current : highest;
    });

    return `Nome do produto: ${mostExpensive.productName}, preço: R$${mostExpensive.price.toFixed(2)}.`;
};

console.log(totalValueInStock(inventory));
console.log('=====================================================');
console.log(`Produtos fora de estoque: ${outOfStock(inventory)}`);
console.log('=====================================================');
console.log(moreExpensiveProduct(inventory));