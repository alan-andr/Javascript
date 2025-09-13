const words = ['banana', 'uva', 'melancia', 'abacaxi', 'manga'];

const moreThanFiveLetters = words
.filter(word => word.length >= 5)
.map(word => word.toUpperCase());


console.log(`Palavras com mais de 5 letras e em maiúsculas: ${moreThanFiveLetters}`)