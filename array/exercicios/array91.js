function filter(callback, n, ...nums) {
    return callback(n, ...nums);
};

const multipleOfFive = (n, ...nums) => nums.filter(element => element % n === 0)

const numbers = [5,1 ,4 ,5 ,7 ,4];

console.log(`${filter(multipleOfFive, ...numbers)}`)