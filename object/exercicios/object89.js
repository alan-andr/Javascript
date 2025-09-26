const company = {
    employees: [
        { name: 'Alice', role: 'Developer', salary: 5000 },
        { name: 'Bob', role: 'Designer', salary: 4000 },
        { name: 'Charlie', role: 'Manager', salary: 7000 }
    ],

    addEmployee(name, role, salary) {
        this.employees.push({ name, role, salary });
    },

    getTotalSalary() {
        const totalSalary = this.employees.reduce((total, value) => total + value.salary, 0);

        return `Valor total do salário dos funcionários: R$${totalSalary.toFixed(2)}`;
    },

    findEmployeeByRole(role) {
        const employee = this.employees.find(value => value.role === role);

        return employee ? `O funcionário que desempenha essa tarefa é ${employee.name}` : `Nenhum funcionário encontrado com a função ${role}`;
    },

    increasesSalaries(num) {
        const percentage = (num + 100 ) / 100;
        
        this.employees.forEach(value => {
            value.salary = +(value.salary * percentage).toFixed(2);
        });

        return this.employees;
    },

    listEmployeesBySalary() {
        this.employees.sort((a, b) => b.salary - a.salary);

        return this.employees;
    },

    getAverageSalary() {
        const sumOfSalary = this.employees.reduce((total, value) => total + value.salary, 0);
        const averageSalary = sumOfSalary / this.employees.length;

        return `A média salarial da empresa é R$${averageSalary.toFixed(2)}`;
    },

    getHighestPaidEmployee() {
        const highestPaid = this.employees.reduce((current, value) => current.salary > value.salary ? current : value);

        return `O funcionário mais bem pago: ${highestPaid.name} com salario R$${highestPaid.salary.toFixed(2)}`;
    }
}

console.log(company.getTotalSalary());
console.log(company.findEmployeeByRole('Developer'));
company.increasesSalaries(10);
company.listEmployeesBySalary();
console.log(company.getAverageSalary());
console.log(company.getHighestPaidEmployee())
console.log(company.employees);