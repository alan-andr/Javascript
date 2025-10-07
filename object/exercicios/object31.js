const student = {
    name: 'João',
    grades: [10, 8, 5],

    addGrade(grade) {
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade);
            return `Grade ${grade} added succesfully.`;
        } else {
            return `Grade out of standart, insert a grade from 0 to 10.`;
        }
    },

    getAverage() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((total, grade) => total + grade, 0) / this.grades.length; 
    },

    getStatus() {
        const average = this.getAverage();

        if (average >= 7) {
            return 'Approved';
        } else if (average >= 5) {
            return 'Recuperation';
        } else if (average < 5) {
            return 'Reproved';
        }
    }
};

student.addGrade(5);
console.log(student.grades);
console.log(student.getAverage());
console.log(student.getStatus());
