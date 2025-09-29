const cinema = {
    movies: [
        { title: 'Duna 2', duration: 165, is3D: true },
        { title: 'Oppenheimer', duration: 180, is3D: false },
        { title: 'Avatar 2', duration: 192, is3D: true },
        { title: 'Barbie', duration: 115, is3D: false }
    ],

    only3DMovies() {
        const movies = this.movies
        .filter(movie => movie.is3D)
        .map(movie => movie.title);

        if (movies.length === 0) {
            return `No movies in 3D.`;
        } 

        return movies;
    },

    totalHoursMovies() {
        const allMinutes = this.movies.reduce((total, movie) => total + movie.duration, 0);

        const totalHours = Math.floor(allMinutes / 60);
        const totalMinutes = allMinutes % 60;

        return `Total time exibition: ${totalHours} Hours and ${totalMinutes} minutes`;
    }
};

console.log(`3D Movies: ${cinema.only3DMovies()}`)
console.log(cinema.totalHoursMovies());
