const users01 = [
    { name: 'Ana', age: 25 },
    { name: 'Bruno', age: 30 }
];

const users02 = [
    { name: 'Carla', age: 22 },
    { name: 'Diego', age: 28}
];

const users = [...users01, ...users02]; // * Juntando os dois array

const copyOfUsers = [...users]; // * Cópia do array usuários

copyOfUsers.splice(0, 1, { name: 'Ana', age: 26 }); // * Atualizando idade de  'Ana'
copyOfUsers.splice(copyOfUsers.length, 0, { name: 'Eduardo', age: 25 }); // * Inserindo novo usuário

console.log(copyOfUsers);