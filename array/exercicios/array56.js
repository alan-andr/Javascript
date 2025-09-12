const ages = [];

let getHere = 30;

for(let i = 6; i <= getHere; i++) {
    ages.push(i)
};

const filterAge = function(arr, callback) {
    return callback(arr);
};

const legalAge = (arr) => {
    let legalAgePeople = arr.filter(age => age >= 21);

    return legalAgePeople;
};

const underAge = (arr) => {
    let underAgePeople = arr.filter(age => age < 21);

    return underAgePeople;
};

console.log('------------- Filtro de Idades -------------');
console.log(`As idades são: ${ages}`);
console.log('Filtrando...');

setTimeout(() => {
    console.log('---------------------------------------------');
    console.log('Filtragem Concluída!');
    console.log(`Maiores de idade: ${filterAge(ages, legalAge)}`);
    console.log(`${filterAge(ages, legalAge).length} pessoas são maiores de idade.`);
    console.log('---------------------------------------------');
    console.log(`Menores de idade: ${filterAge(ages, underAge)}`);
    console.log(`${filterAge(ages, underAge).length} pessoas são menores de idade.`);
    console.log('---------------------------------------------');
}, 2000);




