let pares = [];

for (let contador = 0; contador <= 25; contador++) {
    if (contador % 2 === 0) {
    pares.push(contador);
    }
}

console.log(`Os números pares da contagem são ${pares}`);
