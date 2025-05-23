let contador = 1;
let multiplos = 0

while (contador <= 100) {
    if (contador % 3 === 0) {
        console.log(`Múltiplos de 3: ${contador}`);
        multiplos += contador;
    }
    contador++
};

console.log(multiplos);