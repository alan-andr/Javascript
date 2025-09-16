const greatestNumber = function(a = 0, b = 0, c = 0) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

let num1 = 10;
let num2 = 6;
let num3 = 7;
let result = greatestNumber(num1, num2, num3);

console.log('----------------- Maior Número -----------------');
console.log(`Os números são: ${num1}, ${num2}, ${num3}`);
console.log(`O maior número entre eles é... ${result}`);
console.log('------------------------------------------------');