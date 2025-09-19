const studentDatabase = [
    {
        id: 1,
        name: "Liam White",
        major: "Computer Science",
    },
    {
        id: 2,
        name: "Olivia Black",
        major: "Software Engineering",
    },
    {
        id: 3,
        name: "Noah Green",
        major: "Data Science",
    }
];


const valueTwo = studentDatabase.find(element => element.id === 2);

valueTwo.isEnrolled = true;

let studentNames = [];

for (const { name } of studentDatabase) {
    studentNames.push(name)
};

console.log(studentDatabase)

console.log(`Nomes dos estudantes: ${studentNames}`);