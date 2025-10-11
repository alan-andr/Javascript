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
    let namePlayerWithMoreGoals = '';
    let goals = 0;

    for (const key in team) {
        if (team[key].stats.goals > goals) {
            namePlayerWithMoreGoals = key;
            goals = team[key].stats.goals
        }
    }

    return namePlayerWithMoreGoals;
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

    let goals = 0;
    let assists = 0;

    return arrTeam.reduce((acc, score) => {
        goals += score.stats.goals;
        assists += score.stats.assists;

        return {
            totalGoals: goals,
            totalAssists: assists
        }
    }, 0);
};

const playerWithMoreGoals = findTopScorer(teamPerformance);

console.log(`The player with more goals is ${playerWithMoreGoals}`);
console.log(getPlayersByPosition(teamPerformance, 'forward'));
console.log(calculateTotalStats(teamPerformance));