const playerSettings = {
    playerName: 'Hero123',
    difficulty: 'Normal',
    hasSound: true,
    musicVolume: 75,
};

console.log(playerSettings.difficulty);

playerSettings.musicVolume += 10;

playerSettings.subtitleEnabled = true;

console.log(playerSettings);