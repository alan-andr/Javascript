const costs = {
    laptop: 500,
    monitor: 150,
    keyboard: 25
};

const prices = {
    laptop: 1200,
    monitor: 350,
    keyboard: 60
};

let profits = {};
let totalValue = 0;

for (const key in prices) {
    profits[(key)] = (prices[key] - costs[key])

    totalValue += (prices[key] - costs[key]); 
};

console.log('Lucros de cada produto: ', profits)

profits.totalValue = totalValue;

console.log(`Lucro total: R$${profits.totalValue.toFixed(2)}`);
