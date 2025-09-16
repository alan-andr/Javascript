const names = ['João', 'Alan', 'Irosvaldo', 'Astrogildo', 'Galeto', 'Ignácio'];

const moreThanFiveLetters = (word) => (word
    .filter(word => word.length > 5)
    .join(', ')
);

console.log('------------------ Apenas nomes com mais de 5 letras ---------------');
console.log('E os nomes que têm mais de 5 letras são...');
setTimeout(() => console.log(moreThanFiveLetters(names)), 1000);