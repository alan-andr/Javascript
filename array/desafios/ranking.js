const players = [
    {name: "Ana", score: 120},
    {name: "Carlos", score: 90},
    {name: "Beatriz", score: 150},
    {name: "Daniel", score: 70},
    {name: "Elisa", score: 200}
];

const overToUnder = [...players].sort((a, b) => b.score - a.score); 

const bestPlayers = players
.filter(playerScore => playerScore.score > 100)
.map(playerName => playerName.name)
.join(', ');

const sumPlayerScore = players
.reduce((acc, playerScore) => acc + playerScore.score, 0);

const averagePlayerScore = sumPlayerScore / players.length;

const overAveragePlayer = overToUnder.filter(playerScore => playerScore.score > averagePlayerScore);

console.log('------------------ Ranking de Pontuações ------------------');
console.log('1. Jogadores Ordenados:');
console.log(overToUnder);
console.log('-----------------------------------------------------------');
console.log('2. Top 3 nomes:');
console.log(bestPlayers);
console.log('-----------------------------------------------------------');
console.log('Média de pontuação de todos os jogadores:');
console.log(averagePlayerScore);
console.log('-----------------------------------------------------------');
console.log('Jogadores acima da média:');
console.log(overAveragePlayer);

