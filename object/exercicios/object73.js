const playlist = {
    name: 'Favoritas 2025',
    songs: [
        { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 },
        { title: 'Billie Jean', artist: 'Michael Jackson', duration: 294 },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: 301 },
        { title: 'Hotel California', artist: 'Eagles', duration: 390 }
    ],

    totalMinutesSpend() {
        const totalSeconds = this.songs.reduce((sum, song) => sum + song.duration, 0);

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        return `A playlist tem ${minutes} e ${seconds} segundos`;
    }
};

console.log(playlist.totalMinutesSpend);

