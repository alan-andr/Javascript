const gameStore = {
    games: [
        { title: 'The Last Of Us', platform: 'Playstation', price: 200 },
        { title: 'Halo Infinite', platform: 'Xbox', price: 250 },
        { title: 'Zelda: Breath of the Wild', platform: 'Nintendo', price: 300 },
        { title: 'Spider-Man 2', platform: 'Playstation', price: 280 }
    ],

    showPlatform(platform) {
        const platformGames = this.games
        .filter(game => game.platform.toLowerCase() === platform.toLowerCase())
        .map(game => game.title);

        if (platformGames.length === 0) {
            return `No games found to ${platform}`;
        }

        return platformGames;
    }
};

console.log(gameStore.showPlatform('NINTENDO'));