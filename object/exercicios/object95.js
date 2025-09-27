const playlist = {
    name: 'My Awesome Mix',
    creator: 'John Doe',
    songCount: 3,
    songs: [
        {
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            durationInSeconds: 355
        },
        {
            title: 'Stairway To Heaven',
            artist: 'Led Zeppelin',
            durationInSeconds: 482
        },
        {
            title: 'Hotel California',
            artist: 'Eagles',
            durationInSeconds: 391
        }
    ]
};

function getPlaylist(playlist) {
    return `Playlist: ${playlist.name} by ${playlist.creator} - ${playlist.songs.length} songs.`;
};

function addSong(play, newSong) {
    const existing = play.songs.find(song => song.title === newSong.title);

    if (existing) {
        return `Song "${existing.title}" already exists in playlist.`;
    } else {
        play.songCount += 1;
        play.songs.push(newSong);
        return `Song "${newSong.title}" added successfully.`;
    }
};

function getTotalDuration(playlist) {
    const totalSeconds = playlist.songs.reduce((total, song) => total + song.durationInSeconds, 0);
    
    return `Total Seconds playlist: ${totalSeconds} seconds.`;
};

const newSong = {
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    durationInSeconds: 369
};

console.log(getPlaylist(playlist));
addSong(playlist, newSong);
console.log('=========================================================');
console.log(playlist);
console.log('=========================================================');
console.log(playlist.songs);
console.log('=========================================================');
console.log(getTotalDuration(playlist));