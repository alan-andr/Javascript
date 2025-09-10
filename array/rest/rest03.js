function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(4, 5, 10, 20, 30, 40));