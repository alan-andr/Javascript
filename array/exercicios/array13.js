const pessoas = [
    {nome: 'Klebin', idade: 19},
    {nome: 'Alan', idade: 23},
    {nome: 'Junin', idade: 17},
    {nome: 'Claudivam', idade: 13},
    {nome: 'Desperado', idade: 30}
];

const overEighteen = pessoas.filter(function(pessoa) {
    return pessoa.idade > 18;
})

console.log('-------------------------------------------------');
console.log(`As pessoas maiores de 18 anos são....`);
console.log(overEighteen);
console.log('-------------------------------------------------');

const sumOfAges = pessoas.reduce(function(accumulator, pessoa) {
    return accumulator + pessoa.idade;
}, 0)

console.log(sumOfAges);