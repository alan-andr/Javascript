const students = [
    {name: 'Pedro', grade: 7},
    {name: 'Luana', grade: 9},
    {name: 'Rafael', grade: 5}
];

const approvedStudents = students
.filter(student => student.grade >= 6)
.map(student => student.name)
.join(', ');

console.log(`Alunos aprovados: ${approvedStudents}`);