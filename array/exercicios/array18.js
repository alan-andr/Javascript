const sales = [
    {id: 1, product: 'Monitor', price: 1200, category: 'Hardware'},
    {id: 2, product: 'Teclado', price: 200, category: 'Peripherals'},
    {id: 3, product: 'Cadeira', price: 1500, category: 'Furniture'},
    {id: 4, product: 'Mouse', price: 150, category: 'Peripherals'},
    {id: 5, product: 'SSD', price: 400, category: 'Hardware'}
];

const upperCaseProducts = [...sales].map(item => item.product.toUpperCase());

const onlyHardware = [...sales].filter(item => item.category === 'Hardware');

const sumOfPrice = [...sales].reduce((accumulator, price) => {
    return accumulator + price.price;
}, 0)

// 4. Verifique se TODAS as vendas são acima de 100
const allAbove100 = sales.every(item => item.price > 100);

// 5. Verifique se EXISTE ao menos uma venda de Furniture
const hasFurniture = sales.some(item => item.category === 'Furniture');

// 7. String com nomes separados por " - "
const productString = sales.map(item => item.product).join(' - ');

console.log(`Todos acima de 100? ${allAbove100}`);
console.log(`Tem mobília? ${hasFurniture}`);
console.log(`Lista: ${productString}`);

let higherThan1000 = [...sales].find( price => price.price > 1000)
let allProducts = [...sales].map( item => item.product).join('-')

console.log(upperCaseProducts);
console.log(onlyHardware);
console.log(sumOfPrice);
console.log(higherThan1000)
console.log(allProducts)
