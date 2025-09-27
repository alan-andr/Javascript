const gameStore = {
    games: [
        { title: 'The Witcher 3', genre: 'RPG', price: 40 },
        { title: 'Minecraft', genre: 'Sandbox', price: 30 },
        { title: 'FIFA 24', genre: 'Sports', price: 60 },
        { title: 'Cyberpunk 2077', genre: 'RPG', price: 50 }
    ],

    searchGenre(gameGenre) {
        const genre = this.games.filter(game => game.genre === gameGenre);

        if (genre.length === 0) {
            return `No games found for this genre.`;
        }

        return genre;
    }
};

console.log(gameStore.searchGenre('RPG'));