const isEven = function(number) {
    return number % 2 === 0 ? 'Sim' : 'Não';
};

let number = 6;

console.log('---------- Verificando números -----------');
console.log(`O número ${number} é par?: ${isEven(number)}`);
console.log('------------------------------------------');