let array = [3, 6, 9, 12, 15];

let overFirst = array.find(function(number) {
    return number > 10;
});

console.log(`O primeiro número maior que 10: ${overFirst}`);