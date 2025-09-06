let words = ['banana', 'uva', 'laranja', 'abacaxi'];

const overForLetters = words.filter((word) => word.length > 4);

console.log('----------------------- Palavras -----------------------\n');
console.log(`As palavras são: ${words}`);
console.log('----------------------------------------------');
console.log(`As palavras que têm mais de 4 letras são: ${overForLetters}`);
console.log('----------------------------------------------');