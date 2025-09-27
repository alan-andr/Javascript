const movieLibrary = {
    movies: [
        { title: 'Inception', year: 2010, director: 'Christopher Nolan' },
        { title: 'Avengers: Endgame', year: 2019, director: 'Anthony Russo' },
        { title: 'Dune', year: 2021, director: 'Denis Villeneuve' },
        { title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan' }
    ],

    addMovie(title, year, director) {
        const existing = this.movies.find(movie => movie.title === title);

        if (existing) {
            return `Movie already exists in the Library.`;
        } else {
            this.movies.push({title, year, director});
            return `Movie "${title}" added successfully.`
        }
    },


    findByTitle(title) {
        const movie = this.movies.find(movie => movie.title === title);

        if (!movie) {
            return `Movie "${title}" doesn't exist`;
        } 

        return movie;
    },

    moviesAfter(year) {
        const yearMovie = this.movies.filter(movie => movie.year > year);
        
        if (yearMovie.length === 0) {
            return `There are no movies after ${year}.`;
        }

        return yearMovie;
    }
};

movieLibrary.addMovie('Gone Girl', 2014, 'David Fincher');
console.log('========================================================');
console.log(movieLibrary.findByTitle('Inception'));
console.log('========================================================');
console.log(movieLibrary.moviesAfter(2015));