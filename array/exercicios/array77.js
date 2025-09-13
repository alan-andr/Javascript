const grade = [10, 8, 7, 5, 6];

const [firstGrade, ...othersGrade] = grade;

const averageGrade = (othersGrade.reduce((acc, value) => acc + value, 0) / othersGrade.length).toFixed(2);

console.log(`A primeira nota é: ${firstGrade}`);
console.log(`As outras notas são: ${othersGrade}`);
console.log(`A media das outras notas: ${averageGrade}`);