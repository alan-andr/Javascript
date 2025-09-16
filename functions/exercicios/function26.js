const verifyNumber = function(n) {
    return n > 0 ? 'positivo' : n < 0 ? 'negativo' : 'zero';
};

let value = 0;
let result = verifyNumber(value);

console.log('================ Verificador de Número ================');
console.log(`Número a ser verificado: ${value}`);
console.log('verificando...');
setTimeout(() => {
    console.log(`O número ${value} é ${result}`)
    console.log('=======================================================');
}, 1000);
