function countOccurences(word, letter) {
    word = word.toUpperCase();
    letter = letter.toUpperCase();

    let count = 0;

    for(let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++
        }
    }

    return count;
};

const word = 'AlAn';
const letter = 'a';

console.log('=============== Ocorrência de Letras ===============');
console.log(`A letra "${letter.toUpperCase()}" aparece ${countOccurences(word, letter)} vezes na palavra ${word.toUpperCase()}`);
console.log('===================================================');