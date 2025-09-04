let numeros = [1,2,3,4,5,6,7,8,43,24,324,2,411,1,41,5,24,65,3,2323,5,13,511,513,0];

for(let par = 0; par < numeros.length; par++) {
    if (numeros[par] % 2 === 0) {
        console.log(`Pares: ${numeros[par]}`);
    }
}