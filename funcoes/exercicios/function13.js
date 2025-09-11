function removeElement(arr, value) {
    return arr.filter(n => n !== value);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const toRemove = 2;

console.log(removeElement(numbers, toRemove));