const users = [
    { id: 101, username: 'dev_alicia', email: 'alicia.d@example.com', isActive: true },
    { id: 102, username: 'code_bender', email: 'bender.c@example.com', isActive: false },
    { id: 103, username: 'js_master', email: 'master.js@example.com', isActive: true }
];

for (const { username, email } of users) {
    console.log(`Username: ${username}, E-mail: ${email}`)
};

const { isActive } = users[0];

console.log('===================================================');

console.log(`Is the first user Active? ${isActive}`);