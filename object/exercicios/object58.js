const school = {
    name: 'Escola Futuro',
    students: [
        { name: 'Lucas', grades: [8, 9, 7] },
        { name: 'Mariana', grades: [9, 10, 10] },
        { name: 'Rafael', grades: [6, 7, 5] }
    ],

    getStudentsAverage(grades) {
        return grades.reduce((total, value) => total + value, 0) / grades.length;
    },

    calculateAverage() {
        let studentsOverAverage = [];

        for (const { name, grades } of this.students) {
            const average = this.getStudentsAverage(grades);

            console.log(`Aluno(a): ${name}, média: ${average.toFixed(1)}`);

            if (average > 7) {
                studentsOverAverage.push(name)
            }
        }

        console.log(`Alunos com média maior que 7: ${studentsOverAverage.join(',')}`);
    }
}; 

school.calculateAverage();
