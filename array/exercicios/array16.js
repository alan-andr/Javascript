const employees = [
    {name: 'Alice', salary: 5000, dept: 'IT'},
    {name: 'Bob', salary: 4000, dept: 'Marketing'},
    {name: 'Charlie', salary: 6000, dept: 'IT'}
];

for (const i in employees) {
    employees[i].salary += (employees[i].salary * 0.10);

    if (employees[i].dept === 'IT') {
        employees[i].salary += 500;
    }

};

console.log(employees);