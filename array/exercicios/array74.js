function numberAndOthers(num, ...nums) {
    return nums.filter(n => n > num);
}

console.log(numberAndOthers(10, 2, 2, 3, 5, 12));