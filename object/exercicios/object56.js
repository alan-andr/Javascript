const company = {
    name: 'Tech Solutions',
    employers: [
        { name: 'João', role: 'Dev', salary: 3000 },
        { name: 'Maria', role: 'Designer', salary: 3500},
        { name: 'Pedro', role: 'Analista', salary: 4000}
    ],

    averageSalary() {
        const average = this.employers.reduce((total, value) => total + value.salary, 0) / this.employers.length;

        return average
    }
};

console.log(`A média salarial dos empregados é: R$${company.averageSalary().toFixed(2)}`)