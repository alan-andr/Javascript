const grade = [10, 9, 8, 7];

function calculateAverage(nums) {
    return (nums.reduce((total, value) => total + value, 0) / nums.length).toFixed(2);
};

console.log(`As notas são: ${grade}`);
console.log('-----------------------------------------');
console.log(`A média das notas é: ${calculateAverage(grade)}`);