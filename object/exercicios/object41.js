const teamPerformance = {
    'Bruno': { 
        position: 'Forward',
        stats: { 
            goals: 15,
            assists: 10
        }
    },

    'Leo': {
        position: 'Forward',
        stats: {
            goals: 8,
            assists: 5
        }
    },

    'Carla': {
        position: 'Midfielder',
        stats: {
            goals: 2,
            assists: 4
        }
    },

    'Miguel': {
        position: 'Defender',
        stats: {
            goals: 6,
            assists: 4
        }
    }
};

function findTopScorer(team) {
    let playerNameWithMoreGoals = '';
    let goals = 0;

    for (const key in team) {
        if (team[key].stats.goals > goals) {
            playerNameWithMoreGoals = key;
            goals = team[key].stats.goals
        }
    }

    return playerNameWithMoreGoals;
};

function getPlayersByPosition(team, position) {
    let positionPlayers = [];

    for (const key in team) {
        if (team[key].position.toLowerCase() === position.toLowerCase()) {
            positionPlayers.push(key);
        }
    }

    return positionPlayers;
};

function calculateTotalStats(team) {
    const arrTeam = Object.values(team);

    return arrTeam.reduce((acc, player) => {
        acc.totalGoals += player.stats.goals;
        acc.totalAssists += player.stats.assists;

        return acc; //! objeto com as propriedades totalGoals e totalAssists
    }, { totalGoals: 0, totalAssists: 0});
};

const playerWithMoreGoals = findTopScorer(teamPerformance);

console.log(`The player with more goals is ${playerWithMoreGoals}`);
console.log(getPlayersByPosition(teamPerformance, 'forward'));
console.log(calculateTotalStats(teamPerformance));