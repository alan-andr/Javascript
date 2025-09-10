const sum = function(...nums) {
    return nums.reduce((acc, num) => acc + num, 0); 
}

console.log('------------------ Rest em funções ------------------');
console.log(sum(5,5));
console.log('-----------------------------------------------------');