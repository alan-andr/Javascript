let words = ['fejião', 'uva', 'laranja', 'ovo', 'agrião', 'pera'];

const upperCaseWords = words.map(function (word) {
    return word.toUpperCase();
})

console.log(`Palavras transformadas em maiúsculas: ${upperCaseWords}`);

console.log('---------------------------------------');

const greaterThanFive = words.filter(function(word) {
    return word.length > 5;
})

console.log(`Palavras que têm mais de 5 letras: ${greaterThanFive}`);

console.log('----------------------------------------');