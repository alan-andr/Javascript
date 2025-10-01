const gameScores = {
    teamName: 'Cyber Dragons',
    players: [
        { name: 'PlayerOne', kills: 12, assists: 8, deaths: 5 },
        { name: 'PlayerTwo', kills: 8, assists: 15, deaths: 7 },
        { name: 'PlayerThree', kills: 15, assists: 5, deaths: 3 }
    ],
    scoringRules: {
        killPoint: 5,
        assistPoint: 2,
        deathPenalty: -3
    }
};

function calculateTeamScore(game) {
    const { killPoint, assistPoint , deathPenalty } = game.scoringRules;
    
    const totalPoints = game.players.reduce((total, score) => {
        return total + ((score.kills * killPoint) + ( score.assists * assistPoint) + (score.deaths * deathPenalty));
    }, 0);

    return `Total points of 'Cyber Dragons' is ${totalPoints}`;
}

console.log(calculateTeamScore(gameScores));