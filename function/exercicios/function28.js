const oddNumber = function(num) {
    return `Número ímpar processado: ${num}`;
};

const evenNumber = function(num) {
    return `Número par processado: ${num}`;
};

const processNumber = function(num, callback) {
    if (num % 2 === 0) {
        return callback(num * 2);
    }
    return callback(num * 3);
};

let num = 2;
let result = processNumber(num, evenNumber);

console.log(result);