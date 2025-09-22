const book01 = {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publisherYear: 1951,
    isAvailable: true
};

const book02 = {
    title: '1984',
    author: 'George Orwell',
    publisherYear: 1949,
    isAvailable: false
};

const keysBook01 = Object.keys(book01);
const keysBook02 = Object.keys(book02);
const valuesBook01 = Object.values(book01);
const valuesBook02 = Object.values(book02);

console.log('======================================================');

console.log(keysBook01);
console.log(valuesBook01);
console.log(keysBook02);
console.log(valuesBook02);

console.log('======================================================');

console.log(book02.title);
console.log(book02['title']);

console.log('======================================================');

const entriesBook01 = Object.entries(book01);
const entriesBook02 = Object.entries(book02);

console.log(entriesBook01);
console.log(entriesBook02);
