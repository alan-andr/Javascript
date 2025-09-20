const bookInventory = {
    title: 'The Lost Chronicles', author: 'Eleanor Vance', yearPublished: 2018, stock: 50, price: 19.99
};

console.log(`Título do livro: ${bookInventory.title}`);

console.log(`Quantidade em estoque: ${bookInventory.stock}`);

bookInventory.stock -= 10;

console.log(bookInventory);