const bookCatalog = {
  "javascript_the_good_parts": {
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "year": 2008,
    "genre": ["programming", "computer science"],
    "available": true
  },
  "the_lord_of_the_rings": {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "year": 1954,
    "genre": ["fantasy", "adventure"],
    "available": false
  },
  "pride_and_prejudice": {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "year": 1813,
    "genre": ["romance", "classic"],
    "available": true
  }
};

bookCatalog.dune = {
    "title": "Dune",
    "author": "Frank Herbert",
    "year": 1965,
    "genre": ["Science fiction", "adventure"],
    "available": true
}

bookCatalog.javascript_the_good_parts.available = false;

bookCatalog.pride_and_prejudice.genre.splice(1, 1);

let arrTitles = [];

for (const key in bookCatalog) {
    arrTitles.push(bookCatalog[key].title);
}

console.log(bookCatalog);

console.log(arrTitles);

