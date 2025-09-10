/* 

Você tem dados de usuários e de livros, e precisa organizar tudo de maneira dinâmica usando arrays, objetos, rest e spread. 

*/

const users = [
    {name: 'Carlos', age: 28, city: 'São Paulo'},
    {name: 'Fernanda', age: 32, city: 'Rio de Janeiro'},
    {name: 'João', age: 24, city: 'Belo Horizente'}
];

const books = [
    {title: 'Dom Casmurro', author: 'Machado de Assis'},
    {title: 'O Cortiço', author: 'Aluísio Azevedo'},
    {title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis'}
];

// 1 - Desestruturação de array
const [firstUser, ...otherUsers] = users;

console.log('O primeiro usuário é: ', firstUser);
console.log('O restante de usuários: ', otherUsers);

// 2 - Desestruturação de objeto
const {name: nameUser, city: cityUser} = firstUser;

console.log('Nome do primeiro usuário: ', nameUser);
console.log('Cidade do primeiro usuário: ', cityUser);

// 3 - Função com rest e desestruturação
const printUsers = function(first, ...others) {
    console.log('O primeiro usuário é: ', first)
    console.log('Os outros são: ', others);
};

printUsers(...users);

// 4 - Spread para combinar arrays
const newBook = {
    title: 'O primo Basílio', 
    author: 'Eça de Queirós'
};

const allBooks = [...books, newBook];

console.log(allBooks);

//5 - Função que recebe objetos e desestrutura
const printBook = function({title, author}) {
    console.log('Título: ', title,'|','Autor: ', author)
}

allBooks.forEach(book => printBook(book));