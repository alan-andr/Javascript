let ages = [15, 22, 34, 18, 40, 12];

console.log(`As idades são: ${ages}`);

const overEighteen = ages.filter(function(age) {
    return age >= 18;
})

console.log(`Os maiores de 18 anos são: ${overEighteen}`);
