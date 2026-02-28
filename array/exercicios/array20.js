const topSellers = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff', 'Bruce Banner'];

let [ firstPlace, secondPlace, thirdPlace, ...others ] = topSellers;

console.log(`The gold medal goes to: ${firstPlace}`);