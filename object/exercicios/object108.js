const gameStore = {
    games: [
        {
            title: 'The Witcher 3',
            genre: 'RPG',
            price: 120,
            inStock: true
        },
        {
            title: 'FIFA 24',
            genre: 'Sports',
            price: 300,
            inStock: false
        },
        { 
            title: 'Minecraft',
            genre: 'Sandbox',
            price: 100,
            inStock: true
        },
        {
            title: 'Elden Ring',
            genre: 'RPG',
            price: 250,
            inStock: true
        }
    ],

    listAvailableGames() {
        const availableGames = this.games.filter(game => game.inStock);

        return availableGames;
    },

    calculateInventoryValue() {
        const totalValueInStock = this.listAvailableGames().reduce((total, game) => total + game.price, 0);

        return `Total value games in stock: $${totalValueInStock.toFixed(2)}`;
    }
};

console.log(gameStore.listAvailableGames());
console.log(gameStore.calculateInventoryValue());