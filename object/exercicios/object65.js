const library = {
    books: [
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', isAvailable: true },
        { title: 'Dom Casmurro', author: 'Machado de Assis', isAvailable: true },
        { title: 'Memorias Póstumas de Brás Cubas', author: 'Machado de Assis', isAvailable: false }
    ],

    availableBooks() {
        const titleAvailableBooks = this.books.filter(value => value.isAvailable === true).map(element => element.title);

        return `Livros disponíveis: ${titleAvailableBooks.join(', ')}`;
    },

    lendBook(bookTitle) {
        const book = this.books.find(value => value.title === bookTitle);

        if (!book) {
            return console.log(`O livro "${bookTitle}" não foi encontrado na biblioteca.`)
        }

        if (book.isAvailable === false) {
            return console.log(`O livro "${bookTitle}" não está disponível`);
        } 

        book.isAvailable = false;
        return console.log(`O livro "${bookTitle}" foi emprestado com sucesso!`);
    },

    returnBook(bookTitle) {
        const book = this.books.find(value => value.title === bookTitle);

        if (book.isAvailable === false) {
            book.isAvailable = true;
            return console.log(`O livro "${bookTitle}" foi devolvido com sucesso!`);
        }

        if (book.isAvailable === true) {
            return console.log(`O livro "${bookTitle}" já está disponível, não precisa devolver!`)
        }
    }
};

console.log(library.availableBooks());

library.lendBook('Dom Casmurro');

console.log(library);

library.returnBook('Dom Casmurro');