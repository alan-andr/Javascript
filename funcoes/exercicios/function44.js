const films = [
    { title: 'Inception', year: 2010, gender: 'Sci-fi' },
    { title: 'The Godfather', year: 1972, gender: 'Drama' },
    { title: 'Interstelar', year: 2014, gender: 'Sci-fi' },
    { title: 'The Wolf of Wall Street', year: 2013, gender: 'Drama' },
    { title: 'Mad Max: Fury Road', year: 2015, gender: 'Action' }
];

function filterFilms(gender, ...films) {
    let filmMatch = films
    .filter(filmGender => filmGender.gender.toUpperCase() === gender)
    .filter(filmYear => filmYear.year >= 2010)
    .map(film => film.title);

    return filmMatch;
};

let selectedGender = 'Drama'.toUpperCase();
let resultSearch = filterFilms(selectedGender, ...films);

console.log('================== NETFLIX =================');
console.log('Filmes disponíveis: ', films);
console.log('================================================================');
console.log('Gênero selecionado: ', selectedGender);
console.log('============ Resultado da Busca ============');
console.log('Filmes: ', resultSearch);
console.log('================================================================');
