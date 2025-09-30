const cinema = {
    movies: [
        {
            title: 'Inception',
            duration: 148,
            rating: 9.0,
            available: true
        },
        {
            title: 'Titanic',
            duration: 195,
            rating: 8.5,
            available: false
        },
        {
            title: 'Interstellar',
            duration: 169,
            rating: 9.3,
            available: true
        },
        {
            title: 'Avatar',
            duration: 162,
            rating: 8.1,
            available: true
        }
    ],

    listAvailableMovies() {
        const availableMovies = this.movies.filter(movie => movie.available);

        return availableMovies;
    },

    getBestRatedMovie() {
        const mostRated = this.movies.reduce((bestMovie, movie) => bestMovie.rating > movie.rating ? bestMovie : movie);

        return `Best rated movie: ${mostRated.title}, rated: ${mostRated.rating}`;
    },

    totalHourAvailableMovies() {
        const time = this.listAvailableMovies().reduce((total, movie) => total + movie.duration, 0);

        const totalHours = Math.floor(time / 60);
        const totalMinutes = time % 60;

        return `Total hours of available: ${totalHours} hours and ${totalMinutes} minutes.`
    }
};

console.log(cinema.listAvailableMovies());
console.log('======================================================');
console.log(cinema.getBestRatedMovie());
console.log('======================================================');
console.log(cinema.totalHourAvailableMovies());