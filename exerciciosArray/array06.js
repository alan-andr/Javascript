let numeros = [1,2,3,4,5];

console.log('-----------------------------------------------');

console.log(`Primeiro elemento ${numeros[0]}\nÚltimo elemento ${numeros[4]}`);

numeros.push(6);
numeros.unshift(0);

console.log('-----------------------------------------------');

console.log(`Número 6 adicionado ao final\nNúmero 0 adicionado ao início\n${numeros}`);

console.log('-----------------------------------------------');

console.log(`Último elemento removido: ${numeros.pop()}\n${numeros}`);

console.log('-----------------------------------------------');

console.log(`O comprimento do array é: ${numeros.length}`);
