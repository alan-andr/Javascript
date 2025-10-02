const movies = [
    { title: 'Inception', rating: 8.8, genre: 'Sci-Fi' },
    { title: 'Titanic', rating: 7.8, genre: 'Romance' },
    { title: 'Interstellar', rating: 8.6, genre: 'Sci-Fi' },
    { title: 'The Notebook', rating: 7.9, genre: 'Romance' }
];

function showMoviesWithGoodRate(movies) {
    const movie = movies.filter(movie => movie.rating > 8);
    return movie.map(movie => movie.title);
};

function searchByGenre(movies, genreMovie) {
    const movie = movies.filter(movie => movie.genre.toLowerCase() === genreMovie.toLowerCase());

    if (movie.length === 0) {
        return `There are no movies with ${genreMovie} genre.`;
    }

    return movie;
}

console.log(showMoviesWithGoodRate(movies));
console.log(searchByGenre(movies, 'action'));