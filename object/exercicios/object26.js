const person = {
    name: 'João Calebe',
    age: 25,
    city: 'São Paulo'
}

console.log(person.name, person.age, person.city);

person.job = 'Desenvolvedor Web';

console.log(person);

delete person.city;

console.log(person);