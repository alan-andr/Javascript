const playlist = {
    name: "Road Trip",
    songs: [
        { title: "Thunderstruck", artist: "AC/DC", duration: 292 },
        { title: "Hotel California", artist: "Eagles", duration: 390 },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: 356 }
    ],

    addSong(title, artist, duration) {
        this.songs.push({title, artist, duration});
    },

    getTotalDuration() {
        const sumOfDuration = this.songs.reduce((total, music) => total + music.duration, 0);

        const minutes = Math.floor(sumOfDuration / 60);
        const seconds = sumOfDuration % 60;

        return `Duração da playlist: ${minutes} minutos e ${seconds} segundos.`;
    },

    listSongs() {
        return this.songs.map((song, index) => `${index + 1}. ${song.title} by ${song.artist}`).join('.\n');
    }


};

playlist.addSong('Save The World', 'Swedish House Mafia', 320);
console.log(playlist)
console.log('=========================================================');
console.log(playlist.getTotalDuration());
console.log('=========================================================');
console.log(playlist.listSongs());