function combine(...arr) {
    let newArr = [];

    arr.forEach(nums => {
        newArr.push(...nums)
    });

    return newArr;
};

const arr01 = [1, 2];
const arr02 = [3, 4];
const arr03 = [5];

console.log(combine(arr01, arr02, arr03));