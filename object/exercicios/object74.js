const movieCatalog = {
    movies: [
        { title: 'O senhor dos anéis: A Sociedade de Anel', year: 2001, watched: true },
        { title: 'Interestelar', year: 2014, watched: false },
        { title: 'Clube da Luta', year: 1999, watched: true },
        { title: 'A Origem', year: 2010, watched: false }
    ],

    showDontWatchedMovies() {
        const dontWatchedMovies = this.movies
        .filter( movie => !movie.watched )
        .map( movie => movie.title );

        return `Filmes não assistidos: ${dontWatchedMovies.join(', ')}`;
    }
};

console.log(movieCatalog.showDontWatchedMovies());