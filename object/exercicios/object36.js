const userInfo = {
    name: 'Alice Johnson',
    role: 'Software Engineer',
    department: 'Development'
};

const { name: nameUser, role } = userInfo;

console.log(`${nameUser}'s role is ${role}`);

const users = [
    { name: 'Bob Williams', role: 'UX Designer' },
    { name: 'Charlie Brown', role: 'Product Manager' }
];

for (const { name, role } of users) {
    console.log(`${name} : ${role}`);
};
