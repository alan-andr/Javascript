const library = {
    books: [
        { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', isAvailable: true },
        { title: '1984', author: 'George Orwell', isAvailable: false },
        { title: 'Dom Casmurro', author: 'Machado de Assis', isAvailable: true }
    ],

    availableBooks() {
        for (const { isAvailable, title } of this.books) {
            if ( isAvailable === true) {
                console.log(`Livro: ${title}`);
            }
        };
    },

    changeDisponibility( title ) {
        const book = this.books.find(element => element.title === title)

        if (book) {
            book.isAvailable = !book.isAvailable;
        }
    }
};

console.log('Os livros disponíveis são: ');
library.availableBooks();

library.changeDisponibility('O Pequeno Príncipe');

console.log(library.books);

library.changeDisponibility('O Pequeno Príncipe');

console.log(library.books);