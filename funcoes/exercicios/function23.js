// fatorial 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
    let result = n;
    for(let i = n - 1; i >= 1; i--) {
        result = result * i
    }
    return result;
}

const num = 6;

console.log('----------- Calculando fatorial -------------');
console.log(`O fatorial de ${num} é...`);
setTimeout(() => {
    console.log(`${num}! = ${factorial(num)}`);
    console.log('---------------------------------------------');
}, 2000);