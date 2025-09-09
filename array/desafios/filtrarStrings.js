const words = ['sol', 'lua', 'estrela', 'planeta', 'cometa'];

const moreThanForLetters = words
.filter(word => word.length > 4)
.sort((a, b) => a.localeCompare(b));

const lessThanForLetters = words
.filter(word => word.length < 4)
.sort((a, b) => a.localeCompare(b));

console.log('--------------- Filtrando Strings ---------------\n');
console.log('Palavras sem filtro: ', words);
console.log('-------------------------------------------------');
console.log('Palavras com mais de 4 letras: ', moreThanForLetters);
console.log('-------------------------------------------------');
console.log('Palavras com menos de 4 letras: ', lessThanForLetters);
