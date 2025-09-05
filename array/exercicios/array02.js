let numeros = [2, 42, 52, 2, 10];
let soma = 0;

for (const i of numeros) {
    soma += i;
}

console.log(`A soma dos números = ${soma}`);

const somaNumeros = numeros.reduce(function(accumulator, numero) {
    return accumulator + numero;
}, 0)

console.log(`A soma dos números com o reduce(): ${somaNumeros}`);