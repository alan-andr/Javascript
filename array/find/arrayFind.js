const numbers = [10, 6, 8, 19, 18, 20];

const approvedNumber = numbers.find(function(isBigEnough) {
    return isBigEnough >= 18;
});

console.log(approvedNumber); // 19