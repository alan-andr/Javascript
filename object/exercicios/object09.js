const book = {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 310,
    isRead: false
};

book.publisher = 'Allen & Unwin';

for (const key in book) {
    console.log(`${key}: ${book[key]}`)
};  

const keys = Object.keys(book);

console.log('===========================================');

keys.forEach(element => console.log(element));

console.log('===========================================');

const values = Object.values(book);

console.log(values);

console.log('===========================================');

const arrayBook = Object.entries(book);

console.log(arrayBook);

console.log('===========================================');

arrayBook.forEach(element => console.log(`${element[0]}: ${element[1]}`));