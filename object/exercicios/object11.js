const onlineCourse = {
    students: [
        {
            name: 'Ana',
            progress: 70,
            completed: false
        },
        {
            name: 'Carlos',
            progress: 100,
            completed: true
        },
        {
            name: 'Beatriz',
            progress: 40,
            completed: false
        },
        {
            name: 'Rafael',
            progress: 85,
            completed: false
        }
    ],

    updateStudentProgress(studentName, num = 0) {
        const student = this.students.find(student => student.name.toLowerCase() === studentName.toLowerCase());

        if (!student) {
            return `Student "${studentName}" is not in the course system.`;
        }

        student.progress = Math.min(student.progress + num, 100);

        if (student.progress >= 100) {
            student.completed = true;
            return `Student "${studentName}" has completed the course with ${student.progress}% progress.`
        } else {
            return `Progress of ${num}% was add to "${studentName}". Now ${studentName}'s progress is ${student.progress}%`;
        }
    },

    listStudentsCompletedProgress() {
        const completedCourseStudents = this.students.filter(student => student.completed);

        if (completedCourseStudents.length === 0) return `No students completed the course yet.`;

        return completedCourseStudents.map(s => `${s.name} (${s.progress}%)`);
    },

    calculateAverageProgress() {
        const sumOfProgress = this.students.reduce((total, student) => total + student.progress, 0);
        const avg = sumOfProgress / this.students.length;

        return `Class's average progress: ${avg.toFixed(2)}`;
    }
};

console.log(onlineCourse.updateStudentProgress('Ana', 30));
console.log(onlineCourse.listStudentesCompletedProgress());
console.log(onlineCourse.calculateAverageProgress());