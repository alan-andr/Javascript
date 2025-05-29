console.log(`-------- Números pares divisível por 5 --------`);

for (let contador = 1; contador <= 200; contador++) {
    if (contador % 2 === 0 && contador % 5 === 0) {
        console.log(`Número par e divisível por 5: ${contador}`);
    };
};

console.log(`---------------- FIM ----------------`);