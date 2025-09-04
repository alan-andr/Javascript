let nomes = ["Alan", "Gustavo", "Ana", "Pereira"];

let contador = 0;

for (let valor of nomes) { 
    if (valor.startsWith("A")) { // valor[0] === "A"
        contador++;
        console.log(`Nome que começam com a letra 'A': ${valor}`);
    }
}

console.log(`Quantidade de nomes que começam com a letra 'A': ${contador}`);