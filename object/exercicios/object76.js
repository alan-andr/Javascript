const company = {
    employees: [
        { name: 'João', role: 'Desenvolvedor Frontend', salary: 4500 },
        { name: 'Maria', role: 'Desenvolvedor Backend', salary: 5200 },
        { name: 'Carlos', role: 'Designer UX/UI', salary: 4000 },
        { name: 'Fernanda', role: 'Gerente de Projetos', salary: 6000 }
    ],

    averageWageOfCompany() {
        const sumOfSalary = this.employees.reduce((sum, salary) => sum + salary.salary, 0);

        const averageSalary = sumOfSalary / this.employees.length;

        return `A média salarial da empresa é: R$${averageSalary.toFixed(2)}.`;
    },

    highestSalary() {
        const highestSalary = this.employees.reduce((max, employee) => {
            return employee.salary > max.salary ? employee : max;
        });

        return highestSalary;
    }
};

console.log(company);

console.log(company.averageWageOfCompany());

console.log(company.highestSalary());