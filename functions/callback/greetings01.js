function greet(nome) {
    console.log(`Olá, ${nome}!`);
}

function processNumber(nome, callback) {
    console.log('Processando usuário...');
    callback(nome);
}

processNumber('Alanzito', greet);