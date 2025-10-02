const employees = [
    { name: 'David', salary: 4000, department: 'IT' },
    { name: 'Sarah', salary: 5000, department: 'Finance' },
    { name: 'Tom', salary: 4500, department: 'IT' },
    { name: 'Emma', salary: 5500, department: 'HR' }
];

function filterEmployees(employees, callback) {
    return callback(employees);
};

const totalSalary = (employees) => {
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    return totalSalary;
};

const showEmployeesName = function(employees) {
    const allEmployeesName = employees.map(employee => employee.name);

    return allEmployeesName;
};

const showHighestSalary = (employees) => {
    const highestSal = employees.reduce((max, employee) => max.salary > employee.salary ? max : employee);

    return `The highest salary is from ${highestSal.name} with $${highestSal.salary.toFixed(2)}`;
};

let totalSal = filterEmployees(employees, totalSalary);

console.log(`Total salary of employees is $${totalSal.toFixed(2)}`);

console.log(filterEmployees(employees, showEmployeesName));

console.log(filterEmployees(employees, showHighestSalary));