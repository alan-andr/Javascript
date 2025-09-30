const person01 = {
    name: 'Cyber',
    hobbies: ['coding', 'running']
};

const person02 = {
    name: 'Superior',
    hobbies: ['reading']
}

const people = [person01, person02];

const flatMap = people.flatMap(person => person.hobbies);

console.log(flatMap);
