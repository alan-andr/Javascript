const student = {
    name: 'Maria',
    grades: [8, 7.5, 9, 10, 6],

    calculateAverage () {
         return this.grades.reduce((total, value) => total + value, 0) / this.grades.length
    },

    approvedOrFaild (grade) {
        return grade >= 7 ? 'Approved' : 'Failed'; 
    }
};

let average = student.calculateAverage();

console.log(`Média: ${average}`);

console.log(student.approvedOrFaild(average));
