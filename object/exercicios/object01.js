const book = {
    title: 'The Lord of The Rings',
    author: 'J.R.R Tolkien',
    pages: 1178
};

console.log('======= Acessando propriedades de um objeto =======');
console.log(`Título do livro: ${book['title']}`);

book['pages'] = 1200;

console.log(`====== Livro completo com número de páginas alteradas ======`);
console.log(book);
console.log('========================================================================');