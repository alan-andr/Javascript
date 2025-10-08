const users = [
    { 
        id: 101,
        username: 'devPro',
        profile: {
            name: 'Alex Johnson',
            age: 28,
            skills: ['JavaScript', 'React', 'Node.js', 'CSS']
        }
    },
    {
        id: 102,
        username: 'designGuru',
        profile: {
            name: 'Maria Garcia',
            age: 32,
            skills: ['UI/UX Design', 'Figma', 'Prototyping']
        }
    },
    {
        id: 103,
        username: 'dataWizard',
        profile: {
            name: 'Sam Chen',
            age: 25,
            skills: ['Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Tableau']
        }
    }
];

function getUserSkillCount(arrUsers) {
    let users = [];

    for (const { username, profile: { skills } } of arrUsers) {
        users.push({ username, skillCount: skills.length})
    };

    return users;
};

function getUserSkillCountWithMap(arrUsers) {
    return arrUsers.map(({ username, profile: { skills } }) => ({
     username, skillCount: skills.length   
    }));
};

console.log(getUserSkillCount(users));
console.log('===========================');
console.log(getUserSkillCountWithMap(users));