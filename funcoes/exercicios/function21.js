const findLongestWord = function(arr) {
    return arr.reduce((longest, word) => longest.length > word.length ? longest : word);
};

const words = ['Banana', 'uva', 'jabuticaba'];
const longestWord = findLongestWord(words);

console.log('--------------- Buscando maior palavra ---------------');
console.log(`As palavras são: ${words}`);
console.log('Buscando a maior palavra...')
setTimeout(() => {
    console.log(`Maior palavra encontrada: ${longestWord}`);
    console.log('------------------------------------------------------');
}, 2000);
