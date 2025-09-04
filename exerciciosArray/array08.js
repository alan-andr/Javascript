let cores = ['Azul', 'Verde', 'Vermelho', 'Rosa', 'Amarelo'];

if (cores.includes('Vermelho')) {
    console.log(`A cor está presente na lista!`);
} else {
    console.log(`A cor NÃO está presente na lista!`);
}

cores.reverse();

console.log(`Array invetido: ${cores}`);