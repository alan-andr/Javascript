let ages = [12, 18, 25, 9, 30, 15, 40];

let overEighteen = ages.filter((age) => age >= 18);

let numbersOverEighteen = overEighteen.length;

let sumOfAges = overEighteen.reduce((acc, age) => (acc + age), 0);

let averageAges = sumOfAges / overEighteen.length;

let sequenceOverEighteen = [...overEighteen].sort((a, b) => a - b);

let biggerAge = sequenceOverEighteen[sequenceOverEighteen.length - 1];

console.log('-------------------------------------------------');
console.log(`As idades são: ${ages}`);
console.log('-------------------------------------------------');
console.log(`As idades maiores ou iguais a 18 são: ${overEighteen}`);
console.log('-------------------------------------------------');
console.log(`A quantidade de idades maiores ou iguais a 18: ${numbersOverEighteen}`);
console.log('-------------------------------------------------');
console.log(`A média das idades maiores ou iguais a 18: ${averageAges.toFixed(1)}`);
console.log('-------------------------------------------------');
console.log(`A maior idade é: ${biggerAge}`);