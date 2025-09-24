 const digitalLibrary = {
    books: [
        { title: 'O Conde de Monte Cristo', author: 'Alexandre Dumas', pages: 1243 },
        { title: 'Os Miseráveis', author: 'Victor Hugo', pages: 1463 },
        { title: 'A Revolução dos Bichos', author: 'George Orwell', pages: 152 },
        { title: 'Duna', author: 'Frank Herbert', pages: 688 }
    ],

    BookWithMorePages() {
        const bookMorePages = this.books.reduce((max, book) => max.pages > book.pages ? max : book);

        return `O livro com mais páginas é "${bookMorePages.title}" com ${bookMorePages.pages} páginas.`;
    }
};

console.log(digitalLibrary.BookWithMorePages());