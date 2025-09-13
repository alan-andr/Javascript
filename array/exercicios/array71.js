function anyNumber(...num) {
    return num.reduce((acc, value) => acc + value, 0);
};

const numbers = [1, 2, 3, 4, 5];

console.log(anyNumber(...numbers, 6, 7));