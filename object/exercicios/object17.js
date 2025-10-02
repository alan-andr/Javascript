const students = [
    {
        name: 'Alice',
        grades: [85, 90, 88]
    },
    {
        name: 'Bob',
        grades: [70, 75, 80]
    },
    {
        name: 'Charlie',
        grades: [95, 92, 96]
    }
];

function averageGrade(students) {
    students.forEach(student => {
        const average = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;
        student.average = Number(average.toFixed(2));
    });

    return students;
};

console.log(averageGrade(students));