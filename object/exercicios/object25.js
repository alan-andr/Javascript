const productDetails = {
    productID: 'P001',
    name: 'Smartwatch Pro',
    inStock: 5,
    price: 250.00,
    isDiscontinued: false,
    lastUptade: '2025-08-15'
};

function product(obj, callback) {
    return callback(obj);
};

const update = (obj) => {
     if (obj.inStock === 0) {
        obj.isDiscontinued = true;
        delete obj.lastUptade;
     }
     
     obj.price *= 1.10;

     return obj;
};

const productToSellOut = {
    productID: 'P001',
    name: 'Smartwatch Pro',
    inStock: 0,
    price: 250.00,
    isDiscontinued: false,
    lastUptade: '2025-08-15'
}

console.log('Detalhes dos produtos antes da atualização: ', productDetails);
console.log('Após atualização: ');
console.log(product(productDetails, update));
console.log(product(productToSellOut, update));

