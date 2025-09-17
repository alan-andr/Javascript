const book = {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 310,
    isRead: false
};

book.publisher = 'Allen & Unwin';

console.log(book);

delete book.pages;

console.log(book);