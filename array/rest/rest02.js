function showNames(first, ...others) {
    console.log(`O primeiro nome da lista: ${first}`);
    console.log(`Os outros nomes da lista: ${others}`);
}

const names = ['Cláudio', 'Jordana', 'Augusto'];

console.log('--------------- Mostrando nomes ---------------');
console.log(`A lista completa é: ${names}`);
showNames(...names);
console.log('-----------------------------------------------');


