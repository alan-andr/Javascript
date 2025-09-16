const salut = function(name) {
    return console.log(`Olá, ${name}! Bem-vindo(a)`);
}

const greet = function(name, callback) {
    callback(name);
}

let userName = 'Alanzito';

greet(userName, salut);