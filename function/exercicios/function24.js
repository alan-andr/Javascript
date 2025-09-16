function isPalindrome(word) {
    word = word.toUpperCase();
    let reverseWord = '';

    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }

    return  reverseWord === word ? 'é um palíndromo' : 'não é palíndromo'; 
}

const value = 'aNa';

console.log(`================ Palíndromo ================`);
console.log(`A palavra "${value.toUpperCase()}" ${isPalindrome(value)}`);
console.log('============================================');