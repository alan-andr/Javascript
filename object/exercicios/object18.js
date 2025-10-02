const library = {
    name: 'City Library',
    books: [
        { title: '1984', author: 'George Orwell', isAvailable: true },
        { title: 'Moby Dick', author: 'Herman Melville', isAvailable: false },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: true } 
    ]
};

function showAvailableBooks(library) {
    let available = {};

    const availableBooks = library.books.filter(book => book.isAvailable);

    const percentage = ( availableBooks.length / library.books.length ) * 100;

    available.totalAvailable = availableBooks.length; 
    available.totalBooks = library.books.length;
    available.percentage =  `${Number(percentage.toFixed(2))}%`; 
    available.titles = availableBooks.map(book => book.title);
    available.authors = availableBooks.map(book => book.author);

    return available;
};

console.log(showAvailableBooks(library));