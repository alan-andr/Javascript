const library = { 
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false },
        { title: "1984", author: "George Orwell", isBorrowed: true },
        { title: "Moby-Dick", author: "Herman Melville", isBorrowed: false }
    ],

    borrowBook(title) {
        let book = this.books.find(book => book.title === title);

        if (!book.isBorrowed) {
            book.isBorrowed = true;
            return `O livro "${title}" foi emprestado com sucesso!`;
        } else {
            return `O livro "${title}" está indisponível`;
        }
    },

    returnBook(title) {
        let book = this.books.find(book => book.title === title);

        if (!book) {
            return `O livro "${title}" não existe na biblioteca!`
        }

        if (book.isBorrowed) {
            book.isBorrowed = false;
            return `O livro "${title}" foi devolvido!`;
        } else {
            return `O livro "${title }" não estava emprestado.`;
        }
    },

    listAvailableBooks() {
        const availableBook = this.books
        .filter(book => !book.isBorrowed)
        .map(book => book.title)
        .join(', ');

        return availableBook;
    }
};

console.log(library.borrowBook('1984'));
console.log(library.borrowBook('Moby-Dick'));
console.log(library);
console.log(library.returnBook('1984'));
console.log(`Livros disponíveis: ${library.listAvailableBooks()}`);