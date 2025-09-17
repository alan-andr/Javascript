const user = [
    ['name', 'João'],
    ['age', 28],
    ['city', 'Natal']
];

const newUser = Object.fromEntries(user);

console.log(newUser);