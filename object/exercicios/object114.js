const languageSchool = {
    students: [
        {
            name: 'Pedro',
            language: 'Inglês',
            level: 'B1',
            attendance: 10
        },
        {
            name: 'Carla',
            language: 'Espanhol',
            level: 'A2',
            attendance: 8
        },
        {
            name: 'Júlia',
            language: 'Inglês',
            level: 'C1',
            attendance: 15
        },
        {
            name: 'Roberto',
            language: 'Francês',
            level: 'A1',
            attendance: 5
        }
    ],

    addAttendance(studentName) {
        const student = this.students.find(student => student.name.toLowerCase() === studentName.toLowerCase());

        if (student) {
            student.attendance += 1;
            return `${studentName} is in the classroom. Attendance ok!`;
        } else {
            return `${studentName} was not found.`;
        }
    },

    getTopStudent(language) {
        const studentsInLanguage = this.students
        .filter(student => student.language.toLowerCase() === language.toLowerCase());

        if (studentsInLanguage.length === 0) {
            return `${language} language doesn't exist in school system.`
        }

        const student = studentsInLanguage.reduce((highAttendance, attendance) => highAttendance.attendance > attendance.attendance ? highAttendance : attendance);

        return `Top student in "${language}" is ${student.name} with ${student.attendance} attendance.`;
    },

    listLanguage() {
        const onlyLanguages = this.students.map(school => school.language);

        return [...new Set(onlyLanguages)];
    }
};

console.log(languageSchool.addAttendance('Roberto'));
console.log('=====================================================');
console.log(languageSchool.getTopStudent('inglês'));
console.log('=====================================================');
console.log(languageSchool.listLanguage());