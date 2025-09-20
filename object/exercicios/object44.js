const person = {
    name: 'Alan',
    age: 23,
    job: 'Operador de Máquinas',

    introduceYourSelf() {
        return `Meu nome é ${this.name}, tenho ${this.age} anos e trabalho como ${this.job}`;
    }
};

console.log(person.introduceYourSelf());