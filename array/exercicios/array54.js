function processNumber(arr, callback) {
    return callback(arr);
}

const greatestAndSmallest = (arr) => {
    let greatest = arr.reduce((max, num) => max > num ? max : num);
    let smallest = arr.reduce((min, num) => min < num ? min : num);

    return console.log(`O maior número: ${greatest}\nO menor número: ${smallest}`);
};

const numbers = [2, 54, 6, 5, 214, 4, 31, 1];

processNumber(numbers, greatestAndSmallest);