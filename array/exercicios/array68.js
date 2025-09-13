function analyzeNumbers(...nums) {
    return {
        highestNumber: Math.max(...nums),
        smallestNumber: Math.min(...nums),
        sum: nums.reduce((total, num) => total + num, 0),
        evenNums: nums.filter(num => num % 2 === 0)
    };
}

console.log(analyzeNumbers(4, 7, 10, 3, 2));