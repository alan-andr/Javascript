const users = [
    {
        id: 1,
        name: 'Ana',
        role: 'admin',
        active: true
    },
    {
        id: 2,
        name: 'Carlos',
        role: 'editor',
        active: false
    },
    {
        id: 3,
        name: 'Mariana',
        role: 'viewer',
        active: true
    },
    {
        id: 4,
        name: 'Rafael',
        role: 'editor',
        active: true
    }
];

function showActiveUsers(users) {
    const activeUsers = users.filter(user => user.active);

    if (activeUsers.length === 0) {
        return `There are no active users.`;
    }

    return activeUsers;
};

function filterUserByRole(role) {
    const existingUsers = users.filter(user => user.role.toLowerCase() === role.toLowerCase().trim());

    if (existingUsers.length === 0) {
        return `No user with ${role} role founded.`;
    }

    const names = existingUsers.map(user => user.name); 

    return `Users with role "${role}": ${names.join(', ')}`;
};

const idUser = (users) => {
    return users.reduce((acc, { id, ...rest}) => {
        acc[id] = rest;
        return acc;
    }, {});
};

console.log(showActiveUsers(users));
console.log('===============================================');
console.log(filterUserByRole('editor'));
console.log('===============================================');
console.log(idUser(users));

