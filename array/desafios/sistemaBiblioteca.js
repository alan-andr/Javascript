const books = [
  { title: "Dom Casmurro", writter: "Machado de Assis", pages: 256, borrowed: false },
  { title: "O Cortiço", writter: "Aluísio Azevedo", pages: 320, borrowed: true },
  { title: "Memórias Póstumas de Brás Cubas", writter: "Machado de Assis", pages: 210, borrowed: false },
  { title: "Capitães da Areia", writter: "Jorge Amado", pages: 280, borrowed: true },
  { title: "Iracema", writter: "José de Alencar", pages: 190, borrowed: false }
];

const onlyBorrowedBooks = books.filter(book => book.borrowed);

const machadoAssis = books.filter(book => book.writter === "Machado de Assis");

const totalPagesLibrary = books.reduce((acc, book) => acc + book.pages, 0);

const bookWithMorePages = books.reduce((max, page) => max.pages > page.pages ? max : page); 

console.log('------------ Sistema de Biblioteca ------------');
console.log('Livros emprestados:');
console.log(onlyBorrowedBooks);
console.log('------------------------------------------------');
console.log('Títulos de Machado de Assis:');
console.log(machadoAssis);
console.log('------------------------------------------------');
console.log('Número total de páginas da biblioteca:');
console.log(totalPagesLibrary);
console.log('------------------------------------------------');
console.log('Livro com mais páginas: ')
console.log(bookWithMorePages);
