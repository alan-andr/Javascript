const book = {
    title: 'The Forgotten Garden',
    author: 'Kate Morton',
    publicationYear: 2008,
    publisher: 'Atria Books',
    genres: ['Historical Fiction', 'Mistery']
};

const { genres: [ firstGenre ], title, author } = book;

console.log(`Título: ${title}`);
console.log(`Autor: ${author}`);
console.log(`Primeiro gênero: ${firstGenre}`);