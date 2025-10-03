const digitalLibrary = [
    {
        title: "The Mind's Maze",
        author: "Dr. Evelyn Reed",
        yearPublished: 2021,
        isAvailable: true,
        genre: "Science Fiction"
    },
    {
        title: "Chronicles of the Ancient Tree",
        author: "Arthur Hemlock",
        yearPublished: 1998,
        isAvailable: false,
        genre: "Fantasy"
    },
    {
        title: "Data and Destiny",
        author: "Dr. Evelyn Reed",
        yearPublished: 2023,
        isAvailable: true,
        genre: "Science Fiction"
    },
    {
        title: "The Last City of Gold",
        author: "Mariana Velez",
        yearPublished: 2015,
        isAvailable: true,
        genre: "Adventure"
    }
];

const findBooksByAuthor = (authorName) => {
    const existing = digitalLibrary.filter(book => book.author.toLowerCase() === authorName.toLowerCase());

    if (existing.length === 0) {
        return `${authorName} not found in library system.`
    }

    const titles = existing.map(book => book.title);
    
    return titles;
};

const checkoutBook = (bookTitle) => {
    const book = digitalLibrary.find(book => book.title.toLowerCase() === bookTitle.toLowerCase());

    if (!book) return `Book "${bookTitle}" not found in library system.`; 

    if (!book.isAvailable) {
        return `Book "${bookTitle}" is currently unavailable.`;
    } else {
        book.isAvailable = false;
    }

    return book;
};

const addBookEdition = (bookTitle, edition) => {
    const book = digitalLibrary.find(book => book.title.toLowerCase() === bookTitle.toLowerCase());

    if (!book) {
        return `Book "${bookTitle}" not found.`;
    }

    book.edition = `${edition}nd Edition`;

    return book;
};

console.log(findBooksByAuthor('Dr. Evelyn Reed'));
console.log('==========================================');
console.log(checkoutBook('The Last City of Gold'));
console.log('==========================================');
console.log(checkoutBook('The Last City of Gold'));
console.log('==========================================');
console.log(addBookEdition("the mind's maze", 2));
console.log(digitalLibrary);
