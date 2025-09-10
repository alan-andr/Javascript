const user = {
    name: 'Carlitos',
    age: 25
};

const newUser = {
    ...user,
    city: 'São Paulo'
};

console.log('--------------- Spread em Objetos ----------------');
console.log('Usuário antigo: ', user);
console.log('Novo usuário: ', newUser);
console.log('--------------------------------------------------');
