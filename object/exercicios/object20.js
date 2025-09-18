const book = {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 310,
    isAvailable: true,
    lastEdition: 1980
};

delete book.lastEdition;

const arrBook = Object.entries(book);

console.log(arrBook);