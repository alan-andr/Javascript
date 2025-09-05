const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    if (age % 2 === 0) {
        return age;
    }
});

console.log(evenAges);