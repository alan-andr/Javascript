const books = [
    { title: 'Dom Casmurro', author: 'Machado de Assis' },
    { title: 'O Hobbit', author: 'J.R.R. Tolkien' },
    { title: '1984', author: 'George Orwell' },
    { title: 'A Revolução dos Bichos', author: 'George Orwell' },
    { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry' }
];

books.forEach(element => console.log(element.title));

books.push({ title: 'Meditações de Marco Aurélio', author: 'Marco Aurélio' });

console.log(books);

const findBook = books.find(element => element.title === '1984');

console.log(findBook);