let ages = [18, 22, 16, 30, 15];

const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
const averageAges = sumOfAges / ages.length;

console.log('-------------------------------------');
console.log(`As idades são ${ages}`);
console.log(`A soma das idades é ${sumOfAges}`);
console.log(`A média das idades é ${averageAges}`);
console.log('-------------------------------------');