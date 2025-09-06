let prices = [12.5, 50, 30, 5, 100];

let pricesWithDiscount = prices.map(function(price) {
    return ((price * 90) / 100).toFixed(2);
})

console.log(`Preços originais: ${prices}`);
console.log('----------------------------------------------');
console.log(`Preços com 10% de desconto: ${pricesWithDiscount}`);