const book = {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 310,
    isRead: false
};

console.log(`Título do livro: ${book.title}`);
console.log(`Autor do livro: ${book.author}`);

book.isRead = true;

console.log(book);