const students = [
    {name: 'Alice', grade: 8},
    {name: 'Bruno', grade: 5},
    {name: 'Carla', grade: 9},
    {name: 'Diego', grade: 6}
];

const approvedStudents = students.filter(value => value.grade >= 6);

const sumOfGrade = approvedStudents.reduce((acc, value) => acc + value.grade, 0);

const averageApprovedstudents = sumOfGrade / approvedStudents.length; 

console.log('A média dos alunos aprovados é:',averageApprovedstudents.toFixed(2));