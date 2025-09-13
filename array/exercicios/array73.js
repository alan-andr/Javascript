const values = [10, 20, 30];

function calculate(a, b, c) {
    return a + b * c;
}

console.log(calculate(...values));