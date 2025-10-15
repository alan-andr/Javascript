const sentence = 'Frase de exemplo para teste';

function filterSentence(sentence, callback) {
    return callback(sentence);
};

const counterWords = function(sentence) {
    return sentence.split(' ').length;
};

const showLargestWord = function(sentence) {
    return sentence.split(' ').reduce((largest, word) => largest.length > word.length ? largest : word );
};

const showVogalsQuantity = function(sentence) {
    const vogals = 'aeiouAEIOU';
    let counter = 0; 

    for (const character of sentence) {
        if (vogals.includes(character)) {
            counter += 1;
        }
    }

    return counter;
};

const countedWords = filterSentence(sentence, counterWords);
const largestWord = filterSentence(sentence, showLargestWord);
const vogalsQuantity = filterSentence(sentence, showVogalsQuantity);

console.log(`Sentence has ${countedWords} words.`);
console.log(`The largest word is "${largestWord}" with ${largestWord.length} letters`);
console.log(`Sentence has ${vogalsQuantity} vogals.`);