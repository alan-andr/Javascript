const movieDatabase = {
    movies: [
        { title: 'Inception', ratings: [9, 10, 8] },
        { title: 'The Matrix', ratings: [10, 9, 9, 8] },
        { title: 'Interstellar', ratings: [8, 9, 9, 10] }
    ],

    addRating(movieTitle, movieRating = 0) {
        const movie = this.movies.find(value => value.title === movieTitle);

        if (movieRating >= 0 && movieRating <= 10) {
            movie.ratings.push(movieRating);   
        } else {
            return `O valor inserido é inválido`;
        }

        return movie;
    },

    getAverageRating(movieTitle) {
        const movie = this.movies.find(value => value.title === movieTitle);

        if (!movie) {
            return `Filme não encontrado.`;
        }

        const average = movie.ratings.reduce((sum, rate) => sum + rate, 0) / movie.ratings.length;

        return `A nota média do filme "${movieTitle}" é ${average.toFixed(2)}`;
    },

    highestRateMovie() {
        let bestMovie = null;
        let highestAvg = 0;

        this.movies.forEach(movie => {
            const avg = movie.ratings.reduce((total, value) => total + value, 0) / movie.ratings.length;

            if (avg > highestAvg) {
                highestAvg = avg;
                bestMovie = movie.title;
            }
        });

        return `O filme com a maior média é "${bestMovie}" com nota ${highestAvg.toFixed(2)}`;
    }
}

movieDatabase.addRating('Inception');
console.log(movieDatabase.getAverageRating('Inception'));
console.log(movieDatabase.highestRateMovie());