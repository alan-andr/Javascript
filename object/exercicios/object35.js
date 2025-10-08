const libraryCatalog = [
    { 
        title: 'The Lord of the Rings', 
        author: 'J.R.R. Tolkien', 
        genre: 'Fantasy', 
        publicationYear: 1954, 
        borrowingInfo: { isAvailable: false, borrowedBy: 'user123' } 
    },
    { 
        title: '1984', 
        author: 'George Orwell', 
        genre: 'Dystopian', 
        publicationYear: 1949, 
        borrowingInfo: { isAvailable: true, borrowedBy: null } 
    },
    { 
        title: 'Dune', 
        author: 'Frank Herbert', 
        genre: 'Sci-Fi', 
        publicationYear: 1965, 
        borrowingInfo: { isAvailable: true, borrowedBy: null } 
    },
    { 
        title: 'The Hobbit', 
        author: 'J.R.R. Tolkien', 
        genre: 'Fantasy', 
        publicationYear: 1937, 
        borrowingInfo: { isAvailable: false, borrowedBy: 'user456' } 
    },
    { 
        title: 'Foundation', 
        author: 'Isaac Asimov', 
        genre: 'Sci-Fi', 
        publicationYear: 1951, 
        borrowingInfo: { isAvailable: true, borrowedBy: null } 
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        genre: 'Dystopian',
        publicationYear: 1932,
        borrowingInfo: { isAvailable: true, borrowedBy: null }
    }
];

function generateLibraryReport(catalog) {
    let newCatalog = {}
    let titles = [];
    let available = [];

    for (const { title, genre, borrowingInfo: { isAvailable } } of catalog) {
        
        titles.push(title);
        
        newCatalog.totalBooks = titles.length;

        if (isAvailable) {
            available.push(isAvailable)
        }

        newCatalog.availableBooks = available.length;

        if (!newCatalog[genre]) {
            newCatalog[genre] = 0;
        }

        newCatalog[genre] += 1;
    }

    const oldest = catalog.reduce((old, recent) => old.publicationYear < recent.publicationYear ? old : recent);

    newCatalog.oldestBook = oldest;

    return newCatalog;
};

console.log(generateLibraryReport(libraryCatalog));