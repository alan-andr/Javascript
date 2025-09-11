const calculateDiscount = function(price, discount) {
    return (price * (100 - discount)) / 100;
};

const price = 50;
const discount = 10
const priceWithDiscount = calculateDiscount(price, discount);

console.log('*-*-*-*-*-*-*-*-* Calculadora de Desconto *-*-*-*-*-*-*-*-*');
console.log(`O produto custa: R$${price.toFixed(2)}`);
console.log(`Desconto de ${discount}% aplicado.`);
console.log(`O valor do produto com ${discount}% de desconto: R$${priceWithDiscount.toFixed(2)}`);
console.log('*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-**-*-*-*-');