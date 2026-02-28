let userName = 'Jurubeba';
let price = 15.00;

let welcomeUser = (name) => `Welcome back, ${name}`
let calculateTax = (price) => price * 0.15;

console.log(welcomeUser(userName));
console.log(calculateTax(price));