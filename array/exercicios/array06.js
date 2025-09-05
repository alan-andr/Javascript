const ages = [12, 18, 22, 30, 15, 40];

const legalAge = ages.some(function(age) {
    return age > 18;
});

console.log('------------------------------------------');

console.log(`Há maiores de idade: ${legalAge}`);

console.log('------------------------------------------');

for (let i of ages) {
    if (i >= 18) {
        console.log(`As idades são: ${i}`);
    }
}

console.log('------------------------------------------');