function printBook({title, author}) {
    console.log(`Título: ${title} | Autor: ${author}`);
}

const book = {
    title: 'Memórias Postumas de Braz Cubas',
    author: 'Machados de Assis'
};

console.log('------------------------------ Livro ------------------------------');
printBook(book);
console.log('-------------------------------------------------------------------');

