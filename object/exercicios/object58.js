const school = {
    name: 'Escola Futuro',
    students: [
        { name: 'Lucas', grades: [8, 9, 7] },
        { name: 'Mariana', grades: [9, 10, 10] },
        { name: 'Rafael', grades: [6, 7, 5] }
    ],

    calculateAverage() {
        for (const { name, grades } of this.students) {
            const averageGradeStudents = grades.reduce((total, value) => total + value, 0) / grades.length;

            console.log(`Aluno(a): ${name}, média: ${averageGradeStudents}`);

            if (averageGradeStudents > 7) {
                console.log(`Aluno com média maior que 7: ${name}`);
            }
        }
    }
};

school.calculateAverage();