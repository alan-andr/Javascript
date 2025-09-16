const users = [
    { id: 1, name: 'Ana', email: 'ana@example.com' },
    { id: 2, name: 'Bruno', email: 'bruno@example.com'},
    { id: 3, name: 'Carla', email: 'carla@example.com'}
];

function filterUser(arr, callback) {
    return callback(arr);
};

const usersName = (users) => {
    return users.map(element => element.name);
};

const usersEmail = (users) => {
    return users.map(element => element.email);
};

console.log('--------------- Filtrando Usuários ------------------');
console.log(`Nomes dos usuários: `, filterUser(users, usersName));
console.log('-----------------------------------------------------');
console.log(`E-mails dos usuários: `, filterUser(users, usersEmail));