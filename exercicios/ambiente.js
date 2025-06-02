let num = [5, 8 , 2, 9, 3];
num.push(7);

console.log(`O vetor tem ${num.length} posições`);
console.log(`Nosso vetor normal é ${num}`);
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort();

console.log(`Nosso vetor ordenado fica assim: ${num}`);

for(let pos = 0; pos <= num.length; pos++) {
    console.log(num[pos])
};