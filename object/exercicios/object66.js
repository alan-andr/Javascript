const student = {
    name: 'João',
    grades: [5, 5, 5],

    addNewGrade(grade = 0) {
        this.grades.push(grade);
    },

    calculateAverage() {
        const { grades } = this;

        const sumOfGrades = this.grades.reduce((total, value) => total + value, 0);

        const average = sumOfGrades / grades.length;

        return average;
    },
    
    approvedOrFailed() {
        const average = this.calculateAverage()

        return average >= 7 ? `O aluno(a) ${this.name} está aprovado, média ${average.toFixed(1)}` : `O aluno(a) ${this.name} está reprovado, média ${average.toFixed(1)}`;
    }
}

student.addNewGrade(5);

console.log(student.approvedOrFailed());