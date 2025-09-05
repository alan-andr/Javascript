const pessoas = [
    {nome: 'João', idade: 18},
    {nome: 'Juca', idade: 22},
    {nome: 'Alan', idade: 23},
    {nome: 'Arlindo', idade: 17},
    {nome: 'Euvira', idade: 35}
];

const overThirty = pessoas.find(function(pessoa) {
    return pessoa.idade >= 30;
});

console.log(overThirty);

const underEighteen = pessoas.filter(function(pessoa) {
    return pessoa.idade < 18;
})

console.log(underEighteen);

const onlyNames = pessoas.map(function(pessoa) {
    return pessoa.nome;
})

console.log(onlyNames);