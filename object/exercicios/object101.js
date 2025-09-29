const movieData = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Sci-fi',
    ratings: {
        imdb: 8.8,
        rottenTomatoes: 87,
        metacritic: 74
    },
    mainActores: [
        'Leonardo DiCaprio',
        'Joseph Gordon-Levitt',
        'Elliot Page'
    ]
};

const { title, director, year, ratings: { imdb, rottenTomatoes } } = movieData;

function getMovieDetails(movie) {
    const entries = Object.entries(movie);

    for (const element of entries) {
        console.log(`Propriedade: ${element[0]} - Valor: ${element[1]}`);
    };
}

getMovieDetails(movieData);