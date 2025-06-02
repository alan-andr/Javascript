let valores = [8, 1, 7, 4, 2, 9];

for(let contador = 0; contador < valores.length; contador++) {
    console.log(`Posição: ${contador} elemento: ${valores[contador]}`);
};

valores.push(3);

for(let pos in valores) {
    console.log(valores[pos])
};

let pos = valores.indexOf(8)
if (pos === -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`);
}