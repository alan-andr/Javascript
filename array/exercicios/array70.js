const person = {name: 'Alan', idade: 23};
const adress = {city: 'Natal', state: 'RN'};

const personInfo = {...person, ...adress};

console.log(personInfo);