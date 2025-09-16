const age = (age) => (age >= 18 ? `maior de idade` : `menor de idade`);

let userAge = 25;

console.log('--------------- Maior ou Menor de Idade --------------');
console.log(`Você tem ${userAge} anos de idade`);
console.log('------------------------------------------------------');
console.log(`Então você é ${age(userAge)}, pois tem ${userAge} anos!`);
console.log('------------------------------------------------------');