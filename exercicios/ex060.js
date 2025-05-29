console.log(`Múltiplos de 3 ou 7`);

let contador = 1;

while (contador <= 100) {
    if ((contador % 3 === 0 || contador % 7 === 0) && !(contador % 3 === 0 && contador % 7 === 0)) {
        console.log(`Número válido: ${contador}`);
    }
    contador++;
};
