const bookInventory = {
    title: 'The Lost Chronicles', 
    author: 'Eleanor Vance', 
    yearPublished: 2018, 
    stock: 50, 
    price: 19.99
};

bookInventory.format = 'audiolibro';

bookInventory.qualityCheck = true;

delete bookInventory.stock;

console.log(bookInventory);

