const words = ['MangoBanano', 'BraziliniBirimbini', 'DangoBalango', 'Uva', 'Pera', 'Gol'];

const highestWords = words.filter(word => word.length > 5);

console.log('=*=*=*=*=*=*=*= Lista de Palavras =*=*=*=*=*=*=*=*');
console.log(`Palavras: ${words}`);
console.log(`As palavras que têm mais de 5 letras são: \n${highestWords}`);
console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');