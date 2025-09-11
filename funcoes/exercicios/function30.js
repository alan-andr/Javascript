const greetings = (value) => `Olá, ${value}! Seja bem-vindo(a)`;

const nameSameMine = (value) => `Olá, ${value}! Gostei do nome <3`;

function greetUser(value, callback) {
    return callback(value);
};

let nameUser = 'Claudivam';
let result = greetUser(nameUser, greetings);

if (nameUser === 'Alan') {
    result = greetUser(nameUser, nameSameMine)
}

console.log('========= Saudação personalizada =========');
console.log(result);
console.log('==========================================');