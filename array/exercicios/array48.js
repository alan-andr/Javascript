const grade = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const averageGrade = (grade.reduce((acc, num) => acc + num, 0) / grade.length).toFixed(2);

console.log('=========== Calculando Notas ============');
console.log(`Notas: ${grade}`);
console.log(`A média das notas: ${averageGrade}`);
console.log(`=========================================`);