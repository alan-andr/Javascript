function reverseString(name) {
    let newString = ''
    for(let i = name.length - 1; i >= 0; i--) {
        newString += name[i];
    }
    return newString;
};

let value = 'Pão de batata';

console.log('-------------- Reversão de Nomes --------------');
console.log(`Nome: ${value}`);
console.log(`Nome invertido: ${reverseString(value)}`);
console.log('-----------------------------------------------');