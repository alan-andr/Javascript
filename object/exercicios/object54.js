const library = {
    books: [
        { title: 'Dom Quixote', author: 'Miguel de Cervantes', available: true },
        { title: 'O Hobbit', author: 'J.R.R. Tolkien', available: false },
        { title: 'Hamlet', author: 'William Shakespeare', available: true }
    ],

    availableBooks() {
        return this.books.filter(value => value.available === true).map(value => value.title);
    }
};

console.log(`Livros disponíveis: ${library.availableBooks().join(',')}`);