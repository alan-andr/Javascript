// let numero = 1;

// while (numero <= 100) {
//     if (numero % 3 === 0) {
//         console.log(`${numero} é múltiplo de 3`);
//     }
//     numero++
// };

//Sequência de Fibonacci

let a = 0;
let b = 1;
let contador = 1;

console.log(`Fibonacci ${contador}: ${a}`);
contador++;

while (contador <= 10) {
    console.log(`Fibonacci ${contador}: ${b}`);
    let proximo = a + b;
    a = b;
    b = proximo;
    contador++;
};


