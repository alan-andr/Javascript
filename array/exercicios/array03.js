let names = ['Betinho', 'Juninho', 'Zezinho'];

let addName = 'Claudivam';

if (names.includes(addName)) {
    console.log('Já existe esse nome na lista');
} else {
    names.push(addName);
}

console.log(names);
