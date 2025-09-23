const studentData = {
  'S001': {
    name: 'John Doe',
    age: 21,
    grades: [85, 92, 78, 88]
  },
  'S002': {
    name: 'Jane Smith',
    age: 22,
    grades: [95, 89, 93, 94]
  },
  'S003': {
    name: 'Peter Jones',
    age: 20,
    grades: [72, 80, 68, 75]
  },
  'S004': {
    name: 'Mary Brown',
    age: 23,
    grades: [100, 95, 98, 97]
  }
};

function calculateAverageGrades(Data) {
    const studentInfoArray = Object.values(Data);

    const result = studentInfoArray.map(student => {
        const sumOfGrades = student.grades.reduce((sum, currentGrade) => sum + currentGrade, 0);

        const average = sumOfGrades / student.grades.length;

        return {
            name: student.name,
            averageGrade: average
        };
    });

    return result;
};

console.log(calculateAverageGrades(studentData));