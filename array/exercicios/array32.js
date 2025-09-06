let notas = [
    {nome: 'Claudinho', nota: 7},
    {nome: 'Joãozinho', nota: 5},
    {nome: 'Zezinho', nota: 10},
    {nome: 'Raphinha', nota: 6}
];

const somaNotas = notas.reduce((acc, nota) => acc + nota.nota, 0);

const aprovados = notas.filter((nota) => nota.nota >= 6);

console.log(`A soma total das notas é: ${somaNotas}`);

console.log(`Alunos aprovados: ${aprovados.map(aluno => aluno.nome).join(',')}`);