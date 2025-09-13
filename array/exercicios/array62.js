function filter(arr, funct) {
    return funct(arr);
};

const legalAge = (arr) => {
    let legalAge = arr.filter(value => value >= 18);

    return legalAge;
};

const underAge = (arr) => {
    let underAge = arr.filter(value => value < 18);

    return underAge;
};

const elderly = (arr) => {
    let elderly = arr.filter(value => value > 60);

    return elderly;
}

let ages = [];

for(let i = 10; i <= 65; i++) {
    ages.push(i)
};

const legalAgePeople = filter(ages, legalAge);
const underAgePeople = filter(ages, underAge);
const elderlyPeople = filter(ages, elderly);

console.log(`=*=*=*=*=*=*=* Teste de Idades =*=*=*=*=*=*=*=`);
console.log(`------------- Pessoas idosas -------------`);
console.log(`Quantidade de idosos: ${elderlyPeople.length}\n`);
console.log(`As idades são: ${elderlyPeople}`);
console.log('------------- Pessoas Adultas -------------');
console.log(`Quantidade de adultos: ${legalAgePeople.length}`);
console.log(`\nAs idades são: ${legalAgePeople}`);
console.log('------------- Jovens e Crianças -------------');
console.log(`Quantidade de jovens e crianças: ${underAgePeople.length}`);
console.log(`\nAs idades são: ${underAgePeople}`);
console.log('-------------------------------------------');