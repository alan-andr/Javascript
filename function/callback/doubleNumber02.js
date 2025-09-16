function doubleNumber(number) {
    return number * 2;
}

function processNumber(number, callback) {
    return callback(number)
}

let num = 5;

console.log(processNumber(num, doubleNumber));