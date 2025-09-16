const message = () => console.log('Dados recebidos com sucesso!');

const fechtData = function(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

console.log('------------ Simulando API -----------');
console.log('Aguardando...');
fechtData(message);
