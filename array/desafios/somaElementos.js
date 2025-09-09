const prices = [15, 25, 40, 10, 5];

const sumPrices = prices.reduce((acc, price) => acc + price, 0);
const averagePrice = (sumPrices / prices.length).toFixed(1);

console.log(`A soma dos preços é: ${sumPrices}`);
console.log(`A média dos preços é ${averagePrice}`);