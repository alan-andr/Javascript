const student = {
    name: 'Ana',
    age: 21,
    courses: ['Matemática', 'História', 'Biologia'],

    showCourses() {
        const quantityCourse = this.courses.length;

        return `A aluna ${this.name} está matriculada em ${quantityCourse} cursos, são eles: ${this.courses}`;
    }
}

console.log(student.showCourses())