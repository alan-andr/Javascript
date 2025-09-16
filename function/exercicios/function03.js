function theBigOne(a, b) {
    return a > b ? a : b;
}

let a = 0;
let b = 2;

console.log(`O maior valor entre ${a} e ${b}: ${theBigOne(a, b)}`);