let prices = [15, 50, 30, 80, 100];

const pricesWithDiscount = prices.map(price => (price * 80) / 100);

console.log(`---------- SEMANA IMPERDÍVEL ---------\n`);
console.log(`Preços originais: ${prices}`);
console.log(`--------------------------------------`);
console.log(`Preços com 20% de desconto: ${pricesWithDiscount}`);
console.log(`--------------------------------------`);
